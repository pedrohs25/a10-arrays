const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//numeros sem ordem específica
const array1 = [2,7,5,3,8]

//apenas strings
const array2 = ["mouse", "teclado", "monitor"]

//numeros, strings e booleanos
const array3 = [11,24, "notebook", "roteador", true, false]

//quantidade de itens na array
console.log("Quantidade de itens da Array1", '\n',array1.length);
console.log("Quantidade de itens da Array2", '\n',array2.length);
console.log("Quantidade de itens da Array3", '\n',array3.length);

//imprimindo itens
console.log("Imprimindo o primeiro item do primeiro array", '\n',array1[0]);
console.log("Imprimindo o segundo item do segundo array", '\n',array2[1]);
console.log("Imprimindo o terceiro item do terceiro array", '\n',array3[2]);

//imprimindo informação booleana
console.log("Imprimindo inf. booleana verdadeira sobre a inclusão de um item do primeiro array", '\n',array1.includes(8));

console.log("Imprimindo inf. booleana falsa sobre a inclusão de um item do terceiro array", '\n',array3.includes("monitor"));