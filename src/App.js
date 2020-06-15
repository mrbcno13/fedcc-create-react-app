import React, {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ListingPage from './views/ListingPage';
import DetailPage from './views/DetailPage.js';
import { properties, ImageJsonContext } from "./Contants";
import * as feedJson from './feed/data.json';

function App() {
  const [jsonFile, setJsonFile] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(properties.jsonFeedUrl).then(res => setJsonFile(res.data))
    .catch(e => {
      console.log(e);
      console.error(`Error while attempting retrieve online file: ${properties.jsonFeedUrl}. Loading local json feed.`);
      setJsonFile(feedJson.default);
    })
    .then(() => setLoading(false));
  }, [])

  return (
    <ImageJsonContext.Provider value={jsonFile}>
      { loading ? <div>...</div> :
        <div className="App">
          <Router>
            <React.Suspense fallback={<div> Loading... </div>}>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} render={(props) => <ListingPage {...props}></ListingPage>} />
                <Route exact path={`${process.env.PUBLIC_URL}/list`} render={(props) => <ListingPage {...props}></ListingPage>} />
                <Route exact path={`${process.env.PUBLIC_URL}/detail/:imageId`} render={(props) => <DetailPage {...props}></DetailPage>} />
              </Switch>
            </React.Suspense>
          </Router>
        </div>
      }
    </ImageJsonContext.Provider>
  );
}

export default App;
