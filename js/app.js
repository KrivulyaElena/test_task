// subscribe                                            subscribe
var subscribe = document.getElementById('subscribe');
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
subscribe.addEventListener('submit', function (e) {
    e.preventDefault();
    var address = document.getElementById('subscribe__email').value;
    if (address === '' && reg.test(address) == false) {
        subscribe.classList.add("red-border");
    } else {
        subscribe.value = '';
        subscribe.classList.remove("red-border");
    }
});

//clear btn                                         clear btn
var clear = document.getElementById('clear');
var clearBtn = document.getElementById('clear-list__btn');
clear.addEventListener('input', function (e) {
    e.preventDefault();
    var inputText = document.getElementById('clear-list__text').value;
    if (inputText != '') {
        clearBtn.removeAttribute('disabled');
        clearBtn.classList.remove('clear-disabled');
        inputText = '';
    } else {
        clearBtn.setAttribute('disabled', true);
        clearBtn.classList.add('clear-disabled');
    }
});

$(document).ready(function () {
    // slider                                                            slider
    $('.store-features__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    // pagination                                                           pagination
    $('#light-pagination').pagination({
        items: 32,
        itemsOnPage: 8,
        cssStyle: 'light-theme'
    });
});

// remove from list                                                      remove from list

// var deleteBtn = document.getElementsByClassName('delete-item');
// for (var i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].addEventListener("click", function (e) {
//         this.closest('.item-card').remove();
//     })
// };

let productList = document.getElementById('wishlist-items__container');

productList.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains('delete-item')) {
   target.closest('.item-card').remove();
  }
 
})




//filter                                                       filter

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }


  let inputFilter = document.getElementById('clear-list__text');
  inputFilter.addEventListener('input', myFilter);

  function myFilter() {
    // Declare variables
    var filter, li, i, txtValue;
   
    filter = this.value.toUpperCase();   
    li = document.querySelectorAll('.item-card__title');
    console.log(filter);
    console.log(li); 

    for (i = 0; i < li.length; i++) {
      let parent = li[i].closest('.item-card');
     
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {       
        parent.style.display = "inline-block";
      } else {
        parent.style.display = "none";
      }
    }
  }

