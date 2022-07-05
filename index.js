//String->null | [JSONvalue, String]

const nullparser = str => {
    let result = /^null/.exec(str);
    if(result === null) return null;
    let [match] = result;
    return [match, str.slice(match.length)];
}
console.log(nullparser("null is null only"));


const booleanparser = str => {
    let result = /^true|^false/.exec(str);
    if(result === null) return null;
    let [match] = result;
    let value = match === 'true' || 'false';
    return [value, str.slice(match.length)];
}
console.log(booleanparser("false is wrong "));

const numparser = str => {
    let result = /[\d]+/.exec(str);
    if(result === null) return null;
    let [match] = result;
    let value = match;
    return [value, str.slice(match.length)];
}
console.log(numparser("one two 100"));

const spaceparser = str => {
    let result = /[\s]/.exec(str);
    if(result === null) return null;
    let [match] = result;
    let value = match;
    return [value, str.slice(match.length)]
}
console.log(spaceparser("Be yourself"));


const stringparser = str => {
    let test1 , test2;
       test1 = str.indexOf('"');
       test2 = str.lastIndexOf('"')+1;   
    if(str === null) return null;
    let match = str.substring(test1,test2);
    return [match, str.slice(match.length)];
 }
 console.log(stringparser('"hello" world'));
 
 
       
 