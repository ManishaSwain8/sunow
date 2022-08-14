var CryptoJS = require("crypto-js");

// Encrypt
export function Encrypt(test) {
  return CryptoJS.AES.encrypt(test.toString(), process.env.REACT_APP_ENCRYPT_SECRET).toString();
}

// Decrypt
export function Decrypt(encrypt) {
  var bytes = CryptoJS.AES.decrypt(encrypt, process.env.REACT_APP_ENCRYPT_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
}
