const array1 = [2,7,5,3,8]

const array2 = ["mouse", "teclado", "monitor"]

const array3 = [11,24, "notebook", "roteador", true, false]

//Adicionando um item number ao primeiro array
const array1Copia = array1.slice()
array1Copia.push(25)
console.log("Array Original",'\n' ,array1,'\n',"Adicionando um item number ao primeiro Array, ficará:",'\n',array1Copia);

//removendo o ultimo item do segundo array
const array2Copia = array2.slice()
array2Copia.pop()
console.log("Array Original",'\n' ,array2,'\n',"Removendo o último item do segundo Array ficará:",'\n', array2Copia);

//removendo o segundo item do terceiro array
const array3Copia = array3.slice()
array3Copia.splice(1,1)
console.log("Array Original",'\n' ,array3,'\n',"Removendo o segundo item do terceiro Array ficará:",'\n', array3Copia);