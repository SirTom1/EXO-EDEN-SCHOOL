let mycontact = {
    name : "Fabrice",
    password : "123",
    isAdmin : true,
    age : "10"
  }
  
  console.log(mycontact.password)
  
  function checkPassword(user, password) {
       (password === mycontact.password) ? (
    (user === mycontact.isAdmin) ? (console.log("Helle Admin")) : (console.log("hello There"))
    
    ) : (console.log("Wrong password"))
  }
  
  checkPassword(true, "123");