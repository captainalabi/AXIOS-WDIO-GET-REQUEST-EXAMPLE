import axios from 'axios';

//  Read me:
//  To run a psrticular file alone in wdio
// change the scripts configuration in your package.json as follows:
// "scripts": {
//   "test": "wdio"
// },

describe('Demo Axios', () => {
  it('Get info on github page', async () => {
      
    await axios.get('https://api.github.com/users/mapbox').then(browser.pause(50000))
  .then((response) => {
    console.log("data:::::::: " + response.data);

    expect(response.statusText).toEqual("OK")

    console.log("status:::::::: " + response.status);
    console.log("status text:::::::: " + response.statusText);
    console.log("headers:::::::: " + response.headers);
    console.log("config:::::::: " + response.config);
  })
  await browser.pause(50000)
  });
});

//prints the followings to the console among others:
// login: "mapbox", id: 600935, node_id: "MDEyOk9yZ2FuaXphdGlvbjYwMDkzNQ==", avatar_url: "https://avatars1.githubusercontent.com/u/600935?v=4", gravatar_id: "", …}
// => 200