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
    let value = match === 'true';
    return [value];
}
console.log(booleanParser("false is wrong "));

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
    return [value, str.indexOf(match)]
}
console.log(spaceParser("Be yourself"));


const stringParser = str => {
    let test, count, str1;
    for (let i of str) {
        if (str.startsWith('"')) {
            test = str.lastIndexOf('"') + 1;
        }
        else return 'wrong input';

    }
    let match = str.substring(0, test);
     str1 = match.slice(1, -1);
     count = str1.indexOf('"');
     let count1 = (str.indexOf('\\'));
     if ((count !== -1) && (count1 === -1)) return null;
     else return [match, str.slice(match.length)];
}
console.log(stringParser('"hello" world'))

  




