async function permittedCharacters() {
  const fullSet = [];
  const requiredChars = [];

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const special = "!@#$%^&*()-_";

  if (process.env.UPPERCASE_LETTERS === "true") {
    fullSet.push(...uppercase);
    requiredChars.push(randomChar(uppercase));
  }

  if (process.env.LOWERCASE_LETTERS === "true") {
    fullSet.push(...lowercase);
    requiredChars.push(randomChar(lowercase));
  }

  if (process.env.NUMBERS === "true") {
    fullSet.push(...numbers);
    requiredChars.push(randomChar(numbers));
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    fullSet.push(...special);
    requiredChars.push(randomChar(special));
  }

  return { fullSet, requiredChars };
}

function randomChar(str) {
  const index = Math.floor(Math.random() * str.length);
  return str[index];
}

export default permittedCharacters;
