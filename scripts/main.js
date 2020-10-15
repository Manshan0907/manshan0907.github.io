

let myImage = document.querySelector('img');
myImage.onclick = function() {

    let mySrc = myImage.getAttributes('src');
    if (mySrc === 'images/firefox.png') {
        myImage.setAttribute('src','images/firefox1.png');
    }else {
        myImage.setAttribute('src','images/firefox.png');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
    let myName = prompt('请输入名称');
    if (!myName || myName === null) {
        setUserName();
    }else {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'ojafsiod sndf,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'wulalalalal ,' + storedName;
}

myButton.onclick = function () {
    setUserName();
};