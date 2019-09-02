
$(document).ready(function () {

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

// $(document).mouseup(function(e){
//     let container = $("#mainMenu");
//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && container.has(e.target).length === 0){
//     	menuIsOpening = false;
//     	hideXLines();
//     	closeMenu();
//     }
// });


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
		console.log($(this).scrollTop() + " : " + $("#dp").offset().top);
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
});


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

	$("#timeOfDay").html(timeOfDay());
	//set the copyright to the current year
	$("#year").html(d.getFullYear());

});
