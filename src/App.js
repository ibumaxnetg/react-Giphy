import axios from "axios";

import "./styles.css";

export default function App() {
  const search = "cat";
  const apiKeyNum = "WqzhthBhPNKsZXphlkTpudHFx96T5zRh";
  const limit = 3;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKeyNum}&q=${search}&limit=${limit}`;

  axios.get(url).then((res) => {
    console.log(res.data);
    const data = res.data.data;
    const imgData = data[0].images.downsized.url;
    console.log(imgData);

    const imageEl = document.createElement("img");
    imageEl.src = imgData;
    const appEl = document.querySelector(".App");
    appEl.appendChild(imageEl);
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
