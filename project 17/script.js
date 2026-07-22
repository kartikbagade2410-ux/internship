// Task 1 

// function hidemobNumber(num){
//     let hidden = "xxxxxx" + num.slice(6);
//     console.log(hidden);
// }
//  hidemobNumber("7620504510")


// Task 2 

// function fileExt(file){
//     let extract = file.split(".").pop(".");
//     console.log(extract);
// }
// fileExt("resume.pdf")


// Task3 

// function CurrentMonth(){
//     let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     let today = new Date();
//     let monthName = months[today.getMonth()];
//     console.log(monthName);
// }
// CurrentMonth();


// Task4 

// function RemoveName(str){
//     let updatedstudents =str.filter(item => item !=="Sneha");     
//     console.log(updatedstudents);
// }
// let students=["Rahul","Aman","sneha","Riya"];
// RemoveName(students)


// Task5

// function BonusMarks(marks){
//     let updatedMarks = marks.map(mark => mark +5);
//     console.log(updatedMarks);
// }
// BonusMarks([45,60,80])

//           ||

// function BonusMarks(marks){
//     let updatedMarks = marks.map(item => item + 5);
//      console.log(updatedMarks);
// }
//  let Marks=[45,60,80];
// BonusMarks(Marks)

// Task6 

// function CheckLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0)||year % 400 ===0){
//         console.log("Leap Year");
//     }else{
//         console.log("Not a Leap Year");
//     }
// }
// CheckLeapYear(2024);


 // Task7 

// function ShortWord(word){
//     let shortest = word.reduce((a ,b)=> {
//         return a.length <= b.length ? a:b;
//     },(word[0]));
//     console.log(shortest);
// }
// ShortWord(["Elephant","Cat","Tiger","Dog"]);


// Task8

// function ConvertPrice(prices){
//     let rupees = prices.map(item =>"₹"+item)
    
//     console.log(rupees);
// }
// ConvertPrice([100,250,500]);


// Task9 

// function FindWeek(){
//     let today = new Date();
//     let day = today.getDay();
//     if (day === 0 || day === 6){
//         console.log("Weekend");
//     }else{
//         console.log("Weekday");
//     }

// }
// FindWeek();


// Task10 

// function RemoveString(str){
//     let lang =str.filter(item => item !=="")
//     console.log(lang);

// }
// RemoveString(["HTML","","CSS","","JavaScript"]);
              
               

// let product = ["HTML","","CSS","","JavaScript"];
// function removeArr(age){
//     let sub = age.filter(item => item !=="");
//     console.log(sub);
// }
// removeArr(product)