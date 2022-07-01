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
