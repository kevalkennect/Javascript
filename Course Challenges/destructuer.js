const obj = {
  name: "keval",
  
  arr: ["lorem", 25, 78, "ipsum", false, { sirName: "none" }],
  getsirName: function () {
    const [a, b, c, d, boolean, obj] = this.arr;
    return c
  },
};
console.log(obj.getsirName());
