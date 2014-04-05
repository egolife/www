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
	extendSearch.leanModal({overlay : 0.9, top: 200});
});