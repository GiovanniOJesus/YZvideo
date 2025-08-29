document.addEventListener('DOMContentLoaded', function() {
  // Função genérica para a barra de busca
  const searchButton = document.getElementById('searchButton');
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      const query = document.getElementById('searchInput').value;
      if (query) {
        alert('Pesquisa por: ' + query); // Placeholder para lógica de busca
      } else {
        alert('Por favor, insira um termo de busca.');
      }
    });
  }

  // Lógica específica por página
  const pageTitle = document.title.toLowerCase();
      });
  // Outras páginas não requerem lógica adicional no momento
  // Adicione aqui se necessário lógica específica para outras páginas (ex.: Notícias, Políticas, etc.)
;