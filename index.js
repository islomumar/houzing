let state = {
    arr: []
}
function foo() {
    const { arr } = state
    arr.push(0)
}
// foo()
// foo()
foo()
console.log(state.arr);
