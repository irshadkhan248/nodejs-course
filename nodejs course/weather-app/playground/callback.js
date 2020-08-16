setTimeout(()=>{
console.log("2second ");
},101) 

const names=['irshad', 'nazmuddin','asif','john']
const shortNames=names.filter((name)=>{
    return name.length<=4
})
console.log("name",shortNames);


// add=function(n1,n2,callback){
//     const result= n1+n2
//     setTimeout(()=>{
// console.log("hiiiiiiiiii");
//     },2000)
//     callback(result)
// }

add=function(n1,n2){
    
    setTimeout(()=>{
console.log("hiiiiiiiiii");
result = n1+n2
    },2000)
    return result
}

const res=add(3,3)
    console.log("result",res);
