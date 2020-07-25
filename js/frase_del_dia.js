var randomText = [];
randomText[0] = '"Ay caramba!"<br/><span class="footer-quote-author">Bart Simpson</span>';
randomText[1] = '"Me quiero volver chango..."<br/><span class="footer-quote-author">Homero Simpson</span>';
randomText[2] = '"Los sabios hablan porque tienen algo que decir. Los tontos hablan porque tienen que decir algo"<br/><span class="footer-quote-author">Platón</span>';
randomText[3] = '"Si no puedes hacer el bien, por lo menos no hagas daño"<br/><span class="footer-quote-author">Hipocrates</span>';
randomText[4] = '"Dame alas para volar y motivos para quedarme"<br/><span class="footer-quote-author">Acción Poetica</span>';
randomText[5] = '"No necesitas una licencia de conducir para manejar un sándwich"<br/><span class="footer-quote-author">Bob Esponja</span>';

var frasedeldia = function() {
  var id = Math.round(Math.random() * (randomText.length - 1));
  document.getElementById('frase_del_dia').innerHTML = randomText[id];
}

