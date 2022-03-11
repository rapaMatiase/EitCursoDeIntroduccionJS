class Sodoku{
    constructor(
        _matrix
    ){
        this.matrix = _matrix
        this.observers = []
        this.gameState = false
    }

    getGameState(){
        return this.gameState
    }

    _noHayRepetidosEnFilas(){
        let noHayRepetidos = true
        for(let i = 0 ; i < this.matrix.length ; i++){
            if(this.matrix[i][0].getValor() == this.matrix[i][1].getValor() || this.matrix[i][0].getValor() == this.matrix[i][2].getValor() || this.matrix[i][0].getValor() == 0 || this.matrix[i][1].getValor() == 0 || this.matrix[i][2].getValor() == 0){
                noHayRepetidos = false
            }
        } 
        return noHayRepetidos
    }

    _noHayRepetidosEnColumnas(){
        let noHayRepetidos = true
        for(let j = 0 ; j < this.matrix.length ; j++){
            if(this.matrix[0][j].getValor() == this.matrix[1][j].getValor() || this.matrix[0][j].getValor() == this.matrix[2][j].getValor() || this.matrix[0][j].getValor() == 0 || this.matrix[1][j].getValor() == 0 || this.matrix[2][j].getValor() == 0){
                noHayRepetidos = false
            }
        } 
        return noHayRepetidos
    }

    isGameOver(){
        //Si el juego se termino?
        if(this._noHayRepetidosEnColumnas() || this._noHayRepetidosEnFilas()){
            console.log("El juego se termino")
            this.gameState = true //Juego terminado
        }else{
            console.log("El juego continua")
        }
        this._notify()
    }

    subcribe(obs){
        this.observers.push(obs)
    }

    _notify(){
        for(let i = 0 ; i < this.observers.length ; i++){
            this.observers[i].update()
        }
    }
}