import React from "react";

class TopicBasedNews extends React.Component {
    constructor (props) {
        super(props);
    }


    render () {
        var params = this.props.match.params;
        console.log(params);

        return (
            <div>{params["name"]} news</div>
        );
    }
}

export default TopicBasedNews;