var octokit = new Octokit({
  auth: "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"
});

$("input[type=submit]").on("click", event => {
  octokit.repos.creatOrUpdateFile({
    owner: "wqy24",
    repo: "classmates",
    branch: "gh-pages",
    path:"index.html",
    message: "Add classmate info"
  });
})
