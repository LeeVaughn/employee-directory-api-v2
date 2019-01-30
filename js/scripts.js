const url = "https://randomuser.me/api/?results=12&nat=us&exc=gender,registered,phone,id,nat&callback=?";

// retreives data from the random user API
$.getJSON(url, (data) => {
  console.log(data.results);
  for (let i = 0; i < data.results.length; i++) {
    const $userHTML = $(`
      <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${data.results[i].picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
          <p class="card-text">${data.results[i].email}</p>
          <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
        </div>
      </div>
    `);
    $("#gallery").append($userHTML);
  }
})