import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { userData } from './js/data';
import { getFollowersList } from './js/components/followersList';


const followersArray = []
const overviewArray = []

const buildItem = (platform, item) => (
    {
        platform: platform,
        text: item.text,
        count: item.count,
        change: item.change,
    }
);

userData.platformData.forEach((platformItem) => {

    const platform = platformItem.platform

    const followersItem = buildItem(platform, platformItem.followers)
    
    followersArray.push(followersItem)

    platformItem.dayOverview.forEach(item => {

        const overviewItem = buildItem(platform, item)

        overviewArray.push(overviewItem)
    })
});

const followersElement = document.getElementsByClassName('followers')[0]
const followersList = getFollowersList(followersArray);
followersElement.appendChild(followersList)












