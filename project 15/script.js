function initail(name){
    let nameAt = name.split(" ");
    let str = ""
    nameAt.map((item,index)=>{
        str = str + item[0].toUpperCase()
    });
console.log(str);

}
initail("Virat kohli");