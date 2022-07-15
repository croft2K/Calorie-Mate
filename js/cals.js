
var CalModal = new bootstrap.Modal(document.getElementById("CalModal"));
var NotNumber = new bootstrap.Modal(document.getElementById("NotNumber"));


function go()

{

    

    let packsize  
    let kcals
    let g
    let yourportion

    let iPortCal
    let iPackCal

    packsize = document.getElementById("f_packsize").value;
    kcals = document.getElementById("f_kcals").value;
    g = document.getElementById("f_g").value;
    yourportion = document.getElementById("f_yourportion").value;


  
    let i_packsize = parseInt(packsize);
    let i_kcals = parseInt(kcals);
    let i_g = parseInt(g);
    let i_yourportion = parseInt(yourportion);

    iPortCal = i_kcals / i_g * i_yourportion
    iPackCal = i_kcals / i_g * i_packsize
    iPortRounded = iPortCal.toFixed(0)
    iPackRounded = iPackCal.toFixed(0)

    if (isNaN(iPortRounded))
    {
      console.log("not a number!");
      NotNumber.show();
      return false;
      
    }
    else {
      console.log("is a number!");
      document.getElementById("calories_portion").innerHTML = iPortRounded;
    document.getElementById("calories_pack").innerHTML = iPackRounded;
    CalModal.show();
    return true;
    }

    
  
    //  alert("Your portion contains approximately " + iPortRounded + " calories");

  
    
 
}

function reset()

{
    document.getElementById("f_packsize").value = "";
    document.getElementById("f_kcals").value = "";
    document.getElementById("f_g").value = "";
    document.getElementById("f_yourportion").value = "";
}
