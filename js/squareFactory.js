// 1
var Square1 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square1.prototype = Square.prototype;
// L1
var Square2 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 2],
      [0, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 2],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 2],
      [0, 2, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square2.prototype = Square.prototype;
// Z1
var Square3 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 2, 2],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 2, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 2, 2],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 2, 0, 0]
    ]
  ];
}
Square3.prototype = Square.prototype;
// L2
var Square4 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 0, 2, 2],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 2],
      [0, 0, 0, 2],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 2, 0, 0],
      [0, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square4.prototype = Square.prototype;
// Z2
var Square5 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 0, 0, 0],
      [0, 0, 2, 2],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 2, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 2, 2],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 2, 2, 0],
      [0, 0, 2, 0]
    ]
  ];
}
Square5.prototype = Square.prototype;
// cube
var Square6 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square6.prototype = Square.prototype;
// T
var Square7 = function() {
  Square.call(this);
  this.dir = 0;
  this.rotates = [
    [
      [0, 0, 2, 0],
      [0, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 2],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 2, 2, 2],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 2, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ]
  ];
}
Square7.prototype = Square.prototype;
var SquareFactory = function() {}
// index the kind of Square with the dir's body.
SquareFactory.prototype.make = function(index, dir) {
  var s;
  index = index + 1;
  switch(index){
    case 1:
      s = new Square1();
      break;
    case 2:
      s = new Square2();
      break;
    case 3:
      s = new Square3();
      break;
    case 4:
      s = new Square4();
      break;
    case 5:
      s = new Square5();
      break;
    case 6:
      s = new Square6();
      break;
    case 7:
      s = new Square7();
      break;
    default:
      break;
  }
  s.origin.x = 0;
  s.origin.y = 3;
  s.rotate(dir);
  return s;
}