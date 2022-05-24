
const tusigno = document.querySelector(".tusigno");
const day = document.querySelector('#day');
const month = document.querySelector('#month');

const Aries = "Tu signo solar es Aries! Fuego cardinal; regido por Marte. Mucha fuerza de voluntad, impulsividad, iniciativa, coraje, energía, actividad. A menudo se lanza de cabeza sobre las cosas."
const Tauro="Tu signo solar es Tauro! Tierra fijo; regido por Venus. Es sensual, busca el placer, la estabilidad y se esfuerza por lograr seguridad. Ve rojo cuando se le provoca por un tiempo prolongado."
const Geminis="Tu signo solar es Geminis! Aire mutable; regido por Mercurio. Es mental, ingeniosx, comunicativx, no se queda quietx, obtiene placer del aprendizaje. Rara vez hace contacto."
const Cancer="Tu signo solar es Cancer! Agua cardinal; regido por la Luna. Es emocional, testarudx, busca la seguridad y la proximidad. Una persona muy de familia."
const Leo="Tu signo solar es Leo! Fuego fijo; regido por el Sol. Posee glamour, generosidad, le gusta ser quien organiza y el centro de atención."
const Virgo="Tu signo solar es Virgo! Tierra mutable; regido por Mercurio. Es precisx, sabe diferenciar, hace lo necesario y lo que tiene utilidad. Un punto de vista crítico."
const Libra="Tu signo solar es Libra! Aire cardinal; regido por Venus. Sentido de la belleza y la proporción, tiene tacto, busca el equilibrio y la armonía."
const Escorpio="Tu signo solar es Escorpio! Agua fija; regido por Plutón. Corrosivx, apasionadx, penetrante, a veces se encuentra inmerso en situaciones extremas. Pelea frecuentemente con los espíritus que convoca."
const Sagitario="Tu signo solar es Sagitario! Fuego mutable; regido por Júpiter. Espíritu libre y despreocupado, posee amor por el movimiento y es alegre. Tiene un instinto de nómada, a menudo parece estar en otro lugar."
const Capricornio="Tu signo solar es Capricornio! Tierra cardinal; regido por Saturno. Resistente, tiene sentido de propósito, bastante orgullosx y ambiciosx."
const Acuario="Tu signo solar es Acuario! Aire fijo; regido por Urano. Comunicativx, humanitarix, progresista. Espíritu universal con una asombrosa obstinación ocasional."
const Piscis="Tu signo solar es Piscis! Agua mutable; regido por Neptuno. Sensible, compasivx, servicial, sociable. Muy adaptable y difícil de encasillar"


tusigno.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(day.value,month.value);
        if (month.value == 1 && day.value >= 20 || month.value  == 2 && day.value <= 18) {const span = document.querySelector('#resultado') ; span.textContent = Acuario; }
        if (month.value  == 1 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 2 && day.value >= 19 || month.value  == 3 && day.value <= 20) { const span = document.querySelector('#resultado') ; span.textContent = Piscis; }
        if (month.value  == 2 && day.value > 29) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 3 && day.value >= 21 || month.value  == 4 && day.value <= 19) { const span = document.querySelector('#resultado') ; span.textContent = Aries; }
        if (month.value  == 3 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 4 && day.value >= 20 || month.value  == 5 && day.value <= 20) { const span = document.querySelector('#resultado') ; span.textContent  = Tauro; }
        if (month.value  == 4 && day.value > 30) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 5 && day.value >= 21 || month.value  == 6 && day.value <= 21) { const span = document.querySelector('#resultado') ; span.textContent = Geminis; }
        if (month.value  == 5 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 6 && day.value >= 22 || month.value  == 7 && day.value <= 22) { const span = document.querySelector('#resultado') ; span.textContent = Cancer; }
        if (month.value  == 6 && day.value > 30) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 7 && day.value >= 23 || month.value  == 8 && day.value <= 22) { const span = document.querySelector('#resultado') ; span.textContent = Leo; }
        if (month.value  == 7 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 8 && day.value >= 23 || month.value  == 9 && day.value <= 22) { const span = document.querySelector('#resultado') ; span.textContent = Virgo; }
        if (month.value  == 8 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 9 && day.value >= 23 || month.value  == 10 && day.value <= 22) { const span = document.querySelector('#resultado') ; span.textContent = Libra; }
        if (month.value  == 9 && day.value > 30) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 10 && day.value >= 23 || month.value  == 11 && day.value <= 21) { const span = document.querySelector('#resultado') ; span.textContent = Escorpio; }
        if (month.value  == 10 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 11 && day.value >= 22 || month.value  == 12 && day.value <= 21) { const span = document.querySelector('#resultado') ; span.textContent = Sagitario; }
        if (month.value  == 11 && day.value > 30) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
        if (month.value  == 12 && day.value >= 22 || month.value  == 1 && day.value <= 19) { const span = document.querySelector('#resultado') ; span.textContent = Capricornio; }
        if (month.value  == 12 && day.value > 31) { const span = document.querySelector('#resultado') ; span.textContent = 'No es una fecha válida'; }
    })



const formcontact = document.querySelector('.contact');

formcontact.addEventListener('submit', (formevent) => {
    formevent.preventDefault();
    const expresion = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
if (!email.value.match(expresion)) {
    const span = document.querySelector('#error'); span.textContent = 'No es un email'
} 
else {
    formcontact.submit()
    } 
})    