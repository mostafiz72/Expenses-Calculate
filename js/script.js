
document.getElementById("calculate").addEventListener("click", function(){
const income = calculateDistance("income");
const software = calculateDistance("software");
const course = calculateDistance("course");
const internet = calculateDistance("internet");
const saving = calculateDistance("saving");


if(isNaN(income) || isNaN(software) || isNaN(course) || isNaN(internet)){
    alert("Something is wrong Please try again");
    return;  // stop the function from executing further
}


const totalExpenses = software + course + internet;

const avalableBlance = income - totalExpenses;

    const savingBlance = saving * income / 100; 

    const totalSavings = avalableBlance - savingBlance;

    if(income < totalExpenses){
        alert("Please enter positive numbers.");
        return;  // stop the function from executing further
    }

    console.log(totalSavings);

    const p = document.createElement("div");
    p.style.backgroundColor = "yellow";
    p.innerHTML = `
    <p>Income Balance: $${income}</p>
    <p>Avalable Balance: $${avalableBlance}</p>
    <p>Current Balance: $${totalSavings}</p>
    `;

    document.getElementById("ExpensesAllHistory").appendChild(p);

    document.getElementById("income").value="";
    document.getElementById("software").value="";
    document.getElementById("course").value="";
    document.getElementById("internet").value="";
    document.getElementById("saving").value="";

    
});