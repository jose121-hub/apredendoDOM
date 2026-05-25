console.log('Oi galera boa tudo bem?');

const quadrado = document.querySelector('.container');

const botaum = document.querySelector('.botaum');

console.log(quadrado);

quadrado.textContent = 'texto inserido pelo ';

function mudarCor(){
    quadrado.style.backgroundColor = 'blue';
}

botaum.addEventListener('click', mudarCor);