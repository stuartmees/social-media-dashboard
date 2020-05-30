export const getFollowersItem = (item) => {

    const delta = item.change > 0 ? 'up' : 'down';
    const count = item.count%1000 === 0 ? `${item.count/1000}k` : item.count
    const change = Math.abs(item.change)

    const itemHTML = 
        `<article class="item ${item.platform}">
            <div class="item__inner list__grid">
                <section class="item__platform">
                    <img src="/assets/images/icon-${item.platform}.svg"></span>
                    <span>${item.userName}</span>
                </section>
                <section class="item__count flex-center-column">
                    <div>${count}</div>
                    <h1>${item.description}</h1>
                </section>
                <section class="item__change change--${delta}">
                    <img src="/assets/images/icon-${delta}.svg"></img>${change}
                    Today
                </section>
            <div>
        </article>`
    
    return itemHTML;

};
