const add = (x,y) => x + y;

const sub = (x,y) => x - y;

const calculate = (fn, x, y) => {

    return fn(x,y);
}

const result = calculate(sub, 10, 30);
console.log(result);