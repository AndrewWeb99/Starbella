// встраивание товаров
let value_cat = localStorage.getItem('category');

let product_ul = document.querySelector('.products');
const renderFixtures = (arrayOfFixtures) => {
        arrayOfFixtures.forEach(element => {
            if (element.category__num == value_cat) {
                const readyDOM = generateFixturesDOM(element)
                product_ul.append(readyDOM)
            }

        })
    }
    // деструктуризация объекта
const generateFixturesDOM = (fixture) => {
    const {
        id,
        image,
        title,
        price
    } = fixture
    const divFixture = document.createElement('li')
    divFixture.className = 'product-wrapper'
    divFixture.innerHTML = `<a data-id="${id}" href="product.html" class="product">
    <div class="product-photo">
        <img src="${image}" alt="">
    </div>
    <div class="rating-mini"> 
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
        <span></span>
    </div>
    <p>${title}</p>
    <div class="cost"> ${price}</div>
</a>
<p class="product_buttons-like" href="#"><i class="fas fa-heart"></i></p>
<p data-idbasket="${id}" class="product_buttons-basket" href="#"><i class="fas fa-shopping-basket"></i></p>`
    return divFixture
}
renderFixtures(data);
let product_link = document.querySelectorAll('.product');
product_link.forEach(elem => {
    elem.addEventListener('click', () => {
        localStorage.setItem('myKey', elem.dataset.id);
    });
});
// sidebar
// вывод категорий
let sidebar__link = document.querySelector('.sidebar__links');
cat.forEach(element => {
    let cat_li = document.createElement('li');
    cat_li.innerHTML = `<a class="link_cat_sidebar" data-idcategor="${element.id}" href="#">${element.title}</a>`;
    sidebar__link.append(cat_li);
});
console.log(value_cat);
// настройка корзины
let basket__mini = document.querySelector('.basket__list');
let basket_ = document.querySelector('.basket');
basket_.addEventListener('click', () => {
    basket__mini.classList.toggle('basket__list-active')
})

//нажатие на кнопку корзина
let product_basket = document.querySelectorAll('.product_buttons-basket')
let product_basket_col = document.querySelector('.basket__num');
product_basket.forEach(vbasket => {
    vbasket.addEventListener('click', () => {
        my__basket.push(vbasket.dataset.idbasket);
        console.log(my__basket)
        product_basket_col.innerHTML = Number(product_basket_col.innerHTML) + 1;
        localStorage.setItem('MyProductCol', product_basket_col.innerHTML)
        localStorage.setItem('MyProducts', JSON.stringify(my__basket))

    })
});