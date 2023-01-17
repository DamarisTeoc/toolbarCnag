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
  });

  function filterDna() {
    fetchPatientsJSON()
    .then(patients => {
        const tbody = document.querySelector("table tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < patients.pacientes.length; i++) {
            if (patients.pacientes[i].tipo === "DNA analysis") {
                let name = patients.pacientes[i].nombre;
                let type = patients.pacientes[i].tipo;
                let date = patients.pacientes[i].fecha;
                let hour = patients.pacientes[i].hora;

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
    });
}

function filterLong() {
  fetchPatientsJSON()
  .then(patients => {
      const tbody = document.querySelector("table tbody");
      tbody.innerHTML = "";
      for (let i = 0; i < patients.pacientes.length; i++) {
          if (patients.pacientes[i].tipo === "Long read analysis") {
              let name = patients.pacientes[i].nombre;
              let type = patients.pacientes[i].tipo;
              let date = patients.pacientes[i].fecha;
              let hour = patients.pacientes[i].hora;

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
  });
}
function filterGenomics() {
  fetchPatientsJSON()
  .then(patients => {
      const tbody = document.querySelector("table tbody");
      tbody.innerHTML = "";
      for (let i = 0; i < patients.pacientes.length; i++) {
          if (patients.pacientes[i].tipo === "3D genomics") {
              let name = patients.pacientes[i].nombre;
              let type = patients.pacientes[i].tipo;
              let date = patients.pacientes[i].fecha;
              let hour = patients.pacientes[i].hora;

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
  });
}
function filterToday() {
  fetchPatientsJSON()
  .then(patients => {
      const tbody = document.querySelector("table tbody");
      tbody.innerHTML = "";
      const today = new Date();
      for (let i = 0; i < patients.pacientes.length; i++) {
        let date = new Date(patients.pacientes[i].fecha);
        if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
              let name = patients.pacientes[i].nombre;
              let type = patients.pacientes[i].tipo;
              let date = patients.pacientes[i].fecha;
              let hour = patients.pacientes[i].hora;

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
  });
}
function filterWeek() {
  fetchPatientsJSON()
  .then(patients => {
      const tbody = document.querySelector("table tbody");
      tbody.innerHTML = "";
      const today = new Date();
      const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      for (let i = 0; i < patients.pacientes.length; i++) {
          let date = new Date(patients.pacientes[i].fecha);
          if (date >= oneWeekAgo && date <= today) {
              let name = patients.pacientes[i].nombre;
              let type = patients.pacientes[i].tipo;
              let date = patients.pacientes[i].fecha;
              let hour = patients.pacientes[i].hora;

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
  });
}
function filterMonth() {
  fetchPatientsJSON()
  .then(patients => {
      const tbody = document.querySelector("table tbody");
      tbody.innerHTML = "";
      const today = new Date();
      for (let i = 0; i < patients.pacientes.length; i++) {
          let date = new Date(patients.pacientes[i].fecha);
          if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth()) {
              let name = patients.pacientes[i].nombre;
              let type = patients.pacientes[i].tipo;
              let date = patients.pacientes[i].fecha;
              let hour = patients.pacientes[i].hora;

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
  });
}