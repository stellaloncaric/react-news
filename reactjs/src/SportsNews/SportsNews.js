import React from "react";
import NewsCard from "../NewsCard/NewsCard";

class SportsNews extends React.Component {
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
        var newsPromise = fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=40502c05572c46c5ba66c5838ac9a567")
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
            <div className="stories">
                    <h3>Sports news</h3>
                    {
                        this.state.isDataLoading ? (<div className="loading-icon"><i class="fa-solid fa-spinner"></i>Loading...</div>) :
                        (this.state.news.map( (item) => {
                            return <NewsCard key={item["url"]} data = {item} />     
                        }))
                    }
            </div>        
        );
    }
}

export default SportsNews;