const url = "https://randomuser.me/api/?results=12&nat=us&exc=gender,registered,phone,id,nat&callback=?";
// creates HTML elements for search bar
const $searchHTML = $(`
  <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>
`);

// retreives data from the random user API
$.getJSON(url, (data) => {
  for (let i = 0; i < data.results.length; i++) {
    // creates HTML elements for basic employee cards
    const $userHTML = $(`
      <div id=${[i]} class="card">
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
    // creates HTML elements for modal windows
    const $modalHTML = $(`
      <div class="modal-container">
        <div class="modal ${[i]}">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
            <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
            <p class="modal-text">${data.results[i].email}</p>
            <p class="modal-text cap">${data.results[i].location.city}</p>
            <hr>
            <p class="modal-text">${data.results[i].cell}</p>
            <p class="modal-text">${data.results[i].location.street}, ${data.results[i].location.city}, ${data.results[i].location.state}, ${data.results[i].location.postcode}</p>
            <p class="modal-text">Birthday: ${data.results[i].dob.date.slice(5, 7)}/${data.results[i].dob.date.slice(8, 10)}/${data.results[i].dob.date.slice(2, 4)}</p>
          </div>
        </div> 
        <div class="modal-btn-container">
          <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
          <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
      </div>
    `);
    // append/insert above elements
    $("#gallery").append($userHTML);
    $($modalHTML).insertAfter("#gallery");
  }

  $(".card").click( (e) => {
    index = e.currentTarget.id;
    console.log(index);
    console.log("clicked!");
    $(`".modal-container .${index}"`).addClass("active");
  });

  $("#modal-close-btn").click( (e) => {
    console.log(e);
    console.log("x clicked!");
    $(".modal-container, .modal").removeClass("active");
  });

  // append search bar
  $(".search-container").append($searchHTML);
});