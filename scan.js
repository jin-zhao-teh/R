let _02xed6x = {};
let _04x36x = ["f0x9a", "f0x1f", "f0x41", "f0x5b", "f0x3c", "f0x29", "f0x62", "f0x7e", "f0x88", "f0x92", "f0x50"];

for (let i = 0; i < _04x36x.length; i++) {
    let n = _04x36x[i];
    
    _02xed6x[n] = function(...args) {
        if (n === "f0x9a") return JSON.parse(args[0]);
        if (n === "f0x1f") return JSON.stringify(args[0]);
        if (n === "f0x41") v0xA3.b.c.s.a.push(args[0].t); v0xA3.b.c.s.z[args[0].c] = args[0].i;
        if (n === "f0x5b") { 
            args[0].c = args[0].t; 
            args[0].i = 0; 
            
            // Update the existing d.data variable
            d.data = JSON.stringify(args[0]); // Use d.data directly
        }
        if (n === "f0x3c") { 
            v0xA3.b.c.s.a[0] = args[0].c; 
            v0xA3.b.c.s.z[args[0].c] = args[0].i; 
        }
        if (n === "f0x29") return (args[0].t + args[0].c) * 2;
        if (n === "f0x62") for (let k = 0; k < 10; k++) v0xA3.x.push(Math.random());
        if (n === "f0x7e") {
            let t = 0;
            for (let n = 0; n < v0xA3.x.length; n++) t += v0xA3.x[n];
            return t / v0xA3.x.length;
        }
        if (n === "f0x88") {
            let p = 0;
            return function() { p += 1; return p; };
        }
        if (n === "f0x92") return (function() { return "Nested!"; })();
        if (n === "f0x50") {
            let t = 1;
            for (let s = 1; s <= 10; s++) t *= s;
            return t;
        }
    };
}

let v0xA3 = {
    v: 0,
    b: { c: { s: { a: [], z: {} } } },
    x: [],
    y: {},
    f0x77: function() { return this.b.c.s.a.length; },
    f0x5e: function() { return this.b.c.s.z; }
};

// Assuming d is already defined by another script
let pData = _02xed6x["f0x9a"](d.data); // Access d.data
_02xed6x["f0x41"](pData);
_02xed6x["f0x5b"](pData); // This line updates d.data
_02xed6x["f0x3c"](pData);

let finalCalc = v0xA3.b.c.s.a[0] * 100 + 50;

let x1 = v0xA3.b.c.s.a[0], x2 = v0xA3.b.c.s.z[x1], x3 = x1 + x2, x4 = x3 * 10, x5 = x4 - x1;

for (let t = 0; t < 20; t++) {}
