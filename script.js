console.log("patata")


function saludar(name) {
  // let name = "Bob" o "Sarah" o "Patricio"

  console.log(`Hola ${name}!`)
} // ref. 3434

saludar("Bob")
saludar("Sarah")


function despedirme(name) {
  // let name = "Bob" o "Sarah" o "Patricio"

  console.log(`Adios ${name}!`)
} // ref. 8989


function inciarProceso( otraFuncion, name ) {
  // let otraFuncion = saludar // ref. 3434 o despedirme ref. 8989

  //console.log(otraFuncion)
  console.log("abriendo la puerta")
  otraFuncion(name)

}

inciarProceso( saludar, "Asier" )

// inciarProceso( despedirme, "Marcos" )





// existen muchos metodos que requiren que pasemos una funcion como argumento para su funcionamiento


const names = ["Asier", "Ronnie", "Oriol", "Ignacio", "Xavi"]

// function decirHola(cadaElemento, index) {
//   console.log(index)
//   console.log(`Hola ${cadaElemento}!`)
// } 

// names.forEach( decirHola )

// esto es lo que ocurren internamente en el metodo forEach
// for (let i = 0; i < names.length; i++) {
//   let cadaElemento = names[i]
//   callback(cadaElemento, i)
// }

// forEach EJECUTA una funcion por cada elemento de un array.
// basicamente REEMPLAZA el uso de bucles for cuando trabajamos con arrays

names.forEach( (cadaElemento) => {
  console.log(`Hola ${cadaElemento}!`)
} )


let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

matriz.forEach((d1) => {

  console.log(d1)
  d1.forEach((d2) => {
    console.log(d2)
  })

})




const numbersArr = [4, 8, 15, 16, 23, 42];


let algo = numbersArr.forEach( (eachNumber, index) => {
  // console.log(index, eachNumber)
  if (index % 2 === 1) {
    console.log(eachNumber * 100)
  }
} )


// crea un array con cada uno de los numeros divido entre 100

// let nuevoArr = []
// numbersArr.forEach((eachNum) => {
//   nuevoArr.push(eachNum / 100)
// })

// console.log(nuevoArr)

// para la funcionalidad anterior existe un metodo llamada .map()

let nuevoArr = numbersArr.map((eachNum) => {
  console.log(eachNum)

  // el map requiere que devolvamos un valor. Con ese valor se recrea un nuevo array
  let nuevoElemento = eachNum * 1000
  return nuevoElemento // el nuevo elemento de el array
})

console.log(nuevoArr)



const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];


// filtra los elementos de año mayor a 2011


// el .map SIEMPRE crea un array con LA MISMA cantidad de elementos del original

// existe el metodo .filter() para filtrar

let newArr = cars.filter((eachCar) => {

  // se ejecuta por cada elemento del array
  // siempre debe retornar un booleano
  // true => incluyelo en el array
  // false => no lo incluyas en el array
  console.log("patata")

  if (eachCar.year < 2011) {
    return true // incluyelo en el array
  } else {
    return false // no lo incluyas en el array
  }

  // si tenemos condicion que retorna true o false, podemos retornar la condicion
  // return eachCar.year < 2011

})

console.log(newArr)



// reduce

const amounts = [20, 50, 120, 110, 80]

// let sum = 0;
// for (let i = 0; i < amounts.length; i++) {
//   sum += amounts[i]
// }
// console.log(sum)

let total = amounts.reduce((accumulador, eachAmount, index) => {

  console.log(accumulador, eachAmount)

  // el reduce debe retornar CUAL SERÁ EL NUEVO VALOR DEL ACUMULADOR
  return accumulador + eachAmount

}, 0) // valor inicial del acumulador (en este caso, desde cuanto empieza a sumar)
// si no agregamos el valor inicial del accumulador, el valor es el primer elemento del array. RECOMENDACION SIEMPRE AGREGARLO.

// version simplicada
// let total = amounts.reduce((acc, amount) => {
//   return acc + amount
// }, 0)

console.log(total)


const users = [
  {username: "bob", candy: 20},
  {username: "sarah", candy: 50},
  {username: "james"},
  {username: "patricio", candy: 180},
]

const allCandy = users.reduce((acc, eachUser) => {
  console.log(acc, eachUser.candy)
  if (eachUser.candy === undefined) {
    return acc // pasa el acc al proximo sin ningun cambio
  } else {
    return acc + eachUser.candy
  }
}, 0)

console.log(allCandy)

// podemos filtrar antes de hacer el reduce
// const totalCandy = users.filter((eachUser) => {
//   return eachUser.candy !== undefined
// }).reduce((acc, eachUser) => {
//   return acc + eachUser.candy
// }, 0)

// console.log(totalCandy)


// reverse()

let orderedNumber = [1, 2, 3, 4, 5]

// formas de clonar un array
// let clone = orderedNumber.slice(0)
// let clone = orderedNumber.map((eachNumber) => {
//   return eachNumber
// })
let clone = JSON.parse( JSON.stringify(orderedNumber) )

let reversedNumbers = clone.reverse()

console.log("reversedNumbers", reversedNumbers)
console.log("orderedNumber", orderedNumber)




const allUsers = [
  {username: "bob", candy: 20}, // ref abcd
  {username: "sarah", candy: 50}, // ref gfrt
  {username: "patricio", candy: 180}, // ref sder
] // ref 1234

let cloneUsers = allUsers.map((eachUser) => {
  return eachUser
}) // ref 4567

// map, slice, operador spread => clone shallow (superficial). Solo clone el primer nivel del array/objeto que este clonando.

// let cloneUsers = JSON.parse( JSON.stringify(allUsers) )
// se crea un clone depth (profundo). se clonan TODOS los objetos internos del array

cloneUsers.pop() // ref 4567
cloneUsers[0].candy = 1000 // ref abcd. cambia el original si hacemos shallow clone (map o slice)
console.log("clone", cloneUsers)
console.log("original", allUsers)


// sort() => modifica el original


let lettersArr = ["a", "e", "t", "B", "h"]

lettersArr.sort()

console.log(lettersArr)


let numbersArray = [40, 1, 100, 2000, 20]

numbersArray.sort((elem2, elem1) => {
  console.log(elem1, elem2)
  // cual va primero y cual va despues
  // me pide que retorne un numero
  // positivo => el primero va antes
  // negativo => el primero va despues
  // 0 => no hacer cambios de orden
  if (elem1 > elem2) {
    return -1
  } else if (elem1 < elem2) {
    return 1
  } else {
    return 0
  }
})

console.log(numbersArray)



const allUsers2 = [
  {username: "Bob", candy: 20}, 
  {username: "sarah", candy: 50}, 
  {username: "patricio", candy: 180},
  {username: "anna", candy: 30},
  {username: "águeda", candy: 30},
]

// allUsers2.sort((user2, user1) => {
//   if (user2.candy > user1.candy) {
//     return 1
//   } else if (user2.candy < user1.candy) {
//     return -1
//   } else {
//     return 0
//   }

//   // cuando hacemos sort numericos
//   // return user2.candy - user1.candy // un negativo o un positivo o 0

// })

allUsers2.sort((user2, user1) => {
  // if (user2.username.toLowerCase() > user1.username.toLowerCase()) {
  //   // JS compara los codigos ascii de cada caracter
  //   // puedo convertir todos los username en minuscula
  //   return 1
  // } else if (user2.username.toLowerCase() < user1.username.toLowerCase()) {
  //   return -1
  // } else {
  //   return 0
  // }

  // cuando hacemos sort de characteres
  return user2.username.localeCompare(user1.username) // 1 o 0
})

console.log(allUsers2)