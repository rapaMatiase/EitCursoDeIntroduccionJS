//CASILLA 00
let casilla00_MODELO = new Casilla(1, false)
let casilla00_VIEW = document.getElementById("casilla00")

let casilla00_MODELVIEW = new ModelViewCasilla(
    casilla00_MODELO,
    casilla00_VIEW
)

casilla00_MODELVIEW.event()

let observerCasilla00 = new Observer(casilla00_MODELVIEW)
casilla00_MODELO.subscribe(observerCasilla00)

//CASILLA 01
let casilla01_MODELO = new Casilla(0, true)
let casilla01_VIEW = document.getElementById("casilla01")

let casilla01_MODELVIEW = new ModelViewCasilla(
    casilla01_MODELO,
    casilla01_VIEW
)

casilla01_MODELVIEW.event()

let observercasilla01 = new Observer(casilla01_MODELVIEW)
casilla01_MODELO.subscribe(observercasilla01)

//CASILLA 02
let casilla02_MODELO = new Casilla(0, true)
let casilla02_VIEW = document.getElementById("casilla02")

let casilla02_MODELVIEW = new ModelViewCasilla(
    casilla02_MODELO,
    casilla02_VIEW
)

casilla02_MODELVIEW.event()

let observercasilla02 = new Observer(casilla02_MODELVIEW)
casilla02_MODELO.subscribe(observercasilla02)

//CASILLA 10
let casilla10_MODELO = new Casilla(2, false)
let casilla10_VIEW = document.getElementById("casilla10")

let casilla10_MODELVIEW = new ModelViewCasilla(
    casilla10_MODELO,
    casilla10_VIEW
)

casilla10_MODELVIEW.event()

let observercasilla10 = new Observer(casilla10_MODELVIEW)
casilla10_MODELO.subscribe(observercasilla10)

//CASILLA 11
let casilla11_MODELO = new Casilla(0, true)
let casilla11_VIEW = document.getElementById("casilla11")

let casilla11_MODELVIEW = new ModelViewCasilla(
    casilla11_MODELO,
    casilla11_VIEW
)

casilla11_MODELVIEW.event()

let observercasilla11 = new Observer(casilla11_MODELVIEW)
casilla11_MODELO.subscribe(observercasilla11)

//CASILLA 12
let casilla12_MODELO = new Casilla(0, true)
let casilla12_VIEW = document.getElementById("casilla12")

let casilla12_MODELVIEW = new ModelViewCasilla(
    casilla12_MODELO,
    casilla12_VIEW
)

casilla12_MODELVIEW.event()

let observercasilla12 = new Observer(casilla12_MODELVIEW)
casilla12_MODELO.subscribe(observercasilla12)

//CASILLA 20
let casilla20_MODELO = new Casilla(3, false)
let casilla20_VIEW = document.getElementById("casilla20")

let casilla20_MODELVIEW = new ModelViewCasilla(
    casilla20_MODELO,
    casilla20_VIEW
)

casilla20_MODELVIEW.event()

let observercasilla20 = new Observer(casilla20_MODELVIEW)
casilla20_MODELO.subscribe(observercasilla20)

//CASILLA 21
let casilla21_MODELO = new Casilla(0, true)
let casilla21_VIEW = document.getElementById("casilla21")

let casilla21_MODELVIEW = new ModelViewCasilla(
    casilla21_MODELO,
    casilla21_VIEW
)

casilla21_MODELVIEW.event()

let observercasilla21 = new Observer(casilla21_MODELVIEW)
casilla21_MODELO.subscribe(observercasilla21)

//CASILLA 22
let casilla22_MODELO = new Casilla(0, true)
let casilla22_VIEW = document.getElementById("casilla22")

let casilla22_MODELVIEW = new ModelViewCasilla(
    casilla22_MODELO,
    casilla22_VIEW
)

casilla22_MODELVIEW.event()

let observercasilla22 = new Observer(casilla22_MODELVIEW)
casilla22_MODELO.subscribe(observercasilla22)

/* ARRANCA EL SODOKU, EL JUEGO PROPIAMENTE DICHO */

let sodoku_MODELO = new Sodoku(
    [
        [casilla00_MODELO, casilla01_MODELO, casilla02_MODELO],
        [casilla10_MODELO, casilla11_MODELO, casilla12_MODELO],
        [casilla20_MODELO, casilla21_MODELO, casilla22_MODELO]
    ]
)

let sodoku_VIEW = document.getElementById("panel")

let sodoku_MODELVIEW = new ModelViewSodoku(
    sodoku_MODELO, 
    sodoku_VIEW
    )

let oberserSodoku = new Observer(sodoku_MODELVIEW)
sodoku_MODELO.subcribe(oberserSodoku)

/* DE LA SIGUEINTE FORMA RESULVO QUE EL SODOKU SEA NOTIFICADO CADA VEZ QUE UNA CASILLA ES MODIFICADA PARA QUE CONTROLE SI SE TERMINO EL JUEGO */

let observerGameOver = new ObserverGameOver(sodoku_MODELO)

casilla00_MODELO.subscribe(observerGameOver)
casilla01_MODELO.subscribe(observerGameOver)
casilla02_MODELO.subscribe(observerGameOver)
casilla10_MODELO.subscribe(observerGameOver)
casilla11_MODELO.subscribe(observerGameOver)
casilla12_MODELO.subscribe(observerGameOver)
casilla20_MODELO.subscribe(observerGameOver)
casilla21_MODELO.subscribe(observerGameOver)
casilla22_MODELO.subscribe(observerGameOver)
