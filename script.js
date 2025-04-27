// Scroll suave para os links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Animação ao enviar formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Agradecemos o seu contato.');
    this.reset();
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2,
});

const elements = document.querySelectorAll('.reveal');
elements.forEach(el => observer.observe(el));


// Configurando particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff1493"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.5,
        "random": true,
      },
      "size": {
        "value": 4,
        "random": true,
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff1493",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        }
      }
    },
    "retina_detect": true
  });
  