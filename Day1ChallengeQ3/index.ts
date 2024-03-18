let name:string="Shaoor Ahmed";


let lowercasename: string= name.toLowerCase();
console.log("LowerCase:",lowercasename);

let uppercasename: string=name.toUpperCase();
console.log("UpperCase:",uppercasename);

let titlecasename: string=name.replace(/\b\w/g, c => c.toUpperCase());
console.log("Title Case:", titlecasename);


export{}
