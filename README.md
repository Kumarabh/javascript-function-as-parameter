## Function as parameter

 #### Function as parameter


```javascript

const add = (x,y) => x + y;
const sub = (x,y) => x - y;
const mul = (x,y) => x * y;
const div = (x,y) => x / y;

const calculate = (fn, x, y) => {
    return fn(x,y);
}

let result = calculate(mul, 7,90);
console.log(result);
```

