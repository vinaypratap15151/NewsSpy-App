import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.jsx"
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const CapitlizeString = ((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })

  document.title = `${CapitlizeString(props.category)} - News-Spy`;
  const [data, setdata] = useState([]);
  const [isloading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [mode, setmode] = useState(1);
  const [isclicked, setisclicked] = useState(0);
  const [totalresults,settotal] =useState(0);

  const fetchData = async () => {
      props.setProgress(10);
    const link = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.size}`;
    setloading(true);
    let datas = await fetch(link);
    props.setProgress(30);
    let parsedata = await datas.json();
    props.setProgress(60);
    setdata(parsedata.articles);
    setloading(false);
    settotal(parsedata.totalresults);
    props.setProgress(100);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlemode = (() => {
    setmode(!mode);
    setisclicked(!isclicked);
  });
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
       setpage(page+1);
       const link = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b16a20f9052c44168bb98a05a0131888&page=${page}&pageSize=${props.size}`;
    let datas = await fetch(link);
    let parsedata = await datas.json();
    setdata(data.concat(parsedata.articles));
    
    settotal(parsedata.totalresults);

}

  return (
    <div style={{ backgroundColor: mode ? "white" : "black" }} className="container my-3">
      <h1 style={{ color: mode ? "black" : "white",marginTop:"90px" }} className="text-center"> News-Spy - Top {CapitlizeString(props.category)} Headlines </h1>
      <div className="text-center my-3">
        <button onClick={handlemode} type="button" className="btn  btn-secondary">{isclicked ? <span>Normal-Mode</span> : <span>Dark-Mode</span>}</button>
      </div>
    {isloading && <Spinner />} 
    
      <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length !== totalresults}
          loader={<Spinner />}
        >
       <div className="row">
        { data.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageURL={element.urlToImage} URL={element.url} />
            </div>
          );
        })
        }

      </div>
      </InfiniteScroll>
      
    </div>

  );
}



export default News;