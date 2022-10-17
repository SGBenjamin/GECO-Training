export  const httpPostWithHeader=(endpointurl,requestParam)=>{
    let userId = localStorage.getItem("userId"); 
    let token = localStorage.getItem("token"); 
    return fetch("http://localhost:8080/user/"+endpointurl,{
         method:"POST",
         headers:{
            "content-type":"application/json",
            "token":token,
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
            "token":this.state.token,
            "userId":this.state.userId
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