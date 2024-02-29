let centerNumber = window.document.getElementById('d55');
let d2 = window.document.getElementById('d2');
let d3 = window.document.getElementById('d3');
let d4 = window.document.getElementById('d4');
let d5 = window.document.getElementById('d5');
let d6 = window.document.getElementById('d6');
let d7 = window.document.getElementById('d7');
let d8 = window.document.getElementById('d8');
let d9 = window.document.getElementById('d9');
let count = window.document.getElementById('count');
let countNum=0; //정답 수
let num1 = 0;
let num2 = 0;
let startButton = document.getElementById("time"); //시작버튼

let x;//시간초
let intervalTimer;

let gameOver = document.getElementById("img");

let backgroundSound= new Audio("/resources/sounds/backmusic04.wav");
let niceSound= new Audio("/resources/sounds/nice.wav");
let wrongSound = new Audio("/resources/sounds/wrong.wav")
let buttonClickSound = new Audio("/resources/sounds/button-click.wav")
let failSound = new Audio("/resources/sounds/fail.wav")
let clearSound = new Audio("/resources/sounds/clear.wav")
backgroundSound.volume=0.1


function goRandom() { //랜덤숫자를 생성합니다.
    let random = Math.floor(Math.random() * 31);
    let centerNumber = window.document.getElementById('d55');
    const arr4 = [4, 6, 8, 9, 10, 12, 14,
        15, 16, 18, 20, 21, 24, 25,
        27, 28, 30, 32, 35, 36, 40, 42,
        45, 48, 49, 54, 56, 63, 64, 72, 81];
    centerNumber.innerText = (arr4[random]);//문제를 냅니다.
    num1=0;
    num2=0;
}

d2.addEventListener("click", dd2);

function dd2() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d2.innerText : num2 = d2.innerText;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {//정답시
            niceSound.play();
            centerNumber.innerText = "good";
            num1 =0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";//오답시
            num1=0;
            num2 = 0;
        }
    }
}

d3.addEventListener("click", dd3);

function dd3() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d3.innerText : num2 = d3.innerText ;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;
        }
    }
}

d4.addEventListener("click", dd4);

function dd4() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d4.innerText : num2 = d4.innerText;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;
        }
    }
}

d5.addEventListener("click", dd5);

function dd5() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d5.innerText : num2 = d5.innerText;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;
        }
    }
}

d6.addEventListener("click", dd6);

function dd6() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d6.innerText : num2 = d6.innerText;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;
        }
    }
}

d7.addEventListener("click", dd7);

function dd7() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d7.innerText : num2 = d7.innerText;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;
        }
    }
}

d8.addEventListener("click", dd8);

function dd8() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d8.innerText : num2 = d8.innerText;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";

        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;
        }

    }
}

d9.addEventListener("click", dd9);

function dd9() {
    buttonClickSound.play();
    num1 == 0 ? num1 = d9.innerText : num2 = d9.innerText ;

    if (num2 > 0) {
        if (centerNumber.innerText == num1 * num2) {
            niceSound.play();

            centerNumber.innerText = "good";
            num1=0;
            num2 = 0;
            countNum+=1;
            count.innerText=countNum+"점";
        } else {
            wrongSound.play();
            centerNumber.innerText = "no";
            num1=0;
            num2 = 0;

        }
    }

}



startButton.addEventListener("click", timer );


function timer(){
    buttonClickSound.play();

    centerNumber.innerText = "GO!";
    goRandom();
    startButton.style.pointerEvents = 'none';//게임시작 후엔 버튼을 누를 수 없다.

    intervalTimer = setInterval(t30, 1000);
}



function t30(){

    x-=1;
    document.getElementById("time").innerText=(x);

    if (x==0) { //게임오버
        gameOver.style.display='block';
        count.style.display="inline-block";
        if(parseInt(countNum)>=10){
            clearSound.play();
            document.getElementById("time").innerText=("피카추를 구하는데 성공했습니다!!!");
            document.getElementById("clear").style.display="block";
        }else {document.getElementById("time").innerText=("피카추를 구하는데 실패했습니다...");
            document.getElementById("fail").style.display="block";

            failSound.play();
        }
        clearInterval(intervalTimer);

    }

    if(x<5){ //5초 이하일 때 이벤트 발생
        window.document.getElementById('body').style.backgroundColor= "red";
        // html.style.backgroundColor="red";
        window.document.getElementById('body').style.backgroundImage="none";
        change();
    }


}





setInterval(function (){//문제를 맞추거나 틀렸을 때 문제를 바꾼다.
    if (centerNumber.innerText === "good" || centerNumber.innerText === "no"){
        goRandom();
    }

}, 1000);


// window.document.getElementById('cover').addEventListener("click",()=>{
//     document.getElementById("cover").style.display= "none";
//     document.getElementById("time").innerText=("start");
//     backgroundSound.play();
//
// });
window.document.getElementById('hard').addEventListener("click",()=>{
    buttonClickSound.play();
    document.getElementById("cover").style.display= "none";
     x=30;
     backgroundSound.play();
});
window.document.getElementById('easy').addEventListener("click",()=>{
    buttonClickSound.play();
    document.getElementById("cover").style.display= "none";
    x=60;
    backgroundSound.play();
});


window.document.getElementById('img').addEventListener("click",()=>{//게임오버에서 다시 시작할때
    // gameOver.style.display="none"; //게임오버
    // count.style.display="none"; //스코어
    // countNum=0; //시간초
    // count.innerText=countNum;
    // centerNumber.innerText = "go";
    //
    // document.getElementById("cover").style.display="block";
    // startButton.style.pointerEvents = '';

    window.location.reload(); //재실행으로 대체

});
window.document.getElementById('fail').addEventListener("click",()=> {//게임오버에서 다시 시작할때
    window.location.reload(); //재실행으로 대체

});
window.document.getElementById('clear').addEventListener("click",()=> {//게임오버에서 다시 시작할때
    window.location.reload(); //재실행으로 대체

});


setInterval( change, 5000); //5초마다 버튼의 위치를 바꾼다.


function change(){

    let tem =d2.innerText;
    d2.innerText = d5.innerText;

    let tem2 =d3.innerText;

    d3.innerText= tem;

    tem= d4.innerText;
    d4.innerText =tem2;

    tem2=d6.innerText;
    d6.innerText=tem;

    tem = d9.innerText;
    d9.innerText= tem2;

    tem2 = d8.innerText;
    d8.innerText = tem;

    tem = d7.innerText;
    d7.innerText = tem2;

    tem2= d5.innerText;
    d5.innerText = tem;



}
