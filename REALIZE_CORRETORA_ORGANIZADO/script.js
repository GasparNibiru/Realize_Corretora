const header = document.querySelector('.site-header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelectorAll('.nav a');

    function setHeaderState() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', setHeaderState);
    setHeaderState();

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('mobile-open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('mobile-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    const video = document.getElementById('institutionalVideo');
    const videoBox = document.getElementById('videoBox');
    const videoPlayButton = document.getElementById('videoPlayButton');

    if (video && videoBox && videoPlayButton) {
      const startVideo = () => {
        videoBox.classList.add('has-started');
        video.controls = true;
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              videoBox.classList.add('is-playing');
            })
            .catch(() => {
              videoBox.classList.remove('has-started');
              videoPlayButton.style.display = 'none';
              video.controls = true;
            });
        }
      };

      videoPlayButton.addEventListener('click', startVideo);

      video.addEventListener('play', () => {
        videoBox.classList.add('is-playing');
        videoBox.classList.add('has-started');
      });

      video.addEventListener('pause', () => {
        videoBox.classList.remove('is-playing');
      });

      video.addEventListener('ended', () => {
        videoBox.classList.remove('is-playing');
        videoBox.classList.remove('has-started');
      });

      video.addEventListener('error', () => {
        videoPlayButton.style.display = 'none';
        video.controls = true;
      });
    }

    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
      quoteForm.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const category = document.getElementById('category').value.trim();
        const profile = document.getElementById('profile').value.trim();
        const message = document.getElementById('message').value.trim();

        const text = `Olá, vim pelo site da Realize Seguros.%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Interesse:* ${encodeURIComponent(category)}%0A*Perfil:* ${encodeURIComponent(profile)}%0A*Mensagem:* ${encodeURIComponent(message || 'Não informada')}`;
        window.open(`https://wa.me/558487407044?text=${text}`, '_blank');
      });
    }
