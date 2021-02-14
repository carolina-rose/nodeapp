const av_salary = 3500;

document.getElementById("getSalary").addEventListener("click",calc); 

function calc (e) {
    e.preventDefault();
    const salary = document.getElementById("salary").value;


if (salary >= av_salary) {
    document.getElementById("result").innerHTML = "Twoja pensja jest większa niz średnia"
}
else {
    document.getElementById("result").innerHTML = "Twoja pensja jest mniejsza niz średnia"
}}
