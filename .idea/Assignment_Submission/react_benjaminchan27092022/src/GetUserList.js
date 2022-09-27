function UserList(props){
    var userList = [];
    var empNum =0;
    
    fetch("https://reqres.in/api/users?page="+props.pageNo)
    .then(res=>res.json())
    .then(res2=>{
        userList=res2.data;
        empNum = userList.length
        console.log(res2);
        
    })

    return<p>Users on page {props.pageNo}</p>


}
export default UserList;