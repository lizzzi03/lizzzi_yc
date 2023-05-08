const art = [
    {
        name: "Azure Cliff with Red Maples",
        author: "Gong Xian (Chinese, 1619-1689)",
        year: "1680s",
        catalog:"fan",
        image:"https://user-images.githubusercontent.com/124107292/236712187-e3e02fdf-f32a-4e93-9eb5-bf543f9c4203.jpg"
    }
]
    const ul = document.querySelector("ul");

function renderArtToPage(art) {
    for (let i = 0; i < art.length; i++) {
      let list_item = document.createElement("li");

      list_item.classList.add(art[i].year, art[i].catalog, "card");

      // add art name
      let title = document.createElement("h3");
      title.textContent = art[i].name;

      // add art author
      let author = document.createElement("p");
      author.textContent = art[i].author;

      // add art year
      let year = document.createElement("p");
      year.textContent = art[i].year;

      // add art catalog
      let catalog = document.createElement("p");
      catalog.textContent = art[i].catalog;

      // add art image
      let image = document.createElement("img");
      image.setAttribute("src", art[i].image);

      // append created elements to page
      ul.appendChild(list_item);
      list_item.appendChild(title);
      list_item.appendChild(author);
      list_item.appendChild(year);
      list_item.appendChild(catalog);
      list_item.appendChild(image);
    }
  }

  renderArtToPage(art);

  let filterBtns = document.querySelector(".filters");
  let cards = document.querySelectorAll(".card"); 
  function filterFn(e) {
    // console.log("clicked", e.target);
    if (e.target.classList.contains("filter-btn")) { 
        filterBtns.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
    
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].classList.contains(filterValue) || filterValue === "all") {
            cards[i].classList.remove("hide");
            cards[i].classList.add("show");
          } else {
            cards[i].classList.remove("show");
            cards[i].classList.add("hide");
          }
        }
      }
    }
    filterBtns.addEventListener("click", filterFn);

    let sortBtns = document.querySelector(".sort");
    function sortingFn(event){
        if (event.target.classList.contains("sort-btn")){
            const sortValue = event.target.getAttribute("data-filter");
            if (sortValue === "ascending"){
                art.sort(function(a, b){
                    if (a.year < b.year){
                        return -1
                    }
                    if (a.year > b.year){
                        return 1;
                    }
                    return 0;
                });
                console.log('sorted', art)
                ul.innerHTML = "";
                renderChairsToPage(art);

            } else if (sortValue === "descending") {
                art.reverse();
                //clear page
                ul.innerHTML = "";
                renderArtToPage(art);
            }

        }
    }
    sortBtns.addEventListener("click", sortingFn);
