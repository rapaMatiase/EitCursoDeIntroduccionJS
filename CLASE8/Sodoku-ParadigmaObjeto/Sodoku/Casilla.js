class Casilla{

    constructor(
        _valor,
        _estado
    ){
        //Lo que muestro en pantalla
        this.valor = _valor
        //Si puedo o no ser modificado mi valor
        this.estado = _estado
        this.observers = []
    }

    getValor(){
        return this.valor
    }

    estaHabilitad(){
        return this.estado
    }

    addNumber(){
        if(this.estaHabilitad() == true){
            if(this.valor < 3){
                this.valor++
            }else{
                this.valor = 1
            }
        }
        this._notify()
    }

    subtractNumber(){
        if(this.estaHabilitad() == true){
            if(1 < this.valor){
                this.valor--
            }else{
                this.valor = 3
            }
        }
        this._notify()
    }

    subscribe(obs){
        this.observers.push(obs)
    }

    unSubscribe(obs){
        //No lo vamos a implementar para no tener que entrar en detalles de Javascript
    }

    _notify(){
        for(let i = 0 ; i < this.observers.length ; i++){
            this.observers[i].update()
        }
    }

}