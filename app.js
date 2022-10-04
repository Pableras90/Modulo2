var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;

var hoteles = {
    Merced: {
        name: "Merced",
        location: "Málaga",
        img: "http://www.puydufou.com/espana/sites/default/files/hostel/2020-10/hotelbeatriz_2020_6.jpg",
    },
    Playa: {
        name: "Playa",
        location: "Costa del Sol",
        img: "https://img.blogs.es/anexom/wp-content/uploads/2016/08/hoteles-w-920x515.jpg",
    }
}


var selectedHotel = prompt("Indica el nombre del hotel: Merced o Playa")


document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  dos:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  tres:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  cuatro:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  cinco:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
}

var rating = prompt("¿Puntuación en estrellas: una, dos, tres, cuatro o cinco")

document.getElementById("rating").innerHTML = stars[rating];


