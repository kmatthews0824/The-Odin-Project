const btn = document.querySelector('#btn');
btn.onclick = () => alert("Method 2, actual javascript");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',function (e) {
    alert("Using a function");
    e.target.style.background = 'green';
});