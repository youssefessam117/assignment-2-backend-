let posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
];
let users = [
  {
    age: 1,
    name: "ahmed",
    email: "ahmed@gmail.com",
  },
  {
    age: 2,
    name: "israa",
    email: "israa@gmail.com",
  },
  {
    age: 3,
    name: "ibrahem",
    email: "ibrahem@gmail.com",
  },
  {
    age: 4,
    name: "mohamed",
    email: "mohamed@gmail.com",
  },
  {
    age: 5,
    name: "sara",
    email: "sara@gmail.com",
  },
  {
    age: 6,
    name: "kareem",
    email: "kareem@gmail.com",
  },
  {
    age: 7,
    name: "essam",
    email: "essam@gmail.com",
  },
];

const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});
//
app.get("/GetAllUsers", (req, res) => {
  res.json(users);
});
//
app.post("/addUser", (req, res) => {
  const { email } = req.body;
  let isExist = users.find((elm) => elm.email === email);
  if (isExist) {
    res.send({ message: "email already exist" });
  } else {
    users.push(req.body);
    res.send({ message: "added" });
  }
});
//
app.get("/sortedUser", (req, res) => {
  let sortedUser = [...users];
  sortedUser.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  res.json({ message: "success", sortedUser });
});
//
app.delete("/deleteUser", (req, res) => {
  const { email } = req.body;
  let isExist = users.find((elm) => elm.email === email);
  console.log(isExist);
  if (isExist) {
    users.splice(isExist, 1);
    res.send({ message: "deleted", users });
  } else {
    res.send({ message: "email not exist" });
  }
});
//
app.put("/updateUser", (req, res) => {
  const { email } = req.body;
  let isExist = users.findIndex((elm) => elm.email == email);
  console.log(isExist);
  if (isExist < 0) {
    res.send({ message: "email not exist", users });
  } else {
    users[isExist].name = req.body.name;
    res.send({ message: "updated", users });
  }
});
//
app.post("/userSearch", (req, res) => {
  const { email } = req.body;
  let isExist = users.findIndex((elm) => elm.email == email);
  console.log(isExist);
  if (isExist < 0) {
    res.send({ message: "email not exist" });
  } else {
    let user = users[isExist];
    console.log(user);
    res.send({ message: "success", user });
  }
});
// post req
app.get("/GetAllPosts", (req, res) => {
  res.json(posts);
});
//
app.post("/addposts", (req, res) => {
  const { id } = req.body;
  let isExist = posts.find((elm) => elm.id === id);
  if (isExist) {
    res.send({ message: "id already exist" });
  } else {
    posts.push(req.body);
    res.send({ message: "added", posts });
  }
});
//
app.get("/sortedposts", (req, res) => {
  let sortedposts = [...posts];
  sortedposts.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  res.json({ message: "success", sortedposts });
});
//
app.delete("/deletepost", (req, res) => {
  const { id } = req.body;
  let isExist = posts.find((elm) => elm.id === id);
  console.log(isExist);
  if (isExist) {
    posts.splice(isExist, 1);
    res.send({ message: "deleted", posts });
  } else {
    res.send({ message: "id not exist" });
  }
});
//
app.put("/updatepost", (req, res) => {
  const { id } = req.body;
  let isExist = posts.findIndex((elm) => elm.id == id);
  console.log(isExist);
  if (isExist < 0) {
    res.send({ message: "id not exist", posts });
  } else {
    posts[isExist].title = req.body.title;
    res.send({ message: "updated", posts });
  }
});
//
app.post("/postsearch", (req, res) => {
  const { id } = req.body;
  let isExist = posts.findIndex((elm) => elm.id == id);
  console.log(isExist);
  if (isExist < 0) {
    res.send({ message: "id not exist" });
  } else {
    let post = posts[isExist];
    console.log(post);
    res.send({ message: "success", post });
  }
});

app.listen(3000, () => {
  console.log("server is running");
});
