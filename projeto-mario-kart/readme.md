# 🏎️ Desafio de Projeto do Felipão: Mario Kart.JS

<table>
  <tr>
    <td>
      <img src="./docs/header.gif" alt="Mario Kart" width="200" />
    </td>
    <td>
      <b>Objetivo:</b>
      <p>
        Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. 
        Nosso desafio será criar a lógica de um jogo de vídeo game para simular corridas de Mario Kart, 
        levando em consideração as regras e mecânicas abaixo.
      </p>
    </td>
  </tr>
</table>

---

## 🧑‍🚀 Players

<table style="border-collapse: collapse; width: 100%; text-align: center;">
  <tr>
    <td><strong>Mario</strong><br/><img src="./docs/mario.gif" width="60" /><br/>Vel: 4 | Man: 3 | Pod: 3</td>
    <td><strong>Peach</strong><br/><img src="./docs/peach.gif" width="60" /><br/>Vel: 3 | Man: 4 | Pod: 2</td>
    <td><strong>Yoshi</strong><br/><img src="./docs/yoshi.gif" width="60" /><br/>Vel: 2 | Man: 4 | Pod: 3</td>
  </tr>
  <tr>
    <td><strong>Bowser</strong><br/><img src="./docs/bowser.gif" width="60" /><br/>Vel: 5 | Man: 2 | Pod: 5</td>
    <td><strong>Luigi</strong><br/><img src="./docs/luigi.gif" width="60" /><br/>Vel: 3 | Man: 4 | Pod: 4</td>
    <td><strong>Donkey Kong</strong><br/><img src="./docs/dk.gif" width="60" /><br/>Vel: 2 | Man: 2 | Pod: 5</td>
  </tr>
</table>

---

## 🕹️ Regras & Mecânicas

### ✅ Jogadores
- O computador deve receber **dois personagens** para disputar a corrida, em forma de objeto.

### 🛣️ Pistas
- A corrida possui **5 rodadas** em uma pista aleatória.
- A cada rodada, é sorteado um **bloco** da pista:
  - **RETA**: ambos os jogadores rolam um dado de 6 lados e somam o atributo `VELOCIDADE`. O vencedor marca **1 ponto**.
  - **CURVA**: ambos rolam um dado de 6 lados e somam o atributo `MANOBRABILIDADE`. O vencedor marca **1 ponto**.
  - **CONFRONTO**:
    - Ambos rolam um dado de 6 lados e somam o atributo `PODER`.
    - O **perdedor**:
      - Recebe um ataque aleatório: `CASCO` (−1 ponto) ou `BOMBA` (−2 pontos).
      - Nunca pode ficar com pontuação negativa.
    - O **vencedor**:
      - Tem 50% de chance de ganhar **TURBO** e somar **+1 ponto extra**.
    - Se empatar, ninguém ganha ou perde ponto.

### 🏁 Condição de Vitória
- Após 5 rodadas, vence quem tiver mais **pontos acumulados**.
- Em caso de empate, é declarado **empate**.

---

## 🧠 Exemplo de saída no console

```bash
🏁🚨 Corrida entre Mario e Bowser começando...

🏁 Rodada 1
Bloco: CONFRONTO
Mario confrontou com Bowser! 🥊
Mario 🎲 rolou um dado de poder 3 + 3 = 6
Bowser 🎲 rolou um dado de poder 5 + 5 = 10
Bowser venceu o confronto! Mario levou uma BOMBA e perdeu 2 ponto(s)! 💥
Bowser ganhou um TURBO e marcou 1 ponto extra! ⚡
-----------------------------
