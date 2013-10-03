var dlzka = 0;
var vyska = 0;
var sirka = 0;
var zalozka = 0;
var actual_carton_format = 0;



var carton_format={
	fefco_0110:'0110',
	fefco_0200:'0200',
	fefco_0201:'0201',
	fefco_0301:'0301',
	fefco_0409:'0409',
	fefco_0454:'0454'
}
var carton_format_array=[];
for(var index in carton_format){
	carton_format_array.push(carton_format[index]);
}
var carton_vlna={
	vlna_3_vl_B:'3_vl_B',
	vlna_3_vl_C:'3_vl_C',
	vlna_3_vl_BC:'3_vl_BC',
	vlna_3_vl_E:'3_vl_E',
}
var carton_prirazka={
	a : 0.1992,
	b : 0.1660,
	c : 0.0996
}

function selectVlna(vlna){
    carton.setvlna(vlna);
}
function setFefco(format){
    carton.setfefco(format);
    
	$('.fefcoName .type_0110').removeClass('selected');
	$('.fefcoName .type_0200').removeClass('selected');
	$('.fefcoName .type_0201').removeClass('selected');
	$('.fefcoName .type_0301').removeClass('selected');
	$('.fefcoName .type_0409').removeClass('selected');
	$('.fefcoName .type_0454').removeClass('selected');
	$('.fefcoName .type_'+format).addClass('selected');
	
    $('#fefco_img.type_0110').removeClass('hide').addClass('hide');
    $('#fefco_img.type_0200').removeClass('hide').addClass('hide');
    $('#fefco_img.type_0201').removeClass('hide').addClass('hide');
    $('#fefco_img.type_0301').removeClass('hide').addClass('hide');
    $('#fefco_img.type_0409').removeClass('hide').addClass('hide');
    $('#fefco_img.type_0454').removeClass('hide').addClass('hide');
    switch(format){
        case '0110':$('#fefco_img.type_0110').removeClass('hide');break;
        case '0200':$('#fefco_img.type_0200').removeClass('hide');break;
        case '0201':$('#fefco_img.type_0201').removeClass('hide');break;
        case '0301':$('#fefco_img.type_0301').removeClass('hide');break;
        case '0409':$('#fefco_img.type_0409').removeClass('hide');break;
        case '0454':$('#fefco_img.type_0454').removeClass('hide');break;
    }
    
}
function updateText(){
}


$(document).ready(function(e) {
    carton = new Carton();
    selectVlna(carton_vlna.vlna_3_vl_B);
    setFefco(carton_format_array[actual_carton_format]);
    carton.setzadaneRozmery(200,200,1100,22);
    carton.update_rozmery();
    console.log($('#fefcoImagePlace'))
    
    //$('#fefcoImagePlace').bind('swiperight',function(event){alert('posun');});
	$("#fefcoImagePlace").swipe({
	  	swipe:function(event, direction, distance, duration, fingerCount) {
		if(direction=='left'){
			actual_carton_format++;
			if(actual_carton_format>=carton_format_array.length)
				actual_carton_format=carton_format_array.length-1
			setFefco(carton_format_array[actual_carton_format]);
			carton.update_rozmery();
		}
		if(direction=='right'){
			actual_carton_format--;
			if(actual_carton_format<0)
				actual_carton_format =0;
			setFefco(carton_format_array[actual_carton_format]);
			carton.update_rozmery();
		}
		//alert("You swiped " + direction );
	  }
	});
    
});