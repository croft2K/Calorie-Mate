    let packsize = 0    
    let kcals = 0
    let g = 0
    let yourportion = 0

    let iPortCal = 0

    packsize = parseInt(document.getElementById("f_packsize").packsize);
    kcals = document.getElementById("f_kcals").value;
    g = document.getElementById("f_g").value;
    yourportion = document.getElementById("f_yourportion").value;
  

function go()

{
    iPortCal = kcals / g * yourportion
    alert("Your portion contains " + iPortCal + " calories");

}