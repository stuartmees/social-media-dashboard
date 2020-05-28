import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { userData } from './js/data';
import { getFollowersList } from './js/components/followersList';


const followersArray = []
const overviewArray = []

const buildItem = (userName, platform, item) => (
    {
        userName: userName,
        platform: platform,
        description: item.description,
        count: item.count,
        change: item.change,
    }
);

userData.platformData.forEach((platformItem) => {

    const platform = platformItem.platform;
    const userName = platformItem.username;

    const followersItem = buildItem(userName, platform, platformItem.followers)
    
    followersArray.push(followersItem)

    platformItem.dayOverview.forEach(item => {

        const overviewItem = buildItem(userName, platform, item)

        overviewArray.push(overviewItem)
    })
});

console.log(followersArray);
console.log(overviewArray);

const followersSection = document.getElementsByClassName('followers')[0]
const main = document.getElementsByTagName("main")[0];
const followersList = getFollowersList(followersArray);
main.appendChild(followersList)












