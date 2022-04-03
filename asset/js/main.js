/*
    1) aggiungere un array di oggetti per i prodotti
    2) stampare nel DOM i dati delle scarpe
    3) aggiungere prodotto carrello
    4) visualizzare nel carrello del DOM i prodotti
    5) rimuovi il prodotto dal carrello
    6) somma prezzo degli elementi nel carrello per il totale
*/

var app = new Vue(
    {
        el: '#root',

        data: {
            products: [
                {
                    id: 1,
                    nome: 'Jordan x Dior',
                    price: 220,
                    media: './asset/img/jordanDior.jpeg',
                },
                {
                    id: 2,
                    nome: 'Adidas x Raf Simons',
                    price: 180,
                    media: './asset/img/adidasSimons.jpeg',
                },
                {
                    id: 3,
                    nome: 'A. McQueen',
                    price: 250,
                    media: './asset/img/mcquenn.jpeg',
                },
                {
                    id: 4,
                    nome: 'Vans',
                    price: 80,
                    media: './asset/img/vans.jpeg',
                },
                {
                    id: 5,
                    nome: 'Converse x C.D.G.',
                    price: 120,
                    media: './asset/img/converse.jpg',
                },
                {
                    id: 6,
                    nome: 'Nike',
                    price: 150,
                    media: './asset/img/airforce.jpg',
                },
            ],

            carrello: [],
            currentIndex : 0,

        },

        methods: {
            addToCart: function(element){
                this.carrello.push(element);
            },

            removeFromCarrello: function(id){
                this.carrello = this.carrello.filter(
                    (element) => {
                        if (element.id != id) {
                            return true
                        } return false
                    }
                )
            },

            sommaPrezzo: function(){
                let sum = 0;

                this.carrello.forEach(element => {
                    sum += element.price;
                });
                return sum;
            },

            prev: function() {
                this.currentIndex -=1;

                if (this.currentIndex < 0) {
                    this.currentIndex = this.products.length - 1;
                }
            },


            next: function() {
                this.currentIndex +=1;

                if (this.currentIndex > this.products.length - 1) {
                    this.currentIndex = 0;
                }
            },

            currentDot: function(indexImage) {
                this.currentIndex = indexImage;
            },
        }
    }
)