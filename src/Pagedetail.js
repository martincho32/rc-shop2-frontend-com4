import React from 'react';

class PageDetail extends React.Component {
    constructor(props) {
        super(props);
       

    }
       

    render() {
        
        return (
            <h1>
                {this.props.match.params.id}
            </h1>

        )
    }
};

export default PageDetail;