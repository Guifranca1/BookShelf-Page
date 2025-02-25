// JSON exportado do Goodreads
const booksData = [{"Book Id":154278,"Title":"Fractal Market Analysis: Applying Chaos Theory to Investment and Economics","Author":"Edgar E. Peters","ISBN":"=\"0471585246","My Rating":0,"Number of Pages":336,"Year Published":1994,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":665134,"Title":"The (Mis)Behavior of Markets","Author":"Benoît B. Mandelbrot","ISBN":"=\"0465043550","My Rating":0,"Number of Pages":352,"Year Published":2004,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":1590178,"Title":"The Evolution of Nuclear Strategy","Author":"Lawrence Freedman","ISBN":"=\"0333972392","My Rating":0,"Number of Pages":584,"Year Published":2003,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":18555040,"Title":"The Direction of War: Contemporary Strategy in Historical Perspective","Author":"Hew Strachan","ISBN":"=\"1107047854","My Rating":0,"Number of Pages":338,"Year Published":2014,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":17847473,"Title":"Strategy: A History","Author":"Lawrence Freedman","ISBN":"=\"0199325154","My Rating":0,"Number of Pages":768,"Year Published":2013,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":1051121,"Title":"Modern Strategy","Author":"Colin S. Gray","ISBN":"=\"0198782519","My Rating":0,"Number of Pages":426,"Year Published":1999,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":55300,"Title":"Napoleon: A Life","Author":"Paul  Johnson","ISBN":"=\"0143037455","My Rating":0,"Number of Pages":208,"Year Published":2006,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":22017921,"Title":"Carl Von Clausewitz on War","Author":"Anatol Rapoport","ISBN":"=\"","My Rating":0,"Number of Pages":"","Year Published":"","Exclusive Shelf":"to-read","My Review":""},{"Book Id":40718726,"Title":"Genghis Khan and the Making of the Modern World","Author":"Jack Weatherford","ISBN":"=\"","My Rating":0,"Number of Pages":352,"Year Published":2018,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":10534,"Title":"The Art of War","Author":"Sun Tzu","ISBN":"=\"","My Rating":0,"Number of Pages":170,"Year Published":2005,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":867247,"Title":"A Book of Five Rings: The Classic Guide to Strategy","Author":"Miyamoto Musashi","ISBN":"=\"0517415283","My Rating":0,"Number of Pages":192,"Year Published":1988,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":55030,"Title":"Cosmos","Author":"Carl Sagan","ISBN":"=\"0375508325","My Rating":0,"Number of Pages":384,"Year Published":2002,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":56643989,"Title":"Life Is Simple: How Occam's Razor Set Science Free and Shapes the Universe","Author":"Johnjoe McFadden","ISBN":"=\"1541620445","My Rating":0,"Number of Pages":384,"Year Published":2021,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":5877139,"Title":"Chaotic Dynamics: Theory and Applications to Economics","Author":"Alfredo Medio","ISBN":"=\"0521484618","My Rating":0,"Number of Pages":364,"Year Published":1995,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":208219318,"Title":"Chaos Theory in Psychology (Contributions in Psychology) by Abraham Fred Gilgen Albert R. (1995-04-25) Paperback","Author":"unknown author","ISBN":"=\"","My Rating":0,"Number of Pages":"","Year Published":"","Exclusive Shelf":"to-read","My Review":""},{"Book Id":2531540,"Title":"Quantum Chaos: An Introduction: An Introduction","Author":"Hans-Jürgen Stöckmann","ISBN":"=\"0521027152","My Rating":0,"Number of Pages":384,"Year Published":2008,"Exclusive Shelf":"to-read","My Review":""},{"Book Id":1842,"Title":"Guns, Germs, and Steel: The Fates of Human Societies","Author":"Jared Diamond","ISBN":"=\"0739467352","My Rating":5,"Number of Pages":498,"Year Published":2005,"Exclusive Shelf":"read","My Review":""},{"Book Id":54614037,"Title":"The God Equation: The Quest for a Theory of Everything","Author":"Michio Kaku","ISBN":"=\"0385542747","My Rating":5,"Number of Pages":225,"Year Published":2021,"Exclusive Shelf":"read","My Review":""},{"Book Id":3438171,"Title":"A Philosophical Essay on Probabilities (Dover Books on Mathematics)","Author":"Pierre-Simon Laplace","ISBN":"=\"0486288757","My Rating":4,"Number of Pages":224,"Year Published":1996,"Exclusive Shelf":"read","My Review":""},{"Book Id":64582,"Title":"Chaos: Making a New Science","Author":"James Gleick","ISBN":"=\"0140092501","My Rating":5,"Number of Pages":352,"Year Published":1988,"Exclusive Shelf":"read","My Review":""}
];

// Mapeamento de categorias
const categories = {
    "Matemática": ["Chaos", "A Philosophical Essay on Probabilities", "Quantum Chaos", "Chaotic Dynamics", "Chaos Theory in Psychology"],
    "Astronomia": ["The God Equation", "Cosmos", "Life Is Simple"],
    "Estratégia/História": ["A Book of Five Rings", "The Art of War", "Genghis Khan", "Carl Von Clausewitz on War", "Napoleon: A Life", "Modern Strategy", "Strategy: A History", "The Direction of War", "The Evolution of Nuclear Strategy"],
    "Finanças": ["The (Mis)Behavior of Markets", "Fractal Market Analysis"],
    "Não-Ficção": ["Guns, Germs, and Steel"]
};

// Função para carregar os livros
function loadBooks() {
    console.log("Carregando livros..."); // Debug pra confirmar execução
    const categoriesDiv = document.getElementById("categories");
    if (!categoriesDiv) {
        console.error("Elemento #categories não encontrado!");
        return;
    }
    categoriesDiv.innerHTML = ""; // Limpa pra evitar duplicatas

    Object.keys(categories).forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category";
        categoryDiv.innerHTML = `<h2>${category}</h2>`;
        const bookList = document.createElement("div");

        const booksInCategory = booksData.filter(book => 
            categories[category].some(title => book.Title.includes(title))
        );

        if (booksInCategory.length > 0) {
            booksInCategory.forEach(book => {
                const div = document.createElement("div");
                div.className = "book-item";
                div.textContent = `${book.Title} - ${book.Author}`;
                div.onclick = () => showDetails(book);
                bookList.appendChild(div);
            });
            categoryDiv.appendChild(bookList);
            categoriesDiv.appendChild(categoryDiv);
        }
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
    document.getElementById("book-image").src = book.ISBN ? `https://covers.openlibrary.org/b/isbn/${book.ISBN.replace('="', '')}-M.jpg` : "https://via.placeholder.com/150";
    document.getElementById("book-info").textContent = `Autor: ${book.Author} | Ano: ${book["Year Published"] || "N/A"} | Páginas: ${book["Number of Pages"] || "N/A"} | Status: ${status}`;
    document.getElementById("book-rating").textContent = `Avaliação: ${book["My Rating"] > 0 ? "⭐".repeat(book["My Rating"]) : "Sem avaliação"}`;
    document.getElementById("book-review").textContent = `Resenha: ${book["My Review"] || "Sem resenha ainda."}`;
    document.getElementById("book-details").style.display = "block";
}

// Carregar ao iniciar
window.onload = loadBooks;
