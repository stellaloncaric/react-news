import React from "react";
import "./TopStories.css";
import NewsCard from "../NewsCard/NewsCard";
import FactCheck from "./FactCheck/FactCheck";

class TopStories extends React.Component {
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
        var newsPromise = fetch("https://newsapi.org/v2/everything?q=apple&from=2022-05-17&to=2022-05-17&sortBy=popularity&apiKey=40502c05572c46c5ba66c5838ac9a567")
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
            <div className="top-stories-container">
                <div className="stories">
                    <h3>Headlines</h3>
                    {
                        this.state.isDataLoading ? (<div className="loading-icon"><i class="fa-solid fa-spinner"></i>Loading...</div>) :
                        (this.state.news.map( (item) => {
                            return <NewsCard key={item["url"]} data = {item} />     
                        }))
                    }
                </div>
                <div className="side-bar">
                    <FactCheck />
                </div>
            </div>
        );
    }
}

export default TopStories;