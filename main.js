const colorContainer = document.getElementById('colorCode');
const genButton = document.getElementById('genNewBtn');
const symbols = '0123456789ABCDEF';
const wrapper = document.getElementById('wrapper');
let color = '';
genButton.addEventListener('click', () => {
    for(let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    colorContainer.innerHTML = '#' + color;
    wrapper.style.background = '#' + color;
    color = '';
});