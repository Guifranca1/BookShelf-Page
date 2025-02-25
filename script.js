// Função pra carregar do localStorage
function loadFromLocalStorage() {
    const savedBooks = localStorage.getItem('booksData');
    const savedCategories = localStorage.getItem('categories');
    if (savedBooks) booksData = JSON.parse(savedBooks);
    if (savedCategories) categories = JSON.parse(savedCategories);
    else {
        categories = {
            "Matemática": ["Chaos", "A Philosophical Essay on Probabilities", "Quantum Chaos", "Chaotic Dynamics", "Chaos Theory in Psychology"],
            "Astronomia": ["The God Equation", "Cosmos", "Life Is Simple"],
            "Estratégia/História": ["A Book of Five Rings", "The Art of War", "Genghis Khan", "Carl Von Clausewitz on War", "Napoleon: A Life", "Modern Strategy", "Strategy: A History", "The Direction of War", "The Evolution of Nuclear Strategy"],
            "Finanças": ["The (Mis)Behavior of Markets", "Fractal Market Analysis"],
            "Não-Ficção": ["Guns, Germs, and Steel"]
        };
    }
}

// Função pra salvar no localStorage
function saveToLocalStorage() {
    localStorage.setItem('booksData', JSON.stringify(booksData));
    localStorage.setItem('categories', JSON.stringify(categories));
}

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

