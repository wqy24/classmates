var octokit = new Octokit({
  auth: "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"
});

var template = 
  `
  <style>
    #stu{no} li, #stu{no} pre {
      display: block;
      margin: 5px
      border: 1px solid #000;
      background-color: {color}
      color: {textcolor};
    }
  </style><div id="stu{no}">
  <ul>
    <li>姓名：{name}</li>
    <li>学号：{no}</li>
    <li>性别：{sex}</li>
    <li>E-mail：{mail}</li>
  </ul>
  <p>想说的话：</p>
  <pre>{wannasay}</pre></div>`;

$("input[type=submit]").on("click", event => {
  octokit.repos.creatOrUpdateFile({
    owner: "wqy24",
    repo: "classmates",
    branch: "gh-pages",
    path:"index.html
    file_sha: (await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {owner: 'wqy24',repo: 'classmates',path: 'index.html',headers: {'X-GitHub-Api-Version': '2022-11-28'}})).sha,
    message: "Add classmate info",
    content: await getContent() + Base64.encode(getStr());
  });
  return event.preventDefault ? event.preventDefault() : false;
});
