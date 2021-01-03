import logo from './logo.svg';
import './App.css';
import { DiscussionEmbed } from 'disqus-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section className="comments"> 
        <DiscussionEmbed 
          shortname="comentarios-react"
          config={
            {
              url: "http://localhost:3000",
              identifier: 0,
              title: "Comentarios con react",
              language: 'es_MX'
            }
          }
        />
      </section>
    </div>
  );
}

export default App;
