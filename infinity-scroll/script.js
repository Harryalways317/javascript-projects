const COUNT = 10;
const API_KEY = "q-HLB98Lg4BraPtcFaAFO4iAAnM3_0uzLgskkYTV8tc";
async function fetchImages() {
  const images = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${COUNT}`,
    {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  console.log(images);
}
fetchImages();
