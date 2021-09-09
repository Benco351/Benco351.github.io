if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  // Register the path to the service worker file
  .register('./service-worker.js')
  .then(function() {
    console.log('Service Worker: Registered');
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
