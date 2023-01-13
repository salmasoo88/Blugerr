const postsDOM = document.getElementById("posts");
fetch("https://jsonplaceholder.typicode.com/posts")
  //   console.log("albumm")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    loadPosts(data);
  })
  .catch((error) => console.error(error));
const loadPosts = (posts) => {
  posts.forEach((post) => {
    const postchild = createpost(posts);
    postsDOM.appendChild(postchild);
  });
};
const createpost = ({title,body}) => {
  const post = document.createElement("post-component");
  post.setAttribute('title' , title)
  post.setAttribute('text' , body)
  return post;
};
