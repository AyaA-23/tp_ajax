function load_data_covid() {
  fetch("https://disease.sh/v3/covid-19/countries/Morocco") //Charge le fichier JSON
    .then((response) => response.json()) //Convertit la réponse en format JSON
    .then((data) => {
      const students = data.std; //Récupère le tableau des etudiants
      const studentList = document.getElementById("studentList"); //ul
      studentList.innerHTML = ""; //Vide la liste avant de l'afficher

      //Parcours du tableau des étudiants
      students.forEach(student => {
        const listItem = document.createElement("li");
        listItem.textContent = student.name; //Affiche le nom de l'étudiant
        studentList.appendChild(listItem); //Ajoute l'élement à la liste
      });
    })
    .catch(error => console.error("Erreur :", error)); //Gestion des erreurs
}
