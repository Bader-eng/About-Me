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
    } else {
      console.log('The user answered incorrect with: ' + question1);
      alert('Your answer is not correct')
    }
    }
    q1();
    
    let question2 = prompt('Is my favorite color yellow?').toLowerCase();

    function q2() {
    if (question2 === 'no' || question2 === 'n' || question2 === 'NO') {
      console.log('The user answered correct with: ' + question2);
      alert('Your answer is correct')
    } else {
      console.log('The user answered incorrect with: ' + question2);
      alert('Your answer is not correct')
    }
    }
    q2();

    let question3 = prompt('Is my favorite team Man city').toLowerCase();

    function q3() {
        if (question3 === 'yes' || question3 === 'y' ) {
          console.log('The user answered correct with: ' + question3);
          alert('Your answer is correct')
        } else {
          console.log('The user answered incorrect with: ' + question3);
          alert('Your answer is not correct')
        }
        }
        q3();

        let question4 = prompt('Is my height = 180').toLowerCase();

    function q4() {
    if (question4 === 'no' || question4 === 'n' || question4 === 'NO') {
      console.log('The user answered correct with: ' + question4);
      alert('Your answer is correct')
    } else {
      console.log('The user answered incorrect with: ' + question4);
      alert('Your answer is not correct')
    }
    }
    q4();

    let question5 = prompt('Do I have white hair').toLowerCase();

    function q5() {
        if (question5 === 'yes' || question5 === 'y' ) {
          console.log('The user answered correct with: ' + question5);
          alert('Your answer is correct')
        } else {
          console.log('The user answered incorrect with: ' + question5);
          alert('Your answer is not correct')
        }
        }
        q5();

        alert('Thank you, my friend'    +    username     +     'for answer my question')
