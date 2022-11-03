//1
let restraunt = {
    name: 'Caffeteria',
    established: 2012,
    employeeCount: 50,
    isOpen: true,
    isSecure: undefined
}
restraunt['secondName'] = `${restraunt.name}`,

//2
vehicle = {};
vehicle['brandName'] = 'BMW';
vehicle['model'] = 'X5';
vehicle['model'] = 'M1';
delete vehicle['model']

//3
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let sum = 0;
for(key in salaries){
    sum += salaries[key]
}
console.log(sum)
