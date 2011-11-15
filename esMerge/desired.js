// Desired behaviors for esMerge
// 

// Inputs

var A = {
  aPrimitive: true,
  aObj: {
    prop: 1
  },
  aFunction: function() {
    return "the one true aFunction";
  }
};

var B = {
  aPrimitive: "not true",
  aObj: {
    prop: 2
  },
  aFunction: function() {
    return "the one true aFunction";
  }
};

var CMaker = function(x) {
  this.x = x;
  };
  
CMaker.prototype = {
  cFunction: function() {
    return 'cFunction';
  },
  cData: {
    cDProp: 3,
  }
};