let adminInfo = [];
let klientuVizites = [];

/*
function AddRow()
{
  console.log("AddRow called");


  let adminInputSlimnica, adminInputAmats, adminInputArsts, adminInputDatums, adminInputLaiks;
  
  adminInputSlimnica = document.getElementById("ievadeSlimnica").value;
  adminInputAmats = document.getElementById("ievadeAmats").value;
  adminInputArsts = document.getElementById("ievadeArsts").value;
  adminInputDatums = document.getElementById("ievadeDatums").value;
  adminInputLaiks = document.getElementById("ievadeLaiks").value;

  let tempAdd = []
  
  adminInputSlimnica.value = "";
  adminInputAmats.value = "";
  adminInputArsts.value = "";
  adminInputDatums.value = "";
  adminInputLaiks.value = "";
}
*/


function callTestFunction()
{
  console.log("Caller testFunction()");
}

/*
document.getElementById("adminBtn").addEventListener('click', () => {
  console.log("AddRow called");

  let adminInputSlimnica, adminInputAmats, adminInputArsts, adminInputDatums, adminInputLaiks;
  
  adminInputSlimnica = document.getElementById("ievadeSlimnica").value;
  adminInputAmats = document.getElementById("ievadeAmats").value;
  adminInputArsts = document.getElementById("ievadeArsts").value;
  adminInputDatums = document.getElementById("ievadeDatums").value;
  adminInputLaiks = document.getElementById("ievadeLaiks").value;

  adminInfo.push([adminInputSlimnica, adminInputAmats, adminInputArsts, adminInputDatums, adminInputLaiks]);

  localStorage.setItem("Admin saraksts",JSON.stringify(adminInfo));
  
  adminInputSlimnica.value = "";
  adminInputAmats.value = "";
  adminInputArsts.value = "";
  adminInputDatums.value = "";
  adminInputLaiks.value = "";
  
});
*/

/*
function LoadDataToPage()
{
  //let adminListDoktorati = document.getElementById("adminSarakstsTest");
  //adminListDoktorati.innerHTML = "";
  console.log("Loaded LoadDataToPage()");
  
          
        
  for(let x = 0; x < adminInfo.length; ++x)
  {
      let y = 0;
      document.getElementById("infoSaraksts").insertAdjacentHTML("afterend",`<table border="2" id="show"><thead><tr><th>${adminInfo[x][y]}</th><th>${adminInfo[x][y+1]}</th><th>${adminInfo[x][y+2]}</th><th>${adminInfo[x][y+3]}</th><th>${adminInfo[x][y+4]}</th></tr></thead></table>`);

          
        }
  }
*/

  document.getElementById("ClearArray").addEventListener('click', function(){
    adminInfo = [];
    localStorage.clear();
    location.reload();
  });


//document.getElementById("testFunctionCall").addEventListener('click', callTestFunction());                    


