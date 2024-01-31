const body = document.querySelector('body');
const theme = document.querySelector('.theme');
const icon = document.querySelector('.theme_icon');

theme.addEventListener('click', () => {
    body.classList.toggle('darkmode')

    if(body.classList.contains('darkmode')){
        icon.classList.remove('bxs-sun')
        icon.classList.add('bxs-moon')
    }else{
        icon.classList.remove('bxs-moon')
        icon.classList.add('bxs-sun')
    }
})
