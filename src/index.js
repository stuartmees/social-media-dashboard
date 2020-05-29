import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { userData } from './js/data';
import { getFollowersList } from './js/components/followersList';


const followersArray = [];
const overviewArray = [];
let darkTheme = false;

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

// const buttonToggle = document.getElementsByClassName('button-toggle')[0];
// const buttonTogglePath = document.querySelector('.button-toggle path')
// // // const buttonToggleX = document.getElementsByClassName('dash-header__toggle')[0];

// console.log(buttonToggle)

// buttonToggle.addEventListener('click', () => {
//     console.log('toggle clicked')
//     darkTheme = !darkTheme
// })


// NOW ADD LOGIC THAT APPLIES DARK CLASS TO SVG APPROPRIATELY
// THEN ADD LOGIC THAT CHANGES THE FILL ATTRIBUTE ON HOVER

const totalFollowersSpan = document.querySelector('.dash-header__title span')
const main = document.getElementsByTagName("main")[0];

const followersList = getFollowersList(followersArray);
const totalFollowers = userData.totalFollowers;

totalFollowersSpan.innerHTML = totalFollowers;
main.appendChild(followersList)












