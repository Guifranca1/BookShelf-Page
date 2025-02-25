// JSON exportado do Goodreads
const booksData = [
  // Cole aqui todo o JSON que você forneceu
  {
    "Book Id": 154278,
    "Title": "Fractal Market Analysis: Applying Chaos Theory to Investment and Economics",
    "Author": "Edgar E. Peters",
    "ISBN": "=\"0471585246",
    "My Rating": 0,
    "Number of Pages": 336,
    "Year Published": 1994,
    "Exclusive Shelf": "to-read",
    "My Review": ""
  },
  // ... (todos os outros livros do seu JSON)
];

// Mapeamento de categorias
const categories = {
    "Matemática": ["Chaos", "A Philosophical Essay on Probabilities", "Quantum Chaos", "Chaotic Dynamics"],
    "Astronomia": ["The God Equation", "Cosmos", "Life Is Simple"],
    "Estratégia/História": ["A Book of Five Rings", "The Art of War", "Genghis Khan", "Carl Von Clausewitz on War", "Napoleon: A Life", "Modern Strategy", "Strategy: A History", "The Direction of War", "The Evolution of Nuclear Strategy"],
    "Finanças": ["The (Mis)Behavior of Markets", "Fractal Market Analysis"],
    "Não-Ficção": ["Guns, Germs, and Steel"]
};

// Função para carregar livros por categoria
function loadBooks() {
    const categoriesDiv = document.getElementById("categories");

    Object.keys(categories).forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        categoryDiv.innerHTML = `<h2>${category}</h2>`;
        const bookList = document.createElement("div");

        const booksInCategory = booksData.filter(book => 
            categories[category].some(title => book.Title.includes(title))
        );

        booksInCategory.forEach(book => {
            const div = document.createElement("div");
            div.className = "book-item";
            div.textContent = `${book.Title} - ${book.Author}`;
            div.onclick = () => showDetails(book);
            bookList.appendChild(div);
        });

        categoryDiv.appendChild(bookList);
        categoriesDiv.appendChild(categoryDiv);
    });
}

// Função para mostrar detalhes do livro
function showDetails(book) {
    const status = {
        "read": "Lido",
        "to-read": "Não Lido",
        "currently-reading": "Em Leitura"
    }[book["Exclusive Shelf"]] || "Desconhecido";

    document.getElementById("book-title").textContent = book.Title;
    document.getElementById("book-image").src = `https://covers.openlibrary.org/b/isbn/${book.ISBN.replace('="', '')}-M.jpg`; // Usa Open Library pra capas
    document.getElementById("book-info").textContent = `Autor: ${book.Author} | Ano: ${book["Year Published"]} | Páginas: ${book["Number of Pages"]} | Status: ${status}`;
    document.getElementById("book-rating").textContent = `Avaliação: ${book["My Rating"] > 0 ? "⭐".repeat(book["My Rating"]) : "Sem avaliação"}`;
    document.getElementById("book-review").textContent = `Resenha: ${book["My Review"] || "Sem resenha ainda."}`;
    document.getElementById("book-details").style.display = "block";
}

// Carregar ao iniciar
window.onload = loadBooks;
