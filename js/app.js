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
var request = indexedDB.open("PWADB", 1);

request.onsuccess = function(e) {
    console.log("Success. Opened Database..");
    db = e.target.result;
}

request.onerror = function(e) {
    console.log("Error on opening database...");
}

request.onupgradeneeded = function(e) {
    var db = e.target.result;
    
    if(!db.objectStoreNames.contains('customer')) {
        var os = db.createObjectStore('customer', {keyPath: "id", autoIncrement: true});
    }
}

function addCustomer() {
    var name = document.getElementById("cName").value;
    var email = document.getElementById("cEmail").value;
    var number = document.getElementById("phNumber").value;
    
    var tx = db.transaction(["customer"], "readwrite");
    var store = tx.objectStore("customer");
    
    var customer = {
        name: name,
        email: email,
        number: number
    }
    var request = store.add(customer);
    
    request.onsuccess = function(e) {
        window.location.href="index.html";
        console.log("Thank you. Your information was sent successfully. We will contact you asap.");
    }
    
    request.onerror = function(e){
        console.log("Error");
    }
    
}

