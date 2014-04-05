$(document).ready(function(){
	var extendSearch = $("#showButton");
	var specialityForm = $(".column-form-speciality");
	var devSpec =   "<p>Специализация</p>"+
                    "<input type='checkbox' id='speciality1'>"+
                    "<label for='speciality1'><span></span>php</label> <br/>"+
                    "<input type='checkbox' id='speciality2'>"+
                    "<label  for='speciality2'><span></span>jQuery</label>"+
                   "<input type='checkbox' id='speciality3'>"+
                    "<label  for='speciality3'><span></span>верстка</label>'";
	$(".option-one").on("click", function(e){
		extendSearch.css("margin-left", "0").hide(0).css("width", 300).slideDown(200);
		specialityForm.html(devSpec);
	});
	$(".option-two").on("click", function(e){
		specialityForm
		.html("<p>Специализация</p>"+
			"<input type='checkbox' id='speciality1'><label for='speciality1'><span></span>веб-дазайн</label> <br/>"+
			"<input type='checkbox' id='speciality2'><label  for='speciality2'><span></span>дизайн интерфейсов</label>");

		extendSearch.css("margin-left", "300px").hide(0).css("width", 340).slideDown(200);
	});
	$(".option-three").on("click", function(e){
		extendSearch.css("margin-left", "640px").hide(0).css("width", 300).slideDown(200);
		specialityForm.html(devSpec);
	});
	$("#metro_select").click(function(e){
		$("#freelance_container").html("");
	});
	extendSearch.leanModal({overlay : 0.9, top: 200});
	//slider(0,300,'review-slider', true, 1, true);
});



function slider(currentPosition, slideWidth, slideBlock, showStatusPosition, step, setinterval){
    /*
    * example html code
    *
    * <div id="slideBlock">
    *     <div class="control" control="left">back</div>
    *     <div class="slidesContainer">
    *       <div class="slide">1</div>
    *       <div class="slide">2</div>
    *       <div class="slide">3</div>
    *     </div>
    *     <div class="control" control="right">next</div>
    * </div>
    *
    * slider(0,300,'slideBlock');  <-- JS
    * */
    var currentPosition = currentPosition; // Start position
    var slideWidth = slideWidth;        // width one slide
    var slidesBlock = $('#'+slideBlock+'');  // id block our slider
    var slidesContainer = slidesBlock.find('.slidesContainer');
    var slides = slidesContainer.find('.slide');
    var numberOfSlides = slides.length;
    var showStatusPosition = showStatusPosition;
	var step = step;  /*    step = 1 elemet*/
	var setinterval = setinterval;
	var idInterval;
	var timeout = 5000;
	
    slidesContainer.css('overflow', 'hidden');
    slides
        .wrapAll('<div class="slideInner"></div>')
        .css({
            'float' : 'left',
            'width' : slideWidth
        });

    slidesContainer.find('.slideInner').css('width', slideWidth * numberOfSlides);

    if(showStatusPosition) slidesBlock.find('.statusPosition ul[class="controlPosition"] li:nth-child('+(currentPosition+1)+')').addClass('active');

    slidesBlock.find('.control')
        .bind('click', function(){
            currentPosition = ($(this).attr('control') == 'right') ? currentPosition + step : currentPosition - step;
            if(currentPosition < 0) currentPosition = numberOfSlides - step;
            if(currentPosition == numberOfSlides) currentPosition = 0;
            setupStatusPosition(currentPosition);
            slidesContainer.find('.slideInner').animate({
                'marginLeft' : slideWidth * (- currentPosition)
            });
        });

	if(setinterval){
		    idInterval = setInterval( function() { 
			currentPosition = currentPosition + step;
            if(currentPosition < 0) currentPosition = numberOfSlides - step;
            if(currentPosition == numberOfSlides) currentPosition = 0;
            setupStatusPosition(currentPosition);
            slidesContainer.find('.slideInner').animate({
                'marginLeft' : slideWidth * (- currentPosition)
            }); 
		} , timeout);
		
		slidesBlock.hover(
			function(){
			  clearInterval(idInterval)
			},
			function(){
				idInterval = setInterval( function() { 
					currentPosition = currentPosition + step;
					if(currentPosition < 0) currentPosition = numberOfSlides - step;
					if(currentPosition == numberOfSlides) currentPosition = 0;
					setupStatusPosition(currentPosition);
					slidesContainer.find('.slideInner').animate({
						'marginLeft' : slideWidth * (- currentPosition)
					}); 
				} , timeout);
			}
		);
    }
	
    if(showStatusPosition){
        slidesBlock.find('.statusPosition ul[class="controlPosition"] li')
            .bind('click', function(){
                currentPosition = $(this).index();
                slidesContainer.find('.slideInner').animate({
                    'marginLeft' : slideWidth * (- currentPosition)
                });
                setupStatusPosition(currentPosition);
            });

    }

    function setupStatusPosition(currentPosition){
        if(showStatusPosition){
            var position = currentPosition + 1;
            slidesBlock.find('.statusPosition ul[class="controlPosition"] li').each(function(){ $(this).removeClass('active');});
            slidesBlock.find('.statusPosition ul[class="controlPosition"] li:nth-child('+position+')').addClass('active');
        }
    }
	
	
}