/* 
* PROJECT NAME
* :@athanph
*/ 


(function($, window, document) {
    "use strict";

	// EVERYTHING PUT HERE IS GLOBAL
	var body = document.querySelector('body'),
		page = $('.l-page__container'); // $('body');
    var windowHeight,
		windowWidth,
		resizeTimer;

	var checkWindowHeight = function() {
		windowHeight = window.innerHeight || document.body.clientHeight;
		return windowHeight;
	};
	var checkWindowWidth = function() {
		windowWidth = $(window).width();
		return windowWidth;
	};
	var changeHeight = function() {
		$('.l-page__container').css('height', windowHeight);
		$('.l-main').css('height', windowHeight - 150);
		// console.log('main ' + windowHeight - 150);
		// console.log(windowHeight);
			
	};
	var loadThis = function() {
		checkWindowHeight();
		checkWindowWidth();
		changeHeight(windowHeight);				
    };
	var resizeDelay = function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			loadThis();
		}, 250);
	};

	var ipAddress = localStorage.getItem('IPAddress');
	var getIPAddress = function() {
      $.getJSON("https://jsonip.com?callback=?", function(data) {
	   	localStorage.setItem('IPAddress', data.ip);
		ipAddress = localStorage.getItem('IPAddress');
	    // console.log("Your IP address is :- " + ipAddress);
      });
    };

	var fingerprintID = localStorage.getItem('Fingerprint');
	var getFringerprint = (function() { 
		new Fingerprint2().get(function(result, components){
			localStorage.setItem('Fingerprint', result);
			fingerprintID = localStorage.getItem('Fingerprint');
			// console.log('Fingerprint is ' + fingerprintID); //a hash, representing your device fingerprint
			// console.log(components); // an array of FP components
		});
	});

	window.addEventListener('resize', resizeDelay);

	// ON DOCUMENT READY
    $(function() {
		loadThis();

		if (ipAddress === 'undefined' || ipAddress === null) {
			getIPAddress(); 
		}
		if (fingerprintID === 'undefined' || fingerprintID === null) {
			getFringerprint();
		}

		// Navigation - hasSub
		var navItem = $('.c-nav__list--main').find('li');	
		$.each(navItem, function() {
			var self = $(this);
			if (self.children('.c-nav__list--sub').length) {
				var self = $(this);
				self.addClass('has-submenu');
			}
		});

		$('.has-submenu').on('click', function(e) {
			var self = $(this),
				parent = self.closest('.c-nav');
			if (parent.hasClass('is-toggled-close')) {
				// Slide Down Sub Links
				self.addClass('is-active');
			} 
			else {
				// remove all active 
				if (self.hasClass('is-active')) {
					self.removeClass('is-active');
				} else {
					$('.is-active').removeClass('is-active'); // remove all active class		
					self.addClass('is-active');
				}
			}
			e.preventDefault();
		});

        var tokenId = localStorage.getItem('TokenId');
        if(tokenId) {
            $.ajaxSetup({
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-PANDORA-SIGNALR-Key', localStorage.getItem('SignalRTokenId'));
                }});
        
		}

		// Run this if only ELETCRON is running
		if (process.versions.electron) {
			// console.log('running electron');

			var remote = require('electron').remote;
			var BrowserWindow = remote.BrowserWindow;				
			var windowState = 'normal';
			var window;

			$('#minWwindow').click(function(){
				window = remote.getCurrentWindow();
				window.minimize();
				// console.l1g('minimize');
			});

			$('#maxWindow').click(function(){
				window = remote.getCurrentWindow();
				// window.setFullScreen(true);
				// console.log('max');

				switch(windowState) {
					case 'full':
						window.setFullScreen(false);
						window.unmaximize();
						windowState = 'normal';
						// console.log('unmax');
						break;
					case 'normal' :
						window.setFullScreen(true);
						windowState = 'full';
						// console.log('max');
						break;
					default: 
						window.setFullScreen(true);					
						windowState = 'full';		
						// console.log('max default');
				}
			});

			$('#closeWindow').click(function(){
				window = remote.getCurrentWindow();
				window.destroy();
				// console.log('close');
			});
		}

    });



})(jQuery, window, document);