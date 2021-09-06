import React from "react";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Find Your GIF</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <button type="submit">search</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const setTitle = event.target.value;
    this.setState({ title: setTitle });
    // console.log(this.state.title);
  };

  handleSubmit = (event) => {
    const { title } = this.state;
    event.preventDefault();
    this.props.search(title);
    // this.setState({ title: "" });
  };
}
