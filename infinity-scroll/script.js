const image_container = document.getElementById("image-container")
const loader = document.getElementById("loader")
let images_data = []

const COUNT = 10;
const API_KEY = "q-HLB98Lg4BraPtcFaAFO4iAAnM3_0uzLgskkYTV8tc";
async function fetchImages() {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${COUNT}`,
    {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  console.log(response);
  images_data  = response.data;

  images_data.forEach(element => {
    var img = document.createElement('img');
img.src = element.urls.full;
image_container.appendChild(img);
  });
}
fetchImages();
