d = document;
let itemPage =d.querySelector('#light-pagination');
let menuBtnAjax = d.querySelector('.page-link');
console.log(menuBtnAjax);

itemPage.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.contains('page-link')){
        ajaxMenu(e);
    }
});

let ajaxMenu = function (e) {
    e.preventDefault();
    let xhrMenu = new XMLHttpRequest();
    xhrMenu.open('GET', 'items.json', true);
    xhrMenu.send();

    xhrMenu.onreadystatechange = function () {
        if (xhrMenu.readyState != 4) return;
        //  если код ответа сервера не 200 то это ошибка
        if (xhrMenu.status != 200) {
            console.log(xhrMenu.status);
        } else {
            let menuList = JSON.parse(xhrMenu.responseText);
            renderMenu(menuList);          
        }
    }
}

let renderMenu = function (menu) {
    menu.forEach(function (element) {
        let elementWrapper = d.querySelector('.wishlist-items__container'),
            item_card = d.createElement('div'),
            item_card_main = d.createElement('div'),
            item_card_main_hover = d.createElement('div'),
            remove_btn = d.createElement('button'),
            item_card_main_img = d.createElement('img'),
            item_card_info = d.createElement('div'),
            item_card_title = d.createElement('div'),
            item_card_price = d.createElement('div'),
            item_card_footer = d.createElement('div'),
            item_card_footer_btn_delete = d.createElement('button'),
            item_card_icon_trash = d.createElement('i'),
            item_card_footer_btn_cart = d.createElement('button'),
            item_card_icon_cart = d.createElement('i');

        item_card.classList.add('col-3', 'item-card');
        item_card_main.classList.add('item-card__main');
        item_card_main_hover.classList.add('item-card__main__hover');
        remove_btn.classList.add('remove-btn', 'delete-item');
        item_card_main_img.classList.add('item-card__main__img');
        item_card_main_img.setAttribute('src', element.imageUrl);
        item_card_main_img.setAttribute('alt', element.alt);
        item_card_info.classList.add('item-card__info');
        item_card_title.classList.add('item-card__title');
        item_card_price.classList.add('item-card__price');
        item_card_footer.classList.add('item-card__footer');
        item_card_footer_btn_delete.classList.add('item-card__footer__btn', 'empty-btn', 'delete-item');
        item_card_icon_trash.classList.add('fa', 'fa-trash');
        item_card_footer_btn_cart.classList.add('item-card__footer__btn', 'cart-btn');
        item_card_icon_cart.classList.add('fa', 'fa-shopping-cart');

        item_card_footer_btn_cart.appendChild(item_card_icon_cart);
        item_card_footer_btn_delete.appendChild(item_card_icon_trash);       
        item_card_footer.appendChild(item_card_footer_btn_delete);
        item_card_footer.appendChild(item_card_footer_btn_cart);
        item_card_info.appendChild(item_card_title);
        item_card_info.appendChild(item_card_price);
        item_card_main_hover.appendChild(remove_btn);
        item_card_main.appendChild(item_card_main_hover);
        item_card_main.appendChild(item_card_main_img);
        item_card.appendChild(item_card_main);
        item_card.appendChild(item_card_info);
        item_card.appendChild(item_card_footer);
        elementWrapper.appendChild(item_card);

        remove_btn.innerText = 'remove from list';
        item_card_price.innerText = '$' + element.price +'.00';
        item_card_title.innerText = element.title;

    })
}




