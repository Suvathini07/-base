// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import {getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 


const firebaseConfig = {
  apiKey: "AIzaSyALOjxbsX-lS9vFVXoKRTQIT7snYeaNRN0",
  authDomain: "alukas-31db8.firebaseapp.com",
  projectId: "alukas-31db8",
  storageBucket: "alukas-31db8.appspot.com",
  messagingSenderId: "936161802764",
  appId: "1:936161802764:web:0f0f208b57bd81790b0c29",
  measurementId: "G-TCDNMVHMQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app);
const db = getFirestore(app);


function create() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let file = document.getElementById("file").files[0]

 createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  console.log("account created successfully");
  console.log(user);
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  // ..
});


}
module.create=create



function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    localStorage.setItem("AccessToken", user.accessToken)
    console.log("signIn successfully");
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
    
  }
  module.login=login


function form() {
  let name = document.getElementById("name").value
  let phonenumber = document.getElementById("phonenumber").value
  let emailid = document.getElementById("emailid").value
  let aadhar = document.getElementById("aadhar").files[0]
  let date = document.getElementById("smart").value
  let community = document.getElementById("community").value

   addDoc(collection(db, "demons"), {
    username:name,
    userphonenumber:phonenumber,
    useremailid:emailid,
    userdate:date,
    usercommunity:community

    
  });
  
const storageRef = ref(storage, "aadhaar");

// 'file' comes from the Blob or File API
uploadBytes(storageRef,aadhar ).then((snapshot) => {
  console.log('Uploaded a blob or file!');
})
.catch((err)=>{
  console.log(err);
})

  
}

module.form=form
