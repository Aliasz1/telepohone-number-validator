function telephoneCheck(str) {
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
  // Check if the string matches the regular expression
  return regex.test(str);
}

telephoneCheck("555-555-5555");