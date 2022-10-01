/*************************************** */
let a = 'hi';
let b = 2;
let ex = {
    a,
    b
};
console.log(ex);
/*************************************** */
let ex2 = {
    c: 'bye',
    d: 1
}
// c = ex2.c;
// d = ex2.d;
/* equals */
let { c, d } = ex2; // <- 객체 구조분해
console.log(c, d);
let tmp = ['a', 'b', 'c', 'd'];
let [e, f, ...rest] = tmp; // <- 배열 구조분해
console.log(e, f, rest);
/*************************************** */
let ex3 = {
    a: "abc",
    b: 3
};
let ex4 = {
    ...ex3,
    a: "xyz",
    c: "123"
}; // 깊은 복사 (새로운 객체 할당)
console.log(ex3 == ex4);
let ex5 = ex3;      // 얕은 복사 (메모리 주소 복사 -> 한 데이터를 공유하며 바라봄)
console.log(ex3 == ex5);
console.log(ex4);
console.log(ex5);
let g = ['a', 'b'];
let h = [...g, 'c'];
console.log(h);
let i = [...g, ...h];
console.log(i);
/*************************************** */
// (조건식) ? (참) : (거짓)
let ex6 = {
    a: 7,
    b: 'test'
};
if (ex6) {
    console.log(ex6.a)
} else {
    console.log('error');
}
console.log(ex6 ? ex6.a : 'error');