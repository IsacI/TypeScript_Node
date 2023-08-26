/*Crie um código com Node.js e Typescript que vai solicitar ao usuário um
nome, 4 notas de 0 a 10 e no final vai devolver no console um objeto com o
nome do aluno, suas 4 notas e a média final calculada.

Você deve utilizar uma Interface para definir os detalhes do objeto aluno e
criar uma função calcularMedia() que recebe um array com 4 notas e faz o
cálculo da média. Os valores serão digitados pelo usuário e podem ser
capturados usando a biblioteca prompt-sync*/


import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Aluno {
  nome: string;
  notas: number[];
  media: number;
}

function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

function main() {
  const nome = prompt('Digite o nome do seu aluno: ');
  const notas: number[] = [];

  for (let i = 0; i < 4; i++) {
    const nota = parseFloat(prompt(`Digite a nota do seu aluno  ${i + 1} (0 a 10): `));
    if (nota >= 0 && nota <= 10) {
      notas.push(nota);
    } else {
      console.log('Nota inválida. Digite uma nota entre 0 e 10.');
      i--;
    }
  }

  const media = calcularMedia(notas);

  const aluno: Aluno = {
    nome,
    notas,
    media,
  };

  console.log(aluno);
}

main();
