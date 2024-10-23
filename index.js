var listadejuegos = [
    {
        nombre: "Tekken 7",
        img: [
            "./img/tekken7.jpg"
        ]
    },
    {
        nombre: "Resident Evil 4",
        img: [
            "./img/re4.jpeg"
        ]
    },
    {
        nombre: "Grand theft auto 5",
        img: [
            "./img/gta5.jpg"
        ]
    }
]

var jugados = document.getElementById("jugados")
var juego = ""
for (let i = 0; i < listadejuegos.length; i++) {
    for (let j = 0; j < listadejuegos[i].img.length; j++){
        juego += '<a href="'+ listadejuegos[i].link +'"><img src="'+ listadejuegos[i].img[j]
    }
    
}
jugados.innerHTML = juego