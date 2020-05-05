import React from 'react';
import poznan1 from '../images/poznan1.jpg';
import poznan2 from '../images/poznan2.jpg';
import poznanCathedral from '../images/poznanCathedral.jpg';
import poznanTrainStation from '../images/poznanTrainStation.jpg';
import '../styles/Header.css';
import { Route, Switch } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='gradient'></div>
      <Switch>
        <Route path="/" exact render={() => (
          <img src={poznan2} alt="Poznan Old Squer" />
        )} />
        <Route path="/products" render={() => (
          <img src={poznan1} alt="Poznan Cathedral" />
        )} />
        <Route path="/contact" render={() => (
          <img src={poznanCathedral} alt="Poznan Cathedral" />
        )} />
        <Route path="/admin" render={() => (
          <img src={poznanTrainStation} alt="Poznan Train Station" />
        )} />
        <Route render={() => (
          <img src={poznanTrainStation} alt="Poznan Train Station" />
        )} />
      </Switch>
    </>
  );

}


export default Header;