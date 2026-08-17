function analisarMastite() {
  // Captura os dados informados pelo usuário
  const aspecto = document.getElementById('aspectoLeite').value;
  const ccs = parseFloat(document.getElementById('ccs').value);
  const divResultado = document.getElementById('resultado');

  // Validação de entrada
  if (isNaN(ccs) || ccs < 0) {
    divResultado.style.display = 'block';
    divResultado.className = 'res-clinica';
    divResultado.innerHTML = '⚠️ Por favor, informe um valor válido de CCS.';
    return;
  }

  divResultado.style.display = 'block';

  // Lógica para identificação do tipo de mastite
  if (aspecto === 'grumos' || aspecto === 'aquoso') {
    divResultado.className = 'res-clinica';
    divResultado.innerHTML = '🔴 <strong>DIAGNÓSTICO: MASTITE CLÍNICA</strong><br>O leite apresenta alterações visíveis. O animal deve ser isolado do lote de ordenha e submetido ao tratamento/protocolo veterinário específico.';
  } 
  else if (ccs > 200) {
    divResultado.className = 'res-subclinica';
    divResultado.innerHTML = `🟡 <strong>DIAGNÓSTICO: MASTITE SUBCLÍNICA</strong><br>Apesar de o leite parecer normal, a CCS está elevada (${ccs}.000 cél/mL - limite saudável até 200.000 cél/mL). Recomendado realizar teste CMT individual por teto.`;
  } 
  else {
    divResultado.className = 'res-normal';
    divResultado.innerHTML = `🟢 <strong>DIAGNÓSTICO: SAUDÁVEL / NORMAL</strong><br>Leite sem alterações visíveis e CCS em nível adequado (${ccs}.000 cél/mL). Mantenha as boas práticas de manejo e higienização.`;
  }
}