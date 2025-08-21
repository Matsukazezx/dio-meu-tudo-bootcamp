# 🦇 Bat-Signal App (React Native + Expo)

Mobile app developed for the **DIO challenge**.
This project simulates the **Bat-Signal**, allowing the user to activate it, customize its color, and send a help request through a simple form.

## 📱 Features

* **Home Screen**

  * Display the Bat-Signal.
  * Button to activate the signal.
  * Color picker to customize the signal.

* **Form Screen**

  * Input fields: Name, Phone, Location, Observation.
  * Basic validation (name and phone are required).
  * Submit and cancel actions.
  * Confirmation alert after sending.

## 🚀 How to run

1. Clone the repository:

   ```bash
   git clone https://github.com/Matsukazezx/bat-signal-app.git
   cd bat-signal-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start Expo:

   ```bash
   npx expo start
   ```

4. Open the project:

   * **iOS:** Scan the QR code with the **Expo Go** app.
   * **Android:** Scan the QR code with the **Expo Go** app.
   * **Web:** Press `w` in the terminal to open in the browser.

## 📂 Project structure

```
bat-signal-app/
│── App.js                  # App entry, navigation setup
│── assets/                 # Images and static assets
│── src/
│   ├── screens/
│   │   ├── HomeScreen.js   # Main screen with Bat-Signal
│   │   └── FormScreen.js   # Form for sending request
│   └── components/
│       └── ColorPicker.js  # Reusable color selector
```

## 🛠️ Technologies

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [React Navigation](https://reactnavigation.org/)

## 🎯 Learning objectives

* Reproduce and/or improve an app based on an existing code.
* Apply concepts learned in a real-world scenario.
* Document technical reasoning and decisions.
* Use GitHub for versioning and showcasing your work.

---