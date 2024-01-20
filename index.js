  function receivesAFunction(postRunActivity) {
    postRunActivity();
  }
  
  function returnsANamedFunction() {
  return function liftWeights() {
    console.log("Pump iron");
  }
}


function returnsAnAnonymousFunction() {
   return (function () {
        console.log("Stretch! Work that core!");
      });
  }