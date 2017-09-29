
//Business Logic
function Pizza(cheese, size, pizza) {
  this.cheese = cheese;
  this.size = size;
  this.pizza = pizza;
  this.basePrice = 10;
  this.topping = [];
}


Pizza.prototype.fullPrice = function(){
  if (this.size === 'large'){
    this.basePrice += 4;
  } else if (this.size === 'extraLarge'){
    this.basePrice += 6;
  } else {
    this.basePrice = 10;
  };

  if(this.cheese === 'extra'){
    this.basePrice += 1;
  };

  return this.pizza*this.basePrice;
};



//FrontEnd Logic

$(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();

    var selectedCheese = $("select#cheese").val();
    var selectedSize = $("select#size").val();
    var inputtedNumber = parseInt($("input#pizza").val());

    var newPizza = new Pizza(selectedCheese, selectedSize, inputtedNumber);
    var cost = newPizza.fullPrice();


    $("input:checkbox[name=topping]:checked").each(function() {
     var topping = $(this).val();
     newPizza.topping.push(topping);
   });


    $(".size").text(newPizza.size);
    $(".pizza").text(inputtedNumber);
    $("#cost").text((cost)+newPizza.topping.length);
    $("#result").show();
  })

});
