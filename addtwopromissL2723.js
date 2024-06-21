// const myPromise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('async Task')
//     },2000)
//     resolve()
// })

// myPromise.then(function(){
//     console.log('Promise resolved')
// })

// const myPromise = new Promise(function (resolve, reject) {
//  let fileLoader = false
//  if(fileLoader){
//     resolve('File Loader')
//  }else{
//     reject('File Loader Error')
//  }
// });

// myPromise.then(function (value){
//     console.log(value)
// }).catch(error => console.log(error))


   function fileLoader (){
    return new Promise(function (resolve, reject) {
        let fileLoader = true
        if(fileLoader){
           resolve('File Loader')
        }else{
           reject('File Loader Error')
        }
       });
   }

   async function myFunction(){
     try{
        const value = await fileLoader()
     console.log(value)
     }catch(error){
        console.log(error)
     }
   }
   
   myFunction()