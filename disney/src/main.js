document.addEventListener("DOMContentLoaded", function(){
    const buttons =  document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for(let i = 0 ; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const tabTarget = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            handleTabs()
            tab.classList.add('shows__list--active')
            handleButtons()
            botao.target.classList.add('shows__tabs__button--active')
            
        })
    }

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', handleToggleAnswer)
    }
})

function handleToggleAnswer(element){
    const elementClass = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(elementClass) 
}

function handleButtons(){
    const buttons =  document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--active');

    }
}

function handleTabs(){
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabContainer.length; i++){
        tabContainer[i].classList.remove('shows__list--active');
        console.log('rodou')
    }
}