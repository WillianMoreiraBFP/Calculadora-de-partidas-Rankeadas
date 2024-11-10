// Função para calcular o saldo e determinar o nível
function calcularNivel(vitorias, derrotas) {
  // Calcular o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;
  
  // Variável para armazenar o nível
  let nivel = "";

  // Estrutura de decisão para determinar o nível
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  // Exibir a mensagem com o saldo de vitórias e o nível
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de chamada da função
calcularNivel(60, 30);  // Substitua pelos valores desejados
