let names = ['Rafael', 'Daniel', 'Manuel']

function positions(athletes) {
  let aux = ''

  if (athletes.indexOf('Daniel') != 0) {
    let indexDaniel = athletes.indexOf('Daniel')
    aux = athletes[indexDaniel -1]
    athletes[indexDaniel] = aux 
    athletes[indexDaniel -1 ] = 'Daniel' 

    // athletes.splice(indexDaniel, 1)
    //    athletes.splice(indexDaniel - 1, 0, aux)
       return athletes + '. Este é o pódio '

  } else {
    return " Daniel é o vencedor, " + " esse é o pódio: " + athletes
  }
}
console.log(positions(names))



