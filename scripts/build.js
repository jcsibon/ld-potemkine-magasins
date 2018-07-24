
var fs = require('fs');
var shops = require('./../_data/shops.json');
var mkdirp = require('mkdirp');
var YAML = require('json2yaml');

mkdirp("_shops", function (err) {
  if (err) console.error(err)
});

shops.forEach(function(item) {
  console.log(item['idMetier'] + " - " + item['titre']);

  //Rearrange horaires
  var horaires = [];
  var days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  for (var i = 0; i < days.length; i++) {
    var open = false;
    item['horaires'].forEach((jour) => {
      if(jour.jour == days[i]) {
        open = true;
        jour.open = true;
        horaires.push(jour);
      }
    });
    if(!open) {
      horaires.push({jour: days[i] , open:false});
    }
  }

  item['permalink'] = item['seo']['url'];

  item['horaires'] = horaires;

  //Create file
  var yaml = YAML.stringify(item);
  fs.writeFile('_shops/' + item['idMetier'] + '.md', yaml + '---', 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
