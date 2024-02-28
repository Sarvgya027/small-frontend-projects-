let quotes = {
  "― Jules Renard, The Journal of Jules Renard":
    "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
  "― Albert Einstein":
    "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",
  "― Lana Del Rey":
    "“Who are you? Are you in touch with all of your darkest fantasies?Have you created a life for yourself where you can experience them?I have. I am fucking crazy.But I am free.”",
  "― Pierce Brown, Red Rising":
    "“Man cannot be freed by the same injustice that enslaved it.”",
};

let button = document.querySelector(".btn");

button.addEventListener("click", function () {

    let quoteLen = Object.keys(quotes).length;
let ranIndex = Math.floor(Math.random() * quoteLen);
let arrayThatStoresName = Object.keys(quotes);
let getName = arrayThatStoresName[ranIndex];
let QuoteName = quotes[getName];

document.querySelector("body > div > div > h5").innerHTML = getName;
document.querySelector("body > div > div > h2").innerHTML = QuoteName;

});



// console.log(QuoteName);
