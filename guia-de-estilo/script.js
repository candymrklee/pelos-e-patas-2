// Lógica de manipulação de tamanho de fonte (Aumentar, Reduzir e Restaurar)
document.addEventListener('DOMContentLoaded', () => {
  let currentFontSize = 16; // Tamanho padrão em px
  const defaultFontSize = 16;
  
  const rootElement = document.documentElement;
  const btnIncrease = document.getElementById('btnIncrease');
  const btnDecrease = document.getElementById('btnDecrease');
  const btnReset = document.getElementById('btnReset');

  // Aumentar texto
  btnIncrease.addEventListener('click', () => {
    if (currentFontSize < 24) { // Limite máximo
      currentFontSize += 2;
      rootElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
  });

  // Reduzir texto
  btnDecrease.addEventListener('click', () => {
    if (currentFontSize > 12) { // Limite mínimo
      currentFontSize -= 2;
      rootElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
  });

  // Restaurar tamanho original
  btnReset.addEventListener('click', () => {
    currentFontSize = defaultFontSize;
    rootElement.style.setProperty('--base-font-size', `${defaultFontSize}px`);
  });
});
