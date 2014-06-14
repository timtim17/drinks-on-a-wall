var number = 99,
    subtract = 1,
    drink = "drink",
    body = document.body;
do{
  createDiv(number + " bottles of " + drink + " on the wall!");
  document.title = number + " Bottles of " + drink.toProperCase() + " on the Wall";
  createDiv(number + " bottles of " + drink + "!");
  createDiv("Take " + subtract + " down, pass it around.");
  number -= subtract;
}while(number > 0);

function createDiv(string){
  setTimeout(function(){
    var div = document.createElement('div');
    div.innerHTML = string;
    body.appendChild(div);
  }, 5000);
}
