import React from "react";
import "./FactCheck.css";

class FactCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            isDataLoading: false
        }
    }

    componentDidMount () {
        this.setState({
            isDataLoading: true        
        });
        var newsPromise = fetch("https://newsapi.org/v2/everything?q=figma&apiKey=40502c05572c46c5ba66c5838ac9a567")
        newsPromise.then(response => {
            var bodyPromise = response.json();
            bodyPromise.then(data => {
                this.setState({
                    news: data["articles"], 
                    isDataLoading: false
                })
            });
        });
    }

    render () {
        return (
            <div className="fact-container">
                <h4>Figma news</h4>
                {
                    this.state.isDataLoading ? (<div className="loading-icon"><i class="fa-solid fa-spinner"></i>Loading...</div>) :
                    this.state.news.map ((data, index) => {
                        return (
                            <a href={data["url"]} target="blank" key={index} className="fact-link">
                                <div className="fact-title">{data["title"]}</div>
                                <div className="fact-source">{data["source"]["name"]}</div>        
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}

export default FactCheck;