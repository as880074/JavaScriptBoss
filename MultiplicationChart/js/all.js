var contain = document.querySelector(".contain");
for (var i = 2; i < 10; i++) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    contain.appendChild(card);
    let cardTitle = document.createElement('div');
    cardTitle.setAttribute('class', 'cardTitle');
    cardTitle.textContent = i;
    card.appendChild(cardTitle);
    for (var j = 1; j < 10; j++) {
        let cardContain = document.createElement('div');
        cardContain.setAttribute('class', 'cardContain');
        cardContain.textContent = i + " X " + j + " = " + i * j;
        card.appendChild(cardContain);
    }

}