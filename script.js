// Dados estáticos dos livros (exemplo do seu Bookshelf)
const books = [
    {
        title: "Chaos",
        author: "James Gleick",
        year: 1987,
        genre: "Popular Science",
        pages: 400,
        status: "Lido",
        rating: "⭐⭐⭐⭐⭐",
        review: "Uma leitura fascinante sobre a história por trás da Teoria do Caos...",
        image: "https://marswillsendnomore.wordpress.com/wp-content/uploads/2022/04/gleick-chaos-first-edition-cover.jpg?w=600"
    },
    {
        title: "The God Equation",
        author: "Michio Kaku",
        year: 2021,
        genre: "Popular Science",
        pages: 240,
        status: "Lido",
        rating: "⭐⭐⭐⭐⭐",
        review: "Michio Kaku é brilhante ao descrever toda a história da construção da matemática/física...",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b0/The_God_Equation.jpg"
    },
    {
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        year: 1998,
        genre: "Não-Ficção",
        pages: 671,
        status: "Em Leitura",
        rating: "⭐⭐⭐⭐⭐",
        review: "",
        image: "https://m.media-amazon.com/images/I/81RIjse5Q1L._SL1500_.jpg"
    }
];

// Carregar os livros na lista
function loadBooks() {
    const bookList = document.getElementById("book-list");
    books.forEach((book, index) => {
        const div = document.createElement("div");
        div.className = "book-item";
        div.textContent = `${book.title} - ${book.author}`;
        div.onclick = () => showDetails(index);
        bookList.appendChild(div);
    });
}

// Mostrar detalhes do livro selecionado
function showDetails(index) {
    const book = books[index];
    document.getElementById("book-title").textContent = book.title;
    document.getElementById("book-image").src = book.image;
    document.getElementById("book-info").textContent = `Autor: ${book.author} | Ano: ${book.year} | Gênero: ${book.genre} | Páginas: ${book.pages} | Status: ${book.status}`;
    document.getElementById("book-rating").textContent = `Avaliação: ${book.rating}`;
    document.getElementById("book-review").textContent = `Resenha: ${book.review || "Sem resenha ainda."}`;
    document.getElementById("book-details").style.display = "block";
}

// Carregar ao iniciar
window.onload = loadBooks;
