//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#00FF80"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades, lo lograste! SOLO SI TERMINASTE ENTRE LOS TRES PRIMEROS LUGARES EXIGE TUS PUNTOS EXTRAS"; messageTime=""; messageError="Inténtalo de nuevo"; messageErrorG="Inténtalo de nuevo"; messageAttempts="¡Perdiste! suerte para la próxima"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="ZW5lcmdpYV8yZw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RUzDiUNUUklDT1M=","RU5FUkfDjUE=","Q0lDTE8gQ09NQklOQURP","UFJFU0nDk04=","R0VPVEVSTU9FTMOJQ1RSSUNB","TUFURVJJQVMgUFJJTUFT","QklPRU5FUkfDjUE=","Tk9SVEUgREVMIFBBw41T","Q0VOVFJBTEVTIEhJRFJPRUzDiUNUUklDQVM=","Q0FMSURBRCBERSBWSURB"];imaW=["","","","","","","","","",""];queW=["Los aparatos herramientas y dispositivos que utilizan las personas en su mayoría son","La ciencia y la tecnología avanzan aportando nuevas formas de producir y distribuir","Una de las principales centrales eléctricas de la C.F.E. y productores independientes de energía eléctrica (P.I.E.) se llama","En un ciclo combinado uno emplea gas que entre en combustión o quema y otro vapor de agua a","Una de las principales centrales eléctricas de la CFE y productores independientes de energía eléctrica (P.I.E.)que se encuentra en un 1.1% se llama","la diversidad de tecnologías para la producción de energía eléctrica en el país corresponde a la riqueza geológica geográfica y de","Una de las principales centrales eléctricas de la CFE y productores independientes de energía eléctrica (P.I.E.)que se encuentra en un 0.4%  se llama","La mayor producción de la energía a partir de celdas solares fotovoltaicas se ubican principalmente en las zonas desiertas del","en la región del centro y sur del país existen cuerpos de agua donde se ubican las","Los avances tecnológicos tienen como finalidad producir nuevas formas de generar y repartir elementos para mejorar la"];var wordsL=[10,7,15,7,17,15,10,14,25,15];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="energia_2g_resources/media/"; textBNext="SIGUIENTE";
