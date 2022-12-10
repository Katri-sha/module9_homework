const parser = new DOMParser();
const strXml = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
const domXml = parser.parseFromString(strXml, "text/xml");
const list = domXml.querySelector('list');
const student = list.querySelectorAll('student');
const fullName = getSelector(student, 'name');
const firstName = getSelector(fullName, 'first');
const secondName = getSelector(fullName, 'second');
const age = getSelector(student, 'age');
const profession = getSelector(student, 'prof');
const lang = [];
for (let i = 0; i < fullName.length; i++){
  lang.push(fullName[i].getAttribute('lang'));
};

function getSelector(nameArray, nameSelector){
  let arr = [];
  for (let i = 0; i < nameArray.length; i++){
    arr.push(nameArray[i].querySelector(nameSelector));
  };
  return arr;
}

const result = {
list:[
 {  
  name: `${firstName[0].textContent} ${secondName[0].textContent}`,
  age: age[0].textContent,
  prof: profession[0].textContent,
  lang: lang[0]},
 { 
  name: `${firstName[1].textContent} ${secondName[1].textContent}`,
  age: age[1].textContent,
  prof: profession[1].textContent,
  lang: lang[1]},
]}
console.log(result);