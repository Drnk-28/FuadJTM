/*
THIS CODE BY LWJerri#3290
*/
const boxOwners = document.getElementById("owners_list");
/*
you can use this api but if you need to create custome api check:
 https://github.com/Hadi-Koubeissi/discord-web-api
*/
const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
  {
    id: "626413361185292321",
    post: "Bot Owner",
    GHURL: "https://github.com/FuadJTM",
    InstaURL: "",
    YTURL: "https://www.youtube.com/channel/UCmO0xdpxQr7fX2Csth_2JOQ"
  }
];

for (let indexOne = 0; indexOne < owners.length; indexOne++) {
  const elementOwners = owners[indexOne];

  $.getJSON(API + elementOwners.id).then(output => {
    if (!output.username || !output.url) {
      setTimeout(function() {
        document
          .querySelectorAll(".banner img")
          .forEach(imgs => (imgs.src = "https://cdn.glitch.com/ced10389-08bd-492a-af99-ed7cdc50c96b%2Ffavicon.png"));
      }, 1000);
    }

    const ownerList =
      "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" +
      output.url +
      "'></div></br></br></br></br><h2 class='name'>" +
      output.username +
      "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" +
      elementOwners.post +
      "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" +
      elementOwners.GHURL +
      "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" +
      elementOwners.YTURL +
      "' target='_blank'><button style='color: #000000;'>YouTube</button></a></div></div></div>";
    boxOwners.innerHTML += ownerList;
  });
}
