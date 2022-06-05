import React from 'react'

export default function NewsItem(props) {
    let {title,description,imageURL,URL,author,date,source} = props;
  return (
    <div className="my-3">
      <div className="card m-auto" style={{width: "18rem"}}>
    <img src={imageURL?imageURL:"https://images.moneycontrol.com/static-mcnews/2018/11/BSE_Sensex-e1542611342127-770x433.jpg"} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">{title} 
  
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">   {source}
    <span className="visually-hidden"> </span>
  </span>
</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={URL} target="blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}
