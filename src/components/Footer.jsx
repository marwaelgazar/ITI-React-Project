import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <>
    <div className="container mt-5 bg-primary">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center text-white">Footer</h1>
            </div>
        </div>
    </div>
        
    </>;
  }
}

export default Footer;
