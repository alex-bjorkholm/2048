function juojana(p)
{
var s = "Vargunge"                      ;
if (p >= 500) s   =  "Mästarvargunge"                  ;
if (p >= 1000) s  =  "Äventyrsscout"                   ;
if (p >= 1500) s  =  "Äventyrligaste äventyrsscouten"  ;
if (p >= 2000) s  =  "Spejarscout"                     ;
if (p >= 2500) s  =  "Superspejarscout"                ;
if (p >= 3000) s  =  "Explorerscout"                   ;
if (p >= 4000) s  =  "Extremaste explorerscouten"      ;
if (p >= 5000) s  =  "Roverscout"                      ;
if (p >= 6000) s  =  "Ledare av en roverscoutpatrull"  ;
if (p >= 6500) s  =  "Scoutledarpotential"             ;
if (p >= 7000) s  =  "Vuxet stöd"                      ;
if (p >= 8000) s  =  "Scoutledare"                     ;
if (p >= 8500) s  =  "En av fågelfolket"               ;
if (p >= 9000) s  =  "Förtroendevald i FiSSc"          ;
if (p >= 9500) s  =  "Förtroendevald i FS"             ;
if (p >= 11000) s =  "Medlem i FS styrelse  "          ;
if (p >= 12500) s =  "Scoutråd"                        ;
if (p >= 15000) s =  "Medlem i de bättre vetandes råd" ;
if (p >= 17500) s =  "En med närmare 10 knappar"       ;
if (p >= 20000) s =  "Ledare för Gilwell Park"         ;
if (p >= 25000) s =  "Baden-Powell"                    ;
return s;
}


function jaa(p)
{
var s = juojana(p);
var viesti;
if (p >= 0)
{
	viesti = 'Jag fick scoutindexet' + p + ' och jag är alltså av nivån ' + s;
} else {
	viesti = "Jag fick Stora förtjänstkorset med poängen " + (p*-1) + "!";
}
FB.init({
        appId: '1407920049478296',  #EXCHANGE THIS!
        status: true,
        cookie: true,
        xfbml: true
    });

FB.ui(
  {
    method: 'feed',
    name: 'Scoutstigen',
    link: 'http://fissc.fi/2048/',
    picture: 'http://fissc.fi/2048/img/image.png',
    caption: '' + viesti + '',
    description: 'Klarar du scoutstigen till slut? En scoutinspirerad klon av 2048-spelet'
  },
  function(response) {
    if (response && response.post_id) {
      alert('Delandet lyckades.');
    } else {
      alert('Delandet misslyckades.');
    }
  }
);

}

