import React , {useEffect} from "react";
import {Helmet} from "react-helmet";
import Aos from 'aos'

import HomeDemo1 from './template/HomeDemo1'

import 'aos/dist/aos.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  return (
    
    	<div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            TDC2: A multimodal ML platform for biomedical foundation models.
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
        </Helmet>
        <HomeDemo1 />
	    </div>    
  );
}

export default App;