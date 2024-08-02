import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
import { getDataBase } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js"
const firebaseConfig ={
    databaseURL: ProcessingInstruction.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig)
const database= getDatabase(app)