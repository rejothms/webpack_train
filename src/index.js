import React from 'react';
import {render} from 'react-dom';
import App from './app';


let Greeting = () => <div>greetings webpack babel</div>



render(<App />,document.getElementsByTagName("BODY")[0])