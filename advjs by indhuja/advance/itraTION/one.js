// let resume=[
//     {
//         name:"subin",
//         age:25,
//         place:"ngl",
//         skills:["html",'css',"js"]
//     },
//     {
//         name:"kishore",
//         age:23,
//         place:"vaedasery",
//         skills:["html",'css',"js"]

//     },
//     {
//         name:"pradeep",
//         age:24,
//         place:"ngl",
//         skills:["html",'css',"js"]

//     },
//     {
//         name:"arun",
//         age:27,
//         place:"ngl",
//         skills:["html",'css',"js"]

//     }
// ]
// // console.log(resume[0])


// let filteredproduct=resume.filter((value)=>{
// return value.place=="ngl"})
// // console.log( filteredproduct[name])
// filteredproduct.forEach((item)=>{
//     console.log(item.name)

// })



// let resume=[
//     {
//         name:"subin",
//         age:25,
//         place:"ngl",
//         skills:["html",'css',"js"]
//     },
//     {
//         name:"kishore",
//         age:16,
//         place:"vaedasery",
//         skills:["html",'css',"js"]

//     },
//     {
//         name:"pradeep",
//         age:14,
//         place:"ngl",
//         skills:["html",'css',"js"]

//     },
//     {
//         name:"arun",
//         age:27,
//         place:"ngl",
//         skills:["html",'css',"js"]

//     }
// ]





// resume.forEach((data)=>{
// data.age>18 ? console.log(data.name) :""
// })


let resume=[
    {
        name:"subin",
        age:25,
        place:"ngl",
        skills:["html",'css',"js","node"]
    },
    {
        name:"kishore",
        age:16,
        place:"vaedasery",
        skills:["html",'css',"js"]

    },
    {
        name:"pradeep",
        age:14,
        place:"ngl",
        skills:["html",'css',"js","node"]

    },
    {
        name:"arun",
        age:27,
        place:"ngl",
        skills:["html",'css',"js"]

    }
]
resume.forEach((data)=>{
    if(data.skills.includes("node")){
        console.log(data.name)
    }
})



