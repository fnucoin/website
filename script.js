const container = document.getElementById('body');

    setTimeout(() => {
      for (let i = 0; i < 16; i++) {
        const img = document.createElement('img');
        img.src = 'guy.png'; 

        const startX = 100 + Math.random() * (container.clientWidth - 200);
        const startY = 600 + Math.random() * (container.clientHeight - 200);
        img.style.left = startX + 'px';
        img.style.top  = startY + 'px';

        const radius   = 20 + Math.random() * 2000;
        const duration = 2  + Math.random() * 5;

        img.style.setProperty('--r', radius + 'px');
        img.style.animationDuration = duration + 's';

        container.appendChild(img);
      }
    }, 3000);