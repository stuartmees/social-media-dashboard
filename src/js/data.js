const facebookObj = {
    platform: 'facebook',

    username: '@nathanf',

    followers: {
        count: 1987,
        description: 'FOLLOWERS',
        change: 12
    },

    dayOverview: [{
        count: 87,
        description: 'Page Views',
        change: 3
    },{
        count: 52,
        description: 'Likes',
        change: -2
    }]
}

const twitterObj = {
    platform: 'twitter',
    
    username: '@nathanf',

    followers: {
        count: 1044,
        description: 'FOLLOWERS',
        change: 99
    },

    dayOverview: [{
        count: 117, 
        description: 'Retweets',
        change: 303
    },{
        count: 507,
        description: 'Likes',
        change: 553
    }]
}

const instagramObj = {
    platform: 'instagram',
    
    username: '@realnathanf',

    followers: {
        count: 11000,
        description: 'FOLLOWERS',
        change: 1099
    },

    dayOverview: [{
        count: 5462, 
        description: 'Likes',
        change: 2257
    },{
        count: 52000,
        description: 'Profile Views',
        change: 1375
    }]
}

const youtubeObj = {
    platform: 'youtube',
    
    username: 'Nathan F',

    followers: {
        count: 8239,
        description: 'SUBSCRIBERS',
        change: -144
    },

    dayOverview: [{
        count: 107, 
        description: 'Likes',
        change: -19
    },{
        count: 1407,
        description: 'Total Views',
        change: -12
    }]
}

const platformData = [facebookObj, twitterObj, instagramObj, youtubeObj]

export const userData = {
    userID: '1xbg6554ghjs8',
    totalFollowors: 223004,
    platformData: platformData
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