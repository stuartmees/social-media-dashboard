export const getOverviewItem = (item) => {

    const delta = item.change > 0 ? 'up' : 'down';
    const count = item.count%1000 === 0 ? `${item.count/1000}k` : item.count
    const change = Math.abs(item.change)

    const itemHTML = 
        `<article class="item ${item.platform}">
                <div class="item__description">
                    <h2>${item.description}</h2>
                </div>
                <div class="item__platform">
                    <img src="/assets/images/icon-${item.platform}.svg" alt="${item.platform} logo"></span>
                </div>
                <div class="item__count">
                    <div>${count}</div>
                </div>
                <div class="item__change change--${delta}">
                    <div>
                        <img src="/assets/images/icon-${delta}.svg"></img>${change}%
                    </div>
                </div>
        </article>`
    
    return itemHTML;

};
