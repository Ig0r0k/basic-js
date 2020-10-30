const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let firstLetters = [];
  for (let member of members) {
    if (typeof(member) === 'string') {
      firstLetters.push(member.trim()[0].toUpperCase());
    }
    firstLetters.sort();
  }
  if (firstLetters !== []) {
    return firstLetters.join('');
  } else {
    return false;
  }
};
