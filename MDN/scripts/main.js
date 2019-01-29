var myImg = document.querySelector('img');
myImg.onclick = () =>
{
    mySrc=myImg.getAttribute('src');
    console.log(mySrc);
    if (mySrc ==="./images/mozilla.png"){
        myImg.setAttribute('src',"./images/mozilla2.png")

    }
    else{
        myImg.setAttribute('src',"./images/mozilla.png")
      
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }