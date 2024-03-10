var customer_count = 60;
var total_rating = 4.5;
var shareholders_count = 1500;
var customers = document.querySelector('.customers_count');
var rating = document.querySelector('#total_rating');
var shareholders = document.querySelector('#shareholders_count');

//make counter animation for all the values
//for customers
function customer_counter() {
    var count = 0;
    var interval = setInterval(() => {
        count++;
        customers.textContent = count;
        if (count === customer_count) {
            clearInterval(interval);
        }
    }, 50);
}
//for rating
function rating_counter() {
    var count = 0;
    var interval = setInterval(() => {
        count += 0.1;
        rating.textContent = count.toFixed(1);
        if (count === total_rating) {
            clearInterval(interval);
        }
    }, 50);
}
//for shareholders
function shareholders_counter() {
    var count = 0;
    var interval = setInterval(() => {
        count++;
        shareholders.textContent = count;
        if (count === shareholders_count) {
            clearInterval(interval);
        }
    }, 1);
}

//call the functions
customer_counter();
rating_counter();
shareholders_counter();
