// const add = (fNumber, sNumber) => fNumber + sNumber
// console.log(add(1,2));

// let objInformatieon = {
//     name: 'Hải',
//     age: 22,
//     address: 'Hạ Long'
// }
// const {name, age, address} = objInformatieon;
// console.log(name, age, address);

// let array = [{table: 'bàn 4 chân',}, {circle :'bánh xe'}, {compuer: 'máy tính'}]

// const [ts1, ts2, ts3] = array;
// console.log(ts1, ts2, ts3);

let person = [
    {
        name: 'a',
        color: 'black'
    },
    {
        name: 'b',
        color: 'red'
    },
    {
        name: 'c',
        color: 'blue'
    },
    {
        name: 'd',
        color: 'green'
    }
]
// for(let i=0;i<person.length ;i++){
//     // console.log("nguoi "+ person[i].name + " thich mau " + person[i].color);
//     if(person[i].color == 'black')
//         console.log("Nguoi" + person[i].name + "thich mau den");
//     else if(person[i].color == 'red')
//         console.log("nguoi" + person[i].name + "thich mau do");
//     else if(person[i].color == 'blue')
//         console.log("nguoi" + person[i].name + "thich mau xanh");
//     else
//         console.log("nguoi" + person[i].name + 'thich mau xanh la');
// }

let converColor = {
    black : 'den',
    red: 'do',
    blue: 'xanh',
    green: 'xanh la'
}
person.map(({name, color}) => console.log(`Nguoi ${name} thich ${converColor[color]}`))




//thêm thuộc tỉnh c1
for(let i=0;i<person.length;i++){
    let random = Math.floor((Math.random() * 100) + 1);
    person[i].number = random;
}
//danh sách người có số nhỏ hớn 50
// const less50 = person.filter(item => item.number <50)
// const bigger50 = person.filter(item => item.number>=50)

//cách sắp nổi bọt
for(let i=0;i<person.length;i++)
    for(let j=i+1;j<person.length;j++)
        if(person[i].number>person[j].number){
            let tg = person[i];
            person[i] = person[j];
            person[j] = tg;
        }

//cách sx tối giản nhất 
// person.sort((a,b) => b.number -a.number)
console.log(person);
