

const div = document.getElementById('second');

const newDiv = document.createElement('second');
newDiv.innerHTML = `<h2>Hello bots</h2>`;
document.body.appendChild(newDiv);


const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors() {
   let hasClass = heading.classList.contains('red');
   console.log('hello')
   if(hasClass){
       heading.classList.remove('red');
   } else {
       heading.classList.add('red');  
   }
}

btn.addEventListener('click', changeColors);


/*btn.addEventListener('click', function() {
   heading.classList.add('red');
})*/