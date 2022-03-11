class ModelViewCasilla {
    constructor(
        _model,
        _view
    ){
        this.model = _model
        this.view = _view
        this.load()
    }

    load(){
        this.updateView()
    }

    event(){
        let self = this.model
        this.view.addEventListener("click", function(){
            self.addNumber() //EQUIVALE a this.model.addNumber()
        })
    }

    updateView(){
        //Obtengo el nuevo valor del modelo y lo muestro en la interfaz de usuario
        let valor = this.model.getValor()
        this.view.innerHTML = valor

        if(valor == 1){
            this.view.style.backgroundColor = "green"
        }else if ( valor == 2){
            this.view.style.backgroundColor = "yellow"
        }else{
            this.view.style.backgroundColor = "red"
        }
    }
}

class ModelViewSodoku{
    constructor(
        _model,
        _view
    ){
        this.model = _model
        this.view = _view
    }   

    event(){
        
    }

    updateView(){
        //Obtengo el nuevo valor del modelo y lo muestro en la interfaz de usuario
        if( this.model.getGameState() == true){
            this.view.innerHTML = "Juego terminado"
        }
    }
}