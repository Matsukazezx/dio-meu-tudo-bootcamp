import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
  let password = "";
  const length = parseInt(process.env.PASSWORD_LENGTH, 10) || 12;

  const { fullSet, requiredChars } = await permittedCharacters();

  if (fullSet.length === 0) {
    throw new Error("⚠️ Nenhum conjunto de caracteres permitido! Verifique seu .env");
  }

  // Garante pelo menos um caractere de cada grupo habilitado
  password += requiredChars.join("");

  // Preenche o restante aleatoriamente
  for (let i = requiredChars.length; i < length; i++) {
    const index = Math.floor(Math.random() * fullSet.length);
    password += fullSet[index];
  }

  // Embaralhar para não ficar sempre na mesma ordem
  password = shuffle(password);

  return password;
}

// Algoritmo Fisher-Yates para embaralhar string
function shuffle(str) {
  const array = str.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

export default handle;
