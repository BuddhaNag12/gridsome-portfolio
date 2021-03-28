// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");

module.exports = function(api) {
  //https://api.github.com/users/BuddhaNag12/repos?sort=updated&per_page=9

  api.loadSource(async (actions) => {
    const { data } = await axios.get(
      `https://api.github.com/users/BuddhaNag12/repos?sort=created&direction=dsc`
    );
    const data2 = await axios.get(
      "https://api.github.com/users/BuddhaNag12/followers"
    );
    const followers = await data2.data;


    const collection2 = actions.addCollection({
      typeName: "Followers",
    });

    const collection = actions.addCollection({
      typeName: "Repos",
      path: "/viewProject/:id",
    });

    for (const item of followers) {
      collection2.addNode({
        id: item.id,
        name: item.login,
        html_url: item.html_url,
        avatar_url:item.avatar_url
      });
    }
    for (const item of data) {
      collection.addNode({
        path: "/viewProject/" + item.id,
        id: item.id,
        name: item.name,
        full_name: item.full_name,
        html_url: item.html_url,
        description: item.description,
        stars: item.stargazers_count,
        language: item.language,
        forks: item.forks,
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
