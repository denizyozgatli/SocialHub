console.log("Script yüklendi.");

window.onload = function() {
    const textElement = document.getElementById('effect-text');
    const text = textElement.textContent;
    let i = 0;
    
    textElement.textContent = '';
    textElement.style.visibility = 'visible';
  
    const typingEffect = setInterval(() => {
      textElement.textContent += text[i];
      i++;
      if (i === text.length) {
        clearInterval(typingEffect);
        setTimeout(() => {
          textElement.style.borderRight = 'transparent';
        }, 2000);
      }
    }, 200);
  };