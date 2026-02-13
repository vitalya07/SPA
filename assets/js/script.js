document.addEventListener('DOMContentLoaded', ()=> {
    //гамбургер
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header')
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open-menu');
    });
    //Добавляем появления стрелки вверх
    const top = document.querySelector('.top');
    const main = document.querySelector('.main');
    let mainOffsetY = main.offsetHeight;
    let headerOffsetY = header.offsetHeight;

    window.addEventListener('scroll', ()=> {
        if(window.scrollY > headerOffsetY) {
            header.style.position = 'fixed';
            header.style.top = `-100px`;            
        }
        if(window.scrollY > mainOffsetY) {
            header.style.position = 'fixed';
            header.style.top = `0px`;  
            top.style.display = 'flex';
        } else if (window.scrollY > mainOffsetY - `100px`) {
            header.style.position = 'relative';
            header.style.top = `0`; 
        } else {
            top.style.display = 'none';          
            header.style.position = 'relative';
            header.style.top = `0`;  
        }
        
        
    })
})