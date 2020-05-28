export const getFollowersList = (followersArray) => {
    
    const followersListFrag = document.createDocumentFragment();

    followersArray.forEach(item => {

        const followersItem = document.createElement('article');
        const text = document.createTextNode(item.platform + ': ' + item.count);

        followersItem.appendChild(text);

        followersListFrag.appendChild(followersItem);
    });

    return followersListFrag;
};

