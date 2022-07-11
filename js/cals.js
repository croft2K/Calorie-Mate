
function go()

{

    let packsize  
    let kcals
    let g
    let yourportion

    let iPortCal

    packsize = document.getElementById("f_packsize").value;
    kcals = document.getElementById("f_kcals").value;
    g = document.getElementById("f_g").value;
    yourportion = document.getElementById("f_yourportion").value;
  
    let i_packsize = parseInt(packsize);
    let i_kcals = parseInt(kcals);
    let i_g = parseInt(g);
    let i_yourportion = parseInt(yourportion);



    iPortCal = i_kcals / i_g * i_yourportion
    iPortRounded = iPortCal.toFixed(0)
    alert("Your portion contains " + iPortRounded + " calories");

}



function reset()

{
    document.getElementById("f_packsize").value = "";
    document.getElementById("f_kcals").value = "";
    document.getElementById("f_g").value = "";
    document.getElementById("f_yourportion") = "";
}