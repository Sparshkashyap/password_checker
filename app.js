document.addEventListener('DOMContentLoaded',function(){


let password_input =document.getElementById('password');
// console.log(password_input);
let text =document.getElementById('text');
let password_strength=document.querySelectorAll(".pass");


password_input.addEventListener('input',function(event){

    let password=event.target.value;
    let strength=Math.min(password.length,12);

    let degree=strength*30;

    let gradient_color=strength<=4 ? '#ff2c1c':(strength<=8 ? "#ff9800": "#12ff12");
    let textstrength=strength<=4 ? 'Weak':(strength<=8 ? "Medium": "Strong");



password_strength.forEach(pass => {
    pass.style.background= `conic-gradient(${gradient_color} ${degree}deg, #1115 ${degree}deg)`;
    
});

text.textContent=textstrength;
text.style.color=gradient_color;




});
});