//navbar

let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 98){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
    console.log(scrollY);
})


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}