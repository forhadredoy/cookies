function setCookie(cname, cvalue, exdays) {


    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";


  }


function getCookieName(name){


    let ca =  document.cookie.split(";")

  
   let cA = (ca[2])
   let sub = cA.substring (name.length+2)
    console.log(sub)


}
function getCookieName1(name){


    let ca =  document.cookie.split(";")

  
   let cB = (ca[1])
   let sub1 = cB.substring (name.length+2)
    console.log(sub1)


}
  




