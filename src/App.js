import './App.css';
import EditorForm from './components/EditorForm';
import Preview from './components/Preview';

function App() {
  return (
    <div id="container">
      <h1>Markdown Previewer</h1>
      <EditorForm />
      <Preview />
    </div>
  );
}

export default App;
