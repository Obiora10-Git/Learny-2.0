const inputCard = document.getElementById('card-no');

inputCard.addEventListener('input', (e) => {
    // Remove all existing spaces
    let cardValue = e.target.value.replace(/\s+/g, '');
    
    // Re-insert spaces every 4 characters
    let formattedCardValue = cardValue.match(/.{1,4}/g)?.join(' ') || '';
    
    e.target.value = formattedCardValue;
});


const inputExpire = document.getElementById('expire-date');

inputExpire.addEventListener('input', (e) => {
    // Remove all existing spaces
    let expireValue = e.target.value.replace(/\s+/g, '');
    
    // Re-insert spaces every 4 characters
    let formattedExpireValue = expireValue.match(/.{1,2}/g)?.join(' ') || '';
    
    e.target.value = formattedExpireValue;
});