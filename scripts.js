
$(document).ready(function () {
//AOS.init();
	//smooth scrolling to anchor element on page
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});


function waitForEl(selector, callback) {
	if (jQuery(selector).length) {
	callback();
	  } else {
	setTimeout(function() {
	waitForEl(selector, callback);
	    }, 100);
	  }
	};

	function animateEntry(){
		addAnimationDelays($(".animateEntry"), 100);
		$('.animateEntry').css("top","0");
		$('.animateEntry').css("opacity","1");
	}

waitForEl($('#landing'), function() {
	animateEntry();
});



var menuLines = $(".mline");
var closeLines = $(".xline");

addAnimationDelays(menuLines, 75);
addAnimationDelays(closeLines, 100);

var menuIsOpen = false;
var menuIsOpening = false;

menuLines[2].addEventListener('transitionend', function(){
    if(menuIsOpening){
         showXLines();
        menuIsOpen = true;
    }
})

 closeLines[1].addEventListener('transitionend', function(){
    if(!menuIsOpening){
          showMenuLines();
          menuIsOpen = false;
      }
 })

$('#hamburgerOpen').click(function(){
  if(!menuIsOpen){
    menuIsOpening = true;
    hideMenuLines();
    openMenu();
  }else{
    menuIsOpening = false;
    hideXLines();
    closeMenu();
  }
})

$('.menuOption').click(function(){
 menuIsOpening = false;
    hideXLines();
    closeMenu();
});


function hideMenuLines(){
  applyClass(menuLines, 'toggleOpen');
}
function showMenuLines(){
  removeClass(menuLines, 'toggleOpen');
}
function hideXLines(){
  removeClass(closeLines, 'toggleClose');
}
function showXLines(){
  applyClass(closeLines, 'toggleClose');
}


function applyClass(elements, clss){
  for(let i = 0; i < elements.length; i ++){
    elements[i].classList.add(clss);
  }
}

function removeClass(elements, clss){
  for(let i = 0; i < elements.length; i ++){
    elements[i].classList.remove(clss);
  }
}

function addAnimationDelays(array, ms){
  for(let i = 0; i < array.length; i++){
    $(array[i]).css("transition-delay", (ms * i) + 'ms');
  }
}

function openMenu(){
  $("#mainMenu").addClass("mainMenuOpen");
  menumenuIsOpen = true;
  }

function closeMenu(){
  $("#mainMenu").removeClass("mainMenuOpen");
  menumenuIsOpen = false;
}

function changeNightModeToggleColor(){
	if($('#night-mode-icon').offset().top >= $('#changeNavColor').position().top - 10){
		$('#night-mode-icon').removeClass('whiteSVGFill');
		$('#night-mode-icon').addClass('darkSVGFill');
	} else {
		$('#night-mode-icon').addClass('whiteSVGFill');
		$('#night-mode-icon').removeClass('darkSVGFill');
	}
}

function changeVIndicatorColor(){
	if($('#vSectionIndicator').offset().top >= $('#changeNavColor').position().top - 40){
		$('#vSectionIndicator').removeClass('whiteText');
		$('#vSectionIndicator').addClass('darkText');
	} else {
		$('#vSectionIndicator').addClass('whiteText');
		$('#vSectionIndicator').removeClass('darkText');
	}
}

function changeHamburgerColor(){
	if($(this).scrollTop()>=$('#changeNavColor').position().top - 40){
		$('.mline').removeClass('whiteBackground');
		$('.mline').addClass('darkBackground');
	} else  {
		$('.mline').removeClass('darkBackground');
		$('.mline').addClass('whiteBackground');
	}
}



function findSection(){
  let sections = document.getElementsByClassName('switch');
  for (let i = (sections.length-1); i >= 0; i --){
    if($(this).scrollTop() >= $(sections[i]).position().top - ($(window).height()/2)){ //- ($(window).height/2))
        return $(sections[i]).data('id');
    }
  }
}

var lastSection;
function checkSectionChange(){
  let curSection = findSection();
  if(lastSection != curSection){
    lastSection = curSection;
		$('#vSectionIndicator').fadeOut(250,function() {
  		$(this).text(findSection()).fadeIn(250);
		});
  }
}


// $('#vSectionIndicator').addEventListener('transitionend', function(){
//
// });


	//setting navbar style on scroll function
	// function changeHamburgerColor(){
	// 	if($(this).scrollTop()>=$('#changeNavColor').position().top - 40){
	// 		$('.mline').css('background','black');
	// 	}
	// 	if($(this).scrollTop()<$('#changeNavColor').position().top - 40){
	// 		$('.mline').css('background','white');
	// 	}
	// }

