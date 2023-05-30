const getColor= () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode='#'+randomNumber.toString(16);
    document.body.style.backgroundColor= randomCode;
    document.getElementById('color-code').innerText=randomCode;
    console.log(randomCode,randomNumber)
    

}
document.getElementById('btn').addEventListener('click',getColor)