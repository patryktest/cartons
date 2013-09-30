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
var carton_prirazka={
	a : 0.1992,
	b : 0.1660,
	c : 0.0996
}
function Carton(){
	this.fefco='';
	this.vlna = '';
	this.celkovaSirka = 0;
	this.celkovaVyska = 0;
	this.baseRozmery = {
		dlzka:0,
		sirka:0,
		vyska:0,
		klopa:0
		
	};
	this.rozmery = {
		dlzka:0,
		sirka:0,
		vyska:0,
		klopa:0
	};
	this.setfefco = setfefcof;
	this.setvlna = setvlnaf;
	
	
	function setfefcof(fefco){
		this.fefco = fefco;
	}
	function setvlnaf(vlna){
		this.vlna = vlna;
	}
	
	function update_rozmery(){
		switch(this.fefco){
			case '0110':
				this.rozmery.dlazka = this.baseRozmery.dlzka;
				this.rozmery.sirka = this.baseRozmery.sirka;
				this.rozmery.vyska = this.baseRozmery.vyska;
				this.rozmery.klopa = this.baseRozmery.klopa;
				break;
			case '0200':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+4;
									this.rozmery.sirka = this.baseRozmery.sirka+4;
									this.rozmery.vyska = this.baseRozmery.vyska+6;
									this.rozmery.klopa = this.baseRozmery.klopa+2;
									break;
							case 'c':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+4;
									this.rozmery.sirka = this.baseRozmery.sirka+4;
									this.rozmery.vyska = this.baseRozmery.vyska+7;
									this.rozmery.klopa = this.baseRozmery.klopa+3;
									break;
							case 'bc':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+10;
									this.rozmery.sirka = this.baseRozmery.sirka+10;
									this.rozmery.vyska = this.baseRozmery.vyska+10;
									this.rozmery.klopa = this.baseRozmery.klopa+6;
									break;
							case 'e':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+2;
									this.rozmery.sirka = this.baseRozmery.sirka+2;
									this.rozmery.vyska = this.baseRozmery.vyska+5;
									this.rozmery.klopa = this.baseRozmery.klopa+1;
									break;
						};
						this.celkovaSirka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.klopa;
						this.celkovaVyska = this.rozmery.vyska + this.rozmery.klopa;
						break;
			
			case '0201':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+4;
									this.rozmery.sirka = this.baseRozmery.sirka+4;
									this.rozmery.vyska = this.baseRozmery.vyska+6;
									this.rozmery.klopa = this.baseRozmery.klopa+2;
									break;
							case 'c':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+4;
									this.rozmery.sirka = this.baseRozmery.sirka+4;
									this.rozmery.vyska = this.baseRozmery.vyska+7;
									this.rozmery.klopa = this.baseRozmery.klopa+3;
									break;
							case 'bc':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+10;
									this.rozmery.sirka = this.baseRozmery.sirka+10;
									this.rozmery.vyska = this.baseRozmery.vyska+10;
									this.rozmery.klopa = this.baseRozmery.klopa+6;
									break;
							case 'e':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+2;
									this.rozmery.sirka = this.baseRozmery.sirka+2;
									this.rozmery.vyska = this.baseRozmery.vyska+5;
									this.rozmery.klopa = this.baseRozmery.klopa+1;
									break;
						};
						this.celkovaSirka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.klopa;
						this.celkovaVyska = this.rozmery.vyska + this.rozmery.klopa*2;
						break;
			case '0301':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+4;
									this.rozmery.sirka = this.baseRozmery.sirka+4;
									this.rozmery.vyska = this.baseRozmery.vyska+6;
									this.rozmery.klopa = this.baseRozmery.klopa+2;
									break;
							case 'c':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+4;
									this.rozmery.sirka = this.baseRozmery.sirka+4;
									this.rozmery.vyska = this.baseRozmery.vyska+7;
									this.rozmery.klopa = this.baseRozmery.klopa+3;
									break;
							case 'bc':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+10;
									this.rozmery.sirka = this.baseRozmery.sirka+10;
									this.rozmery.vyska = this.baseRozmery.vyska+10;
									this.rozmery.klopa = this.baseRozmery.klopa+6;
									break;
							case 'e':				
									this.rozmery.dlazka = this.baseRozmery.dlzka+2;
									this.rozmery.sirka = this.baseRozmery.sirka+2;
									this.rozmery.vyska = this.baseRozmery.vyska+5;
									this.rozmery.klopa = this.baseRozmery.klopa+1;
									break;
						};
						this.celkovaSirka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.klopa;
						this.celkovaVyska = this.rozmery.vyska + this.rozmery.klopa*2;
						break;
			case '0409':break;
			case '0454':break;
			
		}
	}
}
$(document).ready(function(e) {
    alert(carton_format.fefco);
});