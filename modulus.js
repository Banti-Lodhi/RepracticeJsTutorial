// const message = () => {
//   const name = "Preetam Singh";
//   const age = 35;
//   return name + " is " + age + " years old. ";
// }
// export default message;

// OBject Notation
let text = '{"employees": ['
+'{"name": "John Doe", "lastName": "Doe Roy" },'+
'{"name": "suransh Doe", "lastName": "Patal Roy" },'+
'{"name": "Mahendra Singh", "lastName": "Dhoni Rathi" }]}';

const obj = JSON.parse(text);
console.log(obj);

document.getElementById("demo").innerHTML = obj.employees[0].name + " " + obj.employees[0].lastName;
