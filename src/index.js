const requestURL = "../db.json";

async function fetchPatientsJSON(){
    const response = await fetch(requestURL);
    const patients = await response.json();
    return patients;
}
function showPatients(patients, i, tbody){
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
    const tbody = table.createTBody();
    for (let i = 0; i < patients.pacientes.length; i++){
        
        showList(patients, i, tbody);
    }
  });

  function filterDna() {
    fetchPatientsJSON()
    .then(patients => {
        const tbody = document.querySelector("table tbody");
        tbody.innerHTML = "";
        for (let i = 0; i < patients.pacientes.length; i++) {
            if (patients.pacientes[i].tipo === "DNA analysis") {
                showList(patients, i, tbody);
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
            showList(patients, i, tbody);
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
            showList(patients, i, tbody);
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
            showList(patients, i, tbody);
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
            showList(patients, i, tbody);          }
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
            showList(patients, i, tbody);
          }
      }
  });
}

/*const addPatientsButton = document.getElementById("add-patients");
let newPatient;
addPatientsButton.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;
    const newPatient = {nombre: name, tipo: type, fecha: date};
    fetchPatientsJSON()
    .then(patients => {
        patients.pacientes.push(newPatient);
        updateTable(patients);
    });
});

function updateTable(patients) {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < patients.pacientes.length; i++) {
      showPatients(patients, i, tbody);
  }
}*/