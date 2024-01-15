// Partendo dai dati forniti crea le strutture dati necessarie sfruttando array e oggetti facendo attenzione agli attributi che caratterizzano ciascuna news.

const articles = [
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.",
        tag1: "geo",
        tag2: "tech",
        author: "Diana Rossi",
        published: "11-02-2023",
        img: "./images/rubber-duck.jpg",
        btn_1: "btn-success",
        btn_2: "btn-primary",

    },
    {
        title: "Viaggio culinario: alla ricercadei sapori perduti",
        content: "Esplorazione di tradizioni culinarie dimenticate e la ricerca di saporti utentici",
        tag1: "cucina",
        tag2: "",
        author: "Marco Bianchi",
        published: "20-02-2023",
        img: "./images/kitchen-food.jpg",
        btn_1: "btn-danger",
        btn_2: "d-none",

    },
    {
        title: "Esplorando le profondità marine: il mistero degli abissi",
        content: "Un viaggio nelle profondità dell'oceano alla scoperta di creature misteriore e inesplorate.",
        tag1: "viaggi",
        tag2: "",
        author: "Alessandra Marino",
        published: "10-03-2023",
        img: "./images/deep-sea.jpg",
        btn_1: "btn-info",
        btn_2: "d-none",

    },
    {
        title: "Arte moderna: oltre i confini convenzionali",
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        tag1: "arte",
        tag2: "tech",
        author: "Gabriele Neri",
        published: "05-04-2023",
        img: "./images/modern-art.jpg",
        btn_1: "btn-warning",
        btn_2: "btn-primary",

    },
];

//console.log(articles);
//selezionare l'elemento della dom dove appendere le mie card
const for_cards = document.querySelector("#cards");
creatArticles(articles, for_cards)




// creato il ciclo dei miei ogetti + funzione
/*articles.forEach(article =>{
    //console.log(article);
    article = `
    <div class="cards bg-light text-black my-4 p-3">
        <h3><strong>${article.title}</strong></h3>
        <h5><strong>pubblicato da ${article.author}</strong></h5>
        <p>in data ${article.published}</p>
        <p>${article.content}</p>
        <img src="${article.img}" alt="">
        <div class="d-flex mt-1 p-1 gap-1">
            <button type="button" class="btn  ${article.btn_1}">${article.tag1}</button>
            <button type="button" class="btn  ${article.btn_2}">${article.tag2}</button>
        </div>
        <i class="fa-regular fa-bookmark" id="select-tag"></i>
    </div>
    `

    for_cards.insertAdjacentHTML('beforeend', article)
})*/
//la funzione che crea i nostri articoli
function creatArticles(articlelist, domEl) {
    articlelist.forEach((article, index, articles) => {
        //console.log(article['tag2']);
        //console.log(index);
        let articleHTML = `
        <div class="cards bg-light text-black my-4 p-3">
            <h3><strong>${article.title}</strong></h3>
            <h5><strong>pubblicato da ${article.author}</strong></h5>
            <p>in data ${article.published}</p>
            <p>${article.content}</p>
            <img src="${article.img}" alt="">
            <div class="d-flex mt-1 p-1 gap-1">
                <button type="button" class="btn  ${article.btn_1}">${article.tag1}</button>
                <button type="button" class="btn  ${article.btn_2}">${article.tag2}</button>
            </div>
            <i class="fa-regular fa-bookmark" id="select-tag${index}"></i>
        </div>
        `


        domEl.insertAdjacentHTML('beforeend', articleHTML);

        const saveEl = document.querySelector(`#select-tag${index}`);


        let isSolid = false;

        saveEl.addEventListener('click', function () {
            // Alterna tra gli stati di fa-solid
            isSolid = !isSolid;

            // Rimuovi la classe fa-regular se è già presente, altrimenti aggiungila e stampa l'articolo preferito
            if (isSolid) {
                saveEl.classList.add('fa-solid');
                saveEl.classList.remove('fa-regular');
                let copiaArticle = articleHTML; 
                aggiungiOggettoSeNonPresente(copiaArticle);
            } else {
                saveEl.classList.add('fa-regular');
                saveEl.classList.remove('fa-solid');
                
              
            }

            
            
            
            
            
            
        });









        ////questa funzione permette di cambiare il fondo dell'icona e di ricopiare gli articoli
        //saveEl.addEventListener('click', function () {
        //    saveEl.classList.toggle('fa-solid');

        //    let copiaArticle = articleHTML //{ ...article };

        //    aggiungiOggettoSeNonPresente(copiaArticle)

        //});



    })


}

const preferArticles = [];
console.log(preferArticles);



// questa fuonzione adda l'articolo se non fosse presente altrimenti lo elimina dall'arrey di destinazione
function aggiungiOggettoSeNonPresente(nuovoOggetto) {



    // Verifica se l'oggetto non è presente nell'array 
    if (preferArticles.includes(nuovoOggetto)) {

    } else {
        // Aggiungi l'oggetto solo se non è presente
        preferArticles.push(nuovoOggetto);
    }
};



//impostiamo il select
document.getElementById('tags').addEventListener('change', function (e) {
    //console.log(this);
    console.log(e.target.value);
    //ci filtra solo gli articoli con il tag1 o il tag2 uguali al valore 
    const filterArticle = articles.filter(article => {
        console.log(article.tag1, article.tag2);

        return article.tag1 === e.target.value || article.tag2 === e.target.value || e.target.value === 'all'

    });
    //questo ci azzera l'html cosi da poter creare solo gli articoli desiderati
    for_cards.innerHTML = "";

    creatArticles(filterArticle, for_cards);
    //se la selezione risulta vuota comparire un mess
    if (filterArticle == 0) {
        for_cards.innerHTML = '<h2 class="text-center text-light  align-items-center mt-2"><strong>Non sono presenti articoli di questo genere</h2>'

    }
})



//const buttonToSave = document.querySelector('#btn-news');
//buttonToSave.addEventListener('click', function () {
//
//    buttonToSave.classList.toggle('bg-dark');
//
//    for_cards.innerHTML = "";
//    
//    preferArticles.forEach((article, index) => {
//        //console.log(article);
//
//        for_cards.insertAdjacentHTML('beforeend', article);
//
//
//
//
//    })
//
//})

const buttonToSave = document.querySelector('#btn-news');


let isDarkMode = false;
// permette di dare il colore all'icon e di rimuoverlo e a seconda del coloro mi stamoa gli articoli salvati o ritorna allo state iniziale
buttonToSave.addEventListener('click', function () {
    // Alterna tra gli stati di bg-dark
    isDarkMode = !isDarkMode;

    // Aggiungi o rimuovi la classe a seconda dello stato
    if (isDarkMode) {
        buttonToSave.classList.add('bg-dark');
    } else {
        buttonToSave.classList.remove('bg-dark');
    }

    // Rimuovi il contenuto di for_cards
    for_cards.innerHTML = "";

    // Stampa gli articoli solo se siamo in modalità scura
    if (isDarkMode) {
        preferArticles.forEach((article, index) => {
            // Stampa dinamicamente gli articoli in for_cards
            for_cards.insertAdjacentHTML('beforeend', article);
        });
    } else {
        // stampa i nostri articoli
        creatArticles(articles, for_cards);



    }
    
    
});
