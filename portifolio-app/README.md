# 📱 Meu App de Portifólio (React Native)

Este projeto foi desenvolvido em **React Native** com **Expo**, e tem como objetivo apresentar um perfil profissional de forma moderna e interativa. O app possui duas telas principais: **Perfil** e **Skills**, com navegação utilizando o **React Navigation**.

---

## 🚀 Funcionalidades

### 🔹 Tela Principal (Perfil)

* Foto de perfil com destaque.
* Nome e subtítulo (cargo/profissão).
* Links importantes em formato de cards interativos:

  * GitHub
  * LinkedIn
  * Email
* Botão de navegação para a tela de **Skills**.

### 🔹 Tela de Skills

* Exibe as habilidades separadas por categorias:

  * **Front-End**
  * **Back-End**
  * **Ferramentas & Metodologias**
* Cada categoria é expansível/retrátil.
* Exibe cada skill com **nível de proficiência** e **barra de progresso visual**.

---

## 🛠️ Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Vector Icons / Expo Icons](https://icons.expo.fyi/)

---

## 📂 Estrutura de Pastas

```
/project
 ┣ 📂 assets          # Imagens do app
 ┣ 📂 src
 ┃ ┣ 📂 screens       # Telas (MainScreen, SkillScreen)
 ┃ ┣ 📂 styles        # Estilos separados por tela
 ┣ App.js             # Configuração inicial e navegação
 ┗ README.md          # Documentação do projeto
```

---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npx expo start
```

4. Abra no emulador ou no aplicativo Expo Go (Android/iOS).

---

## ✨ Melhorias Futuras

* Adicionar animações na abertura/fechamento das seções de skills.
* Implementar tema **dark mode**.
* Permitir edição das skills e links direto no app.

---

