function Carton(){
	this.fefco='';
	this.vlna = '';
	this.celkova_dlzka = 0;
	this.celkova_sirka = 0;
	this.celkova_vyska = 0;
	this.zadaneRozmery = {
		dlzka:0,
		sirka:0,
		vyska:0,
		klopa:0,
		zalozka:0
		
	};
	this.rozmery = {
		dlzka:0,
		sirka:0,
		vyska:0,
		klopa:0,
		zalozka:0,
		dlzka_veko:0,
		sirka_veko:0,
		vyska_veko:0,
		vyska_ucho:0,
		vyska_ucho_veko:0
	};
	this.setfefco = setfefcof;
	this.setvlna = setvlnaf;
	
	
	function setfefcof(fefco){
		this.fefco = fefco;
	}
	function setvlnaf(vlna){
		this.vlna = vlna;
	}
	function resetRozmery(){
		this.rozmery.dlzka=0;
		this.rozmery.sirka=0;
		this.rozmery.vyska=0;
		this.rozmery.klopa=0;
		this.rozmery.zalozka=0;
		this.rozmery.dlzka_veko=0;
		this.rozmery.sirka_veko=0;
		this.rozmery.vyska_veko=0;
		this.rozmery.vyska_ucho=0;
		this.rozmery.vyska_ucho_veko=0;
		this.celkova_dlzka = 0;
		this.celkova_sirka = 0;
		this.celkova_vyska = 0;
	}
	function setzadaneRozmery(dlzka,sirka,vyska,zalozka){
		this.zadaneRozmery.dlzka=dlzka;
		this.zadaneRozmery.sirka=sirka;
		this.zadaneRozmery.vyska=vyska;
		this.zadaneRozmery.klopa=this.zadaneRozmery.sirka/2;
		this.zadaneRozmery.zalozka=zalozka;
	}
	function update_rozmery(){
		resetRozmery();
		switch(this.fefco){
			case '0110':
				this.celkova_sirka = this.zadaneRozmery.sirka;
				this.celkova_dlzka = this.zadaneRozmery.dlzka;
				break;
			case '0200':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+6;
									this.rozmery.klopa = this.zadaneRozmery.klopa+2;
									break;
							case 'c':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+7;
									this.rozmery.klopa = this.zadaneRozmery.klopa+3;
									break;
							case 'bc':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+10;
									this.rozmery.sirka = this.zadaneRozmery.sirka+10;
									this.rozmery.vyska = this.zadaneRozmery.vyska+10;
									this.rozmery.klopa = this.zadaneRozmery.klopa+6;
									break;
							case 'e':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+5;
									this.rozmery.klopa = this.zadaneRozmery.klopa+1;
									break;
						};
						this.celkova_dlzka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.zalozka;
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.klopa;
						break;
			
			case '0201':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+6;
									this.rozmery.klopa = this.zadaneRozmery.klopa+2;
									break;
							case 'c':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+7;
									this.rozmery.klopa = this.zadaneRozmery.klopa+3;
									break;
							case 'bc':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+10;
									this.rozmery.sirka = this.zadaneRozmery.sirka+10;
									this.rozmery.vyska = this.zadaneRozmery.vyska+10;
									this.rozmery.klopa = this.zadaneRozmery.klopa+6;
									break;
							case 'e':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+5;
									this.rozmery.klopa = this.zadaneRozmery.klopa+1;
									break;
						};
						this.celkova_dlzka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.zalozka;
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.klopa*2;
						break;
			case '0301':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+3;
									this.rozmery.sirka = this.zadaneRozmery.sirka+3;
									this.rozmery.vyska = this.zadaneRozmery.vyska+3;
									this.rozmery.dlzka_veko = this.zadaneRozmery.dlzka +8;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +8;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +3;
									this.rozmery.vyska_ucho = this.zadaneRozmery.vyska +2;
									this.rozmery.vyska_ucho_veko = this.zadaneRozmery.vyska +4;
									break;
							case 'c':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+4;
									this.rozmery.dlzka_veko = this.zadaneRozmery.dlzka +9;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +9;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +4;
									this.rozmery.vyska_ucho = this.zadaneRozmery.vyska +3;
									this.rozmery.vyska_ucho_veko = this.zadaneRozmery.vyska +5;
									break;						
							case 'e':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+2;
									this.rozmery.dlzka_veko = this.zadaneRozmery.dlzka +7;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +7;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +2;
									this.rozmery.vyska_ucho = this.zadaneRozmery.vyska +1;
									this.rozmery.vyska_ucho_veko = this.zadaneRozmery.vyska +3;
									break;
						};
						this.celkova_dlzka = this.rozmery.dlzka_veko +(this.rozmery.vyska_ucho_veko * 2);
						this.celkova_sirka = (this.rozmery.vyska_veko*2)+this.rozmery.sirka_veko + (this.rozmery.vyska*2)+ this.rozmery.sirka;
						break;
			case '0409':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+3;
									this.rozmery.sirka = this.zadaneRozmery.sirka+3;
									this.rozmery.vyska = this.zadaneRozmery.vyska+2;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +6;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +4;
									break;
							case 'c':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+3;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +7;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +5;
									break;
							case 'e':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+1;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +5;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +3;
									break;
						};
						this.celkova_dlzka = this.rozmery.dlzka + (this.rozmery.vyska*2);
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.sirka + (this.rozmery.vyska_veko*2) + this.rozmery.sirka_veko;
						break;
			case '0454':
						switch(this.vlna){
							case 'b':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+10;
									this.rozmery.sirka = this.zadaneRozmery.sirka+3;
									this.rozmery.vyska = this.zadaneRozmery.vyska+3;
									this.rozmery.dlzka_veko = this.zadaneRozmery.vyska +15;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +6;
									break;
							case 'c':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+11;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+4;
									this.rozmery.dlzka_veko = this.zadaneRozmery.vyska +16;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +7;
									break;
							case 'e':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+9;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+2;
									this.rozmery.dlzka_veko = this.zadaneRozmery.vyska +14;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +5;
									break;
						};
						this.celkova_dlzka = this.rozmery.dlzka + (this.rozmery.vyska_veko*2)+ (this.rozmery.dlzka_veko*2);
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.sirka;
						break;
			
		}
	}
}