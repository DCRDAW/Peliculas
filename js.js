'use strict'

//console.log('js cargado')
class Pelicula{
  constructor(){
    //console.log('Se ha creado una Pelicula')
    //this es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Mississippi'
    this.narrador= new Narrador()
    this.paco = new PersonajeBueno('Paco','15')
    this.maria = new PersonajeBueno('Maria','10')
    this.morgan = new PersonajeMalo('Morgan','10')
    this.pueblo= new Pueblo('TodoPolvo','muy polvoriento, en mitad del desierto')
    this.paco.arma=new Arma('colt','10','10','95','4')
    this.maria.arma= new Arma('escopeta','7','7','33','15')
    this.morgan.arma= new Arma('magnum','6','6','65','7')
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
    this.morgan.hablar('me voy a quedar con el puedo')
    this.maria.hablar('no, el pueblo será mio')
    this.paco.hablar(`sobre mi tumba`)
    this.narrador.hablar(``)

    while(this.paco.vida>0 && this.maria.vida>0 || this.paco.vida>0 && this.morgan.vida>0 || this.maria.vida>0 && this.morgan.vida>0){
      if(this.paco.vida>0 && this.maria.vida>0){
        this.paco.hablar(`Te voy a disparar, Maria, traidora`)
        this.paco.arma.disparo(this.maria)
      }
      if(this.paco.vida>0 && this.maria.vida>0){
        this.maria.hablar(`te voy a reventar, Paco`)
        this.maria.arma.disparo(this.paco)
      }
      if(this.morgan.vida>0 && this.maria.vida>0){
        this.morgan.hablar(`La ciudad será mia, Maria!`)
        this.morgan.arma.disparo(this.maria)
      }
      if(this.morgan.vida>0 && this.maria.vida>0){
        this.maria.hablar(`Soy la unica propietaria de la ciudad, Morgan`)
        this.maria.arma.disparo(this.morgan)
      }
      if(this.morgan.vida>0 && this.paco.vida>0){
        this.paco.hablar(`Ven aqui Morgan que te reviente`)
        this.paco.arma.disparo(this.morgan)
      }
      if(this.morgan.vida>0 && this.paco.vida>0){
        this.morgan.hablar(`La ciudad será mia, Paco!`)
        this.morgan.arma.disparo(this.paco)
      }
    }
    
    if(this.paco.vida>0){
      
        if(this.paco.vida<5){
          this.narrador.hablar('Paco consiguió ganar, pero a un duro precio, su vida tendia de un hilo y a los pocos dias falleció también,dejando el pueblo sin dueño')
        }
        if(this.paco.vida>=5 && this.paco.vida<10){
          this.narrador.hablar('Paco consiguió ganar, con heridas ciertamente graves, aunque consiguió sobrevivirlas, haciendose dueño de la ciudad')
        } 
        if(this.paco.vida>=10){
          this.narrador.hablar('Paco ganó la pelea sobrado, y se convirtió en el dueño de la ciudad')
        }
      
    }
    if(this.maria.vida>0){
      
      if(this.maria.vida<5){
        this.narrador.hablar('Maria consiguió ganar, pero a un duro precio, su vida tendia de un hilo y a los pocos dias falleció también,dejando el pueblo sin dueño')
      }
      if(this.maria.vida>=5 && this.maria.vida<10){
        this.narrador.hablar('Maria consiguió ganar, con heridas ciertamente graves, aunque consiguió sobrevivirlas, haciendose dueño de la ciudad')
      } 
      if(this.maria.vida>=10){
        this.narrador.hablar('Maria ganó la pelea sobrado, y se convirtió en el dueño de la ciudad')
      }
    
  }
  if(this.morgan.vida>0){
      
    if(this.morgan.vida<5){
      this.narrador.hablar('Morgan consiguió ganar, pero a un duro precio, su vida tendia de un hilo y a los pocos dias falleció también,dejando el pueblo sin dueño')
    }
    if(this.morgan.vida>=5 && this.morgan.vida<10){
      this.narrador.hablar('Morgan consiguió ganar, con heridas ciertamente graves, aunque consiguió sobrevivirlas, haciendose dueño de la ciudad')
    } 
    if(this.morgan.vida>=10){
      this.narrador.hablar('Morgan ganó la pelea sobrado, y se convirtió en el dueño de la ciudad')
    }
  
}
   
   
    
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
  constructor(nombre,vida){
      this.nombre= nombre
      this.vida= vida
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
  constructor(nombrearma,balas,balasmax,precision,danyo){
    this.nombrearma=nombrearma
    this.balas=balas
    this.balasmax=balasmax
    this.precision=precision
    this.danyo= danyo
  }
  disparo(personaje)
  {
    let acierto= Math.floor((Math.random() * (100 - 0 + 1)) + 0);
    if(this.balas>=1){
      this.balas=this.balas-1
      if(this.precision<acierto){
        document.write(`<p>BUM</p> <p class="cursiva">Pero falló</p> `)
      }else{
        document.write(`<p>BUM</p> <p class="cursiva">y dió de lleno a  `+personaje.nombre+' y le hizo '+this.danyo+' de daño</p>')
        personaje.vida=personaje.vida-this.danyo
        if(personaje.vida<=0)
        {
          document.write('<p>'+personaje.nombre+' HA MUERTO!</p>')
        }
      }
      
    }else{
        document.write(`click <br />`)
    }
  }
  recarga(balasintro){
    if(this.balas+balasintro>this.balasmax){
      document.write(`<p class="cursiva">recarga el arma a el maximo</p> `)
      this.balas=this.balasmax
    }
    else{
      this.balas=this.balas+balasintro
      document.write('<p class="cursiva">recarga el arma a '+this.balas+' balas </p> ')
    }
  }

}

new Pelicula()
