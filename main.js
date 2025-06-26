const myButton = document.querySelector('button')
const myCannot1 = document.querySelector('.cannot_1')
const myCannot2 = document.querySelector('.cannot_2')
const myCannot3 = document.querySelector('.cannot_3')
const myCannot4 = document.querySelector('.cannot_4')
const myError1 = document.querySelector('.icon_error_1')
const myError2 = document.querySelector('.icon_error_2')
const myError3 = document.querySelector('.icon_error_3')
const myError4 = document.querySelector('.icon_error_4')
const myInput = document.querySelectorAll('input')

myButton.addEventListener('click', function(){
    myError1.style.display = 'block'
    myError2.style.display = 'block'
    myError3.style.display = 'block'
    myError4.style.display = 'block'
    myCannot1.style.display = 'block'
    myCannot2.style.display = 'block'
    myCannot3.style.display = 'block'
    myCannot4.style.display = 'block'
    myCannot1.style.color = 'hsl(0, 100%, 74%)'
    myCannot2.style.color = 'hsl(0, 100%, 74%)'
    myCannot3.style.color = 'hsl(0, 100%, 74%)'
    myCannot4.style.color = 'hsl(0, 100%, 74%)'
    myInput.forEach(input => {
        input.style.border = '2px solid hsl(0, 100%, 74%)'
    });
})

myInput.forEach(input => {
    input.addEventListener('keydown', function(event){
   if (event.key === 'Enter'){
    myError1.style.display = 'block'
    myError2.style.display = 'block'
    myError3.style.display = 'block'
    myError4.style.display = 'block'
    myCannot1.style.display = 'block'
    myCannot2.style.display = 'block'
    myCannot3.style.display = 'block'
    myCannot4.style.display = 'block'
    myCannot1.style.color = 'hsl(0, 100%, 74%)'
    myCannot2.style.color = 'hsl(0, 100%, 74%)'
    myCannot3.style.color = 'hsl(0, 100%, 74%)'
    myCannot4.style.color = 'hsl(0, 100%, 74%)'
    myInput.forEach(input => {
        input.style.border = '2px solid hsl(0, 100%, 74%)'
    });
   }
})
});


