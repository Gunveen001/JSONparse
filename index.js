//String->null | [JSONvalue, String]

const nullparse = str => {
    let result = /^null/.exec(str);
    if(result === null) return null;
    let [match] = result;
    return [match, str.slice(match.length)];
}
console.log(nullparse("null is null only"));


const booleanparse = str => {
    let result = /^true|^false/.exec(str);
    if(result === null) return null;
    let [match] = result;
    let value = match === 'true' || 'false';
    return [value, str.slice(match.length)];
}
console.log(booleanparse("false is wrong "));

const numparse = str => {
    let result = /[\d]+/.exec(str);
    if(result === null) return null;
    let [match] = result;
    let value = match;
    return [value, str.slice(match.length)];
}
console.log(numparse("one two 100"));

const spaceparse = str => {
    let result = /[\s]/.exec(str);
    if(result === null) return null;
    let [match] = result;
    let value = match;
    return [value, str.slice(match.length)]
}
console.log(spaceparse("Be yourself"));


const stringparse = str => {
    for(let i = 0; i <= str.length; i++){
        if((str.startsWith('"')) && (str.endsWith('"'))){
            return [str];
        }
        else return null;
    }
}
console.log(stringparse('"this is string"'));
