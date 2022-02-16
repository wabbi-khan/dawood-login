
console.log(firebase.auth);

function singIn(){
  console.log("first");
  
    var email=document.getElementById("email").value
    // var name=document.getElementById("name").value
    var password=document.getElementById("password").value

console.log(email,password)
if(email==" "||password==" "){
    alert("plz enter Data")
}
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("login User:", userCredential);
    window.location="https://dawood-admin.vercel.app/";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    console.log(errorode);
  });
}
