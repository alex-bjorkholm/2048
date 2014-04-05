function juojana(p)
{
var s = "Sudenpentu"                      ;
if (p >= 500) s   =  "Nokkapentu"                      ;
if (p >= 1000) s  =  "Seikkailija"                     ;
if (p >= 1500) s  =  "Seikkailijakonkari"              ;
if (p >= 2000) s  =  "Tarpoja"                         ;
if (p >= 2500) s  =  "Supertarpoja"                    ;
if (p >= 3000) s  =  "Samoaja"                         ;
if (p >= 4000) s  =  "Konkarisamoaja"                  ;
if (p >= 5000) s  =  "Vaeltaja"                        ;
if (p >= 6000) s  =  "Vaeltajavartion johtaja"         ;
if (p >= 6500) s  =  "Aloitteleva aikuinen tuki"       ;
if (p >= 7000) s  =  "Tukeva aikuinen"                 ;
if (p >= 8000) s  =  "Partiojohtaja"                   ;
if (p >= 8500) s  =  "Lintukansaa"                     ;
if (p >= 9000) s  =  "Piirin luottis"                  ;
if (p >= 9500) s  =  "SP:n luottis"                    ;
if (p >= 11000) s =  "SP:n hallituksen jäsen"          ;
if (p >= 12500) s =  "Partioneuvos"                    ;
if (p >= 15000) s =  "Oikeassaolevien Neuvoston Jäsen" ;
if (p >= 17500) s =  "Kymmenen nappulan jäärä"         ;
if (p >= 20000) s =  "Gilwell Parkin johtaja"          ;
if (p >= 25000) s =  "Baden-Powell"                    ;
return s;
}


function jaa(p)
{
var s = juojana(p);
var viesti;
if (p >= 0)
{
	viesti = 'Sain partioindeksikseni ' + p + ' ja olen siis tasoltani ' + s;
} else {
	viesti = "Ansaitsin Suuren Ansioristin pisteillä " + (p*-1) + "!";
}

FB.ui(
  {
    method: 'feed',
    name: 'Partiopolku',
    link: 'http://tuisku.pohjanmaa.partio.fi/2048/',
    picture: 'https://scontent-b-fra.xx.fbcdn.net/hphotos-prn2/t1.0-9/1544351_555767371187554_1617883906_n.png',
    caption: '' + viesti + '',
    description: 'Selvi&auml;tk&ouml; Partiopolun loppuun asti? Partioaiheinen klooni 2048-pelistä'
  },
  function(response) {
    if (response && response.post_id) {
      alert('Julkaisu onnistui.');
    } else {
      alert('Tulosta ei julkaistu.');
    }
  }
);

}