function checkWhereToLook(){
	if($(this).scrollTop() >= $("#dp").offset().top - ($( window ).height()*0.60) && $(this).scrollTop() <= $("#dp").offset().top - ($( window ).height()*0.10)){
		// console.log($(this).scrollTop() + " : " + $("#dp").offset().top);
		$("#dp").css('background-image','url(img/lookUP.jpg)')
	} else if($('#dp').css('background-image') != 'url(img/lookDOWN.jpg)'){
		$("#dp").css('background-image','url(img/lookDOWN.jpg)')
	}
}

//document scroll detection
$(document).on('scroll', function() {
	checkSectionChange();
	changeHamburgerColor();
	changeVIndicatorColor();
	checkWhereToLook();
	changeNightModeToggleColor();
});


var projectCounters = $('.project-counter');
console.log(projects.length);
for(let i = 0; i < projectCounters.length; i++){
	projectCounters[i].innerHTML = (i+1) + "/" + projectCounters.length;
}

var explorationCounters = $('.numeral');
console.log(explorationCounters.length);
for(let i = 0; i < explorationCounters.length; i++){
	explorationCounters[i].innerHTML = "0"+(i+1);
}

var d = new Date();
function timeOfDay(){
	time = d.getHours();
  if(time < 12){
    return "Morning";
  } else if (time < 17){
    return "Afternoon";
  } else if (time < 24){
    return "Evening";
  }
}
console.log(d.getHours());

var sunIcon = '<path d="M8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-1c1.657 0 3-1.343 3-3S9.657 5 8 5 5 6.343 5 8s1.343 3 3 3zM7.5 0h1v3h-1zM7.5 13h1v3h-1zM13.303 1.99l.707.707-2.12 2.12-.708-.706zM4.11 11.182l.708.707-2.12 2.12-.708-.707zM16 7.5v1h-3v-1zM3 7.5v1H0v-1zM14.01 13.303l-.706.707-2.122-2.12.707-.708zM4.818 4.11l-.707.708-2.12-2.12.706-.708z"/>';
var moonIcon = '<path d="M6.103.226C5.405 1.316 5 2.61 5 4c0 3.866 3.134 7 7 7 1.39 0 2.685-.405 3.774-1.103C14.922 13.4 11.764 16 8 16c-4.418 0-8-3.582-8-8C0 4.235 2.6 1.078 6.103.226zM4.226 2.103C2.286 3.348 1 5.523 1 8c0 3.866 3.134 7 7 7 2.476 0 4.652-1.286 5.897-3.226-.608.148-1.244.226-1.897.226-4.418 0-8-3.582-8-8 0-.653.078-1.29.226-1.897z"/>'

var nightMode = false;

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (isDarkMode || (d.getHours() >= 20 || d.getHours() <= 4)){
	console.log(d.getHours());
	toggleNightMode();
	$('#night-mode-icon').html(sunIcon);
} else {
	$('#night-mode-icon').html(moonIcon);
}

// if(d.getHours() >= 20 || d.getHours() <= 4){
//
//
// }



function toggleNightMode(){
	if(!nightMode){
		// $('body').css('background-color','#161616');
		console.log('TURNING DARK');
		$('#night-mode-icon').html(sunIcon);
		console.log($('#night-mode-icon').html());
		changeCss('body','background-color: #161616;');
		changeCss('.darkText', 'color: white;');
		changeCss('.darkBackground', 'background-color: white;');
		changeCss('.readingText', 'color: #CBCBCB;');
		$('.addBlur').addClass('darkBlur');
		changeCss('#landing', 'border-color: #161616;');
		changeCss('.mainColorBackground', 'background-color: black;');
		changeCss('.darkSVGFill', 'fill:white;')
		nightMode = true;
	} else if (nightMode){
		$('#night-mode-icon').html(moonIcon);
		$('#css-modifier-container').remove();
		$('.addBlur').removeClass('darkBlur');
		nightMode = false;

	}
}


function changeCss(className, classValue) {
    // we need invisible container to store additional css definitions
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }
    // and we need one div for each class
    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }
    // append additional style
    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}


	$('#night-mode-toggle').click(function(){
		console.log('NIGHTMODE');
		toggleNightMode();
	});



	$("#timeOfDay").html(timeOfDay());
	//set the copyright to the current year
	$("#year").html(d.getFullYear());

});
