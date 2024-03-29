const searchInput = document.querySelector('#input_search');
const searchWrapper = document.querySelector('.search-wrapper');


searchInput.addEventListener('focus', ()=>{
    searchWrapper.classList.add('focused');
})
searchInput.addEventListener('blur', () => {
    searchWrapper.classList.remove('focused');
});


const hearts = document.querySelectorAll('.heart');

for(let i = 0; i < hearts.length; i++){
    hearts[i].addEventListener('mouseover', function() {
        if(!hearts[i].classList.contains('filled')){
            hearts[i].src = "./assets/icon/heart-filled.svg";
        }
    });
    hearts[i].addEventListener('mouseout', function() {
        if(!hearts[i].classList.contains('filled')){
            hearts[i].src = "./assets/icon/heart-void.svg";
        }
    });
    
    hearts[i].addEventListener('click', function() {
        hearts[i].classList.toggle('filled')
        hearts[i].src = "./assets/icon/heart-filled.svg";
    });
    
}