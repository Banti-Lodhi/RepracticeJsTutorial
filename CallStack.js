// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(`Final Answer ${ans}`);
// }

// three();

// Single Threaded Funtion
// setTimeout(() => {
//   console.log("Preetam Singh");
// }, 2000);
// setTimeout(() => {
//   console.log("Apna College");
// }, 2000);

// console.log("Hello...");

// Callback Hell
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
 return new Promise((resolve, reject) => {
      setTimeout(() => {
        let random = Math.floor(Math.random() * 5) + 1;
        if(random > 3) {
            reject("Promise error throw...");
        }
    h1.style.color = color;
    console.log(`color changed to ${color}`)
    resolve("color Changed!");
  }, delay);
  });
}
async function demo() {
  try {
      await changeColor("red", 2000);
  await changeColor("green", 2000);
  await changeColor("blue", 2000);
  await changeColor("yellow", 2000);
  await changeColor("purple", 2000);
  await changeColor("orange", 2000);
  await changeColor("brown", 2000);
  }
  catch(err) {
    console.log("Error occured", err);
  }
 return "done";
}



// changeColor("red", 3000)
// .then(() => {
//   console.log("color of text will have red");
//   return changeColor("yellow", 2000);
// })
// .then(() => {
//   console.log("color of text will have yellow");
//   return changeColor("green", 2000);
// })
// .then(() => {
//   console.log("color of text will have green");
//   return changeColor("blue", 2000);
// })
// .then(() => {
//   console.log("color of text will have blue");
//   return changeColor("purple", 2000);
// })
// .then(() => {
//   console.log("color of text will have purple");
// });


// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("brown", 1000, () => {
//       changeColor("pink", 1000, () => {
//         changeColor("yellow", 1000, () => {
//           changeColor("orange", 1000);
//         });
//       });
//     });
//   });
// });

// Promises
// function savedDb(data, Success, Failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     Success();
//   } else {
//     Failure();
//   }
// }

// savedDb(
//   "Apna College",
//   () => {
//     console.log("Successfully! Data Saved...");
//     savedDb(
//       "Preetam Singh",
//       () => {
//         console.log("Successfully! Data Saved1...");
//         savedDb(
//           "Sony",
//           () => {
//             console.log("Successfully! Data Saved2...");
//           },
//           () => {
//             console.log("Failure! Internet Speed at least more weak2");
//           }
//         );
//       },
//       () => {
//         console.log("Failure! Internet Speed at least more weak1");
//       }
//     );
//   },
//   () => {
//     console.log("Failure! Internet Speed at least more weak");
//   }
// );

// Promises Method
// function savedDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success! Data was saved...");
//     } else {
//       reject("Failure! error data rejected...");
//     }
//   });
// }

// savedDb("Apna College")
// .then((result)=> {
//   console.log("data1 saved.");
//   console.log("Result: ", result);
//   return savedDb("Preetam Singh");
// })
// .then((result) => {
// console.log("data2 saved.");
// console.log("Result: ", result);
// return savedDb("Sony Shina");
// })
// .then((result) => {
//   console.log("data3 saved.");
//   console.log("Result: ", result);
// })
// .catch((error) => {
//   console.log("Promises was rejected...");
//   console.log("Error! error Occured", error);
// });
