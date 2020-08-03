// Récupérer le champ de texte où l'on tappe la tache
const tache = document.querySelector('.tache');

// Récupérer le bouton ajouter
const boutonAjouter = document.querySelector('.button-ajouter');

// Récupérer la liste des tâches ul
const listeTache = document.querySelector('.liste-de-taches');

const ajouterTache = () => {
    console.log('Ajouter tâche');
    // On récupére le texte tapé par l'utilisateur
    const texteTache = tache.value;

    // On créé ensuite les éléments html en javascript
    // <li></li>
    const li = document.createElement('li');

    // <input>
    const checkbox = document.createElement('input');

    // <label></label>
    const label = document.createElement('label');

    // <input type="checkbox">
    checkbox.type = 'checkbox';

    // <label>texte récupéré</label>
    label.innerText = texteTache;

    // <li>
    //  <input type="checkbox">
    //  <label>texte récupéré</label>
    // </li>
    li.appendChild(checkbox);
    li.appendChild(label);

    // Ajouter une action au click sur la checkbox
    checkbox.addEventListener('click', tacheEffectuee);

    // Va mettre ce qu'on créé dans le <ul></ul>
    listeTache.appendChild(li);
}


const tacheEffectuee = (event) => {
    console.log(event);
}

boutonAjouter.addEventListener('click', ajouterTache);
