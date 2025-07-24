# 🛒 Projeto QRCODE + Gerador de Senhas - Node.js CLI

Este projeto é um utilitário de linha de comando (CLI) desenvolvido em Node.js para realizar duas tarefas principais:

1. **Gerar QRCodes a partir de URLs ou textos**
2. **Gerar senhas seguras com base em configurações do `.env`**

## ✨ Funcionalidades

* Geração de QRCode diretamente no terminal ou como arquivo `.png`
* Geração de senhas fortes e seguras com base nas opções definidas
* Interface de terminal interativa utilizando `prompt`
* Separação clara de responsabilidades com organização por pastas


## ⚙️ Como usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar aplicação

```bash
node src/index.js
```

### 3. Escolher a ferramenta:

Será exibido um prompt:

```
Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD):
```

Digite `1` para gerar QRCode ou `2` para gerar uma senha.

---

## 🔑 Geração de Senhas

A geração de senhas utiliza as configurações definidas no arquivo `.env`. Exemplo:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

### Exemplo de saída:

```
password
Ax4F4VdtNl@D
```

Se nenhuma opção estiver ativada, será exibido um erro informando que nenhum conjunto de caracteres foi definido.

## 📦 Dependências

* `dotenv`: para ler configurações do `.env`
* `qrcode`: biblioteca para gerar QRCode
* `prompt`: para entrada de dados via terminal


