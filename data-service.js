var employees = [];
var departments = [];

var fs = require('fs');


function initialize() 
{
    return new Promise((resolve, reject) => {
        fs.readFile('data/departments.json', (err, data) => {
            if(err) 
            {
                reject('Error Reading Departments');
            }
            else
            {
                departments = JSON.parse(data);
                fs.readFile('data/employees.json', (err, data) => {
                    if(err) 
                    {
                        reject('Error Reading Employees')
                    }
                    else
                    {
                        employees = JSON.parse(data);
                        resolve('success');
                    }
                });
            }
        });
    });
};

function getAllEmployees()
{
    return new Promise((resolve, reject)=>{
        if(employees.length == 0)
        {
            reject('Error: Unable to find employees');
        }
        else
        {
            resolve(employees);
        }
    });
};

function getManagers()
{
    return new Promise((resolve, reject)=>{
        var managers = [];
        var index = 0;
        while(index < employees.length)
        {
            if(employees[index].isManager == true)
            {
                managers.push(employees[index]);
            }
            else
            {
                index++;
            }
        }
        if(managers.length > 0)
        {
            resolve(managers);
        }
        else
        {
            reject('Unable to find Managers');
        }
    });
}

function getDepartments()
{
    return new Promise((resolve, reject)=>{
        if(departments.length == 0)
        {
            reject('Error: Unable to find departments');
        }
        else
        {
            resolve(departments);
        }
    });
};