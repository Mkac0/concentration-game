# Concentration Game
![Concentration Game](https://i.imgur.com/kwLTN1W.png)

## What is the Concentration Game?
The concentration Game is a memory game where each block/button will have an image. The goal of the game is to match all 3 pair of images at a time.

## Why this game?
Other than it being a fun and challanging game, the layout of the concentration game is similar to a previoud tic-tac-toe lab. I felt more comfortable applying this concept, to focus on learning additional rules and functions.

## Attributions
While working on this project, one of my challenges was trying to determine which attributes, properties and elements to use. Some of the things I learned and implimented were:
+ The `<dialog>` HTML element, which tells the browser that its contents represents a dialog.
    + It was used for an end-of-game dialog. Ex. the end-of-game dialog was closed using `endDialogEl.open` -> `endDialogEl.close`.
    + The modal support `showModal()`, which captures focus and keeps the user from interacting with the rest of the page.

    For more information on `<dialog>` and `showModal()`, visit [MDN: The Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog).

+ The `grid-template` property, which helped me define the structure of grid of the columns and rows. I used `repeat(3, 110px)` to define columns/rows amount(3) and its size(110px).
    + Why I chose this? I built a grid container using `display: grid;`, and then defined it using rows and columns.

    For more information on `grid-template`, visit [MDN: grid-template](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template).

+ The `innerHTML` property was used to clear the board, which was something I had not used before. This, gets or sets the HTML markup in the element.

    For more information on `innerHTML`, visit [MDN: Element: innerHTML property](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

+ The **Fisher-Yates (Durstenfeld) shuffle** alforithm, Which swaps each element with another randomly selected one, without it being bias. The code was the following:
    ```
    for(let i = deck.length - 1; i > 0; i--) {
        const a = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[a]] = [deck[a], deck[i]];
    }
    ```
    For more information on **Fisher-Yates (burstenfiel) shuffle**, visit [Wikipedia: Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).

+ The event: `currentTarget` property, which is the element to which the event handler is attached to.
    + Using it in `onCardClick` registers the click handler for the card button.

    For more information on `currentTarget`, visit [MDN: Event: currentTarget property](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget).

+ The `element.dataset` propety, which gives access to data attributes on en element.
    + Using it in `onCardClick` reads the card's index from a `data-index` attribute.

    For more information on `element.dataset`, visit [MDN: HTMLElement: dataset property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

+ The `isSet()` function helped me check if the currently selected cards all have the same set, inside the array `every()`.

    For more information about `Array.prototype.every()`, visit [MDN: Array.prototype.evey()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

+ The `setTimeout()` method, which sets a timer that executes a function or code when the timer expires. This helped me set a timer for how long the endDialog pop-up should show.

    For more information about `setTimeout()`, visit [MDN: setTimeout() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout).

## Technologies Used
+ HTML
+ JavaScript
+ CSS

+ [Live Demo](https://mkac0.github.io/concentration-game/).

## Next Steps
I plan to keep practicing browser-based-games, because it was fun and challenging. I want to be able to improve in this area and be able to do more challenging games.
