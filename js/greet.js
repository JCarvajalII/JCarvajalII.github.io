document.addEventListener('DOMContentLoaded', function () {
      if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

    function greetMe() {
      if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('BeepJeep', {
          icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
          body: "Hello, Welcome Back!",
      });

        notification.onload = function () {
          window.open("http://stackoverflow.com/a/13328397/1269037");      
      };

  }

}