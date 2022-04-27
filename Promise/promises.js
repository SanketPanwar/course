const posts=[
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'}
  ];

  function getPost(){
      let output='';
      setTimeout(() => {
          posts.forEach((post)=>{
           output+=`<li>${post.title}</li>`;
          })
          document.body.innerHTML=output;
      }, 1000);
  }
  // adding post using Promises
function createPost(post){
      return new Promise((resolve,reject)=>{
          setTimeout(() => {
              posts.push(post);
              const error=false;

              if(!error)
              resolve(posts)
              else
              reject('Error : something went wrong')

          }, 1000);
      })
  }

function deletePost(){
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
         let val=posts.pop();

         if(val!==undefined)
            resolve(posts)
         else
            reject('Error : Array is empty')
     }, 1000);
    })
}




// createPost({title:'post three', body:'this is post three'}).then(getPost)
// .catch(err=>console.log(err))
// deletePost().then(getPost).catch((err)=>console.log(err));
// deletePost().then(getPost).catch((err)=>console.log(err));
// deletePost().then(getPost).catch((err)=>console.log(err));
// deletePost().then(getPost).catch((err)=>console.log(err));

//// creating and deleting at same time
// createPost({title:'post four', body:'this is post four'})
// .then(deletePost).then(getPost).catch((err)=>console.log(err));


////promise.all
// const promise1=Promise.resolve('hello');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=> setTimeout(resolve,2000,'GoodBye'))
// Promise.all([promise1,promise2,promise3]).then((values)=>{console.log(values)})



let lastActivityTime=new Date();

function upadateLastActivityTime(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        lastActivityTime=new Date();
        resolve(lastActivityTime);
    }, 1000);
})
}

let postThree={
    title:'Post Three',
    body:'This is post three'
}
// //calling createpost and update last activity parallely
// Promise.all([createPost(postThree),upadateLastActivityTime()])
// .then((values)=>{
//     console.log(values);
// })
// .catch((err)=>console.log(err));

//deliverable 3
Promise.all([createPost(postThree),upadateLastActivityTime()])
.then(deletePost).then((values)=>console.log(values))
.catch((err)=>console.log(err));