
let wrapper = document.getElementById('wrapper-div');

for (let i = 0; i < 101; i++) {
    let boxText = document.createElement ("div");

    boxText.classList.add('col-2', 'p-5');

    wrapper.append(boxText);

    if (i % 15 == 0) {
        console.log("fizzbuzz");
        boxText.innerHTML = "FizzBuzz";
    } else if (i % 5 == 0) {
        console.log("buzz");
        boxText.classList.add('buzz');
        boxText.innerHTML = "Buzz";
    } else if (i % 3 == 0) {
        console.log("fizz");
        boxText.classList.add('fizz');
        boxText.innerHTML = "Fizz"
    } else {
        console.log(i);
        boxText.innerHTML = i
    }
}