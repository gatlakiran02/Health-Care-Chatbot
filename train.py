import os
import re
import csv
import json
import urllib.request
import pandas as pd
import numpy as np
from sklearn import preprocessing
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.tree import DecisionTreeClassifier, _tree
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.svm import SVC
from sklearn.neural_network import MLPClassifier

# --- Step 1: Download Datasets ---
DATA_FILES = {
    "Training.csv": "https://raw.githubusercontent.com/yash-naikk/HEALTH-CARE-CHATBOT/main/Training.csv",
    "Testing.csv": "https://raw.githubusercontent.com/yash-naikk/HEALTH-CARE-CHATBOT/main/Testing.csv",
    "symptom_Description.csv": "https://raw.githubusercontent.com/yash-naikk/HEALTH-CARE-CHATBOT/main/symptom_Description.csv",
    "Symptom_severity.csv": "https://raw.githubusercontent.com/yash-naikk/HEALTH-CARE-CHATBOT/main/Symptom_severity.csv",
    "symptom_precaution.csv": "https://raw.githubusercontent.com/yash-naikk/HEALTH-CARE-CHATBOT/main/symptom_precaution.csv"
}

print("Checking and downloading datasets...")
for filename, url in DATA_FILES.items():
    if not os.path.exists(filename):
        print(f"Downloading {filename}...")
        try:
            urllib.request.urlretrieve(url, filename)
            print(f"Successfully downloaded {filename}.")
        except Exception as e:
            print(f"Error downloading {filename}: {e}")
    else:
        print(f"{filename} already exists.")

# --- Step 2: Load Data and Pre-process ---
print("\nLoading datasets...")
training = pd.read_csv('Training.csv')
testing = pd.read_csv('Testing.csv')

# Note: Sometimes datasets have an extra unnamed column or trailing spaces, let's clean them up
training = training.loc[:, ~training.columns.str.contains('^Unnamed')]
testing = testing.loc[:, ~testing.columns.str.contains('^Unnamed')]

# Standardize columns
training.columns = training.columns.str.strip()
testing.columns = testing.columns.str.strip()

cols = training.columns[:-1]
x = training[cols]
y = training['prognosis']

# Grouping Data by Prognosis and Finding Maximum Values to identify symptom association
reduced_data = training.groupby('prognosis').max()

# Label Encoding
le = preprocessing.LabelEncoder()
y_encoded = le.fit_transform(y)
class_names = list(le.classes_)

x_train, x_test, y_train, y_test = train_test_split(x, y_encoded, test_size=0.33, random_state=42)

testx = testing[cols]
testy = testing['prognosis']
testy_encoded = le.transform(testy)

# --- Step 3: Model Building and Evaluation ---
print("\n--- Model Training & Evaluation ---")

# Decision Tree
clf = DecisionTreeClassifier()
clf.fit(x_train, y_train)
scores_dt = cross_val_score(clf, x_test, y_test, cv=3)
print(f"Decision Tree Accuracy: {scores_dt.mean() * 100:.2f}%")

# Random Forest
rf_model = RandomForestClassifier()
rf_model.fit(x_train, y_train)
scores_rf = cross_val_score(rf_model, x_test, y_test, cv=3)
print(f"Random Forest Accuracy: {scores_rf.mean() * 100:.2f}%")

# Support Vector Classifier
svc_model = SVC()
svc_model.fit(x_train, y_train)
print(f"SVC Accuracy: {svc_model.score(x_test, y_test) * 100:.2f}%")

# Extra Trees
et_model = ExtraTreesClassifier()
et_model.fit(x_train, y_train)
print(f"Extra Trees Accuracy: {et_model.score(x_test, y_test) * 100:.2f}%")

# Single-Layer Perceptron (SLP)
slp_model = MLPClassifier(hidden_layer_sizes=(x_train.shape[1],), max_iter=1000, random_state=42)
slp_model.fit(x_train, y_train)
scores_slp = cross_val_score(slp_model, x_test, y_test, cv=3)
print(f"SLP Model Accuracy: {scores_slp.mean() * 100:.2f}%")

# Multi-Layer Perceptron (MLP)
mlp_model = MLPClassifier(hidden_layer_sizes=(128, 64), max_iter=1000, random_state=42)
mlp_model.fit(x_train, y_train)
scores_mlp = cross_val_score(mlp_model, x_test, y_test, cv=3)
print(f"MLP Model Accuracy: {scores_mlp.mean() * 100:.2f}%")

# --- Step 4: Export logic to Javascript data.js ---
print("\nExporting data structures to data.js...")

# 1. Parse Severity dictionary
severity_dict = {}
if os.path.exists("Symptom_severity.csv"):
    with open("Symptom_severity.csv", mode='r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) >= 2:
                # Clean up symptoms (sometimes they have spaces or capitalized letters)
                symptom_name = row[0].strip().replace(" ", "_").lower()
                try:
                    severity_dict[symptom_name] = int(row[1])
                except ValueError:
                    pass

# 2. Parse Description dictionary
description_dict = {}
if os.path.exists("symptom_Description.csv"):
    with open("symptom_Description.csv", mode='r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) >= 2:
                description_dict[row[0].strip()] = row[1].strip()

# 3. Parse Precaution dictionary
precaution_dict = {}
if os.path.exists("symptom_precaution.csv"):
    with open("symptom_precaution.csv", mode='r', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            if len(row) >= 5:
                precaution_dict[row[0].strip()] = [row[1].strip(), row[2].strip(), row[3].strip(), row[4].strip()]

# 4. Parse Reduced Data (mapping from prognosis to list of symptoms present)
reduced_data_js = {}
for index, row in reduced_data.iterrows():
    # Get columns that are 1 (indicating symptom belongs to disease)
    active_symptoms = list(row[row == 1].index)
    reduced_data_js[index] = active_symptoms

# 5. Serialize Scikit-Learn Decision Tree to JS object
def serialize_tree(tree, feature_names, class_names, node_id=0):
    if tree.feature[node_id] != -2: # TREE_UNDEFINED
        feature_index = tree.feature[node_id]
        feature_name = feature_names[feature_index]
        return {
            "node_id": int(node_id),
            "feature": str(feature_name),
            "threshold": float(tree.threshold[node_id]),
            "left": serialize_tree(tree, feature_names, class_names, tree.children_left[node_id]),
            "right": serialize_tree(tree, feature_names, class_names, tree.children_right[node_id])
        }
    else:
        class_index = int(np.argmax(tree.value[node_id][0]))
        predicted_disease = class_names[class_index]
        return {
            "node_id": int(node_id),
            "disease": str(predicted_disease)
        }

tree_structure = serialize_tree(clf.tree_, list(cols), class_names)

# Save to data.js
js_content = f"""// Auto-generated data file for Healthcare Chatbot
const symptoms = {json.dumps(list(cols), indent=2)};
const diseases = {json.dumps(class_names, indent=2)};
const severityDictionary = {json.dumps(severity_dict, indent=2)};
const descriptionList = {json.dumps(description_dict, indent=2)};
const precautionDictionary = {json.dumps(precaution_dict, indent=2)};
const reducedData = {json.dumps(reduced_data_js, indent=2)};
const decisionTree = {json.dumps(tree_structure, indent=2)};
"""

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Export completed! data.js has been created.")
