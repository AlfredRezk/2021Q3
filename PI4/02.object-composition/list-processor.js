function main(arr) {
  let obj = {
    list: [],
    add: function (arg) {
      this.list.push(arg);
    },
    remove: function (arg) {
      let filteredArr = this.list.filter((val) => val !== arg);
      this.list = filteredArr;
    },
    print: function () {
      console.log(this.list.join(","));
    },
  };
  arr.forEach((val) => {
    let [command, word] = val.split(" ");
    obj[command](word);
    // switch (command) {
    //   case "print":
    //     obj.print();
    //     break;
    //   case "add":
    //     obj.add(word);
    //     break;
    //   case "remove":
    //     obj.remove(word);
    // }
  });
}

// main(["add hello", "add again", "remove hello", "add again", "print"]);
main(["add pesho", "add george", "add peter", "remove peter", "print"]);

// function main(arr) {
//   let list = [];
//   const commandProcessor = (function () {
//     const add = (newItem) => list.push(newItem);
//     const remove = (item) => (list = list.filter((el) => el !== item));
//     const print = () => console.log(list.join(","));
//     return {
//       add,
//       remove,
//       print,
//     };
//   })();
//   arr.forEach((command) => {
//     let [commandName, arg] = command.split(" ");
//     commandProcessor[commandName](arg);
//   });
// }
