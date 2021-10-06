import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import EditorForm from './components/EditorForm';
import Preview from './components/Preview';

const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN',
      TOGGLE_EDITOR = 'TOGGLE_EDITOR',
      TOGGLE_PREVIEWER = 'TOGGLE_PREVIEWER';

const initialState = {
  isEditor: true,
  isPreviewer: true,
  markdown: `
# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.org), and
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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.data
      };
    case TOGGLE_EDITOR:
      return {
        ...state,
        isEditor: action.data ? false : true
      }
    case TOGGLE_PREVIEWER:
      return {
        ...state,
        isPreviewer: action.data ? false : true
      }  
    default:
      return state
  }
}

const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <h1>Markdown Previewer</h1>
      <Provider store={store}>
        <EditorForm />
        <Preview />
      </Provider>
    </div>
  );
}

export default App;