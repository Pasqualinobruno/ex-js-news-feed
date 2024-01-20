// definito i nostri articoli
const articles = [
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.",
        tags: ["geo", "tech"],
        author: "Diana Rossi",
        published: "11-02-2023",
        img: "./images/rubber-duck.jpg",
        btn_1: "btn-success",
        btn_2: "btn-primary",
        id: 1,
        checked: false,

    },
    {
        title: "Viaggio culinario: alla ricercadei sapori perduti",
        content: "Esplorazione di tradizioni culinarie dimenticate e la ricerca di saporti utentici",
        tags: ["cucina"],
        author: "Marco Bianchi",
        published: "20-02-2023",
        img: "./images/kitchen-food.jpg",
        btn_1: "btn-danger",
        btn_2: "d-none",
        id: 2,
        checked: false,

    },
    {
        title: "Esplorando le profondità marine: il mistero degli abissi",
        content: "Un viaggio nelle profondità dell'oceano alla scoperta di creature misteriore e inesplorate.",
        tags: ["viaggi"],
        author: "Alessandra Marino",
        published: "10-03-2023",
        img: "./images/deep-sea.jpg",
        btn_1: "btn-info",
        btn_2: "d-none",
        id: 3,
        checked: false,

    },
    {
        title: "Arte moderna: oltre i confini convenzionali",
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        tags: ["arte", "tech"],
        author: "Gabriele Neri",
        published: "05-04-2023",
        img: "./images/modern-art.jpg",
        btn_1: "btn-warning",
        btn_2: "btn-primary",
        id: 4,
        checked: false,

    },
];
const tags = ["geo", "tech", "viaggi", "cucina", "arte"]
console.log(articles);

const container_el = document.querySelector("#cards");
//console.log(container_el);

const save_articles = [];
console.log(save_articles);
// serve per creare gli articoli e inserirli alla pagina
articles.forEach(article => {
    //console.log(article.id);
    //creamo il nostro markup

    const markup = generate_article(article)
    //console.log(markup);

    //stampa il nostro markup sulla dom
    container_el.insertAdjacentHTML('beforeend', markup)
});


//ci controlla se l'articolo è prsente nell'arrey e ci da vero o falso
function is_save(article) {
    return save_articles.includes(article.id)

}

//questa funzione ci restituisce il murkup del nostro articolo
function generate_article(article) {
    //creamo il nostro markup
    return `
    <div class="cards bg-light text-black my-4 p-4 ${is_save(article) ? "checked" : ""}" data-articleid="${article.id}">
        <h3><strong>${article.title}</strong></h3>
        <h5><strong>pubblicato da ${article.author}</strong></h5>
        <p>in data ${article.published}</p>
        <p>${article.content}</p>
        <img src="${article.img}" alt="">
        <div class="d-flex mt-1 p-1 gap-1">
            <button type="button" class="btn  ${article.btn_1}">${article.tags[0]}</button>
            <button type="button" class="btn  ${article.btn_2}">${article.tags[1]}</button>
        </div>
        <i class="fa-${is_save(article) ? "solid" : "regular"} fa-bookmark" "></i>
    </div>
    `

};

const items_el = document.querySelectorAll("#cards > div");
//console.log(items_el);

items_el.forEach(element => {

    //console.log(element);

    element.addEventListener('click', function (e) {
        const articleId = Number(e.currentTarget.dataset.articleid)
        console.log(articleId);

        const iconEl = e.currentTarget.lastElementChild
        //console.log(iconEl);
        iconEl.className = 'fa-solid fa-bookmark'

        if (!save_articles.includes(articleId)) {
            save_articles.push(articleId);
        }

        console.log(save_articles);
    })

});

const selectElemet = document.getElementById('tags');
console.log(selectElemet);
//console.log(selectElemet);


const newsEl = document.getElementById('flexCheckDefault')
//console.log(newsEl);


// funzione che filtra per il tag
function filterByTags(tag) {
    if (!tag || tag === "all") return articles;
    return articles.filter((article) => article.tags.includes(tag));
}


//funzione che filtra per il tag e contemporanemanete id
function filterOnlyChecked(arr, tag) {
    return articles.filter((article) => {
        //return arr.includes(article.id) && article.tags.includes(tag);
        if (tag === 'all') {
            return arr.includes(article.id);
        } else {
            return arr.includes(article.id) && article.tags.includes(tag);
        }
    });
}


//questa funzione applica i filtri delle funzioni precedente
function filter() {
    const selectedTag = selectElemet.value;
    const isNewsChecked = newsEl.checked;

    let filteredArticles = filterByTags(selectedTag)
    console.log(filteredArticles);

    if (isNewsChecked) {
        filteredArticles = filterOnlyChecked(save_articles, selectedTag);
        filteredArticles.forEach((article) => {
            const markup = generate_article(article);
            container_el.insertAdjacentHTML("beforeend", markup);
        });
    }
    console.log(filteredArticles);

    container_el.innerHTML = "";
    if (filteredArticles.length > 0) {
        filteredArticles.forEach((article) => {
            const markup = generate_article(article);
            container_el.insertAdjacentHTML("beforeend", markup);
        });
    } else {
        container_el.innerHTML =
        `
        <div class="text-dark d-flex align-items-center container">
            <h4 class= "text-white text-center">Nessun articolo corrisponde ai criteri di ricerca.</h4>
            <i class="fa-solid fa-triangle-exclamation " style="color: #FFD43B;"></i>;
        </div>
        `
    }


}






selectElemet.addEventListener("change", filter);
newsEl.addEventListener("change", filter);

