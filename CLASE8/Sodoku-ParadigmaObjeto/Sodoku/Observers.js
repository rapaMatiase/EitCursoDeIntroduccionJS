class Observer{
    constructor(_modelView){
        this.modelView = _modelView
    }

    update(){
        this.modelView.updateView()
    }
}

class ObserverGameOver{
    constructor(_modelSodoku){
        this.modelSodoku = _modelSodoku
    }

    update(){
        this.modelSodoku.isGameOver()
    }
}