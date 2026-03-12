function post() {
  let input = document.querySelector('input').value;
  if(input !== "") {
    document.getElementById('feed').innerHTML += '<p>' + input + '</p>';
    document.querySelector('input').value = "";
  }
}
