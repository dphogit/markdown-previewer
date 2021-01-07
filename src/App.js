import "./App.scss";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const marked = require("marked");

marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: content,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Editor
            markdown={this.state.markdown}
            handleChange={this.handleChange}
          />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

const Toolbar = (props) => {
  return (
    <div id="toolbar">
      <i className="fas fa-laptop-code" id="toolbar-icon"></i>
      <p id="toolbar-name">{props.windowName}</p>
    </div>
  );
};

const Editor = (props) => {
  return (
    <div className="col-xl-5 window" id="editor-window">
      <Toolbar windowName="Editor" />
      <textarea
        id="editor"
        onChange={props.handleChange}
        value={props.markdown}
      ></textarea>
    </div>
  );
};

const Previewer = (props) => {
  return (
    <div className="col-xl-7 window" id="preview-window">
      <Toolbar windowName="Previewer" />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}
      />
    </div>
  );
};

const content = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
