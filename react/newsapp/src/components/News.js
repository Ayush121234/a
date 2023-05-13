import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  static defaultProps = {
    category: "business",
  };
  static propTypes = {
    category: PropTypes.string,
  };
  constructor() {
    super();
    console.log("hii");
    this.state = {
      articles: [],

      page: 1,
      loading: false,
      totalResults: 0,
    };
  }
  fetchMoreData = async (e) => {
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=ae603c57b5b24fb1823b380c1359cd28&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    console.log("hello")
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=ae603c57b5b24fb1823b380c1359cd28&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
  }
 

  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <InfiniteScroll
        
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasmore1={true}
          loader={<h4>Loading..</h4>}
        >
          <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3 mx-5" key={element.url}>
                  <Newsitem
                    title={element.title}
                    date={element.publishedAt}
                    description={element.description}
                    more={element.url}
                    url={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
