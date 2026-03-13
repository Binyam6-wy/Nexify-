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
