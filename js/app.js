/*-------------------------------- Constants --------------------------------*/

const rows = 3, cols = 3;
const setSize = 3;
const cardCount = rows * cols;
const totalSets = cardCount / setSize;

/*---------------------------- Variables (state) ----------------------------*/

let deck = [];
let selection = [];
let lock = false;
let moves = 0, matches = 0;
let won;

/*------------------------ Cached Element References ------------------------*/

const boardEl = document.querySelector('.board');
const restartBtnEl = document.getElementById('restart');
const matchesEls = document.getElementById('matches');
const movesEls = document.getElementById('moves');
const endDialogEl = document.getElementById('endDialog');
const endMessageEl = document.getElementById('endMessage');

console.log(matchesEls);
console.log(movesEls);

/*-------------------------------- Functions --------------------------------*/

initGame();

function initGame() {
    deck = [];
    for(let v = 1; v <= totalSets; v++) {
        for(let i = 0; i < setSize; i++)
            deck.push({ value: v, isUp: false, isMatched: false, el: null
        });
    }
    for(let i = deck.length - 1; i > 0; i--) {
        const a = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[a]] = [deck[a], deck[i]];
    }
    console.log("Deck:", deck);

    selection = [];
    lock = false;
    moves = 0;
    matches = 0;

    boardEl.innerHTML = '';
    deck.forEach((card, i) => {
        const btn = document.createElement('button');
        btn.className = 'card';
        btn.type = 'button';
        btn.dataset.index = String(i);
        btn.ariaLabel = 'Card';
        btn.addEventListener('click', onCardClick);
        boardEl.appendChild(btn);

        card.el = btn;
        renderCard(i); //face down
    });
    updateBoard();
    if (endDialogEl?.open) endDialogEl.close();
}

function onCardClick(e) {
    if (lock) return;

    const el = e.currentTarget;
    const index = Number(el.dataset.index);
    const card = deck[index];

    console.log("Card clicked:", index, card);

    if (card.isMatched || card.isUp) return;

    card.isUp = true;   //face up
    selection.push(index);
    renderCard(index);

    console.log("Current selection:", selection.map(i => deck[i].value));

    if(selection.length < setSize) return;

    moves++
    updateBoard();

    if (isSet()) {
        const setValues = selection.map(i => deck[i].value);
        selection.forEach(i => {
            deck[i].isMatched = true;
            renderCard(i);
        });
        selection = [];
        matches++;
        updateBoard();

        if (matches === totalSets) {
            if (endMessageEl) endMessageEl.textContent = `You win in ${moves} moves!`;
            if (endDialogEl && !endDialogEl.open) endDialogEl.showModal();
        }
        console.log("Set found:", setValues);
    } else {
        lock = true;
        setTimeout(() => {
            selection.forEach(i => {
                deck[i].isUp = false;
                renderCard(i);
            });
            selection = [];
            lock = false;
    }, 1000);
    console.log("Game ended", won, "Moves:", moves, "Matches:", matches);
    }
}

function isSet() {
    const firstValue = deck[selection[0]].value;
    return selection.every(i => deck[i].value === firstValue);
}

function renderCard(index) {
    const card = deck[index];
    const el = card.el;
    if (!el) return;

    el.classList.remove('v1', 'v2', 'v3', 'up', 'matched');

    if (card.isUp || card.isMatched) {
        el.classList.add('up', `v${card.value}`);
    }
    if (card.isMatched) {
        el.classList.add('matched');
        el.disabled = true;
    } else {
        el.disabled = false;
    }
}

function updateBoard() {
    movesEls.textContent = String(moves);
    matchesEls.textContent = String(matches);
    if (moves >= 8 && matches < totalSets) {
        if (endMessageEl) endMessageEl.textContent = `You lose! Reached ${moves} moves.`;
        if (endDialogEl && !endDialogEl.open) endDialogEl.showModal();
        setTimeout(() => endDialogEl.close(), 2000);
    }
}

/*----------------------------- Event Listeners -----------------------------*/

restartBtnEl.addEventListener('click', initGame);