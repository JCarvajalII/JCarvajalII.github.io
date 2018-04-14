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
        var c = false;
        while(c === false) {
        var name = document.getElementById("cName").value;
        var number = document.getElementById("phNumber").value;
        var email = document.getElementById("cEmail").value;
        if (name === "") {
            alert("Please enter your name.");
        }else {
            c = true;
        }
        if (name === "") {
            alert("Please enter your email.");
        }else {
            c = true;
        }
        if (name === "") {
            alert("Please enter your phone number.");
        }else {
            c = true;
        }
        break;
    }
    if(c === true){        
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
            alert("Thank you for your time. We will contact you as soon as possible.");
        }
        request.onerror = function(e){
            console.log("Error");
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
      if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

    function notifyMe() {
      if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
          icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
          body: "We will notify you!",
      });

        notification.onclick = function () {
          window.open("http://stackoverflow.com/a/13328397/1269037");      
      };

  }

}