//String->null | [JSONvalue, String]

const nullparse = str => {
    let result = /^null/.exec(str);
    if(result === null) return null;
    let [match] = result;
    return [match, str.slice(match.length)];
}
console.log(nullparse("null is in this line"));



