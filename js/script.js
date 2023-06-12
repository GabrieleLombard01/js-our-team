//JS RESET
console.log('JS OK')

//DATI:
/*
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/

//! OPERAZIONI INIZIALI:
// CREO un array di oggetti
const employees = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg"
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "angela-caroll-chief-editor.jpg"
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "walter-gordon-office-manager.jpg"
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "angela-lopez-social-media-manager.jpg"
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      image: "scott-estrada-developer.jpg"
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "barbara-ramos-graphic-designer.jpg"
    }
  ];
  
  const container = document.getElementById("employee-container");

  //! LOGICA:
  
  // Creazione di elementi HTML per ogni dipendente e aggiunta al container
  for (let i = 0; i < employees.length; i++) {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "card";
  
    const nameElement = document.createElement("p");
    nameElement.textContent = "Nome: " + employees[i].name;
  
    const roleElement = document.createElement("p");
    roleElement.textContent = "Ruolo: " + employees[i].role;
  
    const imageElement = document.createElement("img");
    imageElement.src = "../img/" + employees[i].image;
    imageElement.alt = employees[i].name;
  
    employeeDiv.appendChild(nameElement);
    employeeDiv.appendChild(roleElement);
    employeeDiv.appendChild(imageElement);
    container.appendChild(employeeDiv);
  }
  