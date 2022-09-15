var commentsArray = [
   {
      "id": 1,
      "parent": null,
      "created": "2015-01-01",
      "modified": "2015-01-01",
      "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "creator": 6,
      "fullname": "Tung Le",
      "profile_picture_url": "../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 3,
      "user_has_upvoted": false,
      "is_new": false
   },
   {
      "id": 2,
      "parent": 1,
      "created": "2021-01-01",
      "modified": "2021-01-01",
      "content": "Lorem ipsum dolor sit amet, consec adipi elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "fullname": "Nghi Nguyen",
      "profile_picture_url": "../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 0,
      "user_has_upvoted": false,
      "is_new": false
   },
   {
      "id": 3,
      "parent": 2,
      "created": "2021-01-01",
      "modified": "2021-01-01",
      "content": "Lorem consec adipi elit. Sed posus ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "fullname": "Ly Ho",
      // "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
      "profile_picture_url": "../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 0,
      "user_has_upvoted": false,
      "is_new": false
   },
   {
      "id": 4,
      "parent": 1,
      "created": "2021-01-01",
      "modified": "2021-01-01",
      "content": "Lorem ipsum dolor sit amet, consec adipi elit. Sed poligula eros ullamcoquis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "fullname": "Ly Ho",
      // "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
      "profile_picture_url": "../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 0,
      "user_has_upvoted": false,
      "is_new": false
   },

   {
      "id": 5,
      "parent": null,
      "created": "2021-01-01",
      "modified": "2021-01-01",
      "content": "Lorem ipsum dolor sit amet,per quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "creator": 6,
      "fullname": "Tung Le",
      // "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
      "profile_picture_url":"../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 3,
      "user_has_upvoted": false,
      "is_new": false
   },
   {
      "id": 6,
      "parent": 5,
      "created": "2021-01-01",
      "modified": "2021-01-01",
      "content": "Lorem ipsum dolor sit amet, consec adipi elique ligula eros ullamcorper qus facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "fullname": "Nghi Nguyen",
      // "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
      "profile_picture_url": "../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 0,
      "user_has_upvoted": false,
      "is_new": false
   },
   {
      "id": 7,
      "parent": 5,
      "created": "2021-01-01",
      "modified": "2021-01-01",
      "content": "Lorem consec adipi elit. Sed posus ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      "attachments": [],
      "pings": [],
      "fullname": "Ly Ho",
      // "profile_picture_url": "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png",
      "profile_picture_url": "../../img/source/avatar/female.svg",
      "created_by_admin": false,
      "created_by_current_user": false,
      "upvote_count": 0,
      "user_has_upvoted": false,
      "is_new": false
   },
]

var usersArray = [
   {
      id: 1,
      fullname: "Current User",
      email: "current.user@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   },
   {
      id: 2,
      fullname: "Jack Hemsworth",
      email: "jack.hemsworth@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   },
   {
      id: 3,
      fullname: "Hank Smith",
      email: "hank.smith@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   },
   {
      id: 4,
      fullname: "Todd Brown",
      email: "todd.brown@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   },
   {
      id: 5,
      fullname: "Administrator",
      email: "administrator@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   },
   {
      id: 6,
      fullname: "Simon Powell",
      email: "simon.powell@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   },
   {
      id: 7,
      fullname: "Bryan Connery",
      email: "bryan.connery@viima.com",
      profile_picture_url: "https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png"
   }
]
