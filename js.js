'use strict'

//console.log('js cargado')
class Pelicula{
  constructor(){
    //console.log('Se ha creado una Pelicula')
    //this es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Mississippi'
    this.narrador= new Narrador()
    this.paco = new PersonajeBueno('Paco')
    this.maria = new PersonajeBueno('Maria')
    this.morgan = new PersonajeMalo('Morgan')
    this.pueblo= new Pueblo('TodoPolvo','muy polvoriento, en mitad del desierto')
    this.paco.arma=new Arma('colt','1','10')
    this.maria.arma= new Arma('escopeta','5','7')
    this.morgan.arma= new Arma('magnum','6','6')
    this.iniciar()
  }
  iniciar(){
    document.write('<h1>'+this.titulo+'</h1>')
    document.write('<p>'+this.pueblo.nombre+' era un pueblo  '+this.pueblo.descripcion+'</p>')
    this.narrador.hablar(' Era una soleada mañana')
    this.paco.hablar(`Hola ${this.maria.nombre}. hoy hace un dia esplendido`)
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad es que sí`)
    this.narrador.hablar(' y juntos se fueron hacia la distancia...')
    this.morgan.hablar('vaya pueblo mas pocho')
    this.morgan.hablar('soy votante de vox')
    this.narrador.hablar(``)
    this.paco.hablar(`mi arma es  ${this.paco.arma.nombrearma}. `)
    this.maria.hablar(`mi arma es  ${this.maria.arma.nombrearma}. `)
    this.morgan.hablar(`mi arma es  ${this.morgan.arma.nombrearma}. `)
    this.paco.arma.disparo()
    this.paco.arma.disparo()
    this.paco.arma.recarga(3)
    this.paco.hablar(`mi arma es  ${this.paco.arma.nombrearma}. `)
  }
}
class Pueblo {
  constructor(nombre,descripcion) {
    this.nombre= nombre
    this.descripcion= descripcion
  }
}
class Narrador{
  hablar(mensaje){
    document.write(`<p class="cursiva"> ${mensaje}</p>`)
  }
}
class Persona {
  constructor(nombre){
      this.nombre= nombre
        this.arma= null;
  }

}
class PersonajeBueno extends Persona
{
  hablar(mensaje){
    document.write(`<p><span class="bueno">-${this.nombre}:</span> ${mensaje}</p>`)
  }
}
class PersonajeMalo extends Persona
{
  hablar(mensaje){
    document.write(`<p><span class="malo">-${this.nombre}:</span> ${mensaje}</p>`)
  }
}
class Arma{
  constructor(nombrearma,balas,balasmax){
    this.nombrearma=nombrearma
    this.balas=balas
    this.balasmax=balasmax
  }
  disparo()
  {
    if(this.balas>=1){
      this.balas=this.balas-1
      document.write(`BUM`)
    }else{
        document.write(`click`)
    }
  }
  recarga(balasintro){
    if(this.balas+balasintro>this.balasmax){
      this.balas=this.balasmax
    }
    else{
      this.balas=this.balas+balasintro
    }
  }
}
class Disparo{

}
new Pelicula()
