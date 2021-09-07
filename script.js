// DOM elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const naming = document.getElementById('name');
const focus = document.getElementById('focus');



//Show Time

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    seconds = today.getSeconds();
    
    const wthZeroSecond = seconds < 10 ? "0".toString() + seconds.toString() : seconds;
    const wthZeroMin = min < 10 ? "0".toString() + min.toString() : min;
    const wthZeroHour = hour < 10 ? "0".toString() + hour.toString() : hour;

    time.innerText = `${wthZeroHour}:${wthZeroMin}:${wthZeroSecond}`;

    const setBg = (zaman, mesaj, zamanElementi) => {
        if(zaman  >= 18){
            document.body.style.backgroundImage = 'url("https://i.ibb.co/924T2Wv/night.jpg")';
            mesaj.textContent = 'İyi Akşamlar!'
        } 
        else if(zaman < 12){
            document.body.style.backgroundImage = 'url("https://i.ibb.co/7vDLJFb/morning.jpg")';
            mesaj.textContent = 'Günaydın!'
        
        }   
        else if (zaman >= 12)  
        {
            document.body.style.backgroundImage = 'url("https://i.ibb.co/3mThcXc/afternoon.jpg")';
            mesaj.textContent = 'İyi Günler!'
        }
            
    }

    setBg(hour, greeting,time);
    setTimeout(showTime, 1000);

}

function GetName(){
    if (localStorage.getItem('name') === null) {
        naming.textContent = '[Buraya Adınız]';
        console.log('Get Name is null')
    }
    else{
        naming.textContent = localStorage.getItem('name');
        console.log('Get Name is not null')
    }
}
function GetFocus(){
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Buraya Hedefiniz]';
        console.log('Get focus is null')
    }
    else{
        focus.textContent = localStorage.getItem('focus');
        console.log('Get focus is not null');
    }
}


const setName = (e) =>{
    if(e.type ==='keypress'){
        if(e.key === 'Enter') {
            localStorage.setItem('name', e.target.innerText);
            naming.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}




const setFocus = (e) => {
    if(e.type ==='keypress'){
        if(e.key === 'Enter') {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

naming.addEventListener('keypress', setName);
naming.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
GetName();
GetFocus();