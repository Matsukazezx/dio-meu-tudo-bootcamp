interface PasswordOptions {
  length?: number
  includeUppercase?: boolean
  includeLowercase?: boolean
  includeNumbers?: boolean
  includeSymbols?: boolean
}

export default function generatePass(options: PasswordOptions = {}) {
  const {
    length = 12,
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true,
  } = options

  let characters = ''

  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz'
  if (includeNumbers) characters += '0123456789'
  if (includeSymbols) characters += '!@#$%^&*()_+[]{}<>?/|'

  if (characters.length === 0) {
    characters = 'abcdefghijklmnopqrstuvwxyz'
  }

  let password = ''
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return password
}
