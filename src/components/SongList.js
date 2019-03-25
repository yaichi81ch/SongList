import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    console.log(this.props.songs);
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songsReducer
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
