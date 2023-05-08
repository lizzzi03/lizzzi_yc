// get data
const gallery = document.querySelector(".container").querySelectorAll('a');
const content = document.querySelectorAll('div');
const galleryarray = Array.from(gallery);
const container = document.querySelector(".container");

// filter
const filterbn = document.querySelector(".category");

function filterfn(event) {
    if (event.target.classList.contains('menue')) {
        filterbn.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        console.log(event.target);
        const category = event.target.getAttribute('data-filter');
        for (i=0;i<gallery.length;i++) {
            if (gallery[i].querySelector('div').classList.contains(category) || category === "home" ) {
                gallery[i].classList.remove('hide');
                gallery[i].classList.add('show');
            }
            else {
                gallery[i].classList.remove('show');
                gallery[i].classList.add('hide');
            }
        }
    }
}

filterbn.addEventListener('click',filterfn);


// sorting
const sortbn = document.querySelector(".sortbox")

function render(event) {
    for (i=0;i<gallery.length;i++) {
        container.appendChild(event[i]);
    }
}

function sortfn(event) {
    sortbn.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    const sortcategory = event.target.getAttribute('data-sort');
    if (sortcategory === 'up') {
        // clean & render
        container.innerHTML = "";
        render(gallery);
    }
    else if (sortcategory === 'down') {
        // clean & reverse
        container.innerHTML = "";
        render(galleryarray.reverse())
    }
}

sortbn.addEventListener('click',sortfn);

// searching
const searchbar = document.querySelector("input");

function search(event) {
    const searchcontent = event.target.value;
    console.log(searchcontent);
    const name = document.querySelector(".container").getElementsByTagName('p');
    for (i=0;i<gallery.length;i++) {
        if (name[i].textContent.includes(searchcontent)) {
            gallery[i].classList.remove('none');
        }
        else {
            gallery[i].classList.add("none");
        }
    }
}

searchbar.addEventListener("keyup", search);

// X clear function
const clearbt = document.querySelector('.searchbox').querySelector('button');

function clearfn(event) {
    console.log('clear');
}

clearbt.addEventListener('click',clearfn)


// more content
for (i=0;i<gallery.length;i++) {
    container.getElementsByTagName('p')[i].classList.remove("hidden");
    container.getElementsByTagName('p')[i].classList.add("item");
    container.getElementsByTagName('p')[i].setAttribute('id',i);
}

const detail = [
    {
        content:['Azure Cliff with Red Maples','Censer with figures in landscape','Figure standing in a grove of trees']
    },
]

function detailfn(event) {
    if (event.target.classList.contains('item')) {     
        // delete
        let element = document.querySelector('.container').querySelectorAll('ul');
        for (i=0;i<element.length;i++) {
            element[i].remove();
        }
        console.log(event.target)
        const id = event.target.id;
        const addedcontent = detail[id].content;
        
        const ulcontent = document.createElement('ul');

        for (i=0;i<addedcontent.length;i++) {
            const contentlist = document.createElement('li');
            contentlist.classList.add('detail')
            contentlist.textContent = addedcontent[i];
            content[id].appendChild(ulcontent);
            ulcontent.classList.add('content');
            ulcontent.appendChild(contentlist);
        }
    }
    else {
        let element = document.querySelector('.container').querySelectorAll('ul');
        for (i=0;i<element.length;i++) {
            element[i].remove();
        }
    }
}


container.addEventListener('pointerover',detailfn);