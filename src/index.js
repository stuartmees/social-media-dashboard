import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { userData } from './js/data';
import { getList } from './js/components/list';


const followersArray = [];
const overviewArray = [];
let darkTheme = false;


// build the data arrays
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


// dark theme controls
const htmlElement = document.getElementsByTagName('html')[0]
const buttonToggle = document.getElementsByClassName('button-toggle')[0];

buttonToggle.addEventListener('click', () => {

    darkTheme = !darkTheme

    if (darkTheme) {
        buttonToggle.classList.add('dark')
        htmlElement.setAttribute("theme", "dark");
    } else if (!darkTheme) {
        buttonToggle.classList.remove('dark')
        htmlElement.setAttribute("theme", "light");
    }
});

// build and render components to the DOM

// render total followers count to the DOM
const totalFollowersSpan = document.querySelector('.dash-header__title span')
const totalFollowers = userData.totalFollowers;
totalFollowersSpan.innerHTML = totalFollowers;


const followersSection = getList(followersArray, 'followers');

// build overview article
const overviewArticle = document.createElement('article');
overviewArticle.classList += 'overview'
const overviewList = getList(overviewArray, 'overview');
overviewArticle.innerHTML = `<h1>Overview - Today</h1>`;
overviewArticle.appendChild(overviewList);

// render followers section and overview article to the DOM
const main = document.getElementsByTagName("main")[0];
main.appendChild(followersSection);
main.appendChild(overviewArticle);












