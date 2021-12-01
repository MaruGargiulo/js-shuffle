const getRepeatedWord = (string, searchWord) =>
  string
    .toLowerCase()
    .split(/[' ']{1,}|[,]{1,}|[\.]{1,}|[\n]{1,}/)
    .filter((word) => word === searchWord.toLowerCase()).length;

const sentence = "Estoy en una entrevista ! técnica. Aguante JS, sí, aguante js.";

const sanitizeString = (string) =>
  string
    .toLowerCase()
    .split(/[\.*' '|,*' '|\n|!*' ']{1,}/)
    .filter((word) => word);

const repetitionWord = (sentence) =>
  sanitizeString(sentence).reduce((acum, word) => {
    if (acum[word]) {
      ++acum[word];
    } else {
      acum[word] = 1;
    }
    return acum;
  }, {});

console.log(repetitionWord(sentence));
