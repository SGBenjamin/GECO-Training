export  const httpPostWithHeader=(endpointurl,requestParam)=>{
    let userId = localStorage.getItem("userId"); 
    let token = localStorage.getItem("JWToken");  
    return fetch("http://localhost:8080/user/"+endpointurl,{
         method:"POST",
         headers:{
            "content-type":"application/json",
            "JWToken":token,
            "userId":userId
         },body:JSON.stringify(requestParam)
      },)

}
export  const httpLogoutWithHeader=(endpointurl, requestParam)=>{
   let userId = localStorage.getItem("userId"); 
   let token = localStorage.getItem("JWToken"); 
   return fetch("http://localhost:8080/user/logout/"+endpointurl,{
        method:"POST",
        headers:{
           "content-type":"application/json",
           "JWToken":token,
           "userId":userId
        },body:JSON.stringify(requestParam)
     },)

}

export  const httpGetWithHeader=(endpointurl)=>{
    let userId = localStorage.getItem("userId"); 
    let token = localStorage.getItem("JWToken"); 
    return fetch("http://localhost:8080/user/"+endpointurl,{
         method:"GET",
         headers:{
            "content-type":"application/json",
            "JWToken":token,
            "userId":userId
         }
      })

}
export  const httpPostWithoutHeader=(endpointurl,requestParam)=>{  
    return fetch("http://localhost:8080/user/"+endpointurl,{
         method:"POST",
         body:JSON.stringify(requestParam),
         headers:{
            "content-type":"application/json"
         }
      })

}