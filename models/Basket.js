module.exports = function Basket(oldBasket){
  this.sneakers =oldBasket.sneakers || {};
  this.totalQty=oldBasket.totalQty || 0;
  this.totalPrice=oldBasket.totalPrice || 0;

  this.add =  function(sneakers,id){
    var storedSneakers =this.sneakers[id];
    if(!storedSneakers){
      storedSneakers =this.sneakers[id] = {neakers: sneakers, qty:0, price: 0}
    }
    storedSneakers.qty ++;
    storedSneakers.price=storedSneakers.price * storedSneakers.qty;
    this.totalQty ++;
    this.Total += storedSneakers.price;
  };

  this.generateArray = function(){
      var arr=[];
      for(var id in his.sneakers){
        arr.push(this.sneakers[id]);
      }
      return arr;
  };
};
