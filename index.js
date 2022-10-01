function frecuencias(str) {
    const obj = {};
    for (let char of str) {
      if (char === ' ') continue;
      if (obj.hasOwnProperty(char)) obj[char]++;
      else obj[char] = 1;
    }
    return obj;
  }