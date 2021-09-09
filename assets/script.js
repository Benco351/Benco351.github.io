if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  // Register the path to the service worker file
  .register('./service-worker.js')
  .then(function() {
    console.log('Service Worker: Registered');
  });
}
$(document).ready(function () {
    govmap.createMap('map',
        {
            "token": "b2b83221-896c-490a-87b0-10b8d737dc3e",
             "layers": [
                 "GASSTATIONS",
                 "PARCEL_HOKS",
                 "KSHTANN_ASSETS",
                 "PARCEL_ALL"
             ],
             "showXY": true,
             "identifyOnClick": true,
             "isEmbeddedToggle": false,
             "background": "1",
             "layersMode": 2,
             "zoomButtons": true
        });
 });
function showExample() {
    var params = {
   	"address":"הרוקמים 26 חולון",
   	"layerName":"SUB_GUSH_ALL",
   	"fields":[
      	    "GUSH_NUM"
        ]
}
    govmap.intersectFeatures(params).then(function (response) {
                console.log(response);
            });
        }
let theme = localStorage.getItem('theme')

if(theme === null){
	setTheme('light');
}else{
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode;
		console.log('Option clicked:', mode);
		setTheme(mode);
	});
}

function setTheme(mode){
	if(mode === 'light'){
		document.getElementById('theme-style').href = 'default.css';
	}

	if(mode === 'blue'){
		document.getElementById('theme-style').href = 'css/blue.css';
	}

	if(mode === 'green'){
		document.getElementById('theme-style').href = 'css/green.css';
	}

	if(mode === 'purple'){
		document.getElementById('theme-style').href = 'css/purple.css';
	}

	localStorage.setItem('theme', mode);
}
