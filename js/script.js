
const tusigno = document.querySelector(".tusigno");
const day = document.querySelector('#day');
const month = document.querySelector('#month');

const Aries = "Tu signo solar es Aries! Fuego cardinal; regido por Marte. Fuerza de voluntad, impulsiv@, iniciativa, coraje, energía, actividad. A menudo se lanza de cabeza sobre las cosas."
const Tauro="Tu signo solar es Tauro! Tierra fijo; regido por Venus. Sensual, busca el placer, estable, se esfuerza por lograr seguridad. Ve rojo cuando se le provoca por un tiempo prolongado."
const Geminis="Tu signo solar es Geminis! Aire mudable; regido por Mercurio. Es mental, ingenios@, comunicativ@, móvil, obtiene placer del aprendizaje. Rara vez hace contacto."
const Cancer="Tu signo solar es Cancer! Agua cardinal; regido por la Luna. Es emocional, testarud@, busca la seguridad y la proximidad. Una persona muy de familia."
const Leo="Tu signo solar es Leo! Fuego fijo; regido por el Sol. Glamour, generosidad, organizador/a, el centro de atención. Le gusta jugar el rol de león."
const Virgo="Tu signo solar es Virgo! Tierra mudable; regido por Mercurio. Precis@, diferencia, hace lo necesario, utilitari@. Un punto de vista crítico."
const Libra="Tu signo solar es Libra! Aire cardinal; regido por Venus. Sentido de la belleza y la proporción, tiene tacto, busca el equilibrio y la armonía. A veces revolotea entre las balanzas."
const Escorpio="Tu signo solar es Escorpio! Agua fija; regido por Plutón. Corrosiv@, apasionad@, penetrante, situaciones extremas. Pelea frecuentemente con los espíritus que convoca."
const Sagitario="Tu signo solar es Sagitario! Fuego mudable; regido por Júpiter. Espíritu libre, despreocupado, amor por el movimiento, alegre. Instinto de nómada, a menudo parece estar en otro lugar."
const Capricornio="Tu signo solar es Capricornio! Tierra cardinal; regido por Saturno. Resistente, tiene sentido de propósito, orgullos@, ambicios@. Puede quedarse atascado en las alturas peligrosas."
const Acuario="Tu signo solar es Acuario! Aire fijo; regido por Urano. Comunicativ@, humanitari@, progresista, fraternal. Espíritu universal con una asombrosa obstinación ocasional."
const Piscis="Tu signo solar es Piscis! Agua mudable; regido por Neptuno. Sensible, compasiv@, servicial, sociable. Muy adaptable, difícil de agarrar."


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
