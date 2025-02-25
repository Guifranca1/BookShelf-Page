// Função pra ícones de status
function statusIcon(shelf) {
    switch (shelf) {
        case "read": return "✅";
        case "currently-reading": return "📖";
        case "to-read": return "⏳";
        default: return "";
    }
}

// Função pra ícones de categorias
function getCategoryIcon(category) {
    switch (category) {
        case "Matemática": return "📐";
        case "Astronomia": return "🔭";
        case "Estratégia/História": return "⚔️";
        case "Finanças": return "💰";
        case "Não-Ficção": return "📖";
        default: return "";
    }
}

// JSON exportado do Goodreads (completo)
const booksData = [
    {"Book Id": 154278, "Title": "Fractal Market Analysis: Applying Chaos Theory to Investment and Economics", "Author": "Edgar E. Peters", "ISBN": "0471585246", "My Rating": 0, "Number of Pages": 336, "Year Published": 1994, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/61OXDKpCrqL._SL1360_.jpg"},
    {"Book Id": 665134, "Title": "The (Mis)Behavior of Markets", "Author": "Benoît B. Mandelbrot", "ISBN": "0465043550", "My Rating": 0, "Number of Pages": 352, "Year Published": 2004, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/717O8MYiiRL._SL1500_.jpg"},
    {"Book Id": 1590178, "Title": "The Evolution of Nuclear Strategy", "Author": "Lawrence Freedman", "ISBN": "0333972392", "My Rating": 0, "Number of Pages": 584, "Year Published": 2003, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/51PMkyWG9lL._SL1276_.jpg"},
    {"Book Id": 18555040, "Title": "The Direction of War: Contemporary Strategy in Historical Perspective", "Author": "Hew Strachan", "ISBN": "1107047854", "My Rating": 0, "Number of Pages": 338, "Year Published": 2014, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/FYS-8847-000/FYS-8847-000_detail1.jpg?ts=1734710649395&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 17847473, "Title": "Strategy: A History", "Author": "Lawrence Freedman", "ISBN": "0199325154", "My Rating": 0, "Number of Pages": 768, "Year Published": 2013, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71tE5QXqyML._SL1328_.jpg"},
    {"Book Id": 1051121, "Title": "Modern Strategy", "Author": "Colin S. Gray", "ISBN": "0198782519", "My Rating": 0, "Number of Pages": 426, "Year Published": 1999, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71XA6Z2+1eL._SL1500_.jpg"},
    {"Book Id": 55300, "Title": "Napoleon: A Life", "Author": "Paul Johnson", "ISBN": "0143037455", "My Rating": 0, "Number of Pages": 208, "Year Published": 2006, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/0P0-2640-000/0P0-2640-000_detail1.jpg?ts=1712775713360&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 22017921, "Title": "Carl Von Clausewitz on War", "Author": "Anatol Rapoport", "ISBN": "", "My Rating": 0, "Number of Pages": "", "Year Published": "", "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/0J8-2773-000/0J8-2773-000_detail1.jpg?ts=1712773724901&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 40718726, "Title": "Genghis Khan and the Making of the Modern World", "Author": "Jack Weatherford", "ISBN": "", "My Rating": 0, "Number of Pages": 352, "Year Published": 2018, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/515H9KkSimL._SY425_.jpg"},
    {"Book Id": 10534, "Title": "The Art of War", "Author": "Sun Tzu", "ISBN": "", "My Rating": 0, "Number of Pages": 170, "Year Published": 2005, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/05M-0623-000/05M-0623-000_detail1.jpg?ts=1712762636248&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 867247, "Title": "A Book of Five Rings: The Classic Guide to Strategy", "Author": "Miyamoto Musashi", "ISBN": "0517415283", "My Rating": 0, "Number of Pages": 192, "Year Published": 1988, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/FVR-0736-000/FVR-0736-000_detail1.jpg?ts=1734521719245&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 55030, "Title": "Cosmos", "Author": "Carl Sagan", "ISBN": "0375508325", "My Rating": 0, "Number of Pages": 384, "Year Published": 2002, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71zVhbnKmfL._SL1500_.jpg"},
    {"Book Id": 56643989, "Title": "Life Is Simple: How Occam's Razor Set Science Free and Shapes the Universe", "Author": "Johnjoe McFadden", "ISBN": "1541620445", "My Rating": 0, "Number of Pages": 384, "Year Published": 2021, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71HS120qxOL._SL1500_.jpg"},
    {"Book Id": 5877139, "Title": "Chaotic Dynamics: Theory and Applications to Economics", "Author": "Alfredo Medio", "ISBN": "0521484618", "My Rating": 0, "Number of Pages": 364, "Year Published": 1995, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/81IWFf3UCPL._SL1360_.jpg"},
    {"Book Id": 208219318, "Title": "Chaos Theory in Psychology (Contributions in Psychology) by Abraham Fred Gilgen Albert R. (1995-04-25) Paperback", "Author": "unknown author", "ISBN": "", "My Rating": 0, "Number of Pages": "", "Year Published": "", "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://media.s-bol.com/gBm6RZjpRjD/550x826.jpg"},
    {"Book Id": 2531540, "Title": "Quantum Chaos: An Introduction: An Introduction", "Author": "Hans-Jürgen Stöckmann", "ISBN": "0521027152", "My Rating": 0, "Number of Pages": 384, "Year Published": 2008, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71L5PspyUML._SL1360_.jpg"},
    {"Book Id": 1842, "Title": "Guns, Germs, and Steel: The Fates of Human Societies", "Author": "Jared Diamond", "ISBN": "0739467352", "My Rating": 5, "Number of Pages": 498, "Year Published": 2005, "Exclusive Shelf": "read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/81RIjse5Q1L._SL1500_.jpg"},
    {"Book Id": 54614037, "Title": "The God Equation: The Quest for a Theory of Everything", "Author": "Michio Kaku", "ISBN": "0385542747", "My Rating": 5, "Number of Pages": 225, "Year Published": 2021, "Exclusive Shelf": "read", "My Review": "", "Image": "https://upload.wikimedia.org/wikipedia/en/b/b0/The_God_Equation.jpg"},
    {"Book Id": 3438171, "Title": "A Philosophical Essay on Probabilities (Dover Books on Mathematics)", "Author": "Pierre-Simon Laplace", "ISBN": "0486288757", "My Rating": 4, "Number of Pages": 224, "Year Published": 1996, "Exclusive Shelf": "read", "My Review": "", "Image": "https://upload.wikimedia.org/wikipedia/en/8/8e/A_Philosophical_Essay_on_Probabilities.jpg"},
    {"Book Id": 64582, "Title": "Chaos: Making a New Science", "Author": "James Gleick", "ISBN": "0140092501", "My Rating": 5, "Number of Pages": 352, "Year Published": 1988, "Exclusive Shelf": "read", "My Review": "", "Image": "https://marswillsendnomore.wordpress.com/wp-content/uploads/2022/04/gleick-chaos-first-edition-cover.jpg?w=600"}
];

const categories = {
    "Matemática": ["Chaos", "A Philosophical Essay on Probabilities", "Quantum Chaos", "Chaotic Dynamics", "Chaos Theory in Psychology"],
    "Astronomia": ["The God Equation", "Cosmos", "Life Is Simple"],
    "Estratégia/História": ["A Book of Five Rings", "The Art of War", "Genghis Khan", "Carl Von Clausewitz on War", "Napoleon: A Life", "Modern Strategy", "Strategy: A History", "The Direction of War", "The Evolution of Nuclear Strategy"],
    "Finanças": ["The (Mis)Behavior of Markets", "Fractal Market Analysis"],
    "Não-Ficção": ["Guns, Germs, and Steel"]
};

function loadBooks() {
    console.log("Carregando livros...");
    const categoriesDiv = document.getElementById("categories");
    if (!categoriesDiv) {
        console.error("Elemento #categories não encontrado!");
        return;
    }
    categoriesDiv.innerHTML = "";

    Object.keys(categories).forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";

        const categoryHeader = document.createElement("h2");
        const categoryIcon = getCategoryIcon(category);
        categoryHeader.textContent = `${categoryIcon} ${category}`;
        const bookList = document.createElement("div");
        bookList.className = "book-list";

        const booksInCategory = booksData.filter(book => 
            categories[category].some(title => book.Title.includes(title))
        ).sort((a, b) => a.Title.localeCompare(b.Title)); // Ordenação alfabética por título

        booksInCategory.forEach(book => {
            const div = document.createElement("div");
            div.className = "book-item";
            
            // Call the function and store the result BEFORE the div.textContent line.
            const statusIconResult = statusIcon(book["Exclusive Shelf"]); 
            
            div.textContent = `${statusIconResult} ${book.Title} - ${book.Author}`;

            const detailsDiv = document.createElement("div");
            detailsDiv.className = "book-details";
            const status = {
                "read": "Lido",
                "to-read": "Não Lido",
                "currently-reading": "Em Leitura"
            }[book["Exclusive Shelf"]] || "Desconhecido";
            detailsDiv.innerHTML = `
                <h2>${book.Title}</h2>
                <img src="${book.Image || (book.ISBN ? `https://covers.openlibrary.org/b/isbn/${book.ISBN}-M.jpg` : "https://via.placeholder.com/150")}" alt="Capa do livro">
                <p>Autor: ${book.Author} | Ano: ${book["Year Published"] || "N/A"} | Páginas: ${book["Number of Pages"] || "N/A"} | Status: ${status}</p>
                <p>Avaliação: ${book["My Rating"] > 0 ? "⭐".repeat(book["My Rating"]) : "Sem avaliação"}</p>
                <p>Resenha: ${book["My Review"] || "Sem resenha ainda."}</p>
            `;
            div.appendChild(detailsDiv);

            div.onclick = (e) => {
                e.stopPropagation();
                const isVisible = detailsDiv.style.display === "block";
                detailsDiv.style.display = isVisible ? "none" : "block";
                updateDropdownHeight(categoryDiv);
            };

            bookList.appendChild(div);
        });

        // Toggle da categoria (expandir/minimizar)
        categoryHeader.onclick = () => {
            const isOpen = bookList.classList.contains("open");
            if (isOpen) {
                bookList.classList.remove("open");
                bookList.style.maxHeight = null;
            } else {
                bookList.classList.add("open");
                updateDropdownHeight(categoryDiv);
            }
        };

        categoryDiv.appendChild(categoryHeader);
        categoryDiv.appendChild(bookList);
        categoriesDiv.appendChild(categoryDiv);
    });

    // Gráfico de progresso
    document.getElementById("reading-progress").innerHTML = `
        <pre class="mermaid">
        gantt
            title Progresso de Leitura em 2025
            dateFormat  YYYY-MM-DD
            section Matemática
            Chaos                  :done, 2025-01-05, 2w
            section Astronomia
            The God Equation       :done, 2025-01-10, 1w
            section Não-Ficção
            Guns, Germs, and Steel :active, 2025-02-01, 2025-03-01
        </pre>
    `;
    window.mermaid.initialize({ startOnLoad: true });
}

// Função pra recalcular o max-height do dropdown
function updateDropdownHeight(categoryDiv) {
    const bookList = categoryDiv.querySelector(".book-list");
    if (bookList.classList.contains("open")) {
        bookList.style.maxHeight = `${bookList.scrollHeight}px`;
        setTimeout(() => {
            bookList.style.maxHeight = `${bookList.scrollHeight}px`;
        }, 0);
    } else {
        bookList.style.maxHeight = null;
    }
}

// Função pra ordenar livros globalmente
function sortBooks(criteria) {
    booksData.sort((a, b) => {
        if (criteria === 'title') return a.Title.localeCompare(b.Title);
        if (criteria === 'author') return a.Author.localeCompare(b.Author);
        if (criteria === 'year') return (a["Year Published"] || "").localeCompare(b["Year Published"] || "");
        return 0;
    });
    loadBooks();
}

window.onload = loadBooks;
