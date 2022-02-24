module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false; 

  let stack = [];
  const objBrackets = Object.fromEntries(bracketsConfig);

  for (let index = 0; index < str.length; index++) {
    if (objBrackets[stack[stack.length - 1]] === str [index])
    {
      stack.pop();
    }
    else if (Object.keys(objBrackets).includes(str[index])) {
      stack.push (str[index]);
    }
  }
  return stack.length === 0;
};
