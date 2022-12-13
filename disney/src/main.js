document.addEventListener("DOMContentLoaded", function(){
    const buttons =  document.querySelectorAll('[data-tab-button]');

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
})
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