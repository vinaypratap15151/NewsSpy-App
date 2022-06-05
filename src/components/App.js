import React ,{useState} from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar.jsx";
import News from "./News.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
function App() {
  const [progress,setprogress]= useState(10);
 const [api,setapi]= useState(process.env.REACT_APP_NEWS_API); 
  const setProgress=((progress)=>{
     setprogress(progress);
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
         color='#f11946'
        progress={progress}
        onLoaderFinished={setProgress}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={api} setProgress={setProgress} key="general" size={6} country="in" category="general" />} />
          <Route exact path="/business" element={<News apiKey={api} setProgress={setProgress} key="business" size={6} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={api} setProgress={setProgress} key="entertainment" size={6} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News apiKey={api} setProgress={setProgress} key="ggeneral" size={6} country="in" category="general" />} />
          <Route exact path="/health" element={<News apiKey={api} setProgress={setProgress} key="health " size={6} country="in" category="health" />} />
          <Route exact path="/science" element={<News apiKey={api} setProgress={setProgress} key=" science" size={6} country="in" category="science" />} />
          <Route exact path="/sports" element={<News apiKey={api} setProgress={setProgress} key="sports " size={6} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News apiKey={api} setProgress={setProgress} key="technology " size={6} country="in" category="technology" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
