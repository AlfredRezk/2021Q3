function main(list) {
  let rectArray = list.map((rect) => {
    let [width, height] = rect;
    let rectObj = {
      width,
      height,
      area: function () {
        return this.height * this.width;
      },
      compareTo: function (otherRect) {
        let ourArea = this.area();
        let otherArea = otherRect.area();
        if (ourArea === otherArea) {
          if (this.width > otherRect.width) {
            return 1;
          }
          return -1;
        }
        if (ourArea > otherArea) {
          return 1;
        }
        if (ourArea < otherArea) {
          return -1;
        }
      },
    };
    return rectObj;
  });

  rectArray.sort((a, b) => b.compareTo(a));
  console.log(rectArray);
  // return rectArray;
}

main([
  [10, 5],
  [7, 5],
  [5, 12],
]);
