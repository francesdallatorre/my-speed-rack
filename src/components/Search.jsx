import React from "react";
import "bulma";
import Results from "./Results";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <div className="searchBar">
          <form class="box" onSubmit={this.props.handleSubmit}>
            <div class="control">
              <input
                class="input is-rounded is-medium"
                placeholder="search cocktails"
                type="text"
                id="drink"
                value={this.props.drink}
                onChange={this.props.handleChange}
              />
            </div>
          </form>
        </div>

        <Results
          // passing the rearch results data to Results Component
          drinks={this.props.drinks}
        />
      </div>
    );
  }
}