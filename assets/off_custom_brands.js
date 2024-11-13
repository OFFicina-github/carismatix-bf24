document.addEventListener('DOMContentLoaded', function() {

//banner dimanico___

if(document.querySelector('#product-custom')){
    const getVendorText = document.querySelector('#product-custom .product-meta__vendor a').textContent;


if(getVendorText === 'CARTEC - Colorline'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Colorline.jpg?v=1664985786';
  var logoMarcaText = 'Qualità al TOP';
  var titoloBannerText = 'CARTEC - COLORLINE';
  var descrizioneBannerText = 'Colorline è la linea di prodotti professionali di elevata qualità firmata Cartec. Colorline è specifica per la cura, la pulizia e il ripristino degli interni ed esterni dell’auto. Tutti i prodotti devono essere sottoposti a diluizione e sono, inoltre, sicuri su qualsiasi superficie.';
  var btnBannerText = 'VEDI I PRODOTTI COLORLINE';
  var btnBannerUrl = '/collections/cartec-colorline';
}
else if(getVendorText.includes("CARPRO")){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/CARPRO.jpg?v=1664986068';
  var logoMarcaText = 'Metti il turbo con CARPRO';
  var titoloBannerText = 'CARPRO';
  var descrizioneBannerText = "CARPRO è il brand di riferimento per car care e care detailing che fornisce ogni tipo di soluzione per la cura dell’auto. Grazie alla qualità dei suoi prodotti e alla continua ricerca si contraddistingue per l’innovativa tecnologia e per l’essere un must per i detailers più esigenti.";
  var btnBannerText = 'VEDI I PRODOTTI CARPRO';
  var btnBannerUrl = '/collections/carpro';
}
else if(getVendorText === 'CARTEC'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Cartec.jpg?v=1664986261';
  var logoMarcaText = 'Garanzia di Risultato';
  var titoloBannerText = 'CARTEC';
  var descrizioneBannerText = "Cartec si occupa da oltre 35 anni della ricerca e dello sviluppo di prodotti per la pulizia, la protezione e la lucidatura di auto. Spinta dalla passione per l'innovazione, dalla ricerca della massima qualità e da un servizio personalizzato, Cartec è diventata uno dei maggiori fornitori di prodotti professionali per la cura dell'auto.";
  var btnBannerText = 'VEDI I PRODOTTI CARTEC';
  var btnBannerUrl = '/collections/cartec';
}
else if(getVendorText === 'CARTEC - Essential'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Essentials.jpg?v=1664986688';
  var logoMarcaText = 'La base per ogni appassionato';
  var titoloBannerText = 'CARTEC - ESSENTIAL';
  var descrizioneBannerText = 'Essentials è l’esclusiva linea per la cura dell’auto dedicata all’appassionato più esigente dotata dei migliori prodotti per pulizia, lavaggio, protezione e finitura di interni ed esterni.';
  var btnBannerText = 'VEDI I PRODOTTI ESSENTIAL';
  var btnBannerUrl = '/collections/cartec-essentials';
}
else if(getVendorText === 'CARTEC - Refinish'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Refinish.jpg?v=1664986770';
  var logoMarcaText = "Fai scintillare l'auto";
  var titoloBannerText = 'CARTEC - REFINISH';
  var descrizioneBannerText = 'Refinish è il sistema di lucidatura Cartec che si distingue per innovazione e performance. Garantisce risultati eccezionali su qualsiasi tipo di vernice in massimo due step. Refinish conferisce ai colori maggiore profondità e brillantezza. Il sistema di lucidatura Refinish può essere utilizzato con lucidatrice rotativa e orbitale.';
  var btnBannerText = 'VEDI I PRODOTTI REFINISH';
  var btnBannerUrl = '/collections/cartec-refinish';
}
else if(getVendorText === 'CARTEC - Ceramic Guard'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Refinish.jpg?v=1664986770';
  var logoMarcaText = 'Nanotecnologia a tuo servizio';
  var titoloBannerText = 'CARTEC - CERAMIC GUARD';
  var descrizioneBannerText = 'Ceramic Guard è la linea di protettivi nanotecnologici per il detailer più evoluto che è sempre alla ricerca di performance grandiose in termini di protezione e gloss.';
  var btnBannerText = 'VEDI I PRODOTTI CERAMIC GUARD';
  var btnBannerUrl = '/collections/cartec-refinish';
}
else if(getVendorText === 'CARTEC - Royal Care'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Royal_Care.jpg?v=1664987028';
  var logoMarcaText = 'Per un lavaggio Regale';
  var titoloBannerText = 'CARTEC - ROYAL CARE';
  var descrizioneBannerText = 'Royal Care è la linea firmata Cartec di prodotti per autolavaggio che supera le aspettative in tutte le fasi della pulizia esterna dell’auto, a partire dal prelavaggio, alla protezione della carrozzeria fino alla sua asciugatura.';
  var btnBannerText = 'VEDI I PRODOTTI ROYAL CARE';
  var btnBannerUrl = '/collections/cartec-royal-care';
}
else if(getVendorText === 'Scangrip'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
  var logoMarcaText = "M'llumino d'immenso";
  var titoloBannerText = 'SCANGRIP';
  var descrizioneBannerText = 'Scangrip è l’azienda di riferimento per sistemi di illuminazione professionali dedicata a detailing e refinish. Nella sua gamma prodotti rientrano le luci a Led, progettate per soddisfare le esigenze del detailer più evoluto, e le UV Curing, specifiche per la polimerizzazione della vernice.';
  var btnBannerText = 'VEDI I PRODOTTI SCANGRIP';
  var btnBannerUrl = '/collections/scangrip';
}
else if(getVendorText === 'Scangrip - Color Match'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
  var logoMarcaText = 'Elementare, Watson!';
  var titoloBannerText = 'SCANGRIP - COLOR MATCH';
  var descrizioneBannerText = "La linea Colormatch di Scangrip rappresenta il massimo in termini di innovazione e tecnologia per l'individuazione del punto tinta, per l'analisi dei difetti presenti sulla superficie e per l'applicazione dei protettivi nanotecnologici.";
  var btnBannerText = 'VEDI I PRODOTTI SCANGRIP - COLOR MATCH';
  var btnBannerUrl = '/collections/scangrip-color-match';
}
else if(getVendorText === 'Scangrip - UV Curing'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
  var logoMarcaText = 'SCANGRIP - UV CURING';
  var titoloBannerText = 'SCANGRIP - UV CURING';
  var descrizioneBannerText = "La linea UV Curing di Scangrip offre una gamma di luci a LED completa e potente per la polimerizzazione UV. I prodotti UV si contraddistinguono per l’elevata efficienza del ciclo di lavoro combinata con l’effettivo risparmio energetico.";
  var btnBannerText = 'VEDI I PRODOTTI SCANGRIP - UV CURING';
  var btnBannerUrl = '/collections/scangrip-uv-curing';
}
else if(getVendorText === 'Scangrip - Work Ligths'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Scangrip.jpg?v=1664987444';
  var logoMarcaText = 'La tua luce sicura';
  var titoloBannerText = 'SCANGRIP - WORK LIGHTS';
  var descrizioneBannerText = "Le luci da lavoro Scangrip sono estremamente resistenti e durature. Dotate della più recente tecnologia LED e del design funzionale e robusto, offrono una luce da lavoro ideale.";
  var btnBannerText = 'VEDI I PRODOTTI SCANGRIP - WORK LIGHTS';
  var btnBannerUrl = '/collections/scangrip-work-lights';
}
else if(getVendorText === 'IK Sprayers'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/IK.jpg?v=1664987609';
  var logoMarcaText = 'Da esperti per esperti';
  var titoloBannerText = 'IK SPRAYERS';
  var descrizioneBannerText = 'IK Sprayers è il marchio di nebulizzatori professionali del Gruppo Goizper, rivolto ai professionisti e privati che cercano un prodotto efficace e di qualità indiscussa.';
  var btnBannerText = 'VEDI I PRODOTTI IK SPRAYERS';
  var btnBannerUrl = '/collections/ik-sprayers';
}
else if(getVendorText === 'Nexdiag'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/NexDiag.jpg?v=1664987715';
  var logoMarcaText = 'Un brand di spessore';
  var titoloBannerText = 'NEXDIAG';
  var descrizioneBannerText = 'NexDiag è specializzata nello sviluppo di sistemi evoluti di misurazione dello spessore della vernice dell’auto il cui segno distintivo è una visione innovativa dell’industria automobilistica. Grazie alla tecnologia sviluppata gli spessimetri NexDiag si distinguono per affidabilità e precisione, sia su superfici in alluminio che ferro.';
  var btnBannerText = 'VEDI I PRODOTTI NEXDIAG';
  var btnBannerUrl = '/collections/nexdiag';
}
else if(getVendorText === 'Q1 Tapes'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Q1.jpg?v=1664987787';
  var logoMarcaText = 'La Mascheratura resa semplice';
  var titoloBannerText = 'Q1 TAPES';
  var descrizioneBannerText = 'Q1 Tapes è specializzata nello sviluppo e nella produzione di soluzioni per mascheratura premium per il mercato aftermarket automotive, inclusa l’autocarrozzeria. Grazie a una gamma di elevata qualità offre una selezione completa tra cui nastri, film, carta e altri prodotti speciali.';
  var btnBannerText = 'VEDI I PRODOTTI Q1 TAPES';
  var btnBannerUrl = '/collections/q1-tapes';
}
else if(getVendorText === 'Shinemate'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/ShineMate.jpg?v=1664987864';
  var logoMarcaText = 'Lucidatrici di alto profilo';
  var titoloBannerText = 'SHINEMATE';
  var descrizioneBannerText = 'ShineMate è un marchio di proprietà della Pritronic, un colosso asiatico che produce lucidatrici, levigatrici ed accessori. I prodotti ShineMate sono i migliori ed i più potenti che si possono trovare sul mercato. Caratterizzati dall’ottimo rapporto qualità prezzo e dalla notevole resistenza e durata nel tempo, sono il meglio che un appassionato possa desiderare.';
  var btnBannerText = 'VEDI I PRODOTTI SHINEMATE';
  var btnBannerUrl = '/collections/shinemate';
}
else if(getVendorText === 'The Collection'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/The_Collection.jpg?v=1664987930';
  var logoMarcaText = 'Panni Premium';
  var titoloBannerText = 'THE COLLECTION';
  var descrizioneBannerText = "The Collection Microfiber è l'azienda tedesca produttrice di panni, guanti ed applicatori in microfibra. I suoi prodotti si contraddistinguono per l’ottimo rapporto qualità-prezzo e per le alte performance.";
  var btnBannerText = 'VEDI I PRODOTTI THE COLLECTION';
  var btnBannerUrl = '/collections/the-collection';
}
else if(getVendorText === 'Idrobase'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/IDROBASE.jpg?v=1664988069';
  var logoMarcaText = 'Idropulitrici Made in Italy';
  var titoloBannerText = 'IDROBASE';
  var descrizioneBannerText = 'Idrobase Group propone soluzioni complete per il mondo della pulizia. Sistemi Aria Vortice di ottima fattura per cui propone anche un ampio catalogo di accessori e ricambi.';
  var btnBannerText = 'VEDI I PRODOTTI IDROBASE';
  var btnBannerUrl = '/collections/idrobase';
}
else if(getVendorText === 'MTM Hydro'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/MTM_Hydro.jpg?v=1664988114';
  var logoMarcaText = 'MTM Hydro';
  var titoloBannerText = 'MTM HYDRO';
  var descrizioneBannerText = "É un'azienda leader che da oltre 30 anni si pone come riferimento nella progettazione e produzione di componenti e accessori professionali per idropulitrici e autolavaggio.";
  var btnBannerText = 'VEDI I PRODOTTI MTM HYDRO';
  var btnBannerUrl = '/collections/mtm-hydro';
}
else if(getVendorText === 'Seko'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Seko.jpg?v=1664988219';
  var logoMarcaText = 'Una sicurezza chiamata Seko';
  var titoloBannerText = 'SEKO';
  var descrizioneBannerText = "SEKO offre una gamma di prodotti ideali per il settore automotive, grazie ai sistemi a bassa e media pressione, in grado di adattarsi a qualsiasi applicazione, che consentono tempi di contatto prolungati e garantiscono una pulizia efficace e profonda. Produttore leader di pompe dosatrici e soluzione di misurazione";
  var btnBannerText = 'VEDI I PRODOTTI SEKO';
  var btnBannerUrl = '/collections/seko';
}
else if(getVendorText === 'STI'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/STI_Steam_Industry.jpg?v=1664988284';
  var logoMarcaText = 'A tutto vapore';
  var titoloBannerText = 'STI';
  var descrizioneBannerText = 'STI è leader nella realizzazione di macchine per la pulizia a vapore professionale. I prodotti sono interamente progettati e realizzati nello stabilimento di Fara Vicentino (VI) da personale altamente qualificato.';
  var btnBannerText = 'VEDI I PRODOTTI STI';
  var btnBannerUrl = '/collections/sti';
}
else if(getVendorText === 'Detail Guardz'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0660/5252/2209/files/Detailz_Guardz.jpg?v=1664988361';
  var logoMarcaText = 'Tutto molto più semplice';
  var titoloBannerText = 'DETAIL GUARDZ';
  var descrizioneBannerText = "Detail Guardz è un'azienda che progetta, produce e spedisce direttamente dalla propria fabbrica in Canada assicurando standard qualitativi elevatissimi. L'unico obbiettivo di Detail Guardz è quello di proporre articoli che semplifichino la vita dei detailers e degli appassionati.";
  var btnBannerText = 'VEDI I PRODOTTI DETAIL GUARDZ';
  var btnBannerUrl = '/collections/detail-guarz';
}
else if(getVendorText === 'FOEN'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/FOEN.jpg?v=1689676117';
  var logoMarcaText = 'Una fragranza che ispira';
  var titoloBannerText = 'FOEN';
  var descrizioneBannerText = "FOEN® è il marchio polacco specializzato nella produzione di profumi di altissima qualità per gli interni dei veicoli. Le fragranze sono caratterizzate da longevità, da un’ampia scelta e da una delicatezza che rimane impressa.";
  var btnBannerText = 'VEDI I PRODOTTI FOEN';
  var btnBannerUrl = '/collections/foen';
}
else if(getVendorText === 'CHAMALEON'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/CHAMALEON.jpg?v=1689676118';
  var logoMarcaText = 'Per un refinish di qualità';
  var titoloBannerText = 'CHAMALEON';
  var descrizioneBannerText = "CHAMALEON® è il marchio tedesco che propone prodotti di alta qualità per il Car Refinish, ossia per la riparazione professionale della carrozzeria.";
  var btnBannerText = 'VEDI I PRODOTTI CHAMALEON';
  var btnBannerUrl = '/collections/chamaleon';
}
else if(getVendorText === 'Brühl Dryer'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Br_hl_Dryer.jpg?v=1705399510';
  var logoMarcaText = 'Soffiatori potentissimi';
  var titoloBannerText = 'BRÜHL DRYER';
  var descrizioneBannerText = "Soffiatori efficienti, perfetti per dare al tuo veicolo un'asciugatura professionale e senza contatto in pochissimi minuti.";
  var btnBannerText = 'VEDI I PRODOTTI BRÜHL DRYER';
  var btnBannerUrl = '/collections/bruhl-dryer';
}
else if(getVendorText === 'Sibelum'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Sibelum.jpg?v=1705399944';
  var logoMarcaText = 'Spazzole dal carattere unico';
  var titoloBannerText = 'SIBELUM';
  var descrizioneBannerText = "SIBELUM azienda specializzata nella lavorazione del legno e delle setole naturali, che dà vita ad accessori di altissima qualità e caratterizzati da una durata incredibile.";
  var btnBannerText = 'VEDI I PRODOTTI SIBELUM';
  var btnBannerUrl = '/collections/chamaleon';
}
else if(getVendorText === 'KRANZLE'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Kranzle.jpg?v=1715674099';
  var logoMarcaText = 'Qualità eccezionale e perfezione tecnica!';
  var titoloBannerText = 'KRANZLE';
  var descrizioneBannerText = "Leader mondiale della qualità nel settore delle idropulitrici, fin dall’inizio Kränzle ha attribuito grande importanza alla massima qualità dei materiali e dei componenti facendone lo standard del marchio, senza compromessi.";
  var btnBannerText = 'VEDI I PRODOTTI KRANZLE';
  var btnBannerUrl = '/collections/kranzle';
}
else if(getVendorText === 'Santoemma'){
    var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Santoemma.jpg?v=1718954589';
    var logoMarcaText = 'Macchine professionali a iniezione-estrazione';
    var titoloBannerText = 'SANTOEMMA';
    var descrizioneBannerText = "Scopri le macchine Santoemma, progettate per offrire efficienza, affidabilità e lunga durata. La gamma CAR Wash propone soluzioni avanzate per la pulizia professionale di sedili e interni auto, rimuovendo completamente lo sporco e lasciando le superfici rapidamente asciutte.";
    var btnBannerText = 'VEDI I PRODOTTI SANTOEMMA';
    var btnBannerUrl = '/collections/santoemma';
}
else if(getVendorText === 'Vikan'){
  var imgBannerUrl = 'https://cdn.shopify.com/s/files/1/0602/0975/8437/files/Vikan.jpg?v=1720427744';
  var logoMarcaText = 'Strumenti di pulizia efficaci e durevoli';
  var titoloBannerText = 'VIKAN';
  var descrizioneBannerText = "Vikan è un'azienda leader che offre un'ampia gamma di attrezzature per la pulizia dei veicoli, garantendo standard igienici elevati. Manici e impugnature hanno forme ergonomiche che consentono di pulire con maggiore efficienza e senza sforzi.";
  var btnBannerText = 'VEDI I PRODOTTI VIKAN';
  var btnBannerUrl = '/collections/vikan';
}
else {
  var imgBannerUrl = '';
  var logoMarcaText = '';
  var titoloBannerText = '';
  var descrizioneBannerText = '';
  var btnBannerText = '';
  var btnBannerUrl = '';
}
}
const hookBanner = document.querySelector('#product-custom #shopify-section-static-text-with-icons');
const htmlBanner = `<section id="brand_cta">
                      <div class="container">
                          <div class="cont_banner">
                              <img src="`+ imgBannerUrl +`" alt="">
                          </div>
                          <div class="cont_testo">
                              <div class="brand">`+ logoMarcaText +`</div>
                              <h2>`+ titoloBannerText +`</h2>
                              <p>`+ descrizioneBannerText +`</p>
                              <a href="`+ btnBannerUrl +`" class="button button--primary">`+ btnBannerText +`</a>
                          </div>
                      </div>
                  </section>`;

if(hookBanner && imgBannerUrl){
 hookBanner.insertAdjacentHTML('beforebegin', htmlBanner);
}
//banner dimanico___END

});