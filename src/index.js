const requestURL = "../db.json";

async function fetchPatientsJSON(){
    const response = await fetch(requestURL);
    const patients = await response.json();
    return patients;
}

fetchPatientsJSON()
.then(patients => {
  console.log(patients);
    const table = document.createElement("table");
    table.classList.add("list");
    patientSection.appendChild(table);
    const caption = table.createCaption();
    caption.innerText = "Patient List"
    const thead = table.createTHead();
    const tr = thead.insertRow();
    const th1 = tr.insertCell();
    th1.innerText = "Name";
    const th2 = tr.insertCell();
    th2.innerText = "Type";
    const th3 = tr.insertCell();
    th3.innerText = "Date";
    const th4 = tr.insertCell();
    th4.innerText = "Hour";
    const tbody = table.createTBody();
    for (let i = 0; i < patients.pacientes.length; i++){
        
        let name = patients.pacientes[i].nombre;
        let type = patients.pacientes[i].tipo;
        let date = patients.pacientes[i].fecha;
        let hour = patients.pacientes[i].hora;

        if (type === "Long read analysis" || type === "DNA analysis" || type === "3D genomics") {
          const row = tbody.insertRow();
          const cell1 = row.insertCell();
          cell1.innerText = name;
          const cell2 = row.insertCell();
          cell2.innerText = type;
          const cell3 = row.insertCell();
          cell3.innerText = date;
          const cell4 = row.insertCell();
          cell4.innerText = hour;
        }
    }
  for (let i = 0; i < patients.pacientes.length; i++){
      let date = new Date(patients.pacientes[i].fecha);
      let today = new Date();
      if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
          let name = patients.pacientes[i].nombre;
          let type = patients.pacientes[i].tipo;
          let date = patients.pacientes[i].fecha;
  
          const row = tbody.insertRow();
          const cell1 = row.insertCell();
          cell1.innerText = name;
          const cell2 = row.insertCell();
          cell2.innerText = type;
          const cell3 = row.insertCell();
          cell3.innerText = date;
      }
      if(date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() >= today.getDate() - 7) {
      //filter by this week
      }
      if(date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth()) {
      //filter by this month
      }
  }
  });