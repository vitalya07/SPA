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
    });
    //Подтверждение возраста
    const popup = document.querySelector('.popup');
    const btn18 = document.querySelector('#btn-18');
    document.body.style.overflow = 'hidden';
    btn18.addEventListener('click', ()=> {
        document.body.style.overflow = '';
        popup.classList.remove('show');
        popup.classList.add('hide');
    });
    //Открыть список городов
    const selectSitiesList = document.querySelector('.select__cities');
    const selectSities = document.querySelector('.header__logo-select');
    const selectCitiesClose = document.querySelector('.select__cities-close');
    selectSities.addEventListener('click', ()=> {
        selectSitiesList.classList.remove('select-hide');
        selectSitiesList.classList.add('select-show');
        document.body.style.overflow = 'hidden';
    });
    selectCitiesClose.addEventListener('click', ()=> {
        selectSitiesList.classList.remove('select-show');
        selectSitiesList.classList.add('select-hide');
        document.body.style.overflow = '';
    })
})