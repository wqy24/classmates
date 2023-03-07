var octokit = new Octokit({
  auth: "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"
});

var template = 
  `
  <style>
    #stu{no} th, #stu{no} pre {
      display: block;
      border: 1px solid #000;
      color: {textcolor};
    }
  </style><div id="stu{no}">
  <table>
    <tr>
      <th>姓名</th>
      <th>学号</th>
      <th>性别</th>
      <th>E-mail</th>
    </tr>
    <tr>
      <td>{name}<td>
      <td>{no}</td>
      <td>{sex}</td>
      <td>{mail}</td>
    </tr>
  </table>
  <p>想说的话：</p>
  <pre>{wannasay}</pre></div>`;

$("input[type=submit]").on("click", event => {
  octokit.repos.creatOrUpdateFile({
    owner: "wqy24",
    repo: "classmates",
    branch: "gh-pages",
    path:"index.html",
    file_sha: (await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {owner: 'OWNER',repo: 'REPO',path: 'PATH',headers: {'X-GitHub-Api-Version': '2022-11-28'}})).sha,
    message: "Add classmate info"
  });
  return event.preventDefault ? event.preventDefault() : false;
});
