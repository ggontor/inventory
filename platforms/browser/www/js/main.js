  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBiGXJRC0m8peJfhhn5jxtW8YHJI3XqEoQ",
    authDomain: "nengak-6654b.firebaseapp.com",
    databaseURL: "https://nengak-6654b.firebaseio.com",
    projectId: "nengak-6654b",
    storageBucket: "nengak-6654b.appspot.com",
    messagingSenderId: "1086085833969"
  };
  firebase.initializeApp(config);

  /* ========================
  Variables
======================== */

/* var FIREBASE_AUTH = firebase.auth();
var FIREBASE_MESSAGING = firebase.messaging(); */
var FIREBASE_DATABASE = firebase.database().ref();


var saveButton = document.getElementById('savecustdetails');
/* ========================
  Event Listeners
======================== */

saveButton.addEventListener("click", addcustdetails);
function addcustdetails() {
var fname = document.getElementById('firstname').value;
var lname = document.getElementById('lastname').value;
var cemail = document.getElementById('custemail').value;
var caddress = document.getElementById('address').value;
  
/*      var rootRef = firebase.database().ref();
    var storesRef = rootRef.child('app/cars');
    var newStoreRef = storesRef.push();
    newStoreRef.set({
      name: "Carsi",
      "pageId": "232",
      "storeURL": "/app/cars/gallery"
    });
    var newCarRef = newStoreRef.child('gallery').push();
        newCarRef.set({
        title: 'Mercedes',
        img: 'http://'
        }) */
        var itemdetails_array = new Array();
        $( ".ui-listview .ui-li-has-alt" ).each(function( index ) {
            itemdetails = new Object();
            itemdetails.quantity=$(this).find('h3').text()
            itemdetails.description=$(this).find('p').eq(0).find('span').text();
            itemdetails_array.push(itemdetails) 
        });
        var goodsdetail = JSON.stringify(itemdetails_array);

        var rootRef = firebase.database().ref();
        var delRef = rootRef.child('DeliveryGoods');
        var newDelRef = delRef.push();
        newDelRef.set({
        firstname:fname,
        lastname:lname,
        email:cemail,
        address:caddress,
        GoodsDescription:JSON.parse(goodsdetail)
      })
      .then(() => {
        document.getElementById('firstname').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('custemail').value = "";
        document.getElementById('address').value = "";
        
      })
      .catch(() => {
        var newDelRef = delRef.push();
        console.log("error saving customer data :(")
      });
  }
