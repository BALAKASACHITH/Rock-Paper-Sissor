let r=document.querySelector(".rock");
let p=document.querySelector(".paper");
let s=document.querySelector(".sissor"); 
let res=document.querySelector(".reason");
let yu=document.querySelector("#yu");
let ot=document.querySelector("#ot");
let sa=document.querySelector("#sa");
let y=0,o=0;
let a=["rock","paper","sissor"];
r.addEventListener("click",()=>{
    let ys="rock";
    let os=a[Math.floor(Math.random()*a.length)];
    if(os=="rock"){
        res.innerText=`Your : Rock\nOponent : Rock`;
        ot.innerText=o;
        yu.innerText=y;
    }else if(os=="paper"){
        res.innerText=`Your : Rock\nOponent : Paper`;
        o++;
        ot.innerText=o;
        yu.innerText=y;
    }else{
        res.innerText=`Your : Rock\nOponent : Sissor`;
        y++
        ot.innerText=o;
        yu.innerText=y;
    }
});
p.addEventListener("click",()=>{
    let ys="paper";
    let os=a[Math.floor(Math.random()*a.length)];
    if(os=="paper"){
        res.innerText=`Your : Paper\nOponent : Paper`;
        ot.innerText=o;
        yu.innerText=y;
    }else if(os=="rock"){
        res.innerText=`Your : Paper\nOponent : Rock`;
        y++;
        ot.innerText=o;
        yu.innerText=y;
    }else{
        res.innerText=`Your : Paper\nOponent : Sissor`;
        o++
        ot.innerText=o;
        yu.innerText=y;
    }
});
s.addEventListener("click",()=>{
    let ys="sissor"
    let os=a[Math.floor(Math.random()*a.length)];
    if(os=="sissor"){
        res.innerText=`Your : Sissor\nOponent : Sissor`;
        ot.innerText=o;
        yu.innerText=y;
    }else if(os=="paper"){
        res.innerText=`Your : Sissor\nOponent : Paper`;
        y++;
        ot.innerText=o;
        yu.innerText=y;
    }else{
        res.innerText=`Your : Sissor\nOponent : Rock`;
        o++
        ot.innerText=o;
        yu.innerText=y;
    }
});
sa.addEventListener("click",()=>{
    y=0;
    o=0;
    ot.innerText=y;
    yu.innerText=y;
    res.innerText="Reason";
});