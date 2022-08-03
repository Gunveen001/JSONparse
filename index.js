//String->null | [JSONvalue, String]

const nullParser = str => {
    let result = /^null/.exec(str);
    if (result === null) return null;
    let [match] = result;
    return [match, str.slice(match.length)];
}
console.log(nullParser("null is null only"));


const booleanParser = str => {
    let result = /^true|^false/.exec(str);
    if (result === null) return null;
    let [match] = result;
    let value = match === 'true'
    return [value, str.slice(match.length)];
}
console.log(booleanParser("true is wrong "));

const numParser = str => {
    let result = /[\d]+/.exec(str);
    if (result === null) return null;
    let [match] = result;
    let value = match;
    return [value, str.slice(match.length)];
}
console.log(numParser("100"));

const spaceParser = str => {
    let result = /[\s]/.exec(str);
    if (result === null) return null;
    let [match] = result;
    let value = match;
    return [value, str.slice(match.length)]
}
console.log(spaceParser("Be yourself"));


const stringParser = str => {
  let testDoubleQuote;
    for (let i of str) {
        if (!str.startsWith('"')) return null;
       testDoubleQuote = str.lastIndexOf('"') + 1;
    }
    let match = str.substring(0, testDoubleQuote);
    let string = match.slice(1, -1);
    let checkDoubleQuote = string.indexOf('"');
    let checkBackSlash = (str.indexOf('\\'));
    if ((checkDoubleQuote !== -1) && (checkBackSlash === -1)) return null;
    else return [match, str.slice(match.length)];
}
console.log(stringParser('"hello \\" world" '))
const primitiveValueParser = str => {
    const boolValue = booleanParser(str);
    if (boolValue) return boolValue;
    const nullValue = nullParser(str);
    if (nullValue) return nullValue;
    const numValue = numParser(str);
    if (numValue) return numValue;
    const stringValue = stringParser(str);
    if (stringValue) return stringValue;
    return null;
}
console.log(primitiveValueParser('"hello\\" world"'))






