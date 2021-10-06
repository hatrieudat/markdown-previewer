import React from "react";
import { connect } from "react-redux";
import { updateMarkdown, toggleEditor } from '../actions'
import "../css/EditorForm.css";

const EditorForm = (props) => {
  const handleChange = (e) => {
    props.updateMarkdown(e.target.value);
  }
  const handleHeight = () => {
    props.toggleEditor(props.isEditor)
    let newHeight = props.isEditor ? 0 : '80vh';
    document.getElementById("editor").style.height = newHeight;
  }

  let icon = props.isEditor ? "material-icons" : "material-icons rolated";

  return (    
    <div id="wrapper">
      <h3 onClick={handleHeight}>
        Editor 
        <span className={icon}>&#xe5ce;</span>
      </h3>
      <textarea 
        id="editor"
        value={props.markdown}
        onChange={handleChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    markdown: state.markdown,
    isEditor: state.isEditor
  }
};

const mapDispatchToProps = {
  updateMarkdown,
  toggleEditor
}


export default connect(mapStateToProps, mapDispatchToProps)(EditorForm);
