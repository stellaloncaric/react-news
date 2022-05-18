import React from "react";
import "./NewsCard.css";

class NewsCard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        console.log (this.props);
    }

    render () {
        var data = this.props.data;

        return (
            <div className="card-container">
                <a href={data["url"]} target="blank" className="card-link">
                    <div className="card-content">
                        <h3 className="card-header">{data["title"]}</h3>
                        <span className="sub-text">{data["source"]["name"]}</span> . <span className="sub-text">{data["publishedAt"]}</span>
                    </div>
                    <div className="card-img" style={{backgroundImage: "url("+ data["urlToImage"] +")"}}></div>
                </a>
            </div>
        );
    }
}

export default NewsCard;