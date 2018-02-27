import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <div class="ui borderless topmenu menu">
        <div class="ui container">
          <img class="ui image item" src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png" />
          <a class="right item">Home</a>
          <div class="ui dropdown item">
            <div class="text">About Us</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">Getting Here/Parking</div>
              <div class="item">Catering/Private Events</div>
            </div>
          </div>
          <a class="item">St. Patrick's Day</a>
          <div class="ui dropdown item">
            <div class="text">Menus</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item">Lunch Menu</div>
              <div class="item">Dinner Menu</div>
            </div>
          </div>
          <a class="item">Bar</a>
          <a class="item"><i class="ui search icon"></i></a>
        </div>
      </div>
    );
  }
}

class Middle extends React.Component {
  render() {
return (<div class="murphys-background">
  <div style={{"height":"500px", "class":"ui middle aligned grid container"}}>
    <div class="bg">
      <div class="col">
        <img src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png" />
      </div>
      <div class="col">
        <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
      </div>
    </div>
  </div>
</div>);
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="footer-background">
        <div class="ui three column grid container">
          <div class="column">
            Lunch
            <hr/>
            <div class="ui list">
              <div class="item">Monday – Friday: 11:00am – 2:30pm</div>
              <div class="item">Saturday – Sunday: Not open for lunch</div>
            </div>
          </div>
          <div class="column">
            Bar
            <hr/>
            <div class="ui list">
              <div class="item">Monday- Friday from 11:00am</div>
              <div class="item">Saturday- Sunday from 4:00pm</div>
            </div>
          </div>
          <div class="column">
            Dinner
            <hr/>
            <div class="ui list">
              <div class="item">Monday – Saturday: 5:30pm – 10:00pm</div>
              <div class="item">Sunday: 5:00pm – 9:00pm</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Murphys extends React.Component {
  render() {
    return (
      <main>
        <TopMenu />
        <Middle />
        <Footer />
      </main>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
