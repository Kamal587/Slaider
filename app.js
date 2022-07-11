'use strict'


const rooms = document.querySelectorAll('.room')
const dots = document.querySelectorAll('.dot')
const text_city = document.querySelector('.text_city')
const text_area = document.querySelector('.text_area')
const text_time = document.querySelector('.text_time')
const text_cost = document.querySelector('.text_cost')
const image = document.querySelector('.room_img img')
const left = document.querySelector('.arrow_left')
const right = document.querySelector('.arrow_right')

const entries = [
    {
        text_city: 'Rostov-on-Don LCD admiral',
        text_area: '81 m2',
        text_time: '3.5 months',
        text_cost: 'Upon request',
        image: 'img/image1.png'
    },

    {
        text_city: 'Sochi Thieves',
        text_area: '105 m2',
        text_time: '4 months',
        text_cost: 'Upon request',
        image: 'img/image2.png'
    },

    {
        text_city: 'Rostov-on-Don Patriotic',
        text_area: '93 m2',
        text_time: '3 months',
        text_cost: 'Upon request',
        image: 'img/image3.png'
    },
    
]

let index = 0;


function totalFunc(n) {
    getEntries(n);
    getDots(n);
    setRooms(n)
}

function getEntries(n) {
    text_city.innerHTML = entries[n].text_city;
    text_area.innerText = entries[n].text_area;
    text_time.innerText = entries[n].text_time;
    text_cost.innerText = entries[n].text_cost;
    image.src = entries[n].image;
}

function getDots(n) {
    for(let dot of dots){
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

function setRooms(n) {
    for(let room of rooms){
        room.classList.remove('active')
    }
    rooms[n].classList.add('active')
}

function prevSlide() {
    if(index == 0) {
        index = dots.length - 1;
        totalFunc(index)
    } else {
        index--;
        totalFunc(index)
    }
}

function nextSlide() {
    if(index == dots.length - 1) {
        index = 0;
        totalFunc(index)
    } else {
         index++;
         totalFunc(index)
    }   
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        totalFunc(index)
    })
})

rooms.forEach((item, indexRoom) => {
    item.addEventListener('click', () => {
        index = indexRoom;
        totalFunc(index)
    })
})

right.addEventListener('click', nextSlide)
left.addEventListener('click', prevSlide)