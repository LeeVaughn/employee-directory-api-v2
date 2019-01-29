const url = "https://randomuser.me/api/?results=12&nat=us&exc=gender,registered,phone,id,nat&callback=?";

// retreives data from the random user API
$.getJSON(url, (data) => {
  console.log(data.results);
})