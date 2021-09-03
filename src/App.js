import axios from "axios";
import React from "react";
import { render } from "react-dom";

import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { gifUrlList: [] };
  }

  componentDidMount() {
    this.callGiphyApi();
  }

  callGiphyApi = () => {
    const search = "cat";
    const apiKeyNum = "WqzhthBhPNKsZXphlkTpudHFx96T5zRh";
    const limit = 3;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKeyNum}&q=${search}&limit=${limit}`;

    axios.get(url).then((res) => {
      console.log(res.data);
      const data = res.data.data;
      const imgDataList = data.map((gif) => {
        return gif.images.downsized.url;
      });
      this.setState({ gifUrlList: imgDataList });
      console.log(this.state);
    });
  };

  renderImgList = (list) => {
    const comme = "cat";
    const imgUrlEl = list.map((url, index) => {
      return (
        <li>
          <img src={url} alt={index} />
        </li>
      );
    });

    return imgUrlEl;
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div>
          <ul>{this.renderImgList(this.state.gifUrlList)}</ul>
        </div>
      </div>
    );
  }
}
