// set variables
let gridSize = 0;
let currentColor = 'black';

// set constants
let boxes = [];
const BOXBACKGROUND = 'transparent';

// set selectors
const screen = document.querySelector('#screen');

// align active button with default currentColo
document.querySelector('#black').style.backgroundColor = 'rgba(255, 217, 0, 0.25)';

// set eventListeners
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let button = document.querySelector(`#${ e.target.id }`)
        switch(e.target.id) {
            case 'choose-size': 
                setGridSize();
                break;
            case 'clear-screen': 
                clearScreen();
                break;
            case 'eraser': 
                setPenColor(BOXBACKGROUND);
                button.style.backgroundColor = 'rgba(255, 217, 0, 0.25)';
                document.querySelector('#yellow').style.backgroundColor = 'transparent';
                document.querySelector('#black').style.backgroundColor = 'transparent';
                break;
            case 'yellow': 
                setPenColor('yellow');
                button.style.backgroundColor = 'rgba(255, 217, 0, 0.25)';
                document.querySelector('#black').style.backgroundColor = 'transparent';
                document.querySelector('#eraser').style.backgroundColor = 'transparent';
                break;
            case 'black': 
                setPenColor('black');
                button.style.backgroundColor = 'rgba(255, 217, 0, 0.25)';
                document.querySelector('#yellow').style.backgroundColor = 'transparent';
                document.querySelector('#eraser').style.backgroundColor = 'transparent';
                break;
        }
    })
})

function setGridSize () {
    gridSize = parseInt(prompt("Choose a grid size from 1-100:", ""));
    screen.innerHTML = '';
    boxes = []
    let boxWidth = 900 / gridSize;
    let boxHeight = 500 / gridSize;
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id', `pixel${ i }`);
        box.style.width = `${ boxWidth }px`;
        box.style.height = `${ boxHeight }px`;
        box.addEventListener('mouseover', (e) => {
            if (currentColor === 'transparent') box.style.backgroundColor = 'black';
            else box.style.backgroundColor = currentColor;
        });
        screen.appendChild(box);
        boxes.push(box);
    };
};

function clearScreen () {
    boxes.forEach((box) => {
        box.style.backgroundColor = 'transparent';
    });
};

function setPenColor (color) {
    console.log(color)
    boxes.forEach((box) => {
        box.removeEventListener('mouseover', (e) => {
            box.style.backgroundColor = currentColor;
        });
        box.addEventListener('mouseover', (e) => {
            box.style.backgroundColor = color;
        });
        currentColor = color;
    });
};

