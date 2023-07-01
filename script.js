// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

const currentUser={
    "name":"",
    "email":"",
    "password":"",
    "confirm":""
}

function onChange(id){
     currentUser[id]=document.getElementById(id).textContent;
     console.log(currentUser);
}

const saveData=()=>{
 // let existingUser=JSON.parse(localStorage.getItem('users'));
  //existingUser.push(currentUser);
  localStorage.clear()
  const stringUser=JSON.stringify(currentUse)
  localStorage.setItem('users',stringUser);
  window.location.href='/login.html'
}