const name = "Khuk";

const displayMessage= ()=> {
    return 'I need help!';
}
function Hello(){
    // return <h1>Total is {10 + 20}!</h1>
    // return <h1>My name is {name}!</h1>
    // return <h1>Hello World!</h1>
    return <h1>The message is {displayMessage()}</h1>
}
// const Hello = ()=> <h1>Hello There</h1>
export default Hello