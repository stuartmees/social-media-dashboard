import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { platformData, userData } from './js/data';


const followersArray = []
const overviewArray = []

const buildItem = (platform, item) => {
    return {
        platform: platform,
        text: item.text,
        count: item.count,
        change: item.change,
    }
}

const appendDataToArray = (platformItem) => {

    const platform = platformItem.platform

    const followersItem = buildItem(platform, platformItem.followers)

    followersArray.push(followersItem)

    platformItem.dayOverview.forEach(item => {

        const overviewItem = buildItem(platform, item)

        overviewArray.push(overviewItem)
    })
}

platformData.forEach(appendDataToArray);

console.log(followersArray);
console.log(overviewArray);









