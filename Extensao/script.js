function mostrarOrientacoes() {
  const faixaEtaria = document.getElementById("faixaEtaria").value;
  const condicaoSaude = document.getElementById("condicaoSaude").value;
  const renda = document.getElementById("renda").value;
  const resultado = document.getElementById("resultado");

  if (!faixaEtaria || !condicaoSaude || !renda) {
    resultado.innerHTML =
      "<h5 class='text-danger'>⚠️ Preencha todos os campos para continuar!</h5>";
    return;
  }

  let orientacao = `
    <h5>🍽️ Plano Alimentar Diário Personalizado</h5>
    <p><strong>Faixa Etária:</strong> ${
      faixaEtaria.charAt(0).toUpperCase() + faixaEtaria.slice(1)
    }<br>
    <strong>Condição de Saúde:</strong> ${
      condicaoSaude.charAt(0).toUpperCase() + condicaoSaude.slice(1)
    }<br>
    <strong>Nível de Renda:</strong> ${
      renda.charAt(0).toUpperCase() + renda.slice(1)
    }</p>
  `;

  // Cardápio detalhado por faixa etária e renda
  const cardapio = {
    crianca: {
      baixa: {
        cafe: [
          "Pão francês com requeijão",
          "Leite ou achocolatado",
          "Banana ou mamão",
        ],
        almoco: [
          "Arroz, feijão e frango desfiado",
          "Cenoura e abóbora cozida",
          "Suco natural",
        ],
        lanche: [
          "Biscoito simples",
          "Pão caseiro com queijo",
          "Água ou chá de ervas",
        ],
        janta: [
          "Sopa de legumes com macarrão",
          "Pão integral pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte com aveia e mel",
          "Fruta da estação",
        ],
        almoco: [
          "Arroz integral, feijão e carne magra",
          "Brócolis e salada de folhas",
          "Suco natural",
        ],
        lanche: ["Sanduíche integral", "Mix de frutas", "Suco natural"],
        janta: [
          "Peixe grelhado com legumes",
          "Purê de batata-doce",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre",
          "Smoothie de frutas vermelhas",
          "Pão integral com pasta de amendoim",
        ],
        almoco: [
          "Salmão com quinoa e legumes orgânicos",
          "Salada com azeite e castanhas",
          "Água saborizada",
        ],
        lanche: [
          "Iogurte grego com mel",
          "Torradas com pasta de abacate",
          "Suco detox",
        ],
        janta: [
          "Creme de abóbora com frango",
          "Homus com torradas integrais",
          "Chá de ervas",
        ],
      },
    },
    adolescente: {
      baixa: {
        cafe: [
          "Pão francês com ovo mexido",
          "Leite ou café com leite",
          "Fruta acessível",
        ],
        almoco: [
          "Arroz, feijão e carne moída",
          "Salada simples",
          "Suco natural",
        ],
        lanche: ["Biscoito integral", "Pão com queijo", "Chá ou água"],
        janta: ["Sopa de legumes com macarrão", "Pão integral", "Fruta leve"],
      },
      media: {
        cafe: [
          "Tapioca com queijo ou ovo",
          "Iogurte com frutas",
          "Café preto ou suco",
        ],
        almoco: [
          "Arroz integral, feijão e frango grelhado",
          "Legumes cozidos",
          "Suco natural",
        ],
        lanche: ["Sanduíche integral", "Frutas ou castanhas", "Suco natural"],
        janta: ["Filé de peixe ou frango", "Legumes no vapor", "Chá de ervas"],
      },
      alta: {
        cafe: [
          "Omelete com legumes",
          "Smoothie de frutas",
          "Pão integral com pasta de amendoim",
        ],
        almoco: [
          "Salmão ou frango orgânico com quinoa",
          "Salada variada",
          "Água saborizada",
        ],
        lanche: [
          "Iogurte grego com frutas secas",
          "Torradas com abacate",
          "Suco detox",
        ],
        janta: [
          "Creme de legumes com frango",
          "Homus integral",
          "Chá ou água com limão",
        ],
      },
    },
    adulto: {
      baixa: {
        cafe: ["Pão integral com ovo", "Leite ou café", "Fruta simples"],
        almoco: [
          "Arroz, feijão, carne cozida",
          "Legumes refogados",
          "Suco natural",
        ],
        lanche: ["Biscoito integral", "Pão com queijo", "Chá"],
        janta: ["Sopa de legumes com macarrão", "Pão integral", "Fruta leve"],
      },
      media: {
        cafe: ["Tapioca com queijo", "Iogurte com aveia", "Fruta fresca"],
        almoco: [
          "Arroz integral, feijão, carne magra",
          "Salada colorida",
          "Suco natural",
        ],
        lanche: ["Sanduíche integral", "Frutas ou castanhas", "Suco natural"],
        janta: ["Peixe ou frango grelhado", "Legumes no vapor", "Chá de ervas"],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo",
          "Smoothie de frutas vermelhas",
          "Pão integral com pasta de amendoim",
        ],
        almoco: [
          "Salmão com quinoa",
          "Salada com azeite e castanhas",
          "Água saborizada",
        ],
        lanche: [
          "Iogurte grego com frutas secas",
          "Torradas com abacate",
          "Suco detox",
        ],
        janta: [
          "Creme de abóbora com frango",
          "Homus com torradas integrais",
          "Chá de ervas",
        ],
      },
    },
    idoso: {
      baixa: {
        cafe: ["Pão amolecido com requeijão", "Leite morno", "Fruta macia"],
        almoco: [
          "Arroz, feijão e frango desfiado",
          "Legumes cozidos",
          "Suco natural",
        ],
        lanche: ["Biscoito leve", "Pão com queijo", "Chá"],
        janta: ["Sopa de legumes com macarrão", "Pão macio", "Fruta leve"],
      },
      media: {
        cafe: ["Tapioca com queijo", "Iogurte natural", "Fruta macia"],
        almoco: [
          "Arroz integral, feijão, frango cozido",
          "Legumes cozidos no vapor",
          "Suco natural",
        ],
        lanche: [
          "Sanduíche integral macio",
          "Frutas amassadas",
          "Suco natural",
        ],
        janta: ["Peixe ou frango leve", "Legumes cozidos", "Chá de ervas"],
      },
      alta: {
        cafe: [
          "Omelete leve com legumes",
          "Smoothie de frutas",
          "Pão integral macio com pasta de amendoim",
        ],
        almoco: [
          "Peixe ou frango orgânico",
          "Salada cozida ou folhas macias",
          "Água saborizada",
        ],
        lanche: [
          "Iogurte grego com mel",
          "Torradas integrais macias",
          "Suco detox leve",
        ],
        janta: ["Creme de legumes com frango", "Homus macio", "Chá de ervas"],
      },
    },
  };

  const cardapioDiabetes = {
    crianca: {
      baixa: {
        cafe: [
          "Pão integral com queijo branco",
          "Leite desnatado sem açúcar",
          "Maçã com casca",
        ],
        almoco: [
          "Arroz integral, feijão e frango grelhado",
          "Abobrinha e cenoura cozidas",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Biscoito integral sem açúcar",
          "Banana amassada com aveia",
          "Chá de camomila sem açúcar",
        ],
        janta: [
          "Sopa de legumes com frango desfiado",
          "Pão integral pequeno",
          "Pera cozida",
        ],
      },
      media: {
        cafe: [
          "Tapioca com ovo mexido",
          "Iogurte natural sem açúcar com chia",
          "Morangos frescos",
        ],
        almoco: [
          "Quinoa, feijão preto e carne magra grelhada",
          "Brócolis e salada de folhas",
          "Suco de limão com adoçante",
        ],
        lanche: [
          "Pão integral com pasta de ricota",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de abóbora",
          "Salada de legumes cozidos",
          "Chá de ervas",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo branco",
          "Smoothie de frutas vermelhas com linhaça",
          "Pão integral com pasta de amendoim sem açúcar",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego sem açúcar com frutas vermelhas",
          "Torradas integrais com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de abóbora com frango desfiado",
          "Homus com palitos de cenoura",
          "Chá de camomila",
        ],
      },
    },

    adolescente: {
      baixa: {
        cafe: [
          "Pão integral com ovo mexido",
          "Leite desnatado sem açúcar",
          "Maçã com casca",
        ],
        almoco: [
          "Arroz integral, feijão e carne magra",
          "Cenoura e abobrinha cozidas",
          "Suco de limão sem açúcar",
        ],
        lanche: [
          "Biscoito integral sem açúcar",
          "Banana com aveia",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com frango",
          "Pão integral pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte natural sem açúcar com chia",
          "Frutas vermelhas",
        ],
        almoco: [
          "Quinoa, feijão preto e frango grelhado",
          "Brócolis e salada verde",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche integral com pasta de ricota",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo branco",
          "Smoothie de frutas vermelhas com linhaça",
          "Pão integral com pasta de amendoim sem açúcar",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego sem açúcar com frutas vermelhas",
          "Torradas integrais com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de abóbora com frango desfiado",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },

    adulto: {
      baixa: {
        cafe: [
          "Pão integral com ovo cozido",
          "Café sem açúcar",
          "Fruta com casca",
        ],
        almoco: [
          "Arroz integral, feijão e carne magra",
          "Legumes refogados",
          "Suco natural sem açúcar",
        ],
        lanche: ["Biscoito integral", "Banana com aveia", "Chá de ervas"],
        janta: [
          "Sopa de legumes com frango",
          "Pão integral pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte natural com chia",
          "Frutas vermelhas",
        ],
        almoco: [
          "Quinoa, feijão preto e frango grelhado",
          "Brócolis e salada verde",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche integral com pasta de ricota",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo branco",
          "Smoothie de frutas vermelhas com linhaça",
          "Pão integral com pasta de amendoim sem açúcar",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego sem açúcar com frutas vermelhas",
          "Torradas integrais com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de abóbora com frango desfiado",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },

    idoso: {
      baixa: {
        cafe: [
          "Pão integral macio com queijo branco",
          "Leite morno desnatado",
          "Fruta macia com casca",
        ],
        almoco: [
          "Arroz integral, feijão e frango desfiado",
          "Legumes cozidos",
          "Suco natural sem açúcar",
        ],
        lanche: [
          "Biscoito leve sem açúcar",
          "Banana amassada com aveia",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com frango",
          "Pão integral macio",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte natural sem açúcar",
          "Frutas vermelhas macias",
        ],
        almoco: [
          "Quinoa, feijão preto e frango cozido",
          "Brócolis e salada verde cozida",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche integral macio com pasta de ricota",
          "Maçã cozida",
          "Chá verde",
        ],
        janta: [
          "Peixe leve com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete leve com espinafre",
          "Smoothie de frutas vermelhas com linhaça",
          "Pão integral macio com pasta de amendoim sem açúcar",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada cozida com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego sem açúcar com frutas vermelhas",
          "Torradas integrais macias com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de abóbora com frango desfiado",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },
  };

  const cardapioHipertensao = {
    crianca: {
      baixa: {
        cafe: [
          "Pão integral com requeijão sem sal",
          "Leite desnatado",
          "Banana",
        ],
        almoco: [
          "Arroz integral, feijão e frango grelhado",
          "Cenoura e chuchu cozidos",
          "Suco natural sem açúcar",
        ],
        lanche: [
          "Biscoito integral sem sal",
          "Fruta da estação",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com macarrão integral",
          "Pão integral pequeno",
          "Maçã cozida",
        ],
      },
      media: {
        cafe: ["Tapioca com queijo branco sem sal", "Iogurte natural", "Mamão"],
        almoco: [
          "Arroz integral, lentilha e carne magra",
          "Brócolis e salada de folhas",
          "Suco de laranja natural",
        ],
        lanche: [
          "Sanduíche integral com pasta de ricota",
          "Frutas picadas",
          "Chá de camomila",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de ervas",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre",
          "Smoothie de frutas com linhaça",
          "Pão integral com pasta de abacate",
        ],
        almoco: [
          "Salmão grelhado com quinoa",
          "Salada com azeite e sementes",
          "Água saborizada com hortelã",
        ],
        lanche: [
          "Iogurte grego natural",
          "Torradas integrais com pasta de grão-de-bico",
          "Chá verde",
        ],
        janta: [
          "Creme de abóbora com frango",
          "Homus com palitos de legumes",
          "Chá de hibisco",
        ],
      },
    },

    adolescente: {
      baixa: {
        cafe: [
          "Pão integral com ovo cozido",
          "Leite desnatado",
          "Maçã com casca",
        ],
        almoco: [
          "Arroz integral, feijão e frango grelhado",
          "Abobrinha e cenoura",
          "Suco natural sem açúcar",
        ],
        lanche: [
          "Biscoito integral sem sal",
          "Banana com aveia",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com frango",
          "Pão integral pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte natural com chia",
          "Frutas vermelhas",
        ],
        almoco: [
          "Quinoa, feijão preto e carne magra",
          "Brócolis e salada verde",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche integral com pasta de ricota",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo branco",
          "Smoothie de frutas com linhaça",
          "Pão integral com pasta de amendoim sem sal",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego natural com frutas vermelhas",
          "Torradas integrais com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de legumes com frango",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },

    adulto: {
      baixa: {
        cafe: ["Pão integral com ovo", "Café sem açúcar", "Fruta com casca"],
        almoco: [
          "Arroz integral, feijão e carne magra",
          "Legumes refogados",
          "Suco natural sem açúcar",
        ],
        lanche: [
          "Biscoito integral sem sal",
          "Banana com aveia",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com frango",
          "Pão integral pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte natural com chia",
          "Frutas vermelhas",
        ],
        almoco: [
          "Quinoa, feijão preto e frango grelhado",
          "Brócolis e salada verde",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche integral com pasta de ricota",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo branco",
          "Smoothie de frutas com linhaça",
          "Pão integral com pasta de amendoim sem sal",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego natural com frutas vermelhas",
          "Torradas integrais com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de legumes com frango",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },

    idoso: {
      baixa: {
        cafe: [
          "Pão integral macio com queijo branco",
          "Leite morno desnatado",
          "Fruta macia com casca",
        ],
        almoco: [
          "Arroz integral, feijão e frango desfiado",
          "Legumes cozidos",
          "Suco natural sem açúcar",
        ],
        lanche: [
          "Biscoito leve sem sal",
          "Banana amassada com aveia",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com frango",
          "Pão integral macio",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo branco",
          "Iogurte natural sem açúcar",
          "Frutas vermelhas macias",
        ],
        almoco: [
          "Quinoa, feijão preto e frango cozido",
          "Brócolis e salada verde cozida",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche integral macio com pasta de ricota",
          "Maçã cozida",
          "Chá verde",
        ],
        janta: [
          "Peixe leve com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete leve com espinafre",
          "Smoothie de frutas com linhaça",
          "Pão integral macio com pasta de amendoim sem sal",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada cozida com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte grego natural com frutas vermelhas",
          "Torradas integrais macias com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de abóbora com frango desfiado",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },
  };

  const cardapioIntolerancia = {
    crianca: {
      baixa: {
        cafe: [
          "Pão sem glúten com geleia natural",
          "Leite vegetal (arroz ou aveia)",
          "Banana amassada",
        ],
        almoco: [
          "Arroz, feijão e frango grelhado",
          "Abobrinha e cenoura cozidas",
          "Suco natural sem açúcar",
        ],
        lanche: ["Biscoito sem glúten", "Fruta da estação", "Chá de ervas"],
        janta: [
          "Sopa de legumes com macarrão sem glúten",
          "Pão sem glúten pequeno",
          "Maçã cozida",
        ],
      },
      media: {
        cafe: [
          "Tapioca com ovo mexido",
          "Iogurte vegetal com chia",
          "Mamão com linhaça",
        ],
        almoco: [
          "Arroz integral, lentilha e carne magra",
          "Brócolis e salada de folhas",
          "Suco natural de laranja",
        ],
        lanche: [
          "Pão sem glúten com pasta de abacate",
          "Frutas picadas",
          "Chá de camomila",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de ervas",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre",
          "Smoothie de frutas com leite de amêndoas",
          "Pão sem glúten com pasta de castanhas",
        ],
        almoco: [
          "Salmão grelhado com quinoa",
          "Salada com azeite e sementes",
          "Água saborizada com hortelã",
        ],
        lanche: [
          "Iogurte vegetal com frutas vermelhas",
          "Torradas sem glúten com pasta de grão-de-bico",
          "Chá verde",
        ],
        janta: [
          "Creme de abóbora com frango",
          "Homus com palitos de legumes",
          "Chá de hibisco",
        ],
      },
    },

    adolescente: {
      baixa: {
        cafe: [
          "Pão sem glúten com ovo cozido",
          "Leite vegetal",
          "Maçã com casca",
        ],
        almoco: [
          "Arroz integral, feijão e carne magra",
          "Cenoura e abobrinha",
          "Suco natural sem açúcar",
        ],
        lanche: ["Biscoito sem glúten", "Banana com aveia", "Chá de ervas"],
        janta: [
          "Sopa de legumes com frango",
          "Pão sem glúten pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo vegetal",
          "Iogurte vegetal com chia",
          "Frutas vermelhas",
        ],
        almoco: [
          "Quinoa, feijão preto e frango grelhado",
          "Brócolis e salada verde",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche sem glúten com pasta de ricota vegetal",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo vegetal",
          "Smoothie de frutas com leite de coco",
          "Pão sem glúten com pasta de amendoim",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte vegetal com frutas vermelhas",
          "Torradas sem glúten com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de legumes com frango",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },

    adulto: {
      baixa: {
        cafe: ["Pão sem glúten com ovo", "Café sem leite", "Fruta com casca"],
        almoco: [
          "Arroz integral, feijão e carne magra",
          "Legumes refogados",
          "Suco natural sem açúcar",
        ],
        lanche: ["Biscoito sem glúten", "Banana com aveia", "Chá de ervas"],
        janta: [
          "Sopa de legumes com frango",
          "Pão sem glúten pequeno",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo vegetal",
          "Iogurte vegetal com chia",
          "Frutas vermelhas",
        ],
        almoco: [
          "Quinoa, feijão preto e frango grelhado",
          "Brócolis e salada verde",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche sem glúten com pasta de ricota vegetal",
          "Maçã com casca",
          "Chá verde",
        ],
        janta: [
          "Peixe grelhado com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete com espinafre e queijo vegetal",
          "Smoothie de frutas com leite de amêndoas",
          "Pão sem glúten com pasta de amendoim",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte vegetal com frutas vermelhas",
          "Torradas sem glúten com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de legumes com frango",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },

    idoso: {
      baixa: {
        cafe: [
          "Pão sem glúten macio com queijo vegetal",
          "Leite vegetal morno",
          "Fruta macia com casca",
        ],
        almoco: [
          "Arroz integral, feijão e frango desfiado",
          "Legumes cozidos",
          "Suco natural sem açúcar",
        ],
        lanche: [
          "Biscoito leve sem glúten",
          "Banana amassada com aveia",
          "Chá de ervas",
        ],
        janta: [
          "Sopa de legumes com frango",
          "Pão sem glúten macio",
          "Fruta leve",
        ],
      },
      media: {
        cafe: [
          "Tapioca com queijo vegetal",
          "Iogurte vegetal sem açúcar",
          "Frutas vermelhas macias",
        ],
        almoco: [
          "Quinoa, feijão preto e frango cozido",
          "Brócolis e salada verde cozida",
          "Suco de acerola sem açúcar",
        ],
        lanche: [
          "Sanduíche sem glúten macio com pasta de ricota vegetal",
          "Maçã cozida",
          "Chá verde",
        ],
        janta: [
          "Peixe leve com purê de batata-doce",
          "Legumes no vapor",
          "Chá de camomila",
        ],
      },
      alta: {
        cafe: [
          "Omelete leve com espinafre",
          "Smoothie de frutas com leite vegetal",
          "Pão sem glúten macio com pasta de amendoim",
        ],
        almoco: [
          "Salmão grelhado com arroz integral",
          "Salada cozida com azeite e sementes",
          "Água com limão",
        ],
        lanche: [
          "Iogurte vegetal com frutas vermelhas",
          "Torradas sem glúten macias com abacate",
          "Chá de hibisco",
        ],
        janta: [
          "Creme de abóbora com frango desfiado",
          "Homus com palitos de cenoura",
          "Chá de ervas",
        ],
      },
    },
  };

  const cardapiosPorCondicao = {
    saudavel: cardapio,
    diabetes: cardapioDiabetes,
    hipertensao: cardapioHipertensao,
    intolerancia: cardapioIntolerancia,
  };

  // Seleciona o cardápio correto
  let cardapioFinal;
  if (
    cardapiosPorCondicao[condicaoSaude] &&
    cardapiosPorCondicao[condicaoSaude][faixaEtaria]
  ) {
    cardapioFinal = cardapiosPorCondicao[condicaoSaude][faixaEtaria][renda];
  } else {
    cardapioFinal = cardapio[faixaEtaria][renda];
  }

  // Orientações de saúde adicionais
  const opcoesSaude = {
    saudavel:
      "Continue equilibrando proteínas, carboidratos e gorduras saudáveis em todas as refeições.",
    diabetes:
      "Evite açúcar e farinha branca. Prefira alimentos integrais e ricos em fibras.",
    hipertensao:
      "Reduza o consumo de sal e evite embutidos. Aumente a ingestão de frutas e verduras.",
    intolerancia:
      "Evite laticínios e produtos com glúten, substituindo por versões sem lactose e integrais.",
  };

  // Montagem dinâmica do cardápio
  orientacao += `
    <div class="mt-3 text-start">
      <p><strong>💡 Dica de Saúde:</strong> ${opcoesSaude[condicaoSaude]}</p>

      <h6 class="mt-3 text-success">☀️ Café da Manhã</h6>
      <ul>${cardapioFinal.cafe.map((i) => `<li>${i}</li>`).join("")}</ul>

      <h6 class="mt-3 text-success">🍛 Almoço</h6>
      <ul>${cardapioFinal.almoco.map((i) => `<li>${i}</li>`).join("")}</ul>

      <h6 class="mt-3 text-success">🍎 Lanche da Tarde</h6>
      <ul>${cardapioFinal.lanche.map((i) => `<li>${i}</li>`).join("")}</ul>

      <h6 class="mt-3 text-success">🌙 Jantar</h6>
      <ul>${cardapioFinal.janta.map((i) => `<li>${i}</li>`).join("")}</ul>
    </div>
  `;

  resultado.innerHTML = `
    ${orientacao}
    <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" width="80" class="mt-3" alt="Ícone alimentação">
  `;
}

  function mostrarCuriosidade() {
    const curiosidades = [
      "🥦 Brócolis tem mais vitamina C que uma laranja!",
      "🍫 O chocolate amargo pode ajudar na circulação sanguínea.",
      "🍎 Comer uma maçã por dia realmente ajuda na digestão e imunidade.",
      "🥕 Cenouras eram originalmente roxas, não laranjas!",
      "🍌 Bananas ajudam na recuperação muscular após o exercício.",
      "🥬 Verduras escuras são fontes poderosas de ferro e cálcio.",
      "💧 Beber água antes das refeições auxilia no controle da fome.",
      "🍇 Uvas roxas são ricas em antioxidantes que protegem o coração.",
      "🍍 O abacaxi contém bromelina, que ajuda na digestão de proteínas.",
      "🥑 O abacate é uma excelente fonte de gordura boa e ajuda a controlar o colesterol.",
      "🌽 O milho é naturalmente sem glúten e rico em fibras.",
      "🍠 A batata-doce tem baixo índice glicêmico e é ótima para energia sustentada.",
      "🧄 O alho tem propriedades anti-inflamatórias e pode ajudar a reduzir a pressão arterial.",
      "🍋 O limão alcaliniza o organismo e é rico em vitamina C.",
      "🍓 Morangos ajudam na saúde da pele por serem ricos em antioxidantes.",
      "🥜 Amendoim é fonte de proteína vegetal e ajuda na saciedade.",
      "🍉 A melancia é hidratante e contém licopeno, um antioxidante poderoso.",
      "🥝 O kiwi tem mais vitamina C que a laranja e ajuda na imunidade.",
      "🍆 A berinjela ajuda a controlar o colesterol por conter fibras solúveis.",
      "🍚 Arroz integral tem mais nutrientes e fibras que o arroz branco."
    ];

  const textoCuriosidade = document.getElementById("textoCuriosidade");
  const curiosidadeAleatoria =
    curiosidades[Math.floor(Math.random() * curiosidades.length)];

  // Atualiza o texto
  textoCuriosidade.textContent = curiosidadeAleatoria;

  // Adiciona animação (usando Animate.css se estiver incluído)
  textoCuriosidade.classList.remove("animate__animated", "animate__pulse"); // garante reset
  void textoCuriosidade.offsetWidth; // força reflow para reiniciar animação
  textoCuriosidade.classList.add("animate__animated", "animate__pulse");
}
