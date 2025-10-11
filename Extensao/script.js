// Dados das orientações
const orientacoes = {
  crianca: {
    cafe: 'Leite, frutas frescas, pão integral com queijo branco.',
    almoco: 'Arroz, feijão, carne magra, legumes cozidos.',
    jantar: 'Sopa de legumes, pão integral, frutas.',
  },
  adolescente: {
    cafe: 'Iogurte natural, frutas, granola.',
    almoco: 'Arroz integral, feijão, frango grelhado, salada.',
    jantar: 'Sanduíche natural, suco natural, salada.',
  },
  adulto: {
    cafe: 'Café com leite desnatado, frutas, torradas integrais.',
    almoco: 'Arroz integral, feijão, peixe, salada variada.',
    jantar: 'Salada com proteínas magras, legumes cozidos.',
  },
  idoso: {
    cafe: 'Chá, frutas macias, pão integral com requeijão light.',
    almoco: 'Arroz, feijão, carne magra, legumes cozidos.',
    jantar: 'Sopa leve, salada, frutas.',
  },
};

const condicoes = {
  saudavel: 'Mantenha uma dieta balanceada com variedade de nutrientes.',
  diabetes: 'Evitar açúcares simples e preferir alimentos com baixo índice glicêmico.',
  hipertensao: 'Reduzir sal e alimentos processados, aumentar consumo de potássio.',
  intolerancia: 'Evitar alimentos que causam desconforto, como lactose ou glúten, conforme o caso.',
};

const rendas = {
  baixa: 'Prefira alimentos locais e da estação, que são mais acessíveis.',
  media: 'Combine alimentos frescos com opções práticas e nutritivas.',
  alta: 'Inclua alimentos orgânicos e variados para maior qualidade nutricional.',
};

function mostrarOrientacoes() {
  const faixa = document.getElementById("faixaEtaria").value;
  const condicao = document.getElementById("condicaoSaude").value;
  const renda = document.getElementById("renda").value;
  const resultado = document.getElementById("resultado");

  if (!faixa || !condicao || !renda) {
    resultado.innerHTML = `
      <h5>Orientações Nutricionais</h5>
      <p class='text-danger'>Por favor, preencha todos os campos.</p>
    `;
    return;
  }

  // Monta a mensagem personalizada
  let mensagem = `
    <h5>Orientações Nutricionais</h5>
    <p><strong>Faixa etária:</strong> ${faixa.charAt(0).toUpperCase() + faixa.slice(1)}</p>
    <p><strong>Condição de saúde:</strong> ${condicao.charAt(0).toUpperCase() + condicao.slice(1)}</p>
    <p><strong>Nível de renda:</strong> ${renda.charAt(0).toUpperCase() + renda.slice(1)}</p>

    <h6>Refeições sugeridas:</h6>
    <ul class='text-start'>
      <li><strong>Café da manhã:</strong> ${orientacoes[faixa].cafe}</li>
      <li><strong>Almoço:</strong> ${orientacoes[faixa].almoco}</li>
      <li><strong>Jantar:</strong> ${orientacoes[faixa].jantar}</li>
    </ul>

    <h6>Recomendações adicionais:</h6>
    <p><strong>Condição de saúde:</strong> ${condicoes[condicao]}</p>
    <p><strong>Nível de renda:</strong> ${rendas[renda]}</p>
  `;

  resultado.innerHTML = mensagem;
}
