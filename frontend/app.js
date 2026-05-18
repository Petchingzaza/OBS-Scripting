// =========================
// FIREBASE IMPORT
// =========================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

import {
    getDatabase,
    ref,
    push
} from
    "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWMiDk4Ael26thAokn03BvmcLqgFDlxpc",
    authDomain: "learning-337d2.firebaseapp.com",
    databaseURL: "https://learning-337d2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learning-337d2",
    storageBucket: "learning-337d2.firebasestorage.app",
    messagingSenderId: "329620577372",
    appId: "1:329620577372:web:b428ec793cff9df2b89a99",
    measurementId: "G-J7RVL58KBL"
};

// =========================
// INIT
// =========================

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

// =========================
// ELEMENTS
// =========================

const submitBtn =
    document.getElementById("submitBtn")

const status =
    document.getElementById("status")

// =========================
// EVENT
// =========================

submitBtn.addEventListener(
    "click",
    sendQuestion
)

// =========================
// SEND QUESTION
// =========================

async function sendQuestion(){

    const name = document
        .getElementById("name")
        .value
        .trim()

    const question = document
        .getElementById("question")
        .value
        .trim()

    // =========================
    // VALIDATE
    // =========================

    if(!name || !question){

        status.innerText =
            "กรุณากรอกข้อมูลให้ครบ"

        return
    }

    // =========================
    // PAYLOAD
    // =========================

    const payload = {

        name,
        question,
        timestamp:Date.now()
    }

    // =========================
    // SEND TO FIREBASE
    // =========================

    try{

        await push(
            ref(db, "questions"),
            payload
        )

        status.innerText =
            "ส่งคำถามเรียบร้อย"

        // clear question
        document.getElementById(
            "question"
        ).value = ""

    }catch(err){

        console.error(err)

        status.innerText =
            "เกิดข้อผิดพลาด"
    }
}
