var request = require("request");

//user data
request('https://api.vk.com/method/friends.get?user_ids=durov&fields=photo_50&v=5.62', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body).response);
  }
})

