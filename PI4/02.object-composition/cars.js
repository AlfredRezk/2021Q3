function main(arr) {
  let obj = {};
  arr.forEach((str) => {
    let [command, key, property, value] = str.split(" ");
    if (command === "create") {
      obj[key] = {};
      if (property === "inherit") {
        obj[key].inherit = value;
      }
    }
    if (command === "set") {
      obj[key][property] = value;
    }
    if (command === "print") {
      let properties = obj[key];
      if (properties.inherit) {
        let inherited = obj[properties.inherit];
        properties = { ...properties, ...inherited };
      }
      let carProperties = Object.keys(properties)
        .filter((key) => key !== "inherit")
        .map((prop) => {
          let value = properties[prop];
          let str = `${prop}:${value}`;
          return str;
        })
        .join(", ");
      console.log(carProperties);
    }
  });
}

main(["create c1", "create c2 inherit c1", "set c1 color red", "set c2 model new", "print c1", "print c2"]);
