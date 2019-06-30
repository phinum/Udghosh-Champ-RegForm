//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyCiWBxVMGIrW39dtCwGO2GlTDAyXXcQHHI",
    authDomain: "udghosh-champ.firebaseapp.com",
    databaseURL: "https://udghosh-champ.firebaseio.com",
    projectId: "udghosh-champ",
    storageBucket: "udghosh-champ.appspot.com",
    messagingSenderId: "313289829554",
    appId: "1:313289829554:web:f6ceea285b37245c"
};
firebase.initializeApp(firebaseConfig);

//reference data collection
var dataRef = firebase.database().ref('data');

//listen for submit button
document.getElementById('contact').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var city = getInputVal('city');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var altPhone = getInputVal('altPhone');
    var age = getInputVal('age');

    //save data 
    saveData(name, city, email, phone, altPhone, age);
}

//Function to get form values 
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save data to firebase
function saveData(name, city, email, phone, altPhone, age) {
    var newDataRef = dataRef.push();
    newDataRef.set({
        name: name,
        city: city,
        email: email,
        phone: phone,
        altPhone: altPhone,
        age: age
    });

}