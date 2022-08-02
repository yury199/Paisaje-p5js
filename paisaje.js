const MiCanvas = document.getElementById("MiCanvas");
const context = MiCanvas.getContext("2d");




//CIELO____________________________________________________________________________________________

//degrado lineal

const degradadoLineal=context.createLinearGradient(200,0,200,800);

degradadoLineal.addColorStop(0.2,'#160D32');
degradadoLineal.addColorStop(1,'#44E1F0');



//aqui defino el degradado lineal cmo relleno
//
context.fillStyle = degradadoLineal;
context.strokeSytle ="#0000ff";
context.beginPath();
context.fillRect(0,0,1200,800); 
context.beginPath();
context.moveTo(20, 20);
context.stroke();
context.fill();

//Estrellas-------------------------------------------------------------------------------------------
//
//
for (let i = 1; i < 5000; i++) {
context.strokeStyle = "#F9FFE2";

context.fillStyle="#F9FFE2"

var n = Math.random();
n=n+i*n*60
context.beginPath();
context.moveTo(10+n ,5+i);
context.lineTo(10.5+n ,6.1+i );
context.lineTo(12+n ,6.5+i );
context.lineTo(11+n ,7 +i);
context.lineTo(11.2+n ,8.4+i);
context.lineTo(10+n ,7.7+i);
context.lineTo(8.8+n ,8.4+i );
context.lineTo(9+n ,7 +i);
context.lineTo(8+n ,6.5 +i);
context.lineTo(9.5+n,6.1+i);
context.stroke();
context.fill();

}
//LUNA_________________________________________________________________________________________

//Aqui vamos a crear el degradado radial
const degradadoRadial=context.createRadialGradient(250,250,90,250,250,190);
//aqui defino los colores de mi degradado

degradadoRadial.addColorStop(0,'#FEFEFF');
degradadoRadial.addColorStop(0.5,'#D6CBF9');
degradadoRadial.addColorStop(0.8,'#5A449E');


//Aqui defino el degradado como relleno
//
context.fillStyle = degradadoRadial;

//sombra
//
context.shadowColor = 'RGB(229, 214, 252)';
    context.shadowBlur = 50;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    //
    //
//Aqui dibujamos la forma y su relleno
//



context.beginPath();
context.arc(200,200,100,0,Math.PI*2,true);

context.fill();

//ESTRELLA FUGAZ__________________________________________________________________________________
//
//

//
//
context.strokeStyle = "#F9FFE2";

context.fillStyle="#F9FFE2"
context.beginPath();
context.moveTo(1000,150);
context.lineTo(1005,161);
context.lineTo(1020,165);
context.lineTo(1010,170);
context.lineTo(1012,184);
context.lineTo(1000,177);
context.lineTo(988,184);
context.lineTo(990,170);
context.lineTo(980,165);
context.lineTo(995,161);
context.stroke();
context.fill();



//COLA------------------------------------------------------------------------------------------------

context.shadowBlur = 0;

////1
context.strokeStyle = "#F9FFE2";
context.beginPath();
context.moveTo(1000,170);
context.quadraticCurveTo(800,30,600,200);
context.stroke();

////2
context.strokeStyle = "#F9FFE2";
context.beginPath();
context.moveTo(1000,170);
context.quadraticCurveTo(800,50,600,200);
context.stroke();

////3
context.strokeStyle = "#F9FFE2";
context.beginPath();
context.moveTo(1000,170);
context.quadraticCurveTo(800,70,600,200);
context.stroke();




//MONTAÑAS____________________________________________
//
//
//MONTAÑA FONDO
//
const degradadoLinealll=context.createLinearGradient(100,250,100,1100);

degradadoLinealll.addColorStop(0.2,"#3D41BF");
degradadoLinealll.addColorStop(0.4,"#04052A");


//

//

context.fillStyle=degradadoLinealll;



context.beginPath();
context.moveTo(0,700);

context.bezierCurveTo(-50,300,150,380,220,500);
context.bezierCurveTo(220,500,380,200,650,500);
context.bezierCurveTo(650,500,780,380,850,500);
context.bezierCurveTo(850,500,900,400,1000,520);
context.bezierCurveTo(1000,520,1250,300,1300,700);

context.fill();


//MONATAÑA frente
const degradadoLineall=context.createLinearGradient(100,250,100,1100);

degradadoLineall.addColorStop(0.2,"#7DBEEE");

degradadoLineall.addColorStop(0.5,"#150F45");
//

//

context.fillStyle=degradadoLineall;


context.beginPath();
context.moveTo(0,700);


//sombra
//
context.shadowColor = 'RGB(8, 9, 31 )';
    context.shadowBlur = 60;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 10;
    //

context.bezierCurveTo(-40,500,80,400,120,600);
context.bezierCurveTo(120,600,240,400,280,610);
context.bezierCurveTo(280,610,480,97,520,650);
context.bezierCurveTo(520,650,580,500,650,620);

context.bezierCurveTo(650,620,700,600,790,650);
context.bezierCurveTo(790,650,850,570,990,610);
context.bezierCurveTo(1000,610,1150,500,1200,700);

context.fill();

//
//
//PISO___________________________________
//
//
//
context.shadowColor = 'RGB(11, 19, 61)';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
//

context.fillStyle="#0B4D46"

context.beginPath();
context.fillRect(0,700,1200,100); 
context.beginPath();
context.moveTo(20, 20);

context.fill();

//


//
//
//
//
///LAGO_______________________________________
///

context.fillStyle=degradadoLineal;

context.beginPath();
context.moveTo(600,700);
context.bezierCurveTo(610,710,620,720,605,730);
context.bezierCurveTo(550,750,590,758,600,850);

context.bezierCurveTo(800,850,600,765,650,750);
context.bezierCurveTo(700,720,600,700,700,700);

context.fill();
//
//
//ARBOLES_________________________________________
//_____________________________________________________________________________________________

//-----------------------------CUERPO ARBOL
//
context.fillStyle="#431309";

context.beginPath();
context.fillRect(195,700,10,50); 
context.beginPath();
context.moveTo(20, 20);

context.fill();
//---------------------------
context.fillStyle="#431309";

context.beginPath();
context.fillRect(95,700,10,50); 
context.beginPath();
context.moveTo(20, 20);

context.fill();
//-----------------------------CABEZA ARBOL
context.fillStyle=degradadoLineal;
context.beginPath();
context.arc(200,680,30,0,Math.PI*2,true);
context.fill();
//---------------------------
context.beginPath();
context.arc(100,650,50,0,Math.PI*2,true);
context.fill();

//imagen de tronco

const imagen1 = new Image();
imagen1.src="tronco.png";

imagen1.onload = function(){


	context.drawImage(imagen1,850,-10);
}


//imagen de pasto
const imagen = new Image();
imagen.src="pasto.png";

imagen.onload = function(){


	context.drawImage(imagen,-10,700);
}

//
//
