// document.querySelector(".first").classList.add("visible");
// var firstToggle = document.querySelector(".first").classList.remove("visible");

//Die number 1 
    document.querySelector(".boxStyle1 .first").classList.add("visible");
    document.querySelector(".boxStyle1 .second").classList.add("visible");
    document.querySelector(".boxStyle1 .third").classList.add("visible");
    document.querySelector(".boxStyle1 .fourth").classList.add("visible");
    document.querySelector(".boxStyle1 .fifth").classList.add("visible");
    document.querySelector(".boxStyle1 .sixth").classList.add("visible");

//Die number 2
    document.querySelector(".boxStyle2 .first").classList.add("visible");
    document.querySelector(".boxStyle2 .second").classList.add("visible");
    document.querySelector(".boxStyle2 .third").classList.add("visible");
    document.querySelector(".boxStyle2 .fourth").classList.add("visible");
    document.querySelector(".boxStyle2 .fifth").classList.add("visible");
    document.querySelector(".boxStyle2 .sixth").classList.add("visible");   

function ranDomNumber(){
    ranDom = Math.floor((Math.random() * 6) + 1);
    return ranDom;  
}
function rollDice(ranDom) {
    if (ranDom === 1) {
        document.querySelector(".boxStyle1 .first").classList.remove("visible");
      }
      else if (ranDom === 2){
          document.querySelector(".boxStyle1 .second").classList.remove("visible");
      }
      else if (ranDom === 3){
          document.querySelector(".boxStyle1 .third").classList.remove("visible");
      }
      else if (ranDom === 4){
          document.querySelector(".boxStyle1 .fourth").classList.remove("visible");
      }
      else if (ranDom === 5){
          document.querySelector(".boxStyle1 .fifth").classList.remove("visible");
      }
      else if (ranDom === 6){
          document.querySelector(".boxStyle1 .sixth").classList.remove("visible");
      }
      return ranDomNumber();
}

function rollDice2(ranDom){
    if (ranDom === 1) {
        document.querySelector(".boxStyle2 .first").classList.remove("visible");
      }
      else if (ranDom === 2){
          document.querySelector(".boxStyle2 .second").classList.remove("visible");
      }
      else if (ranDom === 3){
          document.querySelector(".boxStyle2 .third").classList.remove("visible");
      }
      else if (ranDom === 4){
          document.querySelector(".boxStyle2 .fourth").classList.remove("visible");
      }
      else if (ranDom === 5){
          document.querySelector(".boxStyle2 .fifth").classList.remove("visible");
      }
      else if (ranDom === 6){
          document.querySelector(".boxStyle2 .sixth").classList.remove("visible");
      }
      return ranDomNumber();
}



window.onload = function (){
    rollDice(ranDomNumber());
    rollDice2(ranDomNumber());
    
}
