import { getFollowersItem } from './followersItem'
import { getOverviewItem } from './overviewItem'


export function getList(dataArray, listType) {
    
    const list = document.createElement('section');
    list.className = `list ${listType} list__grid`;

    
    let listInnerHTML = ''

    if (listType === 'followers') {
        dataArray.forEach(item => {
            const itemHTML = getFollowersItem(item);
            listInnerHTML += itemHTML;
        });
    };

    if (listType === 'overview') {
        listInnerHTML +=`<h2>Overview - Today</h2>`
        dataArray.forEach(item => {
            const itemHTML = getOverviewItem(item);
            listInnerHTML += itemHTML;
        });
    };
    
    list.innerHTML = listInnerHTML;

    return list;
};

