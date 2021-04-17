// встраивание категорий
let target = document.querySelector('.products');
const renderFixtures = (arrayOfFixtures) => {
        arrayOfFixtures.forEach(element => {
            const readyDOM = generateFixturesDOM(element)
            target.append(readyDOM)
        })

    }
    // подсчет товаров в категории
const totalcost = (id) => {
        let cat_num = 0;
        data.forEach(elem => {
            if (elem.category__num == id) {
                cat_num++;
            }
        });
        return cat_num
    }
    // деструктуризация объекта
const generateFixturesDOM = (fixture) => {
    const {
        id,
        image,
        title
    } = fixture
    const divFixture = document.createElement('li')
    divFixture.className = 'product-wrapper prlist'
    let ttcost = totalcost(id);
    divFixture.innerHTML = `<a data-catid="${id}" href="product-list.html" class="product">
    <div class="product-photo">
        <img src="${image}" alt="">
    </div>
    <p>${title}(<span>${ttcost}</span>) </p>
</a>`
    return divFixture
}
renderFixtures(cat);

// передача данных для открытия товаров по категории
let category__name = document.querySelectorAll('.product');
category__name.forEach(elem => {
    elem.addEventListener('click', () => {
        localStorage.setItem('category', elem.dataset.catid);
    });
});