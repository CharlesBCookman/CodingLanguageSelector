function getResult(answers){
  let c = 0;
  let j = 0;
  let p = 0;
  let g = 0;
  for(let i = 0; i < answers.length; i++){
    if(answers.charAt(i) = "c"){
      c++;
    } else if (answers.charAt(i) = "j"){
      j++;
    } else if (answers.charAt(i) = "p"){
      p++;
    }else if (answers.charAt(i) = "g"){
      g++;
    }
  }
  return (c, j, p, g);
}
function showResult(c, j, p, g)
  if(Math.max(c, j, p, g) === c){
    document.querySelector("h2").innerText = "Your Answer is C#"
    document.querySelector("#answer").innerText = "C# is a robust general purpose high level programming language."
  } else if(Math.max(c, j, p, g) === j){

  }else if(Math.max(c, j, p, g) === j){
    
  }else if(Math.max(c, j, p, g) === j){
    
  }else{
    console.log("something went wrong with get result")
  }
}

function hide(element){
  element.setAttribute("class", "hidden");
}

function show(element){
  element.removeAttribute("class");
}


window.addEventListener("load", function(){
  const startDiv = document.querySelector("#start");
  const startButton = document.querySelector("#start-button");
  const q1Div = document.querySelector("#question1");
  const form1 = document.querySelector("#form1");
  const q2Div = document.querySelector("#question2");
  const form2 = document.querySelector("#form2");
  const q3Div = document.querySelector("#question3");
  const form3 = document.querySelector("#form3");
  const q4Div = document.querySelector("#question4");
  const form4 = document.querySelector("#form4");
  const q5Div = document.querySelector("#question5");
  const form5 = document.querySelector("#form5");
  const q6Div = document.querySelector("#question6");
  const form6 = document.querySelector("#form6")
  startButton.onclick = (event) => {

    event.preventDefault();
  }
  })