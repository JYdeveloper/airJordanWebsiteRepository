

// Changing text heading color on top of page 
document.getElementById('banner').onmouseover = function () { mouseOver() };
document.getElementById('banner').onmouseout = function () { mouseOut() };

function mouseOver() {
    document.getElementById('banner').style.color = "red";
}
function mouseOut() {
    document.getElementById('banner').style.color = "white";
}


// Changing top row colors on mouse on and off. To black then return to blue. (Not working yet!)
/*
function mouseOverTop(){

    document.getElementsbyClassName('toprow').style.backgroundColor = 'green';
    }
    <div ClassName="toprow" onmouseover="mouseOverTop()"> </div>

document.getElementsByClassName('toprow').onmouseover = function () { mouseOverTop() };

function mouseOverTop() {
    document.getElementsByClassName('toprow').style.backgroundColor = "black";
}
*/


// Top Nav Bar -  VIP club button click alert
function vipButtonClick() {
    alert("Please enter VIP login at bottom of page");
}


//      Create an variable with passwords

const passWordDataBase = {name: 'john', password: "secret" }
   

//          VIP login input form

function checkPassword(){
    let login = document.getElementById("loginInput").value;

    let passWord = document.getElementById("passWordInput").value;

    if (passWordDataBase.name === login && passWordDataBase.password === passWord){
        return alert("LOGIN SUCCESSFUL!");
    }
    else if (passWordDataBase.name === login && passWordDataBase.password != passWord) {
            alert("WRONG PASSWORD!");
    }
    else if (passWordDataBase.name != login && passWordDataBase.password === passWord){
        alert("WRONG USERNAME!");
    }
     else {
        alert("LOGIN UNSUCCESSFUL");
    }
}


//          Quiz - 3 questions upon clicking quiz link

function quizButtonClick() {
   
   let answerOne = prompt("Answer these three questions correctly and go in the draw for a pair of signed Jordans! \n Question 1: How many championships did Jordan win?");
    	  if (answerOne == 6 || "six") {
          return questionTwo()
          }
            else {
                 return alert("Wrong! No signed jordans for you");
        }
}

function questionTwo() {
          let answerTwo = prompt("Correct answer! \n Question 2: What year did Jordan win his first championship?");
             if (answerTwo == 1991 || 91 || "ninety one" || "ninetyone") {
            return questionThree()
        }
            else {
                return alert("Wrong! No signed jordans for you");
            }
        }

function questionThree() {
        let answerThree = prompt("Correct Again! \n Final Question: What number did his airness wear for most of his career?");
         if (answerThree == 23 || "twenty three" || "twentythree") {
            return emailForm()
        }   
          else {
            return alert("Wrong! No signed jordans for you");
        }
}

function emailForm() {
    let userEmail = prompt("Congratulations!\n You are a true fan of the GOAT! \n Enter your email below to go in the draw::")
    quizWinnerEmails.push(userEmail)
    return console.log(quizWinnerEmails);
}


// Email array 
let quizWinnerEmails = [];