// JSON exportado do Goodreads (completo, compactado pra evitar erros)
let booksData = [{"Book Id":154278,"Title":"Fractal Market Analysis: Applying Chaos Theory to Investment and Economics","Author":"Edgar E. Peters","ISBN":"0471585246","My Rating":0,"Number of Pages":336,"Year Published":1994,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/61OXDKpCrqL._SL1360_.jpg"},{"Book Id":665134,"Title":"The (Mis)Behavior of Markets","Author":"Benoît B. Mandelbrot","ISBN":"0465043550","My Rating":0,"Number of Pages":352,"Year Published":2004,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/717O8MYiiRL._SL1500_.jpg"},{"Book Id":1590178,"Title":"The Evolution of Nuclear Strategy","Author":"Lawrence Freedman","ISBN":"0333972392","My Rating":0,"Number of Pages":584,"Year Published":2003,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/51PMkyWG9lL._SL1276_.jpg"},{"Book Id":18555040,"Title":"The Direction of War: Contemporary Strategy in Historical Perspective","Author":"Hew Strachan","ISBN":"1107047854","My Rating":0,"Number of Pages":338,"Year Published":2014,"Exclusive Shelf":"to-read","My Review":"","Image":"https://static.estantevirtual.com.br/book/00/FYS-8847-000/FYS-8847-000_detail1.jpg?ts=1734710649395&ims=fit-in/600x800/filters:fill(fff):quality(100)"},{"Book Id":17847473,"Title":"Strategy: A History","Author":"Lawrence Freedman","ISBN":"0199325154","My Rating":0,"Number of Pages":768,"Year Published":2013,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/71tE5QXqyML._SL1328_.jpg"},{"Book Id":1051121,"Title":"Modern Strategy","Author":"Colin S. Gray","ISBN":"0198782519","My Rating":0,"Number of Pages":426,"Year Published":1999,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/71XA6Z2+1eL._SL1500_.jpg"},{"Book Id":55300,"Title":"Napoleon: A Life","Author":"Paul Johnson","ISBN":"0143037455","My Rating":0,"Number of Pages":208,"Year Published":2006,"Exclusive Shelf":"to-read","My Review":"","Image":"https://static.estantevirtual.com.br/book/00/0P0-2640-000/0P0-2640-000_detail1.jpg?ts=1712775713360&ims=fit-in/600x800/filters:fill(fff):quality(100)"},{"Book Id":22017921,"Title":"Carl Von Clausewitz on War","Author":"Anatol Rapoport","ISBN":"","My Rating":0,"Number of Pages":"","Year Published":"","Exclusive Shelf":"to-read","My Review":"","Image":"https://static.estantevirtual.com.br/book/00/0J8-2773-000/0J8-2773-000_detail1.jpg?ts=1712773724901&ims=fit-in/600x800/filters:fill(fff):quality(100)"},{"Book Id":40718726,"Title":"Genghis Khan and the Making of the Modern World","Author":"Jack Weatherford","ISBN":"","My Rating":0,"Number of Pages":352,"Year Published":2018,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/515H9KkSimL._SY425_.jpg"},{"Book Id":10534,"Title":"The Art of War","Author":"Sun Tzu","ISBN":"","My Rating":0,"Number of Pages":170,"Year Published":2005,"Exclusive Shelf":"to-read","My Review":"","Image":"https://static.estantevirtual.com.br/book/00/05M-0623-000/05M-0623-000_detail1.jpg?ts=1712762636248&ims=fit-in/600x800/filters:fill(fff):quality(100)"},{"Book Id":867247,"Title":"A Book of Five Rings: The Classic Guide to Strategy","Author":"Miyamoto Musashi","ISBN":"0517415283","My Rating":0,"Number of Pages":192,"Year Published":1988,"Exclusive Shelf":"to-read","My Review":"","Image":"https://static.estantevirtual.com.br/book/00/FVR-0736-000/FVR-0736-000_detail1.jpg?ts=1734521719245&ims=fit-in/600x800/filters:fill(fff):quality(100)"},{"Book Id":55030,"Title":"Cosmos","Author":"Carl Sagan","ISBN":"0375508325","My Rating":0,"Number of Pages":384,"Year Published":2002,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/71zVhbnKmfL._SL1500_.jpg"},{"Book Id":56643989,"Title":"Life Is Simple: How Occam's Razor Set Science Free and Shapes the Universe","Author":"Johnjoe McFadden","ISBN":"1541620445","My Rating":0,"Number of Pages":384,"Year Published":2021,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/71HS120qxOL._SL1500_.jpg"},{"Book Id":5877139,"Title":"Chaotic Dynamics: Theory and Applications to Economics","Author":"Alfredo Medio","ISBN":"0521484618","My Rating":0,"Number of Pages":364,"Year Published":1995,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/81IWFf3UCPL._SL1360_.jpg"},{"Book Id":208219318,"Title":"Chaos Theory in Psychology (Contributions in Psychology) by Abraham Fred Gilgen Albert R. (1995-04-25) Paperback","Author":"unknown author","ISBN":"","My Rating":0,"Number of Pages":"","Year Published":"","Exclusive Shelf":"to-read","My Review":"","Image":"https://media.s-bol.com/gBm6RZjpRjD/550x826.jpg"},{"Book Id":2531540,"Title":"Quantum Chaos: An Introduction: An Introduction","Author":"Hans-Jürgen Stöckmann","ISBN":"0521027152","My Rating":0,"Number of Pages":384,"Year Published":2008,"Exclusive Shelf":"to-read","My Review":"","Image":"https://m.media-amazon.com/images/I/71L5PspyUML._SL1360_.jpg"},{"Book Id":1842,"Title":"Guns, Germs, and Steel: The Fates of Human Societies","Author":"Jared Diamond","ISBN":"0739467352","My Rating":5,"Number of Pages":498,"Year Published":2005,"Exclusive Shelf":"read","My Review":"","Image":"https://m.media-amazon.com/images/I/81RIjse5Q1L._SL1500_.jpg"},{"Book Id":54614037,"Title":"The God Equation: The Quest for a Theory of Everything","Author":"Michio Kaku","ISBN":"0385542747","My Rating":5,"Number of Pages":225,"Year Published":2021,"Exclusive Shelf":"read","My Review":"","Image":"https://upload.wikimedia.org/wikipedia/en/b/b0/The_God_Equation.jpg"},{"Book Id":3438171,"Title":"A Philosophical Essay on Probabilities (Dover Books on Mathematics)","Author":"Pierre-Simon Laplace","ISBN":"0486288757","My Rating":4,"Number of Pages":224,"Year Published":1996,"Exclusive Shelf":"read","My Review":"","Image":"https://upload.wikimedia.org/wikipedia/en/8/8e/A_Philosophical_Essay_on_Probabilities.jpg"},{"Book Id":64582,"Title":"Chaos: Making a New Science","Author":"James Gleick","ISBN":"0140092501","My Rating":5,"Number of Pages":352,"Year Published":1988,"Exclusive Shelf":"read","My Review":"","Image":"https://marswillsendnomore.wordpress.com/wp-content/uploads/2022/04/gleick-chaos-first-edition-cover.jpg?w=600"}
];

let categories = {
    "Matemática": ["Chaos", "A Philosophical Essay on Probabilities", "Quantum Chaos", "Chaotic Dynamics", "Chaos Theory in Psychology"],
    "Astronomia": ["The God Equation", "Cosmos", "Life Is Simple"],
    "Estratégia/História": ["A Book of Five Rings", "The Art of War", "Genghis Khan", "Carl Von Clausewitz on War", "Napoleon: A Life", "Modern Strategy", "Strategy: A History", "The Direction of War", "The Evolution of Nuclear Strategy"],
    "Finanças": ["The (Mis)Behavior of Markets", "Fractal Market Analysis"],
    "Não-Ficção": ["Guns, Germs, and Steel"]
};

// Carregar dados do localStorage ao iniciar
loadFromLocalStorage();

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
                <div style="margin-top: 10px;">
                    <button onclick="updateStatus('${book.Title}', 'read')">Marcar como Lido</button>
                    <button onclick="updateStatus('${book.Title}', 'currently-reading')">Em Leitura</button>
                    <button onclick="updateStatus('${book.Title}', 'to-read')">Não Lido</button>
                    <button onclick="showAddToDescription('${book.Title}')">Adicionar à Descrição</button>
                </div>
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
    saveToLocalStorage(); // Salvar após ordenar
}

