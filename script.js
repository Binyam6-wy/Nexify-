function post() {
  let input = document.querySelector('input').value;
  if(input !== "") {
    document.getElementById('feed').innerHTML += '<p>' + input + '</p>';
    document.querySelector('input').value = "";
  }
}
// LOGIN FUNCTION
function login() {

  let username = document.getElementById("username").value;

  if (username === "") return;

  localStorage.setItem("nexifyUser", username);

  window.location.href = "profile.html";
}


// SHOW USER ON PROFILE PAGE
window.onload = function () {

  let name = localStorage.getItem("nexifyUser");

  if (document.getElementById("displayName")) {

    if (name) {
      document.getElementById("displayName").textContent = name;
    } else {
      document.getElementById("displayName").textContent = "Guest";
    }
  }
};


// LOGOUT FUNCTION
function logout() {

  localStorage.removeItem("nexifyUser");

  window.location.href = "login.html";
}
function saveName() {

  let newName = document.getElementById("newName").value;

  if (newName === "") return;

  localStorage.setItem("nexifyUser", newName);

  alert("Name updated!");
}
<!-- HTML -->
<h1>Welcome to Nexify!</h1>
<textarea id="postContent" placeholder="What's on your mind?"></textarea>
<button onclick="createPost()">Post</button>
<div id="feed"></div>

<script>
// JS
function createPost() {
  let content = document.getElementById('postContent').value;
  if(content.trim() === '') return alert('Post cannot be empty!');
  
  let feed = document.getElementById('feed');
  let postDiv = document.createElement('div');
  postDiv.className = 'post';
  postDiv.innerHTML = `<p>${content}</p><hr>`;
  
  feed.prepend(postDiv); // adds to top
  document.getElementById('postContent').value = ''; // clear box
}
</script>
