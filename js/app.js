'use strict';
alert('welcome my friend')

let username=prompt('what your name ?')

document.getElementById('pallet').innerHTML = username;

alert('Thank you, my friend'    +    username     +     'for your visit to my website. Welcome to your home')



let question1 = prompt('Have I lived in hay nazzal my whole life?').toLowerCase();
function q1() {
    if (question1 === 'yes' || question1 === 'y' ) {
      console.log('The user answered correct with: ' + question1);
      alert('Your answer is correct')
    } else 
    {if(question1 === 'no' || question1 === 'n') { 
      console.log('The user answered incorrect with: ' + question1);
      alert('Your answer is not correct')
    }
    else{
        question1=prompt("please try again").toLocaleLowerCase()
        q1()
    }
    }
    }
    q1();
    



    let question2 = prompt('Is my favorite color yellow?').toLowerCase();

function q2() {
    if (question2 === 'yes' || question2 === 'y' ) {
      console.log('The user answered incorrect with: ' + question2);
      alert('Your answer is not correct')
    } else 
    {if(question2 === 'no' || question2 === 'n') { 
      console.log('The user answered correct with: ' + question2);
      alert('Your answer is  correct')
    }
    else{
        question2=prompt("please try again").toLocaleLowerCase()
        q2()
    }
    }
    }
    q2();



    let question3 = prompt('Is my favorite team Man city').toLowerCase();

    function q3() {
        if (question3 === 'yes' || question3 === 'y' ) {
          console.log('The user answered correct with: ' + question3);
          alert('Your answer is correct')
        } else 
        {if(question3 === 'no' || question3 === 'n') { 
          console.log('The user answered incorrect with: ' + question3);
          alert('Your answer is not correct')
        }
        else{
            question3=prompt("please try again").toLocaleLowerCase()
            q3()
        }
        }
        }
        q3();

        let question4 = prompt('Is my height = 180').toLowerCase();

        function q4() {
            if (question4 === 'yes' || question4 === 'y' ) {
              console.log('The user answered incorrect with: ' + question4);
              alert('Your answer is not correct')
            } else 
            {if(question4 === 'no' || question4 === 'n') { 
              console.log('The user answered correct with: ' + question4);
              alert('Your answer is  correct')
            }
            else{
                question4=prompt("please try again").toLocaleLowerCase()
                q4()
            }
            }
            }
            q4();

    let question5 = prompt('Do I have white hair').toLowerCase();

    function q5() {
        if (question5 === 'yes' || question5 === 'y' ) {
          console.log('The user answered correct with: ' + question5);
          alert('Your answer is correct')
        } else 
        {if(question5 === 'no' || question5 === 'n') { 
          console.log('The user answered incorrect with: ' + question5);
          alert('Your answer is not correct')
        }
        else{
            question5=prompt("please try again").toLocaleLowerCase()
            q1()
        }
        }
        }
        q1();

        alert('Thank you, my friend'    +    username     +     'for answer my question')
