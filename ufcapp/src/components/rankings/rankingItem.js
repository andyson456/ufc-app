import React, { PureComponent } from "react";

class RankingItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    console.dir(this.props.ranking.name);
    return (
        <div>
            <h1>Fighters in division</h1>
      </div>
    );
  }
}

export default RankingItem;