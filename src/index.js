import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { userData } from './js/data';
import { getList } from './js/components/list';


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

const buttonToggle = document.getElementsByClassName('button-toggle')[0];
const buttonTogglePath = document.querySelector('.button-toggle path')

buttonToggle.addEventListener('click', () => {

    darkTheme = !darkTheme

    if (darkTheme) {
        buttonToggle.classList.add('dark')
    } else if (!darkTheme) {
        buttonToggle.classList.remove('dark')
    }
});


const totalFollowersSpan = document.querySelector('.dash-header__title span')
const main = document.getElementsByTagName("main")[0];

const followersList = getList(followersArray, 'followers');
const totalFollowers = userData.totalFollowers;


const overviewList = getList(overviewArray, 'overview');

totalFollowersSpan.innerHTML = totalFollowers;
main.appendChild(followersList);
main.appendChild(overviewList);












