// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu80KdxsFdYYIEaFalsMm3Zyg_Sn56XO4",
    authDomain: "kwitter-d72a9.firebaseapp.com",
    databaseURL: "https://kwitter-d72a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-d72a9",
    storageBucket: "kwitter-d72a9.appspot.com",
    messagingSenderId: "718621093248",
    appId: "1:718621093248:web:97563409d4e6ed9f012565"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

   function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
   }

   function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
   }