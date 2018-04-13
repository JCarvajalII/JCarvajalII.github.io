function searchFunction() {
    var input, filter, ul, li, h2, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        h2 = li[i].getElementsByTagName("h2")[0];
        if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//IndexedDB
// name, email, phonenumber
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var mydb = window.indexedDB.open("PWADB", 1), db, tx, store, index;

mydb.onupgradeneeded = function() {
    db = mydb.result,
        store = db.createObjectStore("customerSupport", {keypath: id, autoIncrement: true}), 
}
mydb.onerror = function(e) {
    console.log("There was an error" + e.target.errorCode);
}
mydb.onsuccess = function(e) {
    console.log("Success");
    db = mydb.result;
}
    
function addCustomer() {
    var name = document.getElementById("cName");
    var email = document.getElementById("cEmail");
    var number = document.getElementById("phNumber");
    
    tx = db.transaction(["customerSupport"], "readwrite")
    store = transaction.objectStore("customerSupport");
    
    var customer = {
        name: name,
        email: email,
        number: number
    }
    var request = store.add(customer);
    
    request.onsuccess = function(e) {
        request.location.href="index.html";
        alert("Thank you. Your information was sent successfully. We will contact you asap.");
    }
    
    request.onerror = function(e){
        alert("Error");
    }
    
}

