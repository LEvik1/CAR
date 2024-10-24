let doc = document;


let minus = doc.querySelector('.minus');
let plus = doc.querySelector('.plus');
let num = doc.querySelector('.number_pl_mn')
let dolar = doc.querySelector('.dolar')
let c = 59
function price() {
    dolar.textContent = `$${c}/day`;
}
minus.addEventListener('click',()=>{
    
    c -= 59
    price() 
    num.textContent = parseInt(num.textContent) - 1
    if(parseInt(num.textContent) < '1') {
        num.textContent = '10'
        c = 59 * 10
        price()
    }
})
plus.addEventListener('click',()=>{
    c += 59 
    price() 
    num.textContent = parseInt(num.textContent)  + 1
    if(parseInt(num.textContent) > '10') {
        num.textContent = '1'
        c = 59
        price()
    }else {
        console.log('Ошибка');
        
    }
})

// ----------------------------------------------------------------------------------------
let whites = doc.querySelector('.white');
let blacks = doc.querySelector('.black');
let red = doc.querySelector('.red');
let car_1 = doc.querySelector('.car_1');
let car_2 = doc.querySelector('.car_2');
let car_3 = doc.querySelector('.car_3');
let car_4 = doc.querySelector('.car_4');

function car_img(carSrc, car) {
    car_1.src = carSrc; 
    [car_2, car_3, car_4].forEach(item => item.classList.remove('hov_car'));
    car.classList.add('hov_car'); 
}
red.addEventListener('click', () => {
    car_img("../photo/Photo.png", car_2);
    car_2.src = "../photo/Photo 1.png";
    car_3.src = "../photo/Photo 2.png";
    car_4.src = "../photo/Photo 3.png";
});
whites.addEventListener('click', () => {
    car_img("../photo/chevrolet-cobalt-silver.png", car_2);
    car_2.src = "../photo/chevrolet-cobalt-silver.png";
    car_3.src = "../photo/i.webp";
    car_4.src = "../photo/6449659481.jpg";
});
blacks.addEventListener('click', () => {
    car_img("../photo/J6yZe8hUhyxDJ9JW5jwQV6tr6pizQfr3V1Vid51NxCP7pl1AWr9_4AMz4bzJKxSMyEXqOviorGD2zkqlu91JjnW77RkYR1eDZ72KjoTVMHDqON3p42I.png", car_2);
    car_2.src = "../photo/J6yZe8hUhyxDJ9JW5jwQV6tr6pizQfr3V1Vid51NxCP7pl1AWr9_4AMz4bzJKxSMyEXqOviorGD2zkqlu91JjnW77RkYR1eDZ72KjoTVMHDqON3p42I.png";
    car_3.src = "../photo/chevrolet_optra_1028242.jpg";
    car_4.src = "../photo/vehicle_slider_1.4IUlIra4TGwTlc5haU3V-i-ATmqbg856E45ObpWLRGaT@2x.BqqOUq3aWud2OlCjIg06V8wsHXOhWs9zQU8VmiOzThk";
});
car_2.addEventListener('click', () => {
    car_img(car_2.src, car_2);
});
car_3.addEventListener('click', () => {
    car_img(car_3.src, car_3);
});
car_4.addEventListener('click', () => {
    car_img(car_4.src, car_4);
});
//  -----------------------------------------------------------------
let sec = doc.querySelector('.sec1')
let pos_sec = sec.offsetTop
let jakor = doc.querySelector('.jakor_img')
let backs = doc.querySelector('.backs')
let logo = doc.querySelector('.logo')
jakor .addEventListener('click', (event)=>{
    event.preventDefault()
    window.scrollTo({top: pos_sec - 0, left : 0, behavior: 'smooth'})
})
logo.addEventListener('click', (event)=>{
    event.preventDefault()
    setTimeout(() => {
        backs.classList.toggle('back') 
    }, 100);
    setTimeout(() => {
        backs.classList.toggle('back') 
    }, 2000);
})