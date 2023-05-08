const chairs = [
    {
        name: "Azure Cliff with Red Maples",
        author: "Gong Xian (Chinese, 1619-1689)",
        year: "1680s",
        catalog:"fan",
        image:"https://inhabitat.com/wp-content/blogs.dir/1/files/2016/04/herringbone5-600x480.jpg"
    }
]
    const ul = document.querySelector("ul");

function renderArtToPage(art) {
    for (let i = 0; i < art.length; i++) {
      let list_item = document.createElement("li");

      list_item.classList.add(art[i].catalog, chairs[i].year, "card");

      // add chair name
      let title = document.createElement("h3");
      title.textContent = art[i].catalog;

      // add chair country
      let country = document.createElement("p");
      country.textContent = art[i].year;

      // append created elements to page
      ul.appendChild(list_item);
      list_item.appendChild(image)
      list_item.appendChild(title);
      list_item.appendChild(author);
      list_item.appendChild(year);
    }
  }

  renderArtToPage(arts);

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
                chairs.sort(function(a, b){
                    if (a.year < b.year){
                        return -1
                    }
                    if (a.year > b.year){
                        return 1;
                    }
                    return 0;
                });
                console.log('sorted', chairs)
                ul.innerHTML = "";
                renderChairsToPage(chairs);

            } else if (sortValue === "descending") {
                chairs.reverse();
                //clear page
                ul.innerHTML = "";
                renderChairsToPage(chairs);
            }

        }
    }
    sortBtns.addEventListener("click", sortingFn);
