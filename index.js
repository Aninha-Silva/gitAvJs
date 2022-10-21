let alunos = [{
    id: 1,
    nome: 'Ana',
    bim1: 7,
    bim2: 5, 
    bim3: 8,
    bim4: 9,
    media: 7
},
{
id: 2,
    nome: 'Maria',
    bim1: 10,
    bim2: 10, 
    bim3: 10,
    bim4: 10,
    media: 10
}, 
{
id: 3,
    nome: 'Arthur',
    bim1: 2,
    bim2: 6, 
    bim3: 6,
    bim4: 7,             
    media: 5
},]

  alunos.forEach(notas => {
    let media = ( notas.bim1 + notas.bim2 + notas.bim3 + notas.bim4) /4;
    notas.media = media;

    if (notas.media == 10) {
    console.log(`${notas.id} ${notas.nome} ${notas.media} Aluno exemplar`);
    }
    else if (notas.media >=7) {
    console.log(`${notas.id} ${notas.nome} ${notas.media} Aprovado`);
    }else{
    console.log(`${notas.id} ${notas.nome} ${notas.media} Recuperação`);
    }
  });
