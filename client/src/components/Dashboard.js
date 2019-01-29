import React from "react";

class Players extends React.Component {
  state = {
    players: [
      {
        id: 1,
        name: "Pedro Martinez",
        balls: 0,
        strikes: 0,
        fouls: 0,
        hits: 0
      },
      { id: 2, name: "Willie Mays", balls: 0, strikes: 0, fouls: 0, hits: 0 },
      { id: 3, name: "Ted Williams", balls: 0, strikes: 0, fouls: 0, hits: 0 }
    ],
    selected: "",
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0
  };

  handleBalls = () => {
    this.setState({ balls: this.state.balls + 1 });
  };

  //   handleBalls = () => {
  //     this.setState(prevState => ({
  //       balls: prevState.value + 1
  //     }));
  //   };

  handleStrikes = () => {
    this.setState({ strikes: this.state.strikes + 1 });
  };

  handleFouls = () => {
    this.setState({ fouls: this.state.fouls + 1 });
  };

  handleHits = () => {
    this.setState({ hits: this.state.hits + 1 });
  };

  render() {
    return (
      <>
        <div data-testid="selected-player">{this.state.selected}</div>
        <div>Balls: {this.state.balls}</div>
        <div>Strikes: {this.state.strikes}</div>
        <div>Fouls: {this.state.fouls}</div>
        <div>Hits: {this.state.hits}</div>

        {this.state.players.map(p => (
          <div key={p.id} className="player">
            <div data-testid="title">{p.id}</div>
            <div>{p.name}</div>
            <div>{p.balls}</div>
            <button
              onClick={() => {
                this.selectPlayer(p);
              }}
            >
              Select
            </button>
            <button onClick={this.handleBalls}>Balls</button>
            <button onClick={this.handleStrikes}>Strikes</button>
            <button onClick={this.handleFouls}>Fouls</button>
            <button onClick={this.handleHits}>Hits</button>
          </div>
        ))}
      </>
    );
  }

  selectPlayer = player => {
    this.setState({ selected: player.name });
  };
}

export default Players;
