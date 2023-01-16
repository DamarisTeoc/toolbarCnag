const requestURL = "../db.json";

async function fetchPatientsJSON(){
    const response = await fetch(requestURL);
    const patients = await response.json();
    return patients;
}

fetchPatientsJSON()
.then(patients => {
  console.log(patients);
    for (let i = 0; i < patients.pacientes.length; i++){
        
        let name = patients.pacientes[i].nombre;
        let type = patients.pacientes[i].tipo;
        let date = patients.pacientes[i].fecha;

        patientSection.innerHTML+= `
        <div class="list" style="width: 18rem;">
              <p class="name">${name}</p>
              <p class="type">${type}</p>
              <p class="date">${date}</p>
        </div>
        `
    }
  });

