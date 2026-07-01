(function hideScrollbarGlobal() {
  // Verificação imediata para evitar duplicação
  if (window.hideScrollbarInjected) return;
  window.hideScrollbarInjected = true;
  
  // Método mais eficiente: usar um estilo inline no próprio script
  // Isso evita qualquer delay na aplicação do estilo
  const style = document.createElement('style');
  style.id = 'hide-scrollbar-style';
  style.textContent = `
    /* Aplica imediatamente, antes de qualquer renderização */
    html, body {
      overflow: hidden !important;
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }
    
    html::-webkit-scrollbar,
    body::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
    }
    
    /* Restaura rolagem funcional sem mostrar a barra */
    html.hide-scrollbar, body.hide-scrollbar {
      overflow: auto !important;
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
    }
    
    html.hide-scrollbar::-webkit-scrollbar,
    body.hide-scrollbar::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  `;
  
  // Insere o estilo antes de qualquer outro elemento
  document.documentElement.appendChild(style);
  
  // Aplica a classe definitiva quando o DOM estiver pronto
  function applyFinalStyle() {
    document.documentElement.classList.add('hide-scrollbar');
    document.body.classList.add('hide-scrollbar');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyFinalStyle);
  } else {
    applyFinalStyle();
  }
})();
 