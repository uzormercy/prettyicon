import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    projectId: "projectID",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderID",
    appId: "appID",
    measurementId: "measurementID",
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
