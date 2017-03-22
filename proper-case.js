// looks like 2014 me didn't add a citation to where this code was from
// it looks like it's from this Stack Overflow answer by Tuan
// http://stackoverflow.com/a/5574446/1108513
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
