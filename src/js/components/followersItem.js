export const getFollowersItem = (item) => {

    const delta = item.change > 0 ? 'up' : 'down';
    const count = item.count%1000 === 0 ? `${item.count/1000}k` : item.count
    const change = Math.abs(item.change)

    const itemHTML = 
        `<article class="item ${item.platform}">
            <div class="item__inner flex-center-column">
                <div class="item__platform">
                    <img src="./assets/images/icon-${item.platform}.svg" alt="${item.platform} logo"></span>
                    <span>${item.userName}</span>
                </div>
                <div class="item__count flex-center-column">
                    <div>${count}</div>
                    <h2>${item.description}</h2>
                </div>
                <div class="item__change change--${delta}">
                    <img src="./assets/images/icon-${delta}.svg" alt="${delta} arrow"></img>${change}
                    Today
                </div>
            <div>
        </article>`
    
    return itemHTML;

};
