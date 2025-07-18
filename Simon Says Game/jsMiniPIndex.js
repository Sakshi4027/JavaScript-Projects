let gameSeq=[];
let userSeq=[];
let started=false;

let body=document.querySelector("body");

let level=0;
let btns=["blue","pink","green","yellow"];

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

let highS=0;

let h4=document.querySelector("#h4");
// h3.prepend(h4);

function highScore(score){
    if(highS<score){
        highS=score;
        h4.innerText=`You're highest score is ${highS}`;
    }
}


function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random() * 4);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`)

    // console.log(`random index is ${ranIdx}`);
    // console.log(`random color is ${ranColor}`);
    // console.log(`random button is ${ranBtn}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);

    flash(ranBtn);
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function checkAns(idx){
    let score=level-1;
    highScore(score);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        body.classList.add("redFlash");
        setTimeout(function(){
            body.classList.remove("redFlash");
        },250)
        h3.innerHTML=`Game over!! You're score is <b>${score}</b> <br>Press any key to start again`;
        reset();
    }
}

function btnPress(){
    let btn=this;
    flash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btns");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
}




















//this is for basics
// let input=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=input.value;

//     let delbtn=document.createElement("button");
//     delbtn.innerText="delete";
//     delbtn.classList.add("delbtn")
    
//     item.appendChild(delbtn);
//     input.value="";
//     ul.appendChild(item);
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let todel=event.target.parentElement;
//         todel.remove();
//         console.log("deleted");
//     }
// });

