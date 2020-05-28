import { getItem } from './item'

const followersList = document.createElement('section');
followersList.className = 'followers';

export function getFollowersList(followersArray) {
    let followersListInnerHTML = ''

    followersArray.forEach(item => {
        const followersItem = getItem(item);
        followersListInnerHTML += followersItem;
    });
    
    followersList.innerHTML = followersListInnerHTML;

    return followersList;
};

