let doc = document;


let minus = doc.querySelector('.minus');
let plus = doc.querySelector('.plus');
let num = doc.querySelector('.number_pl_mn')
let dolar = doc.querySelector('.dolar')
function get_n() {
    return Number(num.textContent);
}
let c = 59
function price() {
    dolar.textContent = `$${c}/day`;
}

minus.addEventListener('click',()=>{
    
    c -= 59
    price() 
    let sif = get_n()
    num.textContent = sif - 1
})
plus.addEventListener('click',()=>{
    c += 59
    price() 
    let sif = get_n()
    num.textContent = sif + 1
})

let whites = doc.querySelector('.white');
let blacks = doc.querySelector('.black');
let blues = doc.querySelector('.blue');
let car_1 = doc.querySelector('.car_1')
let car_2 = doc.querySelector('.car_2')
let car_3 = doc.querySelector('.car_3')
let car_4 = doc.querySelector('.car_4')
let car_5 = doc.querySelector('.car_5')
let car_6 = doc.querySelector('.car_6')

whites.addEventListener('click',()=>{
    car_1.classList.remove('cars_hide');
    car_2.classList.remove('cars_hide');
    car_3.classList.add('cars_hide');
    car_4.classList.add('cars_hide');
    car_5.classList.add('cars_hide');
    car_6.classList.add('cars_hide');
})
blacks.addEventListener('click', ()=>{
    car_1.classList.add('cars_hide')
    car_2.classList.add('cars_hide')
    car_3.classList.remove('cars_hide')
    car_4.classList.remove('cars_hide')
    car_5.classList.add('cars_hide')
    car_6.classList.add('cars_hide') 
})
blues.addEventListener('click', ()=>{
    car_1.classList.add('cars_hide')
    car_2.classList.add('cars_hide')
    car_3.classList.add('cars_hide')
    car_4.classList.add('cars_hide')
    car_5.classList.remove('cars_hide')
    car_6.classList.remove('cars_hide') 
})




let sec = document.querySelector('.sec1')
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