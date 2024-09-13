// async function greet() {
//   // throw "404 page not found";
//   console.log("Hello...");
// }

// greet()
// .then((res) => {
//   console.log("Problem resolved...", res);
// })
// .catch((err) => {
//   console.log("Throw error ", err);
// })

// async & await keywords
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let random = Math.floor(Math.random() * 10) + 1;
//       console.log(random);
//       resolve();
//     }, 1000);
//   });
// };

// async function demo() {
//      await getNum();
//      await getNum();
//      await getNum();
//      await getNum();
//      getNum();
// }

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=> {
//   return res.json();
// })
// .then((data1)=>{
//   console.log("data1 =", data1.fact);
//   return fetch(url);
// })
// .then((res)=> {
//   return res.json();
// })
// .then((data2) => 
//   console.log("data2 =", data2.fact);
// })
// .catch((err)=>{
//   console.log(err)
// });

// console.log("Nest to guest");

// async await function
// async function getFacts() {
//   try {
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log("data1 -", data.fact);

//   let res1 = await fetch(url);
//   let data1 = await res1.json();
//   console.log("data1 -", data1.fact);    
//   }catch(e) {
//     console("error", e);
//   }
// console.log("Hi, Banti kumar is well in this time or not did you mention me about a development course");
// }


// Axios Method
// let btn = document.querySelector("button");
// let link = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async() => {
//   let src = await getImg();
//   let img = document.querySelector("#result");
//   img.setAttribute("src", src);
// })

// async function getImg() {
//   try {
//   let res = await axios.get(link);
//   return res.data.message;

// }catch(e) {
//     console("error", e);
//     return "Not Found Facts";
//   }
// }


// let joke = "https://icanhazdadjoke.com/";
// let config = {headers: {Accept: "application/json"}};
// async function jokeApi() {
//   try {
//      let jokes = await axios.get(joke, config);
//     console.log(jokes.data.joke);
//   } 
//  catch(err) {
//   console.log(err);
//  }
// }

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
let country = document.querySelector("input").value;
console.log(country);
 let colArr = await getUniversity(country);
 show(colArr);
});

async function show(colArr) {

  for(col of colArr) {
    let count1 = colArr.length;
    let list = document.querySelector("#list");
 console.log(count1);
  let li = document.createElement("li");
  li.innerText = col.name;
  list.appendChild(li);
  }
}

async function getUniversity(country) {
  try {
  let uni = await axios.get(url+country);
  return uni.data;
  }catch(err) {
  console.log("error:", err);
 return [];
}
}