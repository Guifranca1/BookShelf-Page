// Função pra carregar do localStorage
function loadFromLocalStorage() {
    const savedBooks = localStorage.getItem('booksData');
    const savedCategories = localStorage.getItem('categories');
    if (savedBooks) booksData = JSON.parse(savedBooks);
    if (savedCategories) categories = JSON.parse(savedCategories);
    else {
        // Se não houver categorias salvas, usar as iniciais
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

// JSON exportado do Goodreads (completo) - inicial, será substituído por localStorage
let booksData = [
    {"Book Id": 154278, "Title": "Fractal Market Analysis: Applying Chaos Theory to Investment and Economics", "Author": "Edgar E. Peters", "ISBN": "0471585246", "My Rating": 0, "Number of Pages": 336, "Year Published": 1994, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/61OXDKpCrqL._SL1360_.jpg"},
    {"Book Id": 665134, "Title": "The (Mis)Behavior of Markets", "Author": "Benoît B. Mandelbrot", "ISBN": "0465043550", "My Rating": 0, "Number of Pages": 352, "Year Published": 2004, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/717O8MYiiRL._SL1500_.jpg"},
    {"Book Id": 1590178, "Title": "The Evolution of Nuclear Strategy", "Author": "Lawrence Freedman", "ISBN": "0333972392", "My Rating": 0, "Number of Pages": 584, "Year Published": 2003, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/51PMkyWG9lL._SL1276_.jpg"},
    {"Book Id": 18555040, "Title": "The Direction of War: Contemporary Strategy in Historical Perspective", "Author": "Hew Strachan", "ISBN": "1107047854", "My Rating": 0, "Number of Pages": 338, "Year Published": 2014, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/FYS-8847-000/FYS-8847-000_detail1.jpg?ts=1734710649395&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 17847473, "Title": "Strategy: A History", "Author": "Lawrence Freedman", "ISBN": "0199325154", "My Rating": 0, "Number of Pages": 768, "Year Published": 2013, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71tE5QXqyML._SL1328_.jpg"},
    {"Book Id": 1051121, "Title": "Modern Strategy", "Author": "Colin S. Gray", "ISBN": "0198782519", "My Rating": 0, "Number of Pages": 426, "Year Published": 1999, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/71XA6Z2+1eL._SL1500_.jpg"},
    {"Book Id": 55300, "Title": "Napoleon: A Life", "Author": "Paul Johnson", "ISBN": "0143037455", "My Rating": 0, "Number of Pages": 208, "Year Published": 2006, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/0P0-2640-000/0P0-2640-000_detail1.jpg?ts=1712775713360&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 22017921, "Title": "Carl Von Clausewitz on War", "Author": "Anatol Rapoport", "ISBN": "", "My Rating": 0, "Number of Pages": "", "Year Published": "", "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://static.estantevirtual.com.br/book/00/0J8-2773-000/0J8-2773-000_detail1.jpg?ts=1712773724901&ims=fit-in/600x800/filters:fill(fff):quality(100)"},
    {"Book Id": 40718726, "Title": "Genghis Khan and the Making of the Modern World", "Author": "Jack Weatherford", "ISBN": "", "My Rating": 0, "Number of Pages": 352, "Year Published": 2018, "Exclusive Shelf": "to-read", "My Review": "", "Image": "https://m.media-amazon.com/images/I/515H9KkSimL._SY425_.jpg"},
    {"Book Id": 10534, "Title": "The Art of War", "Author": "Sun Tz
