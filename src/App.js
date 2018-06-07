import React, { Component } from 'react';
import Tesseract from 'tesseract.js/dist/tesseract.js';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    processedText: {},
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const t = this;
    this.setState({ processedText: {} });
    Tesseract.recognize(this.fileRef.files[0])
    .catch(err => console.error("err----", err))
    .then(function(result){
        console.log("res---- ", result);
        t.setState({
          processedText: result,
        });
    })
  }

  render() {
    const { processedText } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmitForm}>
          <input ref={(ref) => (this.fileRef = ref)} type="file" name="rc-image" accept="image/*" />
          <input type="submit" />
        </form>
        <div>
          {processedText.text}
        </div>
      </div>
    );
  }
}

export default App;
