price = (MRZ) => MRZ * 1.05;

let MRZ = prompt("Введіть МРЦ, вказану на упаковці тютюнових виробів", 0);
price(MRZ);
console.log("Роздрібна ціна пачки цигарок");
console.log(price(MRZ));


let AP = (MRZ, k = 0.05) => price(MRZ)*k;

AP(MRZ);
console.log("Акцизний податок");
console.log(AP(MRZ));


let Proceeds = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

Proceeds(
  "Бажаєте розрахувати виторг на пачці тютюну?",
  function ClosureTest() {
    let k1 = 0.05;
    let k = prompt("Введіть ціну закупки тютюнового виробу", 0);
    let AP1=() => price(MRZ) * k1;
    let result = price(MRZ) - AP1() - k;
    
   console.log("Вигода від продажі тютюна");
    console.log(result);
        
  },
function() { alert("Ви відмовились");}
  );
