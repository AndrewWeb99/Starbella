// количество товаров

let plus = document.getElementById('but__total-plus');
let minus = document.getElementById('but__total-minus');
let inputtotal = document.getElementById('inputtotal');

plus.addEventListener("click", function() {
    inputtotal.value = Number(inputtotal.value) + 1;
});
minus.addEventListener("click", function() {
    inputtotal.value = Number(inputtotal.value) - 1;
})

// tabs

var $tabs = function(target) {
    var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function(tabsLinkTarget) {
            var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
            tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
            tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
            tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
            // если следующая вкладка равна активной, то завершаем работу
            if (tabsLinkTarget === tabsLinkActive) {
                return;
            }
            // удаляем классы у текущих активных элементов
            if (tabsLinkActive !== null) {
                tabsLinkActive.classList.remove('tabs__link_active');
            }
            if (tabsPaneShow !== null) {
                tabsPaneShow.classList.remove('tabs__pane_show');
            }
            // добавляем классы к элементам (в завимости от выбранной вкладки)
            tabsLinkTarget.classList.add('tabs__link_active');
            tabsPaneTarget.classList.add('tabs__pane_show');
            document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function(tabsLinkIndex) {
            var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
            if (tabsLinks.length > 0) {
                if (tabsLinkIndex > tabsLinks.length) {
                    tabsLinkIndex = tabsLinks.length;
                } else if (tabsLinkIndex < 1) {
                    tabsLinkIndex = 1;
                }
                _showTab(tabsLinks[tabsLinkIndex - 1]);
            }
        };

    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

    _elemTabs.addEventListener('click', function(e) {
        var tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
            return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
    });

    return {
        showTab: function(target) {
            _showTab(target);
        },
        switchTabTo: function(index) {
            _switchTabTo(index);
        }
    }

};

$tabs('.tabs');
// доступ к глобальному хранилищу
let localValue = localStorage.getItem('myKey');
console.log(localValue); //"myValue"
// сборка страницы одного товара
let product_image = document.getElementById('product__image-box');
let product_title = document.getElementById('product__title');
let old = document.getElementById('old');
let cost = document.getElementById('cost');
let descript = document.getElementById('descript');
let total = document.getElementById('total');
let number = document.getElementById('number');
let tabs__pane__header = document.getElementById('tabs__pane__header');
let full__description = document.getElementById('full__description');
let additional__one = document.getElementById('additional__one');
let additional__two = document.getElementById('additional__two');
let additional__three = document.getElementById('additional__three');
data.forEach(elem => {
    if (elem.id == localValue) {
        product_image.src = elem.image;
        product_title.innerHTML = elem.title;
        old.innerHTML = elem.old_price;
        cost.innerHTML = elem.price;
        descript.innerHTML = elem.description;
        total.innerHTML = elem.total;
        number.innerHTML = elem.number;
        tabs__pane__header.innerHTML = elem.tabs__pane__header;
        full__description.innerHTML = elem.full__description;
        additional__one.innerHTML = elem.additional__one;
        additional__two.innerHTML = elem.additional__two;
        additional__three.innerHTML = elem.additional__three;
    }
});