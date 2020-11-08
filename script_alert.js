(function () {

  function price(MRZ) {
    return MRZ * 1.05;
  }
  
  let MRZ = prompt("Введіть МРЦ, вказану на упаковці тютюнових виробів", 0);
  price(MRZ);
  console.log("Роздрібна ціна пачки цигарок");
  console.log(price(MRZ));

  /*calcAP(MRZ); /*для демонстрації різниці між 
  декларацією функції і функціональним виразом */

  var calcAP = function (MRZ, k = 0.05) {
    return price(MRZ) * k;
  };
  calcAP(MRZ);
  console.log("Акцизний податок");
  console.log(calcAP(MRZ));


  function Proceeds(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  Proceeds(
    "Бажаєте розрахувати виторг на пачці тютюну?",
    function yesProcceds () {
      var k1 = 0.05;
      let k = prompt("Введіть ціну закупки тютюнового виробу", 0);
      let result = price(MRZ) - AP1() - k;
    
      function AP1() {
        debugger;
        return price(MRZ) * k1;
      }

      console.log("Вигода від продажі тютюна");
      console.log(result);
    },

    function () { alert("Ви відмовились"); }
  );

}());