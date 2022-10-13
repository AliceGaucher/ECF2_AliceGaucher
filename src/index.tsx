import React from 'react';
import ReactDOM from 'react-dom/client';
import Locataire from './composants/GestionLocataire.Composant';
import Vehicule from './composants/GestionVehicule.Composant';
import './index.css';
import reportWebVitals from './reportWebVitals';
<link rel="stylesheet"
href=""/>
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <header>
      <body>
      <div>
      <Locataire/>
      {/* <Vehicule/> */}
      </div>
      </body>
    </header>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
