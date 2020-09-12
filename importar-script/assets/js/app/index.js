importarScript('importar-script/assets/js/lib/platform.js', {
    timeout : 0,
    callbackfunction : function() { teste() }
});

function teste() {
    let browser = document.querySelector('#browser'),
        system = document.querySelector('#system');

    browser.textContent = platform.name + ' version ' + platform.version;
    system.textContent = platform.os.family + ' ' + platform.os.version + ' ' + platform.os.architecture + 'bits';
}

// A platform detection library. https://mths.be/platform
// https://github.com/bestiejs/platform.js/