// Função pra atualizar o status do livro
function updateStatus(title, newStatus) {
    const book = booksData.find(b => b.Title === title);
    if (book) {
        book["Exclusive Shelf"] = newStatus;
        loadBooks(); // Recarrega a página pra refletir a mudança
        saveToLocalStorage(); // Salvar após mudar o status
        alert(`Status de "${title}" atualizado para "${newStatus === 'read' ? 'Lido' : newStatus === 'currently-reading' ? 'Em Leitura' : 'Não Lido'}"`);
    }
}

// Função pra mostrar o formulário de adicionar livro
function showAddBookForm() {
    document.getElementById("add-book-form").style.display = "block";
}

// Função pra esconder o formulário de adicionar livro
function hideAddBookForm() {
    document.getElementById("add-book-form").style.display = "none";
    // Limpar campos
    document.getElementById("new-title").value = "";
    document.getElementById("new-author").value = "";
    document.getElementById("new-isbn").value = "";
    document.getElementById("new-pages").value = "";
    document.getElementById("new-year").value = "";
    document.getElementById("new-status").value = "to-read";
    document.getElementById("new-category").value = "";
    document.getElementById("new-image").value = "";
    document.getElementById("new-review").value = "";
}

// Função pra adicionar um novo livro
function addBook() {
    const title = document.getElementById("new-title").value.trim();
    const author = document.getElementById("new-author").value.trim();
    const isbn = document.getElementById("new-isbn").value.trim();
    const pages = parseInt(document.getElementById("new-pages").value) || 0;
    const year = parseInt(document.getElementById("new-year").value) || 0;
    const status = document.getElementById("new-status").value;
    const categoryInput = document.getElementById("new-category").value.trim();
    const image = document.getElementById("new-image").value.trim();
    const review = document.getElementById("new-review").value.trim();

    if (!title || !author || !categoryInput) {
        alert("Título, autor e categoria são obrigatórios!");
        return;
    }

    // Verificar se a categoria já existe
    let categoryExists = Object.keys(categories).some(cat => cat.toLowerCase() === categoryInput.toLowerCase());
    let category = categoryInput;

    if (!categoryExists) {
        // Adicionar nova categoria
        categories[category] = [];
        console.log(`Nova categoria adicionada: ${category}`);
    }

    // Verificar se o livro já existe
    if (booksData.some(book => book.Title.toLowerCase() === title.toLowerCase())) {
        alert("Este livro já existe na biblioteca!");
        return;
    }

    // Adicionar o livro à categoria e ao booksData
    const newBook = {
        "Book Id": booksData.length + 1, // ID simples, pode ser ajustado
        "Title": title,
        "Author": author,
        "ISBN": isbn || "",
        "My Rating": 0,
        "Number of Pages": pages,
        "Year Published": year,
        "Exclusive Shelf": status,
        "My Review": review,
        "Image": image || ""
    };

    booksData.push(newBook);
    if (!categories[category].includes(title)) {
        categories[category].push(title);
    }

    loadBooks();
    saveToLocalStorage(); // Salvar após adicionar o livro
    hideAddBookForm();
    alert(`Livro "${title}" adicionado com sucesso!`);
}

// Função pra mostrar o formulário de adicionar à descrição existente
function showAddToDescription(title) {
    const book = booksData.find(b => b.Title === title);
    if (book) {
        const newDescription = prompt(`Adicionar descrição para "${title}" (atual: "${book["My Review"] || "Sem resenha"}"):`);
        if (newDescription !== null) {
            book["My Review"] = newDescription.trim() || book["My Review"] || "";
            loadBooks();
            saveToLocalStorage(); // Salvar após editar a resenha
            alert(`Descrição de "${title}" atualizada!`);
        }
    }
}

// Carregar e salvar no localStorage ao iniciar e em alterações
window.onload = () => {
    loadFromLocalStorage();
    loadBooks();
};
