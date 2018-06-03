var employees = [];
var departments = [];
var fs = require('fs');


exports.initialize = function()
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

exports.getAllEmployees = function()
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

exports.getManagers =function ()
{
    return new Promise((resolve, reject)=>{
        var managers = [];
        for(var i = 0; i < employees.length; i++)
        {
            if(employees[i].isManager)
            {
                managers.push(employees[i]);
            }
        }
        if(managers.length == 0)
        {
            reject('Unable to find Managers');
        }
        else
        {
            resolve(managers);
        }
    });
}

exports.getDepartments = function()
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