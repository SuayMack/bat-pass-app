export default function generatePassword() {
  
  let password = '';  
  let passwordLength = 12;

  const characters = 'AdefB)_+CDEFrvGHIJ!@#KLM7NOPQpqRstuST6UVWXY23Zabcgh$ijklmnowxyz014589%¨&*(';
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * passwordLength));
  }
  return password;
}