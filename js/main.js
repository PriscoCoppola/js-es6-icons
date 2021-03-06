/*********************************************
* DISPLAY ICONS
*********************************************/

// Variabili
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

const colors = ['#7f5af0', '#2cb67d', '#72757e'];

// Milestone 1
// Variabile punto DOM dell'HTML
const container = document.querySelector('.icons');

// Dichiarazione funzione per stampare icone a schermo
printIcons(icons, container);

// Milestone 2
// Nuovo array di oggetti contente anche il colore
const coloredIcons = colorIcons(icons, colors);

// Dichiarazione funzione per stampare icone a schermo
printIcons(coloredIcons, container);

// Milestone 3
// Variabile punto DOM dell'HTML
const select = document.querySelector('#type')

// Generare select option
const types = getType(coloredIcons);
genOption(types, select);

// Filtrare le icone
select.addEventListener('change', () => {
    const selected = select.value;
    
    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
})





/*********************************************
* FUNCTIONS
*********************************************/
// Stampare a schermo icone
function printIcons(icons, container) {
    let html = '';
    
    icons.forEach((icon) => {
        // Destrutturazione di un oggetto
        const {family, prefix, name, color} = icon;

        // Aggiunta HTML dinamico
        html += `
        <div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`
    })

    // Aggiunta HTML nel documento
    container.innerHTML = html;
}

// Aggiungere il colore agli oggetti per tipo
function colorIcons(icons, colors) {
    const types = getType(icons);

    // Aggiungere ad ogni tipo il colore
    const newIcons = icons.map((icon) => {
        const index = types.indexOf(icon.type);
        
        return {
            ...icon,
            color: colors[index],
        }
    })

    return newIcons;
}

// Generare type icone univoco
function getType(icons) {

    const type = [];
    icons.forEach((icon) => {
        if (! type.includes(icon.type)) {
            type.push(icon.type);
        }
    })

    return type;
}

// Generare option
function genOption(types, select) {
    let option = '';

    types.forEach((type) => {
        
        // Aggiunta HTML dinamico
        option += `<option value="${type}">${type}</option>`
    })

    // Aggiunta HTML nel documento
    select.innerHTML += option;
}

// Generare icone filtrate
function filterIcons(icons, selected) {

    if (selected === 'all') {
        return icons;
    }

    const filtered = icons.filter((icon) => {
        return (icon.type === selected);
    })

    return filtered;
}

