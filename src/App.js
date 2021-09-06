import axios from "axios";
import React from "react";
import { render } from "react-dom";

import { Search } from "./components/Search";
import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { gifUrlList: [] };
  }

  componentDidMount() {
    this.callGiphyApi();
  }

  callGiphyApi = (title) => {
    const search = title;
    const apiKeyNum = "WqzhthBhPNKsZXphlkTpudHFx96T5zRh";
    const limit = 100;

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
    // const comme = "cat";
    const imgUrlEl = list.map((url, index) => {
      return (
        <li className="gif-item">
          <img className="gif-img" src={url} alt={index} />
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
        <Search search={this.callGiphyApi} />
        <div>
          <ul className="gif-list">
            {this.renderImgList(this.state.gifUrlList)}
          </ul>
        </div>
      </div>
    );
  }
}
