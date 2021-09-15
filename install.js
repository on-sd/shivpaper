window.addEventListener("load",async()=>{if("serviceWorker"in navigator)try{const registration=await navigator.serviceWorker.register("/sw.js");console.log("ServiceWorker registration successful with scope: ",registration.scope)}catch(err){console.error(err)}
var install = document.getElementById("install");
install.style.display = 'none';

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  install.style.display = 'block';
  install.onclick = function() {
    install.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('PWA has Installed');
      } else {
        console.log('PWA Install Canceled');
      }
      deferredPrompt = null;
    });
  }});
});