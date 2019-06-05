import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import env from './.env';

const myHeaders = new Headers();
const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: true,
      projects: []
    };
  }

  componentDidMount () {
    fetch(env.api, myInit)
    .then(response => response.json())
    .then((responseJSON) => { 
      this.setState({ projects: responseJSON, isFetching: false })
    });
  }

  render () {
    const { projects, isFetching } = this.state;
    return (
      <div>
        <Navbar />
        {isFetching && <Spinner />}
        {projects.length > 0 && <Carousel className="mb-2" proj={projects}/>}
        <div className="container p-2">
          <div>
          {projects.length > 0 && <h1 className="text-center m-2">{env.subTitle}</h1>}
              {projects.map((elm, index) =>
                <ProjectCards
                key={index.toString()}
                src={elm.imgurl}
                title={elm.title}
                text={elm.text}
                githubUrl={elm.githuburl}
                onlineUrl={elm.onlineurl}
                />
              )}
          </div>
        </div>
        {!isFetching &&<Footer />}
      </div>
    );
  }
}

export default App;
