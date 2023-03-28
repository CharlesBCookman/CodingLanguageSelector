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
  return [c, j, p, g];
}
function hide(element){
  element.setAttribute("class", "hidden");
}

function show(element){
  element.removeAttribute("class");
}

function collectAnswers(){
  let answers = ""
  answers = document.forms.form1.element.q1.value + document.forms.form2.element.q2.value + document.forms.form3.element.q3.value + document.forms.form4.element.q4.value + document.forms.form5.element.q5.value + document.forms.form6.element.q6.value;
  console.log(answers);
  return answers;
}

function showResult([c, j, p, g]){
  if(Math.max(c, j, p, g) === c){
    document.querySelector("h2").innerText = "Your Answer is C#"
    document.querySelector("#answer").innerText = "C# is a robust general purpose high level object oriented programming language. Intended for use in software development C# is a widely used and well documented programming language that integrates with many different software and data types."
  } else if(Math.max(c, j, p, g) === j){
    document.querySelector("h2").innerText = "Your Answer is Javascript"
    document.querySelector("#answer").innerText = "Javascript is a core technology and a programming language used for everything from interactivity to data processing it is a versatile tool used for most of the web."
  }else if(Math.max(c, j, p, g) === p){
    document.querySelector("h2").innerText = "Your Answer is Python"
    document.querySelector("#answer").innerText = "Python is a well documented well maintained programming language formatted for speed and readability. While it may not have the same open-ended uses like C# and Javascript it's fast computational and logic processing makes it an invaluable tool."
  }else if(Math.max(c, j, p, g) === g){
    document.querySelector("h2").innerText = "Your Answer is Go"
    document.querySelector("#answer").innerText = "Go was created at Google when they wanted to have a better language for their systems. It is described as having run time efficiency like C, readability like Python and Javascript and has high performance networking and multiprocessing."
  }else{
    console.log("something went wrong with get result")
  }
}

//q is short for question r is short for radio
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
  const form6 = document.querySelector("#form6");
  const result = document.querySelector("#result");
  startButton.onclick = () => {
    show(q1Div);
    hide(startDiv);
  }
  form1.addEventListener("submit", function(event){
    show(q2Div);
    hide(q1Div);
    event.preventDefault();
  })
  form2.addEventListener("submit", function(event){
    show(q3Div);
    hide(q2Div);
    event.preventDefault();
  })
  form3.addEventListener("submit", function(event){
    show(q4Div);
    hide(q3Div);
    event.preventDefault();
  })
  form4.addEventListener("submit", function(event){
    show(q5Div);
    hide(q4Div);
    event.preventDefault();
  })
  form5.addEventListener("submit", function(event){
    show(q6Div);
    hide(q5Div);    
    event.preventDefault();
  })
  form6.addEventListener("submit", function(event){
    showResult(getResult(collectAnswers));
    show(result);
    hide(q6Div);
    event.preventDefault();
  })
  })