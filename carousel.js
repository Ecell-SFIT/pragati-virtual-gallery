let images = [
  "aggrepay.png",
  "belgian_waffle.png",
  "catholic_syrian_bank.png",
  "computrain.jpeg",
  "fabric_spa.png",
  "imperial.jpeg",
  "inmovidu.jpg",
  "lawyered.png",
  "lmt.png",
  "project_contest.jpeg",
  "south_indian_bank.jpg",
  "trippy.jpg",
  "youth_inc.png",
];

$(document).ready(function () {
  images.forEach((item, index) => {
    $("#sponsors-grid").append(sponsor(item, index));
  });
});

sponsor = (item, index) => {
  console.log(item);

  return `<div class="col col-6 col-md-3">
            <div class="wrapper"><img src="./sponsors/${item}" alt="" /></div>
    </div>
  `;
};
