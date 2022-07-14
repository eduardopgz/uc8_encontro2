let listaAlunos = [] //os alunos da sala estariam nesse array
let count = listaAlunos.length // aqui estaria o numero total de alunos


if(count == 0 ){
    console.log(`Quantidade de alunos na sala é ${count}, zero`)
}
if( count % 2 == 0){
    console.log(`O numero de alunos na sala é ${count}, par`)
}
else{
    console.log(`O numero de alunos na sala é ${count}, impar`) 
}

