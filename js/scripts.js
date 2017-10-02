
//Business Logic
function Pizza(cheese, size, numberOfPizzas) {
  this.cheese = cheese;
  this.size = size;
  this.numberOfPizzas = numberOfPizzas;
  this.basePrice = 10;
  this.topping = [];
}


Pizza.prototype.fullBasePrice = function(){
  if (this.size === 'Large'){
    this.basePrice += 4;
  } else if (this.size === 'ExtraLarge'){
    this.basePrice += 6;
  } else {
    this.basePrice = 10;
  };

  if(this.cheese === 'extra'){
    this.basePrice += 1;
  };

  return this.numberOfPizzas*this.basePrice;
};

Pizza.prototype.cost = function(numberOfToppings) {   //havnt used numberOfToppings anywhere else
  return this.fullBasePrice() + (this.numberOfPizzas *this.topping.length);
};

//FrontEnd Logic

$(function(){


  $("form.formOne").submit(function(event){
    event.preventDefault();

    var selectedCheese = $("select#cheese").val();
    var selectedSize = $("select#size").val();
    var inputNumberOfPizzas = parseInt($("input#pizza").val());

    var newPizza = new Pizza(selectedCheese, selectedSize, inputNumberOfPizzas);


    $("input:checkbox[name=topping]:checked").each(function() {
     var topping = $(this).val();
     newPizza.topping.push(topping);
   });


    $(".size").text(newPizza.size);
    $(".pizza").text(inputNumberOfPizzas);
    $("#cost").text(newPizza.cost());
    $("#result").show();
    $("#page1").hide();
    $("#page2").hide();
    $("#page3").hide();
  })

});
