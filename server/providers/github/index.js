const shouldMock = true;

export function getLanguages({owner, repo}) {
  return new Promise((resolve, reject) => {
    if (shouldMock == true) {
      var mock = require("./mock");
      resolve(mock.getLanguages({owner, repo}));
    } else {
      var GitHubApi = require("github");
      var github = new GitHubApi({
        protocol: "https",
        host: "api.github.com",
        headers: { "user-agent": "My-Cool-GitHub-App" },
        followRedirects: false,
        timeout: 5000
      });

      github.repos.getLanguages({owner, repo})
        .then(({data}) => resolve(data))
        .catch((err) => reject(err));
    }
  });
}
