import React, { Component } from "react";

import ModalPage from "./ModalPage";
import TweetWrapper from "./TweetWrapper";

class index extends Component {
  state = {
    tweets: [
      {
        id: 1,
        title: "eum et est occaecati",
        body:
          "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi",
        userId: 1
      },
      {
        id: 2,
        title: "eum et est occaecati",
        body:
          "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi",
        userId: 1
      }
    ]
  };

  addTweet = async () => {
    console.log("clicked");
    let newTweet = [...this.state.tweets];
    // newTweet.push({
    //   title: this.state.title,
    //   body: this.state.body,
    //   userId: this.state.userId
    // });
    // this.setState({
    //   tweets: newTweet
    // });
    // this.setState({
    //   title: "",
    //   body: "",
    //   userId: ""
    // });

    let url = "https://jsonplaceholder.typicode.com/posts";
    const responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });

    const responceData = await responce.json();
    newTweet = responceData;

    console.log(responceData);
    console.log(newTweet);

    this.setState({
      tweets: newTweet
    });
    this.setState({
      title: "",
      body: "",
      userId: ""
    });
  };

  handleInputChange = inputName => value => {
    const nextValue = value;
    console.log(nextValue);
    this.setState({
      [inputName]: nextValue
    });
  };

  render() {
    return (
      <div>
        Admin route
        <ModalPage
          handleInputChange={this.handleInputChange}
          addTweet={this.addTweet}
        />
        {this.state.tweets.map(tweet => (
          <TweetWrapper
            title={tweet.title}
            body={tweet.body}
            userId={tweet.userId}
            key={tweet.id}
          />
        ))}
      </div>
    );
  }
}

export default index;
