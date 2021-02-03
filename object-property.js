const students = [
     {id: 21, name: 'omor suny'},
     {id: 31, name: 'Mannaa'},
     {id: 41, name: 'Mousumi'},
     {id: 91, name: 'Depjol'},
];
// const names = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     names.push(element.name);
// }
const names = students.map(s => s.name); 
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id>40);
console.log(names);
console.log(ids);
console.log(bigger);