export const getItem = (item) => {

    const change = item.change > 0 ? 'up' : 'down';

    const itemHTML = 
        `<article class="item ${item.platform} flex-center-column">
            <header class="item__header">
                <img src="/assets/images/icon-${item.platform}.svg"></span>
                <span>${item.userName}</span>
            </header>
            <section class="item__count flex-center-column">
                <div>${item.count}</div>
                <h1>${item.description}</h1>
            </section>
            <section class="item__change change--${change}">
                <img src="/assets/images/icon-${change}.svg"></img>${item.change}
                Today
            </section>
        </article>`
    
    return itemHTML;

};
