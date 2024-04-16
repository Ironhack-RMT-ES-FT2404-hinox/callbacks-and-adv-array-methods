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
  return nuevoElemento
})

console.log(nuevoArr)