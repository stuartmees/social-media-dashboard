export const getOverviewItem = (item) => {

    const delta = item.change > 0 ? 'up' : 'down';
    const count = item.count%1000 === 0 ? `${item.count/1000}k` : item.count
    const change = Math.abs(item.change)

    const itemHTML = 
        `<article class="item ${item.platform}">
                <h2>${item.description}</h2>
                <img src="/assets/images/icon-${item.platform}.svg"></span>
                <div class="item__count">${count}</div>
                <section class="item__change change--${delta}">
                    <img src="/assets/images/icon-${delta}.svg"></img>${change}%
                </section>
        </article>`
    
    return itemHTML;

};
