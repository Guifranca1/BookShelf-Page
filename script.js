async function loadBooksFromOpenLibrary() {
    const books = [
        { title: "Chaos", isbn: "0140092501" }, // Adicione ISBNs dos seus livros
        { title: "The God Equation", isbn: "0385542747" },
        { title: "Guns, Germs, and Steel", isbn: "0393317552" }
    ];
    const bookList = document.getElementById("book-list");

    for (const book of books) {
        const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${book.isbn}&format=json&jscmd=data`);
        const data = response.data[`ISBN:${book.isbn}`];
        const bookData = {
            title: data.title,
            author: data.authors[0].name,
            year: data.publish_date.split(" ")[2] || "N/A",
            image: data.cover?.medium || "https://via.placeholder.com/150"
        };

        const div = document.createElement("div");
        div.className = "book-item";
        div.textContent = `${bookData.title} - ${bookData.author}`;
        div.onclick = () => showDetails(bookData);
        bookList.appendChild(div);
    }
}

window.onload = loadBooksFromOpenLibrary;
