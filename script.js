fetch('https://jsonplaceholder.typicode.com/comments').then((data)=>
{
    return data.json();
    
}).then((newdata)=>
{
    console.log(newdata)

    let data1="";
    
    newdata.slice(0,10).map((values)=>{

        data1+=` 
                   <div class="row">
                     <div class="row-3">

                       <div class="card">
                         <h4 id="postid1">PostId : ${values.postId}</h4>
                          <div class="card-body">
                            <p id="id"><b>Id :</b> ${values.id}</p>  
                            <p id="name"><b>Name :</b> ${values.name}</p>
                            <p id="email"><b>Email :</b> ${values.email}</p>
                            <p id="body"><b>Body :</b> ${values.body}</p>
                          </div>
                       </div>
                     </div>
                  </div>
                 `        
    });

    document.getElementById("card").innerHTML=data1;

}).catch((err)=>{

    console.log(err)
})