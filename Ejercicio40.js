const persona={
  peso:65,
  estatura:1.8,
  bmi:function(){
    return this.peso/(this.estatura*this.estatura)
  }
}
console.log(persona.bmi());