  fetch("./menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("menu").innerHTML = data;
  });

  fetch("./footer.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });

  fetch("./materiales.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("materiales").innerHTML = data;
    });
