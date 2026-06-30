# MedAI - Interactive Healthcare Chatbot & Diagnostic Engine

MedAI is a premium, interactive symptom checker chatbot powered by machine learning classifiers. It provides a visual diagnosis assessment, risk severity meter, condition description, and recommended precautions based on user symptoms.

It includes:
1. **Machine Learning Pipeline (`train.py`)**: Automatically downloads standard medical datasets and trains multiple classifiers, exporting the decision tree rules to the frontend.
2. **Interactive Web UI (`index.html`, `style.css`, `script.js`)**: A premium, responsive dark-mode dashboard featuring search-autocomplete symptoms, dynamic questions, and HTML5 Web Speech voice synthesis.

---

## 📊 Model Accuracies

During evaluation on the testing dataset, the trained classifiers achieved the following accuracies:

- **Random Forest**: 100.00%
- **SVC (Support Vector Machine)**: 100.00%
- **Extra Trees**: 100.00%
- **Multi-Layer Perceptron (MLP)**: 100.00%
- **Single-Layer Perceptron (SLP)**: 100.00%
- **Decision Tree**: 97.29%

---

## 🛠️ Getting Started

### Prerequisites

You need Python 3 installed. Install the required Python libraries using pip:

```bash
pip install pandas scikit-learn numpy
```

---

## 🚀 Running the Project

### 1. Train the Models
To download the datasets and train the classifiers, run the training script:

```bash
python train.py
```
This generates the `data.js` file which is needed by the web interface.

### 2. Run the Web Interface
Start a local web server in the project directory:

```bash
python -m http.server 8000
```

Now open your web browser and navigate to:
**[http://localhost:8000](http://localhost:8000)**

---

## 📂 Project Structure

- `index.html` - The HTML structure of the interface.
- `style.css` - Custom styling rules for the glassmorphic dark-theme UI.
- `script.js` - Chat flow management, Decision Tree traversal, speech, and report rendering.
- `data.js` - Auto-generated data module containing lookup tables and serialized Decision Tree.
- `train.py` - ML model builder and dataset downloader.
- `.gitignore` - Lists file patterns to exclude from git commits.

---

## ⚠️ Disclaimer

This application is for educational purposes only. It is **NOT** a professional clinical diagnostic tool. Always consult a qualified medical professional for health concerns.
