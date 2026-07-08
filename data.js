// Auto-generated data file for Healthcare Chatbot
const symptoms = [
  "itching",
  "skin_rash",
  "nodal_skin_eruptions",
  "continuous_sneezing",
  "shivering",
  "chills",
  "joint_pain",
  "stomach_pain",
  "acidity",
  "ulcers_on_tongue",
  "muscle_wasting",
  "vomiting",
  "burning_micturition",
  "spotting_ urination",
  "fatigue",
  "weight_gain",
  "anxiety",
  "cold_hands_and_feets",
  "mood_swings",
  "weight_loss",
  "restlessness",
  "lethargy",
  "patches_in_throat",
  "irregular_sugar_level",
  "cough",
  "high_fever",
  "sunken_eyes",
  "breathlessness",
  "sweating",
  "dehydration",
  "indigestion",
  "headache",
  "yellowish_skin",
  "dark_urine",
  "nausea",
  "loss_of_appetite",
  "pain_behind_the_eyes",
  "back_pain",
  "constipation",
  "abdominal_pain",
  "diarrhoea",
  "mild_fever",
  "yellow_urine",
  "yellowing_of_eyes",
  "acute_liver_failure",
  "fluid_overload",
  "swelling_of_stomach",
  "swelled_lymph_nodes",
  "malaise",
  "blurred_and_distorted_vision",
  "phlegm",
  "throat_irritation",
  "redness_of_eyes",
  "sinus_pressure",
  "runny_nose",
  "congestion",
  "chest_pain",
  "weakness_in_limbs",
  "fast_heart_rate",
  "pain_during_bowel_movements",
  "pain_in_anal_region",
  "bloody_stool",
  "irritation_in_anus",
  "neck_pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen_legs",
  "swollen_blood_vessels",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremeties",
  "excessive_hunger",
  "extra_marital_contacts",
  "drying_and_tingling_lips",
  "slurred_speech",
  "knee_pain",
  "hip_joint_pain",
  "muscle_weakness",
  "stiff_neck",
  "swelling_joints",
  "movement_stiffness",
  "spinning_movements",
  "loss_of_balance",
  "unsteadiness",
  "weakness_of_one_body_side",
  "loss_of_smell",
  "bladder_discomfort",
  "foul_smell_of urine",
  "continuous_feel_of_urine",
  "passage_of_gases",
  "internal_itching",
  "toxic_look_(typhos)",
  "depression",
  "irritability",
  "muscle_pain",
  "altered_sensorium",
  "red_spots_over_body",
  "belly_pain",
  "abnormal_menstruation",
  "dischromic _patches",
  "watering_from_eyes",
  "increased_appetite",
  "polyuria",
  "family_history",
  "mucoid_sputum",
  "rusty_sputum",
  "lack_of_concentration",
  "visual_disturbances",
  "receiving_blood_transfusion",
  "receiving_unsterile_injections",
  "coma",
  "stomach_bleeding",
  "distention_of_abdomen",
  "history_of_alcohol_consumption",
  "fluid_overload.1",
  "blood_in_sputum",
  "prominent_veins_on_calf",
  "palpitations",
  "painful_walking",
  "pus_filled_pimples",
  "blackheads",
  "scurring",
  "skin_peeling",
  "silver_like_dusting",
  "small_dents_in_nails",
  "inflammatory_nails",
  "blister",
  "red_sore_around_nose",
  "yellow_crust_ooze"
];
const diseases = [
  "(vertigo) Paroymsal  Positional Vertigo",
  "AIDS",
  "Acne",
  "Alcoholic hepatitis",
  "Allergy",
  "Arthritis",
  "Bronchial Asthma",
  "Cervical spondylosis",
  "Chicken pox",
  "Chronic cholestasis",
  "Common Cold",
  "Dengue",
  "Diabetes ",
  "Dimorphic hemmorhoids(piles)",
  "Drug Reaction",
  "Fungal infection",
  "GERD",
  "Gastroenteritis",
  "Heart attack",
  "Hepatitis B",
  "Hepatitis C",
  "Hepatitis D",
  "Hepatitis E",
  "Hypertension ",
  "Hyperthyroidism",
  "Hypoglycemia",
  "Hypothyroidism",
  "Impetigo",
  "Jaundice",
  "Malaria",
  "Migraine",
  "Osteoarthristis",
  "Paralysis (brain hemorrhage)",
  "Peptic ulcer diseae",
  "Pneumonia",
  "Psoriasis",
  "Tuberculosis",
  "Typhoid",
  "Urinary tract infection",
  "Varicose veins",
  "hepatitis A"
];
const severityDictionary = {
  "itching": 1,
  "skin_rash": 3,
  "nodal_skin_eruptions": 4,
  "continuous_sneezing": 4,
  "shivering": 5,
  "chills": 3,
  "joint_pain": 3,
  "stomach_pain": 5,
  "acidity": 3,
  "ulcers_on_tongue": 4,
  "muscle_wasting": 3,
  "vomiting": 5,
  "burning_micturition": 6,
  "spotting_urination": 6,
  "fatigue": 4,
  "weight_gain": 3,
  "anxiety": 4,
  "cold_hands_and_feets": 5,
  "mood_swings": 3,
  "weight_loss": 3,
  "restlessness": 5,
  "lethargy": 2,
  "patches_in_throat": 6,
  "irregular_sugar_level": 5,
  "cough": 4,
  "high_fever": 7,
  "sunken_eyes": 3,
  "breathlessness": 4,
  "sweating": 3,
  "dehydration": 4,
  "indigestion": 5,
  "headache": 3,
  "yellowish_skin": 3,
  "dark_urine": 4,
  "nausea": 5,
  "loss_of_appetite": 4,
  "pain_behind_the_eyes": 4,
  "back_pain": 3,
  "constipation": 4,
  "abdominal_pain": 4,
  "diarrhoea": 6,
  "mild_fever": 5,
  "yellow_urine": 4,
  "yellowing_of_eyes": 4,
  "acute_liver_failure": 6,
  "fluid_overload": 4,
  "swelling_of_stomach": 7,
  "swelled_lymph_nodes": 6,
  "malaise": 6,
  "blurred_and_distorted_vision": 5,
  "phlegm": 5,
  "throat_irritation": 4,
  "redness_of_eyes": 5,
  "sinus_pressure": 4,
  "runny_nose": 5,
  "congestion": 5,
  "chest_pain": 7,
  "weakness_in_limbs": 7,
  "fast_heart_rate": 5,
  "pain_during_bowel_movements": 5,
  "pain_in_anal_region": 6,
  "bloody_stool": 5,
  "irritation_in_anus": 6,
  "neck_pain": 5,
  "dizziness": 4,
  "cramps": 4,
  "bruising": 4,
  "obesity": 4,
  "swollen_legs": 5,
  "swollen_blood_vessels": 5,
  "puffy_face_and_eyes": 5,
  "enlarged_thyroid": 6,
  "brittle_nails": 5,
  "swollen_extremeties": 5,
  "excessive_hunger": 4,
  "extra_marital_contacts": 5,
  "drying_and_tingling_lips": 4,
  "slurred_speech": 4,
  "knee_pain": 3,
  "hip_joint_pain": 2,
  "muscle_weakness": 2,
  "stiff_neck": 4,
  "swelling_joints": 5,
  "movement_stiffness": 5,
  "spinning_movements": 6,
  "loss_of_balance": 4,
  "unsteadiness": 4,
  "weakness_of_one_body_side": 4,
  "loss_of_smell": 3,
  "bladder_discomfort": 4,
  "foul_smell_ofurine": 5,
  "continuous_feel_of_urine": 6,
  "passage_of_gases": 5,
  "internal_itching": 4,
  "toxic_look_(typhos)": 5,
  "depression": 3,
  "irritability": 2,
  "muscle_pain": 2,
  "altered_sensorium": 2,
  "red_spots_over_body": 3,
  "belly_pain": 4,
  "abnormal_menstruation": 6,
  "dischromic_patches": 6,
  "watering_from_eyes": 4,
  "increased_appetite": 5,
  "polyuria": 4,
  "family_history": 5,
  "mucoid_sputum": 4,
  "rusty_sputum": 4,
  "lack_of_concentration": 3,
  "visual_disturbances": 3,
  "receiving_blood_transfusion": 5,
  "receiving_unsterile_injections": 2,
  "coma": 7,
  "stomach_bleeding": 6,
  "distention_of_abdomen": 4,
  "history_of_alcohol_consumption": 5,
  "blood_in_sputum": 5,
  "prominent_veins_on_calf": 6,
  "palpitations": 4,
  "painful_walking": 2,
  "pus_filled_pimples": 2,
  "blackheads": 2,
  "scurring": 2,
  "skin_peeling": 3,
  "silver_like_dusting": 2,
  "small_dents_in_nails": 2,
  "inflammatory_nails": 2,
  "blister": 4,
  "red_sore_around_nose": 2,
  "yellow_crust_ooze": 3
};
const descriptionList = {
  "Drug Reaction": "An adverse drug reaction (ADR) is an injury caused by taking medication. ADRs may occur following a single dose or prolonged administration of a drug or result from the combination of two or more drugs.",
  "Malaria": "An infectious disease caused by protozoan parasites from the Plasmodium family that can be transmitted by the bite of the Anopheles mosquito or by a contaminated needle or transfusion. Falciparum malaria is the most deadly type.",
  "Allergy": "An allergy is an immune system response to a foreign substance that's not typically harmful to your body.They can include certain foods, pollen, or pet dander. Your immune system's job is to keep you healthy by fighting harmful pathogens.",
  "Hypothyroidism": "Hypothyroidism, also called underactive thyroid or low thyroid, is a disorder of the endocrine system in which the thyroid gland does not produce enough thyroid hormone.",
  "Psoriasis": "Psoriasis is a common skin disorder that forms thick, red, bumpy patches covered with silvery scales. They can pop up anywhere, but most appear on the scalp, elbows, knees, and lower back. Psoriasis can't be passed from person to person. It does sometimes happen in members of the same family.",
  "GERD": "Gastroesophageal reflux disease, or GERD, is a digestive disorder that affects the lower esophageal sphincter (LES), the ring of muscle between the esophagus and stomach. Many people, including pregnant women, suffer from heartburn or acid indigestion caused by GERD.",
  "Chronic cholestasis": "Chronic cholestatic diseases, whether occurring in infancy, childhood or adulthood, are characterized by defective bile acid transport from the liver to the intestine, which is caused by primary damage to the biliary epithelium in most cases",
  "hepatitis A": "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. The virus is one of several types of hepatitis viruses that cause inflammation and affect your liver's ability to function.",
  "Osteoarthristis": "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.",
  "(vertigo) Paroymsal  Positional Vertigo": "Benign paroxysmal positional vertigo (BPPV) is one of the most common causes of vertigo \u2014 the sudden sensation that you're spinning or that the inside of your head is spinning. Benign paroxysmal positional vertigo causes brief episodes of mild to intense dizziness.",
  "Hypoglycemia": "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal. Glucose is your body's main energy source. Hypoglycemia is often related to diabetes treatment. But other drugs and a variety of conditions \u2014 many rare \u2014 can cause low blood sugar in people who don't have diabetes.",
  "Acne": "Acne vulgaris is the formation of comedones, papules, pustules, nodules, and/or cysts as a result of obstruction and inflammation of pilosebaceous units (hair follicles and their accompanying sebaceous gland). Acne develops on the face and upper trunk. It most often affects adolescents.",
  "Diabetes": "Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.",
  "Impetigo": "Impetigo (im-puh-TIE-go) is a common and highly contagious skin infection that mainly affects infants and children. Impetigo usually appears as red sores on the face, especially around a child's nose and mouth, and on hands and feet. The sores burst and develop honey-colored crusts.",
  "Hypertension": "Hypertension (HTN or HT), also known as high blood pressure (HBP), is a long-term medical condition in which the blood pressure in the arteries is persistently elevated. High blood pressure typically does not cause symptoms.",
  "Peptic ulcer diseae": "Peptic ulcer disease (PUD) is a break in the inner lining of the stomach, the first part of the small intestine, or sometimes the lower esophagus. An ulcer in the stomach is called a gastric ulcer, while one in the first part of the intestines is a duodenal ulcer.",
  "Dimorphic hemorrhoids(piles)": "Hemorrhoids, also spelled haemorrhoids, are vascular structures in the anal canal. In their ... Other names, Haemorrhoids, piles, hemorrhoidal disease .",
  "Common Cold": "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
  "Chicken pox": "Chickenpox is a highly contagious disease caused by the varicella-zoster virus (VZV). It can cause an itchy, blister-like rash. The rash first appears on the chest, back, and face, and then spreads over the entire body, causing between 250 and 500 itchy blisters.",
  "Cervical spondylosis": "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck. As the disks dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).",
  "Hyperthyroidism": "Hyperthyroidism (overactive thyroid) occurs when your thyroid gland produces too much of the hormone thyroxine. Hyperthyroidism can accelerate your body's metabolism, causing unintentional weight loss and a rapid or irregular heartbeat.",
  "Urinary tract infection": "Urinary tract infection: An infection of the kidney, ureter, bladder, or urethra. Abbreviated UTI. Not everyone with a UTI has symptoms, but common symptoms include a frequent urge to urinate and pain or burning when urinating.",
  "Varicose veins": "A vein that has enlarged and twisted, often appearing as a bulging, blue blood vessel that is clearly visible through the skin. Varicose veins are most common in older adults, particularly women, and occur especially on the legs.",
  "AIDS": "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV). By damaging your immune system, HIV interferes with your body's ability to fight infection and disease.",
  "Paralysis (brain hemorrhage)": "Intracerebral hemorrhage (ICH) is when blood suddenly bursts into brain tissue, causing damage to your brain. Symptoms usually appear suddenly during ICH. They include headache, weakness, confusion, and paralysis, particularly on one side of your body.",
  "Typhoid": "An acute illness characterized by fever caused by infection with the bacterium Salmonella typhi. Typhoid fever has an insidious onset, with fever, headache, constipation, malaise, chills, and muscle pain. Diarrhea is uncommon, and vomiting is not usually severe.",
  "Hepatitis B": "Hepatitis B is an infection of your liver. It can cause scarring of the organ, liver failure, and cancer. It can be fatal if it isn't treated. It's spread when people come in contact with the blood, open sores, or body fluids of someone who has the hepatitis B virus.",
  "Fungal infection": "In humans, fungal infections occur when an invading fungus takes over an area of the body and is too much for the immune system to handle. Fungi can live in the air, soil, water, and plants. There are also some fungi that live naturally in the human body. Like many microbes, there are helpful fungi and harmful fungi.",
  "Hepatitis C": "Inflammation of the liver due to the hepatitis C virus (HCV), which is usually spread via blood transfusion (rare), hemodialysis, and needle sticks. The damage hepatitis C does to the liver can lead to cirrhosis and its complications as well as cancer.",
  "Migraine": "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so severe that it interferes with your daily activities.",
  "Bronchial Asthma": "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow. Due to this swelling, the air path produces excess mucus making it hard to breathe, which results in coughing, short breath, and wheezing. The disease is chronic and interferes with daily working.",
  "Alcoholic hepatitis": "Alcoholic hepatitis is a diseased, inflammatory condition of the liver caused by heavy alcohol consumption over an extended period of time. It's also aggravated by binge drinking and ongoing alcohol use. If you develop this condition, you must stop drinking alcohol",
  "Jaundice": "Yellow staining of the skin and sclerae (the whites of the eyes) by abnormally high blood levels of the bile pigment bilirubin. The yellowing extends to other tissues and body fluids. Jaundice was once called the \"morbus regius\" (the regal disease) in the belief that only the touch of a king could cure it",
  "Hepatitis E": "A rare form of liver inflammation caused by infection with the hepatitis E virus (HEV). It is transmitted via food or drink handled by an infected person or through infected water supplies in areas where fecal matter may get into the water. Hepatitis E does not cause chronic liver disease.",
  "Dengue": "an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. \u2014 called also breakbone fever, dengue fever.",
  "Hepatitis D": "Hepatitis D, also known as the hepatitis delta virus, is an infection that causes the liver to become inflamed. This swelling can impair liver function and cause long-term liver problems, including liver scarring and cancer. The condition is caused by the hepatitis D virus (HDV).",
  "Heart attack": "The death of heart muscle due to the loss of blood supply. The loss of blood supply is usually caused by a complete blockage of a coronary artery, one of the arteries that supplies blood to the heart muscle.",
  "Pneumonia": "Pneumonia is an infection in one or both lungs. Bacteria, viruses, and fungi cause it. The infection causes inflammation in the air sacs in your lungs, which are called alveoli. The alveoli fill with fluid or pus, making it difficult to breathe.",
  "Arthritis": "Arthritis is the swelling and tenderness of one or more of your joints. The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age. The most common types of arthritis are osteoarthritis and rheumatoid arthritis.",
  "Gastroenteritis": "Gastroenteritis is an inflammation of the digestive tract, particularly the stomach, and large and small intestines. Viral and bacterial gastroenteritis are intestinal infections associated with symptoms of diarrhea , abdominal cramps, nausea , and vomiting .",
  "Tuberculosis": "Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. Tuberculosis generally affects the lungs, but can also affect other parts of the body. Most infections show no symptoms, in which case it is known as latent tuberculosis."
};
const precautionDictionary = {
  "Drug Reaction": [
    "stop irritation",
    "consult nearest hospital",
    "stop taking drug",
    "follow up"
  ],
  "Malaria": [
    "Consult nearest hospital",
    "avoid oily food",
    "avoid non veg food",
    "keep mosquitos out"
  ],
  "Allergy": [
    "apply calamine",
    "cover area with bandage",
    "",
    "use ice to compress itching"
  ],
  "Hypothyroidism": [
    "reduce stress",
    "exercise",
    "eat healthy",
    "get proper sleep"
  ],
  "Psoriasis": [
    "wash hands with warm soapy water",
    "stop bleeding using pressure",
    "consult doctor",
    "salt baths"
  ],
  "GERD": [
    "avoid fatty spicy food",
    "avoid lying down after eating",
    "maintain healthy weight",
    "exercise"
  ],
  "Chronic cholestasis": [
    "cold baths",
    "anti itch medicine",
    "consult doctor",
    "eat healthy"
  ],
  "hepatitis A": [
    "Consult nearest hospital",
    "wash hands through",
    "avoid fatty spicy food",
    "medication"
  ],
  "Osteoarthristis": [
    "acetaminophen",
    "consult nearest hospital",
    "follow up",
    "salt baths"
  ],
  "(vertigo) Paroymsal  Positional Vertigo": [
    "lie down",
    "avoid sudden change in body",
    "avoid abrupt head movment",
    "relax"
  ],
  "Hypoglycemia": [
    "lie down on side",
    "check in pulse",
    "drink sugary drinks",
    "consult doctor"
  ],
  "Acne": [
    "bath twice",
    "avoid fatty spicy food",
    "drink plenty of water",
    "avoid too many products"
  ],
  "Diabetes": [
    "have balanced diet",
    "exercise",
    "consult doctor",
    "follow up"
  ],
  "Impetigo": [
    "soak affected area in warm water",
    "use antibiotics",
    "remove scabs with wet compressed cloth",
    "consult doctor"
  ],
  "Hypertension": [
    "meditation",
    "salt baths",
    "reduce stress",
    "get proper sleep"
  ],
  "Peptic ulcer diseae": [
    "avoid fatty spicy food",
    "consume probiotic food",
    "eliminate milk",
    "limit alcohol"
  ],
  "Dimorphic hemmorhoids(piles)": [
    "avoid fatty spicy food",
    "consume witch hazel",
    "warm bath with epsom salt",
    "consume alovera juice"
  ],
  "Common Cold": [
    "drink vitamin c rich drinks",
    "take vapour",
    "avoid cold food",
    "keep fever in check"
  ],
  "Chicken pox": [
    "use neem in bathing",
    "consume neem leaves",
    "take vaccine",
    "avoid public places"
  ],
  "Cervical spondylosis": [
    "use heating pad or cold pack",
    "exercise",
    "take otc pain reliver",
    "consult doctor"
  ],
  "Hyperthyroidism": [
    "eat healthy",
    "massage",
    "use lemon balm",
    "take radioactive iodine treatment"
  ],
  "Urinary tract infection": [
    "drink plenty of water",
    "increase vitamin c intake",
    "drink cranberry juice",
    "take probiotics"
  ],
  "Varicose veins": [
    "lie down flat and raise the leg high",
    "use oinments",
    "use vein compression",
    "dont stand still for long"
  ],
  "AIDS": [
    "avoid open cuts",
    "wear ppe if possible",
    "consult doctor",
    "follow up"
  ],
  "Paralysis (brain hemorrhage)": [
    "massage",
    "eat healthy",
    "exercise",
    "consult doctor"
  ],
  "Typhoid": [
    "eat high calorie vegitables",
    "antiboitic therapy",
    "consult doctor",
    "medication"
  ],
  "Hepatitis B": [
    "consult nearest hospital",
    "vaccination",
    "eat healthy",
    "medication"
  ],
  "Fungal infection": [
    "bath twice",
    "use detol or neem in bathing water",
    "keep infected area dry",
    "use clean cloths"
  ],
  "Hepatitis C": [
    "Consult nearest hospital",
    "vaccination",
    "eat healthy",
    "medication"
  ],
  "Migraine": [
    "meditation",
    "reduce stress",
    "use poloroid glasses in sun",
    "consult doctor"
  ],
  "Bronchial Asthma": [
    "switch to loose cloothing",
    "take deep breaths",
    "get away from trigger",
    "seek help"
  ],
  "Alcoholic hepatitis": [
    "stop alcohol consumption",
    "consult doctor",
    "medication",
    "follow up"
  ],
  "Jaundice": [
    "drink plenty of water",
    "consume milk thistle",
    "eat fruits and high fiberous food",
    "medication"
  ],
  "Hepatitis E": [
    "stop alcohol consumption",
    "rest",
    "consult doctor",
    "medication"
  ],
  "Dengue": [
    "drink papaya leaf juice",
    "avoid fatty spicy food",
    "keep mosquitos away",
    "keep hydrated"
  ],
  "Hepatitis D": [
    "consult doctor",
    "medication",
    "eat healthy",
    "follow up"
  ],
  "Heart attack": [
    "call ambulance",
    "chew or swallow asprin",
    "keep calm",
    ""
  ],
  "Pneumonia": [
    "consult doctor",
    "medication",
    "rest",
    "follow up"
  ],
  "Arthritis": [
    "exercise",
    "use hot and cold therapy",
    "try acupuncture",
    "massage"
  ],
  "Gastroenteritis": [
    "stop eating solid food for while",
    "try taking small sips of water",
    "rest",
    "ease back into eating"
  ],
  "Tuberculosis": [
    "cover mouth",
    "consult doctor",
    "medication",
    "rest"
  ]
};
const reducedData = {
  "(vertigo) Paroymsal  Positional Vertigo": [
    "vomiting",
    "headache",
    "nausea",
    "spinning_movements",
    "loss_of_balance",
    "unsteadiness"
  ],
  "AIDS": [
    "muscle_wasting",
    "patches_in_throat",
    "high_fever",
    "extra_marital_contacts"
  ],
  "Acne": [
    "skin_rash",
    "pus_filled_pimples",
    "blackheads",
    "scurring"
  ],
  "Alcoholic hepatitis": [
    "vomiting",
    "yellowish_skin",
    "abdominal_pain",
    "swelling_of_stomach",
    "distention_of_abdomen",
    "history_of_alcohol_consumption",
    "fluid_overload.1"
  ],
  "Allergy": [
    "continuous_sneezing",
    "shivering",
    "chills",
    "watering_from_eyes"
  ],
  "Arthritis": [
    "muscle_weakness",
    "stiff_neck",
    "swelling_joints",
    "movement_stiffness",
    "painful_walking"
  ],
  "Bronchial Asthma": [
    "fatigue",
    "cough",
    "high_fever",
    "breathlessness",
    "family_history",
    "mucoid_sputum"
  ],
  "Cervical spondylosis": [
    "back_pain",
    "weakness_in_limbs",
    "neck_pain",
    "dizziness",
    "loss_of_balance"
  ],
  "Chicken pox": [
    "itching",
    "skin_rash",
    "fatigue",
    "lethargy",
    "high_fever",
    "headache",
    "loss_of_appetite",
    "mild_fever",
    "swelled_lymph_nodes",
    "malaise",
    "red_spots_over_body"
  ],
  "Chronic cholestasis": [
    "itching",
    "vomiting",
    "yellowish_skin",
    "nausea",
    "loss_of_appetite",
    "abdominal_pain",
    "yellowing_of_eyes"
  ],
  "Common Cold": [
    "continuous_sneezing",
    "chills",
    "fatigue",
    "cough",
    "high_fever",
    "headache",
    "swelled_lymph_nodes",
    "malaise",
    "phlegm",
    "throat_irritation",
    "redness_of_eyes",
    "sinus_pressure",
    "runny_nose",
    "congestion",
    "chest_pain",
    "loss_of_smell",
    "muscle_pain"
  ],
  "Dengue": [
    "skin_rash",
    "chills",
    "joint_pain",
    "vomiting",
    "fatigue",
    "high_fever",
    "headache",
    "nausea",
    "loss_of_appetite",
    "pain_behind_the_eyes",
    "back_pain",
    "malaise",
    "muscle_pain",
    "red_spots_over_body"
  ],
  "Diabetes ": [
    "fatigue",
    "weight_loss",
    "restlessness",
    "lethargy",
    "irregular_sugar_level",
    "blurred_and_distorted_vision",
    "obesity",
    "excessive_hunger",
    "increased_appetite",
    "polyuria"
  ],
  "Dimorphic hemmorhoids(piles)": [
    "constipation",
    "pain_during_bowel_movements",
    "pain_in_anal_region",
    "bloody_stool",
    "irritation_in_anus"
  ],
  "Drug Reaction": [
    "itching",
    "skin_rash",
    "stomach_pain",
    "burning_micturition",
    "spotting_ urination"
  ],
  "Fungal infection": [
    "itching",
    "skin_rash",
    "nodal_skin_eruptions",
    "dischromic _patches"
  ],
  "GERD": [
    "stomach_pain",
    "acidity",
    "ulcers_on_tongue",
    "vomiting",
    "cough",
    "chest_pain"
  ],
  "Gastroenteritis": [
    "vomiting",
    "sunken_eyes",
    "dehydration",
    "diarrhoea"
  ],
  "Heart attack": [
    "vomiting",
    "breathlessness",
    "sweating",
    "chest_pain"
  ],
  "Hepatitis B": [
    "itching",
    "fatigue",
    "lethargy",
    "yellowish_skin",
    "dark_urine",
    "loss_of_appetite",
    "abdominal_pain",
    "yellow_urine",
    "yellowing_of_eyes",
    "malaise",
    "receiving_blood_transfusion",
    "receiving_unsterile_injections"
  ],
  "Hepatitis C": [
    "fatigue",
    "yellowish_skin",
    "nausea",
    "loss_of_appetite",
    "yellowing_of_eyes",
    "family_history"
  ],
  "Hepatitis D": [
    "joint_pain",
    "vomiting",
    "fatigue",
    "yellowish_skin",
    "dark_urine",
    "nausea",
    "loss_of_appetite",
    "abdominal_pain",
    "yellowing_of_eyes"
  ],
  "Hepatitis E": [
    "joint_pain",
    "vomiting",
    "fatigue",
    "high_fever",
    "yellowish_skin",
    "dark_urine",
    "nausea",
    "loss_of_appetite",
    "abdominal_pain",
    "yellowing_of_eyes",
    "acute_liver_failure",
    "coma",
    "stomach_bleeding"
  ],
  "Hypertension ": [
    "headache",
    "chest_pain",
    "dizziness",
    "loss_of_balance",
    "lack_of_concentration"
  ],
  "Hyperthyroidism": [
    "fatigue",
    "mood_swings",
    "weight_loss",
    "restlessness",
    "sweating",
    "diarrhoea",
    "fast_heart_rate",
    "excessive_hunger",
    "muscle_weakness",
    "irritability",
    "abnormal_menstruation"
  ],
  "Hypoglycemia": [
    "vomiting",
    "fatigue",
    "anxiety",
    "sweating",
    "headache",
    "nausea",
    "blurred_and_distorted_vision",
    "excessive_hunger",
    "drying_and_tingling_lips",
    "slurred_speech",
    "irritability",
    "palpitations"
  ],
  "Hypothyroidism": [
    "fatigue",
    "weight_gain",
    "cold_hands_and_feets",
    "mood_swings",
    "lethargy",
    "dizziness",
    "puffy_face_and_eyes",
    "enlarged_thyroid",
    "brittle_nails",
    "swollen_extremeties",
    "depression",
    "irritability",
    "abnormal_menstruation"
  ],
  "Impetigo": [
    "skin_rash",
    "high_fever",
    "blister",
    "red_sore_around_nose",
    "yellow_crust_ooze"
  ],
  "Jaundice": [
    "itching",
    "vomiting",
    "fatigue",
    "weight_loss",
    "high_fever",
    "yellowish_skin",
    "dark_urine",
    "abdominal_pain"
  ],
  "Malaria": [
    "chills",
    "vomiting",
    "high_fever",
    "sweating",
    "headache",
    "nausea",
    "diarrhoea",
    "muscle_pain"
  ],
  "Migraine": [
    "acidity",
    "indigestion",
    "headache",
    "blurred_and_distorted_vision",
    "excessive_hunger",
    "stiff_neck",
    "depression",
    "irritability",
    "visual_disturbances"
  ],
  "Osteoarthristis": [
    "joint_pain",
    "neck_pain",
    "knee_pain",
    "hip_joint_pain",
    "swelling_joints",
    "painful_walking"
  ],
  "Paralysis (brain hemorrhage)": [
    "vomiting",
    "headache",
    "weakness_of_one_body_side",
    "altered_sensorium"
  ],
  "Peptic ulcer diseae": [
    "vomiting",
    "indigestion",
    "loss_of_appetite",
    "abdominal_pain",
    "passage_of_gases",
    "internal_itching"
  ],
  "Pneumonia": [
    "chills",
    "fatigue",
    "cough",
    "high_fever",
    "breathlessness",
    "sweating",
    "malaise",
    "phlegm",
    "chest_pain",
    "fast_heart_rate",
    "rusty_sputum"
  ],
  "Psoriasis": [
    "skin_rash",
    "joint_pain",
    "skin_peeling",
    "silver_like_dusting",
    "small_dents_in_nails",
    "inflammatory_nails"
  ],
  "Tuberculosis": [
    "chills",
    "vomiting",
    "fatigue",
    "weight_loss",
    "cough",
    "high_fever",
    "breathlessness",
    "sweating",
    "loss_of_appetite",
    "mild_fever",
    "yellowing_of_eyes",
    "swelled_lymph_nodes",
    "malaise",
    "phlegm",
    "chest_pain",
    "blood_in_sputum"
  ],
  "Typhoid": [
    "chills",
    "vomiting",
    "fatigue",
    "high_fever",
    "headache",
    "nausea",
    "constipation",
    "abdominal_pain",
    "diarrhoea",
    "toxic_look_(typhos)",
    "belly_pain"
  ],
  "Urinary tract infection": [
    "burning_micturition",
    "bladder_discomfort",
    "foul_smell_of urine",
    "continuous_feel_of_urine"
  ],
  "Varicose veins": [
    "fatigue",
    "cramps",
    "bruising",
    "obesity",
    "swollen_legs",
    "swollen_blood_vessels",
    "prominent_veins_on_calf"
  ],
  "hepatitis A": [
    "joint_pain",
    "vomiting",
    "yellowish_skin",
    "dark_urine",
    "nausea",
    "loss_of_appetite",
    "abdominal_pain",
    "diarrhoea",
    "mild_fever",
    "yellowing_of_eyes",
    "muscle_pain"
  ]
};
const decisionTree = {
  "node_id": 0,
  "feature": "redness_of_eyes",
  "threshold": 0.5,
  "left": {
    "node_id": 1,
    "feature": "internal_itching",
    "threshold": 0.5,
    "left": {
      "node_id": 2,
      "feature": "hip_joint_pain",
      "threshold": 0.5,
      "left": {
        "node_id": 3,
        "feature": "increased_appetite",
        "threshold": 0.5,
        "left": {
          "node_id": 4,
          "feature": "silver_like_dusting",
          "threshold": 0.5,
          "left": {
            "node_id": 5,
            "feature": "brittle_nails",
            "threshold": 0.5,
            "left": {
              "node_id": 6,
              "feature": "blood_in_sputum",
              "threshold": 0.5,
              "left": {
                "node_id": 7,
                "feature": "yellow_crust_ooze",
                "threshold": 0.5,
                "left": {
                  "node_id": 8,
                  "feature": "nodal_skin_eruptions",
                  "threshold": 0.5,
                  "left": {
                    "node_id": 9,
                    "feature": "unsteadiness",
                    "threshold": 0.5,
                    "left": {
                      "node_id": 10,
                      "feature": "weight_loss",
                      "threshold": 0.5,
                      "left": {
                        "node_id": 11,
                        "feature": "fluid_overload.1",
                        "threshold": 0.5,
                        "left": {
                          "node_id": 12,
                          "feature": "prominent_veins_on_calf",
                          "threshold": 0.5,
                          "left": {
                            "node_id": 13,
                            "feature": "depression",
                            "threshold": 0.5,
                            "left": {
                              "node_id": 14,
                              "feature": "lack_of_concentration",
                              "threshold": 0.5,
                              "left": {
                                "node_id": 15,
                                "feature": "mild_fever",
                                "threshold": 0.5,
                                "left": {
                                  "node_id": 16,
                                  "feature": "muscle_pain",
                                  "threshold": 0.5,
                                  "left": {
                                    "node_id": 17,
                                    "feature": "neck_pain",
                                    "threshold": 0.5,
                                    "left": {
                                      "node_id": 18,
                                      "feature": "altered_sensorium",
                                      "threshold": 0.5,
                                      "left": {
                                        "node_id": 19,
                                        "feature": "slurred_speech",
                                        "threshold": 0.5,
                                        "left": {
                                          "node_id": 20,
                                          "feature": "movement_stiffness",
                                          "threshold": 0.5,
                                          "left": {
                                            "node_id": 21,
                                            "feature": "watering_from_eyes",
                                            "threshold": 0.5,
                                            "left": {
                                              "node_id": 22,
                                              "feature": "belly_pain",
                                              "threshold": 0.5,
                                              "left": {
                                                "node_id": 23,
                                                "feature": "continuous_feel_of_urine",
                                                "threshold": 0.5,
                                                "left": {
                                                  "node_id": 24,
                                                  "feature": "rusty_sputum",
                                                  "threshold": 0.5,
                                                  "left": {
                                                    "node_id": 25,
                                                    "feature": "receiving_blood_transfusion",
                                                    "threshold": 0.5,
                                                    "left": {
                                                      "node_id": 26,
                                                      "feature": "itching",
                                                      "threshold": 0.5,
                                                      "left": {
                                                        "node_id": 27,
                                                        "feature": "patches_in_throat",
                                                        "threshold": 0.5,
                                                        "left": {
                                                          "node_id": 28,
                                                          "feature": "family_history",
                                                          "threshold": 0.5,
                                                          "left": {
                                                            "node_id": 29,
                                                            "feature": "stomach_pain",
                                                            "threshold": 0.5,
                                                            "left": {
                                                              "node_id": 30,
                                                              "feature": "coma",
                                                              "threshold": 0.5,
                                                              "left": {
                                                                "node_id": 31,
                                                                "feature": "dark_urine",
                                                                "threshold": 0.5,
                                                                "left": {
                                                                  "node_id": 32,
                                                                  "feature": "pus_filled_pimples",
                                                                  "threshold": 0.5,
                                                                  "left": {
                                                                    "node_id": 33,
                                                                    "feature": "bloody_stool",
                                                                    "threshold": 0.5,
                                                                    "left": {
                                                                      "node_id": 34,
                                                                      "feature": "sunken_eyes",
                                                                      "threshold": 0.5,
                                                                      "left": {
                                                                        "node_id": 35,
                                                                        "feature": "breathlessness",
                                                                        "threshold": 0.5,
                                                                        "left": {
                                                                          "node_id": 36,
                                                                          "feature": "continuous_sneezing",
                                                                          "threshold": 0.5,
                                                                          "left": {
                                                                            "node_id": 37,
                                                                            "feature": "dehydration",
                                                                            "threshold": 0.5,
                                                                            "left": {
                                                                              "node_id": 38,
                                                                              "feature": "scurring",
                                                                              "threshold": 0.5,
                                                                              "left": {
                                                                                "node_id": 39,
                                                                                "feature": "sweating",
                                                                                "threshold": 0.5,
                                                                                "left": {
                                                                                  "node_id": 40,
                                                                                  "feature": "weakness_of_one_body_side",
                                                                                  "threshold": 0.5,
                                                                                  "left": {
                                                                                    "node_id": 41,
                                                                                    "feature": "extra_marital_contacts",
                                                                                    "threshold": 0.5,
                                                                                    "left": {
                                                                                      "node_id": 42,
                                                                                      "feature": "pain_behind_the_eyes",
                                                                                      "threshold": 0.5,
                                                                                      "left": {
                                                                                        "node_id": 43,
                                                                                        "feature": "joint_pain",
                                                                                        "threshold": 0.5,
                                                                                        "left": {
                                                                                          "node_id": 44,
                                                                                          "feature": "chest_pain",
                                                                                          "threshold": 0.5,
                                                                                          "left": {
                                                                                            "node_id": 45,
                                                                                            "feature": "spinning_movements",
                                                                                            "threshold": 0.5,
                                                                                            "left": {
                                                                                              "node_id": 46,
                                                                                              "feature": "red_sore_around_nose",
                                                                                              "threshold": 0.5,
                                                                                              "left": {
                                                                                                "node_id": 47,
                                                                                                "feature": "toxic_look_(typhos)",
                                                                                                "threshold": 0.5,
                                                                                                "left": {
                                                                                                  "node_id": 48,
                                                                                                  "feature": "bladder_discomfort",
                                                                                                  "threshold": 0.5,
                                                                                                  "left": {
                                                                                                    "node_id": 49,
                                                                                                    "feature": "yellowing_of_eyes",
                                                                                                    "threshold": 0.5,
                                                                                                    "left": {
                                                                                                      "node_id": 50,
                                                                                                      "feature": "headache",
                                                                                                      "threshold": 0.5,
                                                                                                      "left": {
                                                                                                        "node_id": 51,
                                                                                                        "feature": "pain_in_anal_region",
                                                                                                        "threshold": 0.5,
                                                                                                        "left": {
                                                                                                          "node_id": 52,
                                                                                                          "feature": "loss_of_appetite",
                                                                                                          "threshold": 0.5,
                                                                                                          "left": {
                                                                                                            "node_id": 53,
                                                                                                            "feature": "weakness_in_limbs",
                                                                                                            "threshold": 0.5,
                                                                                                            "left": {
                                                                                                              "node_id": 54,
                                                                                                              "feature": "bruising",
                                                                                                              "threshold": 0.5,
                                                                                                              "left": {
                                                                                                                "node_id": 55,
                                                                                                                "feature": "muscle_weakness",
                                                                                                                "threshold": 0.5,
                                                                                                                "left": {
                                                                                                                  "node_id": 56,
                                                                                                                  "disease": "Alcoholic hepatitis"
                                                                                                                },
                                                                                                                "right": {
                                                                                                                  "node_id": 57,
                                                                                                                  "disease": "Arthritis"
                                                                                                                }
                                                                                                              },
                                                                                                              "right": {
                                                                                                                "node_id": 58,
                                                                                                                "disease": "Varicose veins"
                                                                                                              }
                                                                                                            },
                                                                                                            "right": {
                                                                                                              "node_id": 59,
                                                                                                              "disease": "Cervical spondylosis"
                                                                                                            }
                                                                                                          },
                                                                                                          "right": {
                                                                                                            "node_id": 60,
                                                                                                            "disease": "Peptic ulcer diseae"
                                                                                                          }
                                                                                                        },
                                                                                                        "right": {
                                                                                                          "node_id": 61,
                                                                                                          "disease": "Dimorphic hemmorhoids(piles)"
                                                                                                        }
                                                                                                      },
                                                                                                      "right": {
                                                                                                        "node_id": 62,
                                                                                                        "disease": "Migraine"
                                                                                                      }
                                                                                                    },
                                                                                                    "right": {
                                                                                                      "node_id": 63,
                                                                                                      "feature": "fatigue",
                                                                                                      "threshold": 0.5,
                                                                                                      "left": {
                                                                                                        "node_id": 64,
                                                                                                        "disease": "Chronic cholestasis"
                                                                                                      },
                                                                                                      "right": {
                                                                                                        "node_id": 65,
                                                                                                        "disease": "Hepatitis C"
                                                                                                      }
                                                                                                    }
                                                                                                  },
                                                                                                  "right": {
                                                                                                    "node_id": 66,
                                                                                                    "disease": "Urinary tract infection"
                                                                                                  }
                                                                                                },
                                                                                                "right": {
                                                                                                  "node_id": 67,
                                                                                                  "disease": "Typhoid"
                                                                                                }
                                                                                              },
                                                                                              "right": {
                                                                                                "node_id": 68,
                                                                                                "disease": "Impetigo"
                                                                                              }
                                                                                            },
                                                                                            "right": {
                                                                                              "node_id": 69,
                                                                                              "disease": "(vertigo) Paroymsal  Positional Vertigo"
                                                                                            }
                                                                                          },
                                                                                          "right": {
                                                                                            "node_id": 70,
                                                                                            "feature": "loss_of_balance",
                                                                                            "threshold": 0.5,
                                                                                            "left": {
                                                                                              "node_id": 71,
                                                                                              "disease": "GERD"
                                                                                            },
                                                                                            "right": {
                                                                                              "node_id": 72,
                                                                                              "disease": "Hypertension "
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        "right": {
                                                                                          "node_id": 73,
                                                                                          "feature": "vomiting",
                                                                                          "threshold": 0.5,
                                                                                          "left": {
                                                                                            "node_id": 74,
                                                                                            "disease": "Psoriasis"
                                                                                          },
                                                                                          "right": {
                                                                                            "node_id": 75,
                                                                                            "disease": "Hepatitis D"
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      "right": {
                                                                                        "node_id": 76,
                                                                                        "disease": "Dengue"
                                                                                      }
                                                                                    },
                                                                                    "right": {
                                                                                      "node_id": 77,
                                                                                      "disease": "AIDS"
                                                                                    }
                                                                                  },
                                                                                  "right": {
                                                                                    "node_id": 78,
                                                                                    "disease": "Paralysis (brain hemorrhage)"
                                                                                  }
                                                                                },
                                                                                "right": {
                                                                                  "node_id": 79,
                                                                                  "feature": "vomiting",
                                                                                  "threshold": 0.5,
                                                                                  "left": {
                                                                                    "node_id": 80,
                                                                                    "disease": "Hyperthyroidism"
                                                                                  },
                                                                                  "right": {
                                                                                    "node_id": 81,
                                                                                    "disease": "Heart attack"
                                                                                  }
                                                                                }
                                                                              },
                                                                              "right": {
                                                                                "node_id": 82,
                                                                                "disease": "Acne"
                                                                              }
                                                                            },
                                                                            "right": {
                                                                              "node_id": 83,
                                                                              "disease": "Gastroenteritis"
                                                                            }
                                                                          },
                                                                          "right": {
                                                                            "node_id": 84,
                                                                            "disease": "Allergy"
                                                                          }
                                                                        },
                                                                        "right": {
                                                                          "node_id": 85,
                                                                          "feature": "fatigue",
                                                                          "threshold": 0.5,
                                                                          "left": {
                                                                            "node_id": 86,
                                                                            "disease": "Heart attack"
                                                                          },
                                                                          "right": {
                                                                            "node_id": 87,
                                                                            "disease": "Bronchial Asthma"
                                                                          }
                                                                        }
                                                                      },
                                                                      "right": {
                                                                        "node_id": 88,
                                                                        "disease": "Gastroenteritis"
                                                                      }
                                                                    },
                                                                    "right": {
                                                                      "node_id": 89,
                                                                      "disease": "Dimorphic hemmorhoids(piles)"
                                                                    }
                                                                  },
                                                                  "right": {
                                                                    "node_id": 90,
                                                                    "disease": "Acne"
                                                                  }
                                                                },
                                                                "right": {
                                                                  "node_id": 91,
                                                                  "disease": "Hepatitis D"
                                                                }
                                                              },
                                                              "right": {
                                                                "node_id": 92,
                                                                "disease": "Hepatitis E"
                                                              }
                                                            },
                                                            "right": {
                                                              "node_id": 93,
                                                              "feature": "burning_micturition",
                                                              "threshold": 0.5,
                                                              "left": {
                                                                "node_id": 94,
                                                                "disease": "GERD"
                                                              },
                                                              "right": {
                                                                "node_id": 95,
                                                                "disease": "Drug Reaction"
                                                              }
                                                            }
                                                          },
                                                          "right": {
                                                            "node_id": 96,
                                                            "feature": "nausea",
                                                            "threshold": 0.5,
                                                            "left": {
                                                              "node_id": 97,
                                                              "feature": "yellowing_of_eyes",
                                                              "threshold": 0.5,
                                                              "left": {
                                                                "node_id": 98,
                                                                "disease": "Bronchial Asthma"
                                                              },
                                                              "right": {
                                                                "node_id": 99,
                                                                "disease": "Hepatitis C"
                                                              }
                                                            },
                                                            "right": {
                                                              "node_id": 100,
                                                              "disease": "Hepatitis C"
                                                            }
                                                          }
                                                        },
                                                        "right": {
                                                          "node_id": 101,
                                                          "disease": "AIDS"
                                                        }
                                                      },
                                                      "right": {
                                                        "node_id": 102,
                                                        "feature": "loss_of_appetite",
                                                        "threshold": 0.5,
                                                        "left": {
                                                          "node_id": 103,
                                                          "feature": "dischromic _patches",
                                                          "threshold": 0.5,
                                                          "left": {
                                                            "node_id": 104,
                                                            "feature": "yellowish_skin",
                                                            "threshold": 0.5,
                                                            "left": {
                                                              "node_id": 105,
                                                              "disease": "Drug Reaction"
                                                            },
                                                            "right": {
                                                              "node_id": 106,
                                                              "feature": "nausea",
                                                              "threshold": 0.5,
                                                              "left": {
                                                                "node_id": 107,
                                                                "disease": "Jaundice"
                                                              },
                                                              "right": {
                                                                "node_id": 108,
                                                                "disease": "Chronic cholestasis"
                                                              }
                                                            }
                                                          },
                                                          "right": {
                                                            "node_id": 109,
                                                            "disease": "Fungal infection"
                                                          }
                                                        },
                                                        "right": {
                                                          "node_id": 110,
                                                          "feature": "red_spots_over_body",
                                                          "threshold": 0.5,
                                                          "left": {
                                                            "node_id": 111,
                                                            "disease": "Chronic cholestasis"
                                                          },
                                                          "right": {
                                                            "node_id": 112,
                                                            "disease": "Chicken pox"
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "right": {
                                                      "node_id": 113,
                                                      "disease": "Hepatitis B"
                                                    }
                                                  },
                                                  "right": {
                                                    "node_id": 114,
                                                    "disease": "Pneumonia"
                                                  }
                                                },
                                                "right": {
                                                  "node_id": 115,
                                                  "disease": "Urinary tract infection"
                                                }
                                              },
                                              "right": {
                                                "node_id": 116,
                                                "disease": "Typhoid"
                                              }
                                            },
                                            "right": {
                                              "node_id": 117,
                                              "disease": "Allergy"
                                            }
                                          },
                                          "right": {
                                            "node_id": 118,
                                            "disease": "Arthritis"
                                          }
                                        },
                                        "right": {
                                          "node_id": 119,
                                          "disease": "Hypoglycemia"
                                        }
                                      },
                                      "right": {
                                        "node_id": 120,
                                        "disease": "Paralysis (brain hemorrhage)"
                                      }
                                    },
                                    "right": {
                                      "node_id": 121,
                                      "feature": "painful_walking",
                                      "threshold": 0.5,
                                      "left": {
                                        "node_id": 122,
                                        "disease": "Cervical spondylosis"
                                      },
                                      "right": {
                                        "node_id": 123,
                                        "disease": "Osteoarthristis"
                                      }
                                    }
                                  },
                                  "right": {
                                    "node_id": 124,
                                    "feature": "loss_of_appetite",
                                    "threshold": 0.5,
                                    "left": {
                                      "node_id": 125,
                                      "disease": "Malaria"
                                    },
                                    "right": {
                                      "node_id": 126,
                                      "disease": "Dengue"
                                    }
                                  }
                                },
                                "right": {
                                  "node_id": 127,
                                  "feature": "muscle_pain",
                                  "threshold": 0.5,
                                  "left": {
                                    "node_id": 128,
                                    "disease": "Chicken pox"
                                  },
                                  "right": {
                                    "node_id": 129,
                                    "disease": "hepatitis A"
                                  }
                                }
                              },
                              "right": {
                                "node_id": 130,
                                "disease": "Hypertension "
                              }
                            },
                            "right": {
                              "node_id": 131,
                              "disease": "Migraine"
                            }
                          },
                          "right": {
                            "node_id": 132,
                            "disease": "Varicose veins"
                          }
                        },
                        "right": {
                          "node_id": 133,
                          "disease": "Alcoholic hepatitis"
                        }
                      },
                      "right": {
                        "node_id": 134,
                        "feature": "irritability",
                        "threshold": 0.5,
                        "left": {
                          "node_id": 135,
                          "disease": "Jaundice"
                        },
                        "right": {
                          "node_id": 136,
                          "disease": "Hyperthyroidism"
                        }
                      }
                    },
                    "right": {
                      "node_id": 137,
                      "disease": "(vertigo) Paroymsal  Positional Vertigo"
                    }
                  },
                  "right": {
                    "node_id": 138,
                    "disease": "Fungal infection"
                  }
                },
                "right": {
                  "node_id": 139,
                  "disease": "Impetigo"
                }
              },
              "right": {
                "node_id": 140,
                "disease": "Tuberculosis"
              }
            },
            "right": {
              "node_id": 141,
              "disease": "Hypothyroidism"
            }
          },
          "right": {
            "node_id": 142,
            "disease": "Psoriasis"
          }
        },
        "right": {
          "node_id": 143,
          "disease": "Diabetes "
        }
      },
      "right": {
        "node_id": 144,
        "disease": "Osteoarthristis"
      }
    },
    "right": {
      "node_id": 145,
      "disease": "Peptic ulcer diseae"
    }
  },
  "right": {
    "node_id": 146,
    "disease": "Common Cold"
  }
};
