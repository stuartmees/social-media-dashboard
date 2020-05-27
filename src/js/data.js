const facebookObj = {
    platform: 'facebook',

    username: '@nathanf',

    followers: {
        count: 1987,
        text: 'FOLLOWERS',
        change: 12
    },

    dayOverview: [{
        count: 87,
        text: 'Page Views',
        change: 3
    },{
        count: 52,
        text: 'Likes',
        change: -2
    }]
}

const twitterObj = {
    platform: 'twitter',
    
    username: '@nathanf',

    followers: {
        count: 1044,
        text: 'FOLLOWERS',
        change: 99
    },

    dayOverview: [{
        count: 117, 
        text: 'Retweets',
        change: 303
    },{
        count: 507,
        text: 'Likes',
        change: 553
    }]
}

const instagramObj = {
    platform: 'instagram',
    
    username: '@realnathanf',

    followers: {
        count: 11000,
        text: 'FOLLOWERS',
        change: 1099
    },

    dayOverview: [{
        count: 5462, 
        text: 'Likes',
        change: 2257
    },{
        count: 52000,
        text: 'Profile Views',
        change: 1375
    }]
}

const youtubeObj = {
    platform: 'youtube',
    
    username: 'Nathan F',

    followers: {
        count: 8239,
        text: 'SUBSCRIBERS',
        change: -144
    },

    dayOverview: [{
        count: 107, 
        text: 'Likes',
        change: -19
    },{
        count: 1407,
        text: 'Total Views',
        change: -12
    }]
}

export const platformData = [facebookObj, twitterObj, instagramObj, youtubeObj]

export const userData = {
    totalFollowors: 223004
}



      

    //   @nathanf
    //   1987
    //   Followers
    //   12 Today

    //   @nathanf
    //   1044
    //   Followers
    //   99 Today

    //   @realnathanf
    //   11k
    //   Followers
    //   1099 Today

    //   Nathan F.
    //   8239
    //   Subscribers
    //   144 Today



    //   Overview - Today

    //   Page Views
    //   87
    //   3%

    //   Likes
    //   52
    //   2%

    //   Likes
    //   5462
    //   2257%

    //   Profile Views
    //   52k
    //   1375%

    //   Retweets
    //   117
    //   303%

    //   Likes
    //   507
    //   553%

    //   Likes
    //   107
    //   19%

    //   Total Views
    //   1407
    //   12%