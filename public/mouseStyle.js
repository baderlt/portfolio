
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.style.position = 'absolute';
canvas.style.left=0;
canvas.style.top=0;
canvas.style.zIndex=-1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.style.backgroundColor='transparent';
document.querySelector('#body').appendChild(canvas);
const colors = ['#686868', '#A19FA0', '#4B4778', '#171346'];
let particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.life = 100;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95;
        this.life--;
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

canvas.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
    }
});
let count=0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    count++;
    window.requestAnimationFrame(animate);
}

// animate();
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
