// State Management
let state = {
    userName: "",
    primarySymptom: "",
    days: 1,
    symptomsExp: [], // symptoms user actually has
    symptomsToCheck: [], // symptoms associated with first predicted disease
    symptomCheckIndex: 0,
    isMuted: false,
    chatState: "ASK_NAME" // ASK_NAME, ASK_SYMPTOM, ASK_DAYS, ASK_FOLLOWUP, DONE
};

// DOM Elements
const chatHistory = document.getElementById("chat-history");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const autocompleteDropdown = document.getElementById("autocomplete-dropdown");
const muteBtn = document.getElementById("mute-btn");
const reportCard = document.getElementById("report-card");
const reportEmpty = document.getElementById("report-empty");
const reportContent = document.getElementById("report-content");
const diseaseTitle = document.getElementById("disease-title");
const severityBadge = document.getElementById("severity-badge");
const severityBar = document.getElementById("severity-bar");
const diseaseDesc = document.getElementById("disease-desc");
const precautionGrid = document.getElementById("precaution-grid");

// Speech Synthesis
let synth = window.speechSynthesis;
let currentUtterance = null;

function speakText(text) {
    if (state.isMuted) return;
    if (synth.speaking) {
        synth.cancel();
    }
    
    // Clean up text for better speech synthesis
    let cleanText = text.replace(/_/g, " ").replace(/\?/g, "");
    
    currentUtterance = new SpeechSynthesisUtterance(cleanText);
    currentUtterance.rate = 1.0;
    currentUtterance.pitch = 1.0;
    
    // Choose an English voice if available
    const voices = synth.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith("en-"));
    if (englishVoice) {
        currentUtterance.voice = englishVoice;
    }
    
    synth.speak(currentUtterance);
}

// Format symptom name for display
function formatSymptomName(symptom) {
    return symptom.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// Append Chat Message
function appendMessage(sender, text, isHtml = false, callback = null) {
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message-wrapper", sender);
    
    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerText = sender === "bot" ? "AI" : "ME";
    
    const message = document.createElement("div");
    message.classList.add("message");
    
    if (isHtml) {
        message.innerHTML = text;
    } else {
        message.innerText = text;
    }
    
    messageWrapper.appendChild(avatar);
    messageWrapper.appendChild(message);
    chatHistory.appendChild(messageWrapper);
    
    // Scroll to bottom
    chatHistory.scrollTop = chatHistory.scrollHeight;
    
    if (sender === "bot") {
        speakText(isHtml ? message.innerText : text);
    }
    
    if (callback) callback(messageWrapper);
}

// Append Typing Indicator
function appendTypingIndicator() {
    const indicatorWrapper = document.createElement("div");
    indicatorWrapper.classList.add("message-wrapper", "bot");
    indicatorWrapper.id = "typing-indicator-wrapper";
    
    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerText = "AI";
    
    const message = document.createElement("div");
    message.classList.add("message");
    
    const indicator = document.createElement("div");
    indicator.classList.add("typing-indicator");
    indicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    
    message.appendChild(indicator);
    indicatorWrapper.appendChild(avatar);
    indicatorWrapper.appendChild(message);
    chatHistory.appendChild(indicatorWrapper);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById("typing-indicator-wrapper");
    if (indicator) {
        indicator.remove();
    }
}

// Bot Response Wrapper with typing delay
function botSpeakAndShow(text, isHtml = false, callback = null) {
    appendTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        appendMessage("bot", text, isHtml, callback);
    }, 800);
}

// Input Helpers
function enableTextInput(placeholder) {
    chatInput.disabled = false;
    chatInput.value = "";
    chatInput.placeholder = placeholder;
    chatInput.type = "text";
    sendBtn.disabled = false;
    chatInput.focus();
}

function disableInput() {
    chatInput.disabled = true;
    chatInput.value = "";
    chatInput.placeholder = "Please interact using the buttons above...";
    sendBtn.disabled = true;
}

