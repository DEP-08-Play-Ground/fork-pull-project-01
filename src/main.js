const text = document.querySelector("p");

addEventListener('mousemove', (e)=>{
    text.style.left = (e.clientX + 15) + 'px';
    text.style.top = (e.clientY + 15) + 'px';

})