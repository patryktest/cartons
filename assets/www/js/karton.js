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
	this.setzadaneRozmery = setzadaneRozmeryF;
	this.update_rozmery=update_rozmeryF;
	this.resetRozmery = resetRozmeryF;
	
	
	function setfefcof(fefco){
		this.fefco = fefco;
	}
	function setvlnaf(vlna){
		this.vlna = vlna;
	}
	function resetRozmeryF(){
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
	function setzadaneRozmeryF(dlzka,sirka,vyska,zalozka){
		this.zadaneRozmery.dlzka=dlzka;
		this.zadaneRozmery.sirka=sirka;
		this.zadaneRozmery.vyska=vyska;
		this.zadaneRozmery.klopa=this.zadaneRozmery.sirka/2;
		this.zadaneRozmery.zalozka=zalozka;
                console.log(this.zadaneRozmery.dlzka);
	}
	function update_rozmeryF(){
		this.resetRozmery();
                
		switch(this.fefco){
			case '0110':
				this.celkova_sirka = this.zadaneRozmery.sirka;
				this.celkova_dlzka = this.zadaneRozmery.dlzka;
                                $('.type_0110 .sirka').text(this.celkova_sirka);
                                $('.type_0110 .dlzka').text(this.celkova_dlzka);
                                                
				break;
			case '0200':
						switch(this.vlna){
							case '3_vl_B':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+6;
									this.rozmery.klopa = this.zadaneRozmery.klopa+2;
									break;
							case '3_vl_C':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+7;
									this.rozmery.klopa = this.zadaneRozmery.klopa+3;
									break;
							case '3_vl_BC':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+10;
									this.rozmery.sirka = this.zadaneRozmery.sirka+10;
									this.rozmery.vyska = this.zadaneRozmery.vyska+10;
									this.rozmery.klopa = this.zadaneRozmery.klopa+6;
									break;
							case '3_vl_E':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+5;
									this.rozmery.klopa = this.zadaneRozmery.klopa+1;
									break;
						};
						this.celkova_dlzka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.zalozka;
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.klopa;
                                                $('.type_0200 .celkova_sirka').text(this.celkova_sirka);
                                                $('.type_0200 .celkova_dlzka').text(this.celkova_dlzka);
                                                $('.type_0200 .vyska').text(this.rozmery.vyska);
                                                $('.type_0200 .klopa').text(this.rozmery.klopa);
                                                $('.type_0200 .sirka').text(this.rozmery.sirka);
                                                $('.type_0200 .sirka2').text(this.rozmery.sirka);
                                                $('.type_0200 .dlzka').text(this.rozmery.dlzka);
                                                $('.type_0200 .dlzka2').text(this.rozmery.dlzka);
						break;
			
			case '0201':
						switch(this.vlna){
							case '3_vl_B':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+6;
									this.rozmery.klopa = this.zadaneRozmery.klopa+2;
									break;
							case '3_vl_C':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+7;
									this.rozmery.klopa = this.zadaneRozmery.klopa+3;
									break;
							case '3_vl_BC':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+10;
									this.rozmery.sirka = this.zadaneRozmery.sirka+10;
									this.rozmery.vyska = this.zadaneRozmery.vyska+10;
									this.rozmery.klopa = this.zadaneRozmery.klopa+6;
									break;
							case '3_vl_E':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+5;
									this.rozmery.klopa = this.zadaneRozmery.klopa+1;
									break;
						};
						this.celkova_dlzka = (2* this.rozmery.sirka)+(2* this.rozmery.dlzka)+ this.rozmery.zalozka;
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.klopa*2;
                                                
                                                $('.type_0201 .celkova_sirka').text(this.celkova_sirka);
                                                $('.type_0201 .celkova_dlzka').text(this.celkova_dlzka);
                                                $('.type_0201 .vyska').text(this.rozmery.vyska);
                                                $('.type_0201 .klopa').text(this.rozmery.klopa);
                                                $('.type_0201 .sirka').text(this.rozmery.sirka);
                                                $('.type_0201 .sirka2').text(this.rozmery.sirka);
                                                $('.type_0201 .dlzka').text(this.rozmery.dlzka);
                                                $('.type_0201 .dlzka2').text(this.rozmery.dlzka);
                                                
                                                
						break;
			case '0301':
						switch(this.vlna){
							case '3_vl_B':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+3;
									this.rozmery.sirka = this.zadaneRozmery.sirka+3;
									this.rozmery.vyska = this.zadaneRozmery.vyska+3;
									this.rozmery.dlzka_veko = this.zadaneRozmery.dlzka +8;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +8;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +3;
									this.rozmery.vyska_ucho = this.zadaneRozmery.vyska +2;
									this.rozmery.vyska_ucho_veko = this.zadaneRozmery.vyska +4;
									break;
							case '3_vl_C':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+4;
									this.rozmery.dlzka_veko = this.zadaneRozmery.dlzka +9;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +9;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +4;
									this.rozmery.vyska_ucho = this.zadaneRozmery.vyska +3;
									this.rozmery.vyska_ucho_veko = this.zadaneRozmery.vyska +5;
									break;						
							case '3_vl_E':				
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
                                                $('.type_0301 .vyska').text(this.rozmery.vyska);              
                                                $('.type_0301 .vyska_ucho').text(this.rozmery.vyska_ucho); 
                                                $('.type_0301 .sirka').text(this.rozmery.sirka);                                           
                                                $('.type_0301 .dlzka').text(this.rozmery.dlzka);                                         
                                                $('.type_0301 .vyska_veko').text(this.rozmery.vyska_veko);
                                                $('.type_0301 .vyska_ucho_veko').text(this.rozmery.vyska_ucho_veko);
                                                $('.type_0301 .sirka_veko').text(this.rozmery.sirka_veko);
                                                $('.type_0301 .dlzka_veko').text(this.rozmery.dlzka_veko);
						break;
			case '0409':
						switch(this.vlna){
							case '3_vl_B':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+3;
									this.rozmery.sirka = this.zadaneRozmery.sirka+3;
									this.rozmery.vyska = this.zadaneRozmery.vyska+2;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +6;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +4;
									break;
							case '3_vl_C':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+4;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+3;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +7;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +5;
									break;
							case '3_vl_E':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+2;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+1;
									this.rozmery.sirka_veko = this.zadaneRozmery.sirka +5;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +3;
									break;
						};
						this.celkova_dlzka = this.rozmery.dlzka + (this.rozmery.vyska*2);
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.sirka + (this.rozmery.vyska_veko*2) + this.rozmery.sirka_veko;
                                                $('.type_0409 .vyska').text(this.rozmery.vyska);              
                                                $('.type_0409 .vyska2').text(this.rozmery.vyska); 
                                                $('.type_0409 .sirka').text(this.rozmery.sirka);                                           
                                                $('.type_0409 .dlzka').text(this.rozmery.dlzka);                                         
                                                $('.type_0409 .vyska_veko').text(this.rozmery.vyska_veko);   
                                                $('.type_0409 .sirka_veko').text(this.rozmery.sirka_veko);
                                                $('.type_0409 .vyska_veko2').text(this.rozmery.vyska_veko);
						break;
			case '0454':
						switch(this.vlna){
							case '3_vl_B':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+10;
									this.rozmery.sirka = this.zadaneRozmery.sirka+3;
									this.rozmery.vyska = this.zadaneRozmery.vyska+3;
									this.rozmery.dlzka_veko = this.zadaneRozmery.vyska +15;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +6;
									break;
							case '3_vl_C':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+11;
									this.rozmery.sirka = this.zadaneRozmery.sirka+4;
									this.rozmery.vyska = this.zadaneRozmery.vyska+4;
									this.rozmery.dlzka_veko = this.zadaneRozmery.vyska +16;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +7;
									break;
							case '3_vl_E':				
									this.rozmery.dlzka = this.zadaneRozmery.dlzka+9;
									this.rozmery.sirka = this.zadaneRozmery.sirka+2;
									this.rozmery.vyska = this.zadaneRozmery.vyska+2;
									this.rozmery.dlzka_veko = this.zadaneRozmery.vyska +14;
									this.rozmery.vyska_veko = this.zadaneRozmery.vyska +5;
									break;
						};
						this.celkova_dlzka = this.rozmery.dlzka + (this.rozmery.vyska_veko*2)+ (this.rozmery.dlzka_veko*2);
						this.celkova_sirka = this.rozmery.vyska + this.rozmery.sirka;
                                                
                                                $('.type_0454 .vyska').text(this.rozmery.vyska);              
                                                $('.type_0454 .sirka').text(this.rozmery.sirka);                                           
                                                $('.type_0454 .dlzka').text(this.rozmery.dlzka);                                         
                                                $('.type_0454 .vyska_veko').text(this.rozmery.vyska_veko);   
                                                $('.type_0454 .dlzka_veko').text(this.rozmery.dlzka_veko);
                                                $('.type_0454 .dlzka_veko2').text(this.rozmery.dlzka_veko);
                                                $('.type_0454 .vyska_veko2').text(this.rozmery.vyska_veko);
						break;
			
		}
	}
}