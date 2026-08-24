// Alterna entre as abas de Mastite Clínica e Subclínica
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  
  // Esconde todas as abas
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Remove o estado ativo dos botões
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Ativa a aba selecionada
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Avalia os sintomas no componente interativo de diagnóstico
function avaliarSintoma() {
  const select = document.getElementById("sintomaSelect");
  const resultado = document.getElementById("resultadoDiag");
  const valor = select.value;

  if (valor === "grumos" || valor === "incho") {
    resultado.innerHTML = "<strong style='color:#c0392b;'>Alerta de Mastite Clínica:</strong> Descarte o leite deste teto e inicie o tratamento medicamentoso com acompanhamento veterinário.";
  } else if (valor === "ccs") {
    resultado.innerHTML = "<strong style='color:#d35400;'>Alerta de Mastite Subclínica:</strong> Realize o teste CMT em todo o rebanho para identificar os animais transmissores silenciosos.";
  } else {
    resultado.innerHTML = "Selecione um sintoma para ver a recomendação.";
  }
}