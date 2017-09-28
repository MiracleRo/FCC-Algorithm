function telephoneCheck(str) {
  // 祝你好运
  // return true;
  return /^1?\s?(\(\d{3}\)|\d{3})(-||\s)?\d{3}(-||\s)?\d{4}$/g.test(str);
}

telephoneCheck("555-555-5555");