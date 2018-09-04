//esse arquivo ensina a usar o objeto arguments e o apply
let cookout = {
  mealOrders: ["chicken", "burger", "burger", "steak", "chicken"],
  grill: function() {
    console.log(arguments);
    let args = Array.prototype.slice.call (arguments);
    
    console.log("I am going to cook :" + args.join(","));
  } 
}

cookout.grill.apply(cookout, cookout.mealOrders);