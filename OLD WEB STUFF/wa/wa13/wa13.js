// Problem 1
// setting the array that we need to read from
let eData = {
    "Employees": [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": "40000",
            "raiseEligible": "true"
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": "18500",
            "raiseEligible": "true"
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": "21200",
            "raiseEligible": "false"
        },
    ]
};

// printing everything
console.log("Problem 1:\n");
console.log("Employee 1:\n");
console.log(eData.Employees[0]);
console.log("Employee 2:\n");
console.log(eData.Employees[1]);
console.log("Employee 3:\n");
console.log(eData.Employees[2]);

console.log("*********************************************")
// Problem 2 
let cData = {
    "Company" : [
        {
            "companyName" : "Tech Stars",
            "website" : "www.techstars.site",
            "employees" : eData
        }
    ]
};

console.log("Problem 2:\n");
console.log(cData.Company[0]);
// seperation
console.log("*********************************************")
console.log("Another display for problem 2");
console.log("Company name:" + cData.Company[0].companyName);
console.log("Website:" + cData.Company[0].website);
console.log("Employees:");

for (let i=0; i < eData.Employees.length; i++)
{
    console.log(eData.Employees[i].firstName);
}

console.log("*********************************************")
// Problem 3
// add to our array of employees
eData.Employees.push({ "firstName" : "Anna", "department" : "Tech", "designation" : "Executive", "salary" : "25600", "raiseEligible" : "false"});

console.log("Problem 3:\n");
console.log("New hire:\n");
console.log(eData.Employees[3]);
console.log("*********************************************")
// Problem 4
let totalSalary = 0;

for(let i = 0; i < eData.Employees.length; i++)
{
    // this is to convert string to integer
    totalSalary += parseInt(eData.Employees[i].salary);
}

console.log("Problem 4:\n");
console.log("Total Salary of all listed employees: " + totalSalary);
console.log("*********************************************")
// Problem 5

function Raise(employee)
{
    if (employee.raiseEligible == "true")
    {
        // this will get the current salary
        let employeeSalary = parseInt(employee.salary);
        // calculate the raise amount
        let raiseAmount = employeeSalary * 0.1;

        employeeSalary += raiseAmount;
        employee.employeeSalary = employeeSalary.toString();
        employee.raiseEligible = 'false';

        console.log(employee.firstName + " received a raise of " + raiseAmount.toFixed(2) + " thier new salary is " + employee.employeeSalary);

    }

    else
    {
        console.log(employee.firstName + " is not eligible for a raise at this time sorry");

    }
}

console.log("Problem 5:\n");
Raise(eData.Employees[0]);
Raise(eData.Employees[1]);
Raise(eData.Employees[2]);
Raise(eData.Employees[3]);
console.log("*********************************************")
// Problem 6
let wfh = ["Anna", "Sam"];

for(let i = 0; i < eData.Employees.length; i++)
{
    // set a default value
    eData.Employees[i].wfh = "False";

    for(let j = 0; j < wfh.length; j++)
    {
        if(eData.Employees[i].firstName === wfh[j])
        {
            eData.Employees[i].wfh = "True";
            
        }
    }
}

console.log("Problem 6:\n");
console.log("Employee 1 Update:");
console.log(eData.Employees[0]);
console.log("Employee 2 Update:");
console.log(eData.Employees[1]);
console.log("Employee 3 Update:");
console.log(eData.Employees[2]);
console.log("Employee 4 Update");
console.log(eData.Employees[3]);
