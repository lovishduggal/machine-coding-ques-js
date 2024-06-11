let data = [];
let cardContainer = document.getElementById('card-container');
document.addEventListener('DOMContentLoaded', function () {
    fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
        .then((res) => res.json())
        .then((res) => {
            data = res;
            console.log(data);
            data.forEach((element) => {
                cardContainer.innerHTML += `<div class="card">
            <div class="image">
                 <img class="img" src=${element.image}>
            </div>
            <div class="details">
                <div class="row">
                    <span class="name">${element.name}</span>
                    <span class="price">${element.current_price}</span>
                </div>
                <div class="row">
                    <span class="symbol">${element.symbol}</span>
                    <span class="percent">${element.market_cap_change_percentage_24h} %</span>
                </div>
            </div>
        </div>`;
            });
        })
        .catch((err) => console.error(err));
});
