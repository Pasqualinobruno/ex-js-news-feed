// Partendo dai dati forniti crea le strutture dati necessarie sfruttando array e oggetti facendo attenzione agli attributi che caratterizzano ciascuna news.

const articles =[
    {
        title:"Scoperta di una nuova specie di papera di gomma",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima.",
        tag1:"geo",
        tag2:"tech",
        author:"Diana Rossi",
        published:"11-02-2023",
        img:"./images/rubber-duck.jpg",
        btn_1:"btn-success",
        btn_2:"btn-primary"
    },
    {
        title:"Viaggio culinario: alla ricercadei sapori perduti",
        content: "Esplorazione di tradizioni culinarie dimenticate e la ricerca di saporti utentici",
        tag1:"cucina",
        tag2:"",
        author:"Marco Bianchi",
        published:"20-02-2023",
        img:"./images/kitchen-food.jpg",
        btn_1:"btn-danger",
        btn_2:"d-none"
    },
    {
        title:"Esplorando le profondità marine: il mistero degli abissi",
        content: "Un viaggio nelle profondità dell'oceano alla scoperta di creature misteriore e inesplorate.",
        tag1:"viaggi",
        tag2:"",
        author:"Alessandra Marino",
        published:"10-03-2023",
        img:"./images/deep-sea.jpg",
        btn_1:"btn-info",
        btn_2:"d-none"
    },
    {
        title:"Arte moderna: oltre i confini convenzionali",
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        tag1:"arte",
        tag2:"tech",
        author:"Gabriele Neri",
        published:"05-04-2023",
        img:"./images/modern-art.jpg",
        btn_1:"btn-warning",
        btn_2:"btn-primary"
    },
];

//selezionare l'elemento della dom dove appendere le mie card
const for_cards = document.querySelector("#cards");


// creato il ciclo dei miei ogetti
articles.forEach(article =>{
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
})