// Decision Tree Predictor
function predictDisease(activeSymptoms) {
    let node = decisionTree;
    while (node.feature !== undefined) {
        let feature = node.feature;
        // In python: if split feature matches current list of active symptoms
        let val = activeSymptoms.includes(feature) ? 1 : 0;
        if (val <= node.threshold) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return node.disease;
}

// Chat Flow Control
function advanceChat(userInput) {
    if (state.chatState === "ASK_NAME") {
        state.userName = userInput.trim() || "Guest";
        appendMessage("user", state.userName);
        
        state.chatState = "ASK_SYMPTOM";
        botSpeakAndShow(`Hello, ${state.userName}! What is the primary symptom you are experiencing?`, false, () => {
            enableTextInput("Search and select a symptom...");
            setupAutocomplete();
        });
        
    } else if (state.chatState === "ASK_SYMPTOM") {
        // Validate symptom
        const cleanedInput = userInput.trim().replace(/ /g, "_").toLowerCase();
        if (symptoms.includes(cleanedInput)) {
            state.primarySymptom = cleanedInput;
            state.symptomsExp.push(cleanedInput);
            appendMessage("user", formatSymptomName(cleanedInput));
            
            state.chatState = "ASK_DAYS";
            botSpeakAndShow("Okay. For how many days have you been experiencing this symptom?", false, () => {
                enableTextInput("Enter number of days (e.g. 3)...");
                chatInput.type = "number";
                chatInput.min = "1";
            });
        } else {
            botSpeakAndShow("Please select a valid symptom from the autocomplete dropdown list.", false, () => {
                enableTextInput("Search and select a symptom...");
                setupAutocomplete();
            });
        }
        
    } else if (state.chatState === "ASK_DAYS") {
        const daysVal = parseInt(userInput);
        if (isNaN(daysVal) || daysVal <= 0) {
            botSpeakAndShow("Please enter a valid positive number of days.", false, () => {
                enableTextInput("Enter number of days (e.g. 3)...");
                chatInput.type = "number";
            });
            return;
        }
        
        state.days = daysVal;
        appendMessage("user", `${daysVal} days`);
        
        // Find all candidate diseases that present the primary symptom
        let candidates = [];
        for (let disease in reducedData) {
            if (reducedData[disease].includes(state.primarySymptom)) {
                candidates.push(disease);
            }
        }
        
        // Fallback to decision tree prediction if no direct candidate is found
        if (candidates.length === 0) {
            candidates.push(predictDisease([state.primarySymptom]));
        }
        
        // Gather the union of all symptoms associated with these candidate diseases
        let associatedSymptoms = [];
        candidates.forEach(disease => {
            const syms = reducedData[disease] || [];
            syms.forEach(sym => {
                if (!associatedSymptoms.includes(sym) && sym !== state.primarySymptom) {
                    associatedSymptoms.push(sym);
                }
            });
        });
        
        // Limit the check to a maximum of 8 symptoms to prevent long questionnaires
        state.symptomsToCheck = associatedSymptoms.slice(0, 8);
        state.symptomCheckIndex = 0;
        
        if (state.symptomsToCheck.length > 0) {
            state.chatState = "ASK_FOLLOWUP";
            askNextFollowup();
        } else {
            finishConsultation();
        }
    }
}

// Ask Follow-up Symptoms (Yes/No buttons)
function askNextFollowup() {
    disableInput();
    const currentSymptom = state.symptomsToCheck[state.symptomCheckIndex];
    const formattedSymptom = formatSymptomName(currentSymptom);
    
    botSpeakAndShow(`Are you experiencing any ${formattedSymptom}?`, false, () => {
        const optionsHtml = `
            <div class="interactive-buttons">
                <button class="btn btn-primary btn-yes">Yes</button>
                <button class="btn btn-outline btn-no">No</button>
            </div>
        `;
        
        // Render buttons inline
        appendMessage("bot", optionsHtml, true, (wrapper) => {
            const yesBtn = wrapper.querySelector(".btn-yes");
            const noBtn = wrapper.querySelector(".btn-no");
            
            yesBtn.onclick = () => {
                yesBtn.disabled = true;
                noBtn.disabled = true;
                appendMessage("user", "Yes");
                state.symptomsExp.push(currentSymptom);
                nextQuestion();
            };
            noBtn.onclick = () => {
                yesBtn.disabled = true;
                noBtn.disabled = true;
                appendMessage("user", "No");
                nextQuestion();
            };
        });
    });
}

function nextQuestion() {
    state.symptomCheckIndex++;
    if (state.symptomCheckIndex < state.symptomsToCheck.length) {
        askNextFollowup();
    } else {
        finishConsultation();
    }
}

// Finish and Calculate Results
function finishConsultation() {
    state.chatState = "DONE";
    disableInput();
    
    // Calculate candidate diseases for primary symptom
    let candidates = [];
    for (let disease in reducedData) {
        if (reducedData[disease].includes(state.primarySymptom)) {
            candidates.push(disease);
        }
    }
    if (candidates.length === 0) {
        candidates.push(predictDisease([state.primarySymptom]));
    }
    
    // Find the candidate disease that has the most matching symptoms with state.symptomsExp
    let firstPrediction = candidates[0];
    let maxMatchCount = -1;
    candidates.forEach(disease => {
        const syms = reducedData[disease] || [];
        let matchCount = syms.filter(s => state.symptomsExp.includes(s)).length;
        if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            firstPrediction = disease;
        }
    });
    
    // Second prediction (using all confirmed symptoms)
    const secondPrediction = predictDisease(state.symptomsExp);
    
    // Calculate severity
    let severitySum = 0;
    state.symptomsExp.forEach(symptom => {
        severitySum += severityDictionary[symptom] || 0;
    });
    
    const score = (severitySum * state.days) / (state.symptomsExp.length + 1);
    
    let diagnosis = "";
    let description = "";
    let precautions = [];
    
    if (firstPrediction === secondPrediction) {
        diagnosis = firstPrediction;
        description = descriptionList[firstPrediction] || "No description available.";
        precautions = precautionDictionary[firstPrediction] || ["Rest", "Monitor symptoms"];
    } else {
        // Disease prediction is ambiguous
        diagnosis = `${firstPrediction} or ${secondPrediction}`;
        description = `Primary prediction: ${descriptionList[firstPrediction] || 'N/A'}<br><br>Secondary prediction: ${descriptionList[secondPrediction] || 'N/A'}`;
        
        // Merge precautions
        const prec1 = precautionDictionary[firstPrediction] || [];
        const prec2 = precautionDictionary[secondPrediction] || [];
        precautions = [...new Set([...prec1, ...prec2])];
        if (precautions.length === 0) {
            precautions = ["Rest", "Monitor symptoms", "Consult a physician"];
        }
    }
    
    // Determine Risk Level
    let risk = "low";
    let riskText = "Low Severity";
    if (score > 13) {
        risk = "high";
        riskText = "High Severity (Consult Doctor)";
    } else if (score > 6) {
        risk = "medium";
        riskText = "Moderate Severity";
    }
    
    // Display result in Chat
    botSpeakAndShow(`Assessment complete. Based on your symptoms, you may have <b>${diagnosis}</b>.<br><br>Please review the detailed Clinical Assessment Report on the sidebar for instructions and precautions.`, true, () => {
        // Populate and display sidebar report
        renderReportCard(diagnosis, description, risk, riskText, precautions, score);
    });
}

