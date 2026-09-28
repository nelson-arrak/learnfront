let button = document.getElementById("btn");
button.addEventListener('click', () =>{
    if(button.classList.contains('is-primary')){
        button.classList.replace('is-primary', 'is-warning')
    } else {
        button.classList.replace('is-warning', 'is-primary')
    }
    
});

let input = document.querySelector('#input')
let reverseText = document.querySelector('#reverseText')

input.addEventListener('input', () => {
    reverseText.innerHTML = input.value.split('').reverse('').join('')
});
