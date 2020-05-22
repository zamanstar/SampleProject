import React from 'react';
import {css} from "@emotion/core"
import ClipLoader from "react-spinners/BarLoader"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Spinner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
   
    render() {
      return (
        <div className="sweet-loading">
          <ClipLoader
            css={override}
            size={15}
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
      );
    }
  }

  export default Spinner;