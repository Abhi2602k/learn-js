// const a=10;  ab a ki value chnage nhi ho skti agar hum a ko update bhi krde or same variabe ke liye baar baar declare krne ki jarurat bhi nhi hoti
const a=10;
// a=5;
 console.log(a);
 // var ko let ki value updare ho skti h or console table ka use ek se jada output ko eksath table ki form me print kra skte h
 var b="123"
 let c="56"
 var b=100
 //c=4654
 let d;
 console.table([a,b,c,d]);
 // agar koi veriable ki value assign nhi kroge to js use undefined hi manta h
 // var ka use morden js me nhi hota wo scope{} me probblem krta tha mtlb same variable ko hum baar baar declare kr skte the jitni baar declare krte wo value update ho jati thi lekin let or const ke sath esa nhi h tum ek baar hi ek variable ko assign kr skte ho
 
// use of type of

 console.table([typeof(a), typeof(b), typeof(c), typeof(d)]);

 // use of Number= agar data type string  ke form me number h tb numer ka use krke string ko integer  number me convert krte h otherwise Nan answer deta h
 const getNum= Number(c);
 console.log(getNum)
 // numver to string= use string()
let p=String(getNum);
console.log(p)

// power 2^3= 2**3

const power= 2**3
console.log(power);
console.log(2+3+"9");// output 59(bas isi case me add hokr add honge) agar pehla number string h to aage wale number bhi string ki tarha hi behave krenge
//string ke baad ke sare number string ki tarha behave krte h
console.log(2+"9"+3); // output=293
console.log("9"+2+3);// 923
console.log("9"+"2"+"3");// 923
console.log(["4">3])



