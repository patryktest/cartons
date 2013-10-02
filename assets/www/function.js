var dlzka = 0;
var vyska = 0;
var sirka = 0;
var zalozka = 0;
var carton_format={
	fefco_0110:'0110',
	fefco_0200:'0200',
	fefco_0201:'0201',
	fefco_0301:'0301',
	fefco_0409:'0409',
	fefco_0454:'0454'
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
	
}
function updateText(){
}
function updateImageText(){
}

$(document).ready(function(e) {
	var carton = new Carton();
	carton.setfefco(carton_format.fefco_0201);
	carton.setvlna(carton_vlna.vlna_3_vl_B);
	carton.setzadaneRozmery(200,200,1100,22);
	carton.update_rozmery();
    alert(carton.fefco);
});