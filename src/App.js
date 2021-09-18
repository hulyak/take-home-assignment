import "./App.css";
import React from "react";

function App() {
  // create constants
  const lowerCase = "lowercase";
  const upperCase = "uppercase";
  const unknown = "unknown";
  const snakeCase = "snakecase";
  const camelCase = "camelcase";

  const [textInput, setTextInput] = React.useState(
    "Here is some example text."
  );
  const [conversionMode, setConversionMode] = React.useState(lowerCase);
  const [textOutput, setTextOutput] = React.useState("");

  // snake case
  // example: technical_interview
  // TechnicalInterview // false
  // technicalInterview // false
  // 96576786_4354645 // true
  // %^&^*&_#$%^   // true
  //  "__technical_interview_"  // true

  // arrays
  const checkSnakeCase = (str) => {
    const arr = str.split(" ").join("_").toLowerCase();
    return arr;
  };

  // first letter of each word is capitalized
  // Technical?interview
  // Technical ?interview

  // strings

  const camelCaseConversion = (str) => {
    return str
      .split(" ")
      .map(function (word, index) {
        // If it is the first word make sure to lowercase all the chars.
        if (index === 0) {
          return word.toLowerCase();
        }
        // If it is not the first word only upper case the first char and lowercase the rest.
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  };

  // function camelize(str) {
  //   return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
  //     if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
  //     return index === 0 ? match.toLowerCase() : match.toUpperCase();
  //   });
  // }

  // const camelize = (str) => {
  //   return str
  //     .toLowerCase()
  //     .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  // };

  const handleRadioChange = (event) => {
    setConversionMode(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    switch (conversionMode) {
      case snakeCase:
        setTextOutput(checkSnakeCase(textInput));
        break;
      case lowerCase:
        setTextOutput(textInput.toLowerCase());
        break;
      case upperCase:
        setTextOutput(textInput.toUpperCase());
        break;
      case camelCase:
        setTextOutput(camelCaseConversion(textInput));
        break;
      default:
        setTextOutput(textInput(unknown));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value={lowerCase}
            checked={conversionMode === lowerCase}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value={upperCase}
            checked={conversionMode === upperCase}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value={snakeCase}
            checked={conversionMode === snakeCase}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to snakecase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value={camelCase}
            checked={conversionMode === camelCase}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to camelcase</label>
        </div>
        <input type="submit" value="Submit" />
        <div className="result-wrapper form-control form-control__text">
          <label htmlFor="result">Converted text:</label>
          <output id="result">{textOutput}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
