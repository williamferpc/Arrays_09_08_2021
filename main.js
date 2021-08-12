



const informacionPersonal = [];


informacionPersonal['Nombre'] = "Miguel";
informacionPersonal['Apellido'] = "Castro";
informacionPersonal['Edad'] = 23;
informacionPersonal['Instructor'] = true;

for(let [indice, value] of Object.entries(informacionPersonal)){
    console.log(`Asociativo: ${indice}, Valor: ${value}`);
}
console.warn("");
Object.values(informacionPersonal).forEach(element => {
    console.log(element);
});















// const arrayBloqueo = [];
// for (let i = 0; i < 3; i++) {
//     arrayBloqueo[i] = undefined;
// }
// Object.preventExtensions(arrayBloqueo);
// console.log(`Se puede agregar mas identificadores al array ${Object.isExtensible(arrayBloqueo)}`);
// arrayBloqueo[4] = undefined;
// arrayBloqueo[1] = "Miguel";
// console.log(arrayBloqueo);














// let lista = [];
// for (let i = 0; i <= 6; i++) {
//     lista[i] = undefined;
// }
// // for (let i = 0; i < 6; lista[i++] = undefined);

// lista[0] = "Miguel"
// lista[1] = "Castro";
// lista[2] = 23;
// lista[3] = true;
// lista[4] = "Calle";
// lista[5] = "educacioncontinua04@unc.edu.co";
// lista[6] = "Diplomado JavasScript Nivel 1";


// console.log(lista);













// let array = [];
// for (let i = 0; i < 5; i++) {
//     array[i] = undefined;
// }
// console.log(array);

// let arrayObjeto = new Array(5).fill(undefined,0,5);
// console.log(arrayObjeto);