// Render the sidebar report card
function renderReportCard(disease, desc, risk, riskText, precautions, score) {
    diseaseTitle.innerText = disease;
    
    severityBadge.className = `severity-badge severity-${risk}`;
    severityBadge.innerText = riskText;
    
    // Max severity score is roughly around 30-40 in this formula
    const percentage = Math.min(100, Math.max(10, (score / 30) * 100));
    severityBar.className = `severity-bar ${risk}`;
    severityBar.style.width = `${percentage}%`;
    
    diseaseDesc.innerHTML = desc;
    
    // Precautions
    precautionGrid.innerHTML = "";
    precautions.forEach(prec => {
        const item = document.createElement("div");
        item.classList.add("precaution-item");
        item.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>${prec}</span>
        `;
        precautionGrid.appendChild(item);
    });
    
    reportEmpty.style.display = "none";
    reportContent.style.display = "block";
    
    // Initialize Hospital Locator Button Event Listener
    initHospitalLocator();
}

// Autocomplete logic
function setupAutocomplete() {
    chatInput.oninput = () => {
        const query = chatInput.value.toLowerCase().replace(/ /g, "_");
        autocompleteDropdown.innerHTML = "";
        
        if (!query) {
            autocompleteDropdown.style.display = "none";
            return;
        }
        
        // Filter symptoms matching search query
        const matches = symptoms.filter(symptom => 
            symptom.includes(query) || formatSymptomName(symptom).toLowerCase().includes(query)
        ).slice(0, 5); // limit to 5 results
        
        if (matches.length > 0) {
            matches.forEach(match => {
                const item = document.createElement("div");
                item.classList.add("autocomplete-item");
                item.innerText = formatSymptomName(match);
                item.onclick = () => {
                    chatInput.value = formatSymptomName(match);
                    autocompleteDropdown.style.display = "none";
                    advanceChat(chatInput.value);
                };
                autocompleteDropdown.appendChild(item);
            });
            autocompleteDropdown.style.display = "block";
        } else {
            autocompleteDropdown.style.display = "none";
        }
    };
    
    // Hide dropdown if clicked outside
    document.onclick = (e) => {
        if (e.target !== chatInput) {
            autocompleteDropdown.style.display = "none";
        }
    };
}

// UI Event Handlers
sendBtn.onclick = () => {
    const val = chatInput.value;
    if (val.trim()) {
        advanceChat(val);
        chatInput.value = "";
    }
};

chatInput.onkeypress = (e) => {
    if (e.key === "Enter") {
        // If autocomplete has matches, select the first one on enter press
        if (autocompleteDropdown.style.display === "block" && autocompleteDropdown.firstChild) {
            autocompleteDropdown.firstChild.click();
        } else {
            sendBtn.click();
        }
    }
};

muteBtn.onclick = () => {
    state.isMuted = !state.isMuted;
    muteBtn.classList.toggle("active", !state.isMuted);
    
    if (state.isMuted) {
        synth.cancel();
        muteBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
        `;
    } else {
        muteBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
        `;
    }
};

// Initialize Application
window.onload = () => {
    botSpeakAndShow("Welcome to MedAI. I am your medical consultation assistant. What is your name?", false, () => {
        enableTextInput("Enter your name here...");
    });
};

// Map Instance global variable
let mapInstance = null;

// Initialize Hospital Locator Click Event
function initHospitalLocator() {
    const findBtn = document.getElementById("find-hospitals-btn");
    const statusText = document.getElementById("locator-status");
    const mapDiv = document.getElementById("hospital-map");
    const listDiv = document.getElementById("hospital-list");

    if (!findBtn) return;

    // Reset locator view if button is re-rendered
    statusText.style.display = "none";
    listDiv.innerHTML = "";
    mapDiv.style.display = "none";
    findBtn.disabled = false;

    findBtn.onclick = () => {
        findBtn.disabled = true;
        statusText.style.display = "block";
        statusText.innerText = "Requesting your location...";
        listDiv.innerHTML = "";
        mapDiv.style.display = "none";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    statusText.innerText = "Fetching nearby medical facilities...";
                    fetchNearbyHospitals(lat, lon, statusText, mapDiv, listDiv);
                },
                (error) => {
                    findBtn.disabled = false;
                    statusText.innerHTML = `
                        Location access denied or unavailable. 
                        <br><a href="https://www.google.com/maps/search/hospitals+near+me/" target="_blank" class="hospital-link" style="justify-content: center; margin-top: 8px;">
                            Search on Google Maps <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-left: 4px;"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                        </a>
                    `;
                }
            );
        } else {
            findBtn.disabled = false;
            statusText.innerText = "Geolocation is not supported by your browser.";
        }
    };
}

// Fetch from Overpass API
function fetchNearbyHospitals(lat, lon, statusText, mapDiv, listDiv) {
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${lat},${lon})[amenity~"hospital|clinic|doctors"];out;`;

    fetch(overpassUrl)
        .then(response => response.json())
        .then(data => {
            statusText.style.display = "none";
            const elements = data.elements || [];

            if (elements.length === 0) {
                listDiv.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-secondary); text-align: center;">No medical facilities found within 5km.</p>`;
                document.getElementById("find-hospitals-btn").disabled = false;
                return;
            }

            // Show Map
            mapDiv.style.display = "block";
            
            // Initialize Leaflet Map
            if (mapInstance) {
                mapInstance.remove();
            }
            mapInstance = L.map('hospital-map').setView([lat, lon], 14);

            // Add Tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapInstance);

            // Add User Marker
            const userIcon = L.divIcon({
                className: 'custom-div-icon',
                html: "<div style='background-color:#6366f1; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(99,102,241,0.6);'></div>",
                iconSize: [14, 14],
                iconAnchor: [7, 7]
            });
            L.marker([lat, lon], { icon: userIcon }).addTo(mapInstance).bindPopup("You are here").openPopup();

            // Calculate Distance and Sort
            const sortedFacilities = elements.map(el => {
                const name = el.tags.name || "Medical Facility";
                const type = formatSymptomName(el.tags.amenity || "facility");
                const distance = getHaversineDistance(lat, lon, el.lat, el.lon);
                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lon}&destination=${el.lat},${el.lon}`;
                return { name, type, distance, lat: el.lat, lon: el.lon, url: googleMapsUrl };
            }).sort((a, b) => a.distance - b.distance).slice(0, 5); // Limit to top 5 closest

            // Add Markers and Render cards
            sortedFacilities.forEach(facility => {
                // Map Marker
                L.marker([facility.lat, facility.lon]).addTo(mapInstance)
                    .bindPopup(`<b>${facility.name}</b><br>${facility.type}`);

                // List Card
                const card = document.createElement("div");
                card.classList.add("hospital-card");
                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <span class="hospital-name">${facility.name}</span>
                        <span class="hospital-distance">${facility.distance.toFixed(1)} km</span>
                    </div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${facility.type}</div>
                    <a href="${facility.url}" target="_blank" class="hospital-link">
                        Get Directions
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="margin-left: 2px;"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                    </a>
                `;
                listDiv.appendChild(card);
            });

            // Trigger map resize since it was hidden
            setTimeout(() => {
                mapInstance.invalidateSize();
            }, 100);

            // Re-enable button
            document.getElementById("find-hospitals-btn").disabled = false;
        })
        .catch(err => {
            statusText.innerText = "Error searching facilities. Please try again.";
            document.getElementById("find-hospitals-btn").disabled = false;
        });
}

// Distance Calculation Helper (Haversine formula)
function getHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
