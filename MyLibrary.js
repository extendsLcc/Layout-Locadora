
//				Caixa De Pesquisa scope
	var seach_box = document.getElementById("lupa");

function focusin ( who ){
	who.style.color = "#000";
	who.style.boxShadow = "2px 1px 8px #000 " ;
	lupa.style.boxShadow = "-2px 0 8px #000 " ;
	lupa.style.color = "#fff" ;
	
	if ( who.value == "Caixa de Pesquisa" ){
			who.value = "" ;
		}
}

function focusout( who ) {
	who.style.color = "#ccc";
	who.style.boxShadow = "0 0 0 #000 "
	lupa.style.boxShadow = "0 0 0 #000 " ;
	lupa.style.color = "#000" ;
	
	if ( who.value == "" ) {
		who.value = "Caixa de Pesquisa"
	}
}

//		endscope


//			Scroll to Top scope

function scrolltop() {

	var y = document.body.scrollTop;
	
	if ( y > 0 ){
		window.scrollTo( 0, y-30 ) ;
		setTimeout( function() { scrolltop() ;}, 1);

	}
}

//		endscope


//		Bot Tab scope

//	globals
	var bot_tab = null;
//	endglobals

window.onload=function(){
	bot_tab = document.getElementById("tab-ativa");
	
	// Img Slinder Loop
	setInterval( function(){ detect_change( "" ); }, 10000)
}

function act_tab( whotab ){

	var cont = document.getElementById( bot_tab.className );

	if ( bot_tab != whotab && cont.className != "run" ) {
		
		var newcot = document.getElementById( whotab.className );
		bot_tab.id = "" ;
		fade_swith( cont, newcot );
		bot_tab = whotab ;
		whotab.id = "tab-ativa" ;
		newcot.className = "run" ;
		newcot = null
		
	}
	cont = null
	
}

function fade_swith( elem1, elem2 ) {

	var o = elem1.style.opacity ;
	var p = elem2.style.opacity ;

	if ( o > 0.01 && elem1.style.display == "block" ){
		
		elem1.style.opacity = parseFloat(o)-0.01 ;
		setTimeout( function() { fade_swith( elem1, elem2 ) }, 1 ) ;
		
	}else if ( o < 0.02 && elem1.style.display == "block" ){
		
		elem1.style.opacity = 1.0 ;
		elem1.style.display = "none" ;
		elem2.style.display = "block" ;
		elem2.style.opacity = "0.01" ;
		fade_swith( elem1, elem2 ) ;

		}else if ( p < 1.0 && elem2.style.display == "block" ){

			elem2.style.opacity = parseFloat(p)+0.01 ;
			setTimeout( function() { fade_swith( elem1, elem2 ) } , 1 ) ;
			
			}else if ( p > 0.02 ){
			
				elem2.style.opacity = 1.0 ;
				elem2.className = "" ;
				
				}
	
}

//		endscope

//		Fixed Menu scope

window.onscroll = function(){

	var m = document.getElementById("menucot")

	if (document.body.scrollTop > 120 && m.style.position != "fixed" ){
	
		m.style.position = "fixed"
		m.style.top = "0px"
		
	}else if (document.body.scrollTop < 120 && m.style.position != "static" ){
			
		m.style.position = "static"
			
		}
		
	m = null
}

//		endscope

//		Image swith scope

function detect_change( direction ){

	var d;
	var list = document.getElementById("img-list").children;

	if ( direction == "icon-arrow-left" ){
		d = -1;
	}else{
			d = 1;
		}
		
	for ( i = 0; i < list.length; i++){

		if( list[i].style.display == "block" ){
		
			var y;

			if ( i == list.length-1 && d == 1){
				y = 0;
			}else if( i+d < 0 ){
					y = list.length-1;
				}else{
						y = i+d;
					}
					
			if( list[y].style.opacity < 1.0 ){ break; }
			list[y].style.display = "block";
			list[y].style.zIndex = "1";
			list[i].style.zIndex = "2";
			img_fadeout( list[i], list[y] );
			break;
		}
		
	}
}

function img_fadeout( who, to){

	var x = who.style.opacity ;

	if ( x > 0.01 && who.style.display == "block" ){
		
		who.style.opacity = parseFloat(x)-0.01 ;
		setTimeout( function() { img_fadeout( who, to ) }, 1 ) ;
		
	}else if ( x < 0.02 && who.style.display == "block" ){
		
		who.style.opacity = 1.0 ;
		who.style.display = "none" ;
		
		}
			
	x = 0 ;

}

//		scope
