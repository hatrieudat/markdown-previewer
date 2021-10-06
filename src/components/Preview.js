import React from "react";
import { connect } from "react-redux";
import { togglePreviewer } from '../actions'
import '../css/Preview.css';

let marked = window.marked;
let Prism = window.Prism || {};
marked.setOptions({
  breaks: 'true',
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
}); 

const Preview = (props) => {
  const handleHeight = () => {
    props.togglePreviewer(props.isPreviewer)
    let newMinHeight = props.isPreviewer ? 0 : '15em';
    let newMaxHeight = props.isPreviewer ? 0 : '100vh';
    const previewStyle = document.getElementById("preview").style;
    previewStyle.minHeight = newMinHeight;
    previewStyle.maxHeight = newMaxHeight;
  }

  let icon = props.isPreviewer ? "material-icons" : "material-icons rolated";

  return (
    <div id="wrapper" className="flex">
      <h3 onClick={handleHeight}>
        Preview
        <span className={icon}>&#xe5ce;</span>
      </h3>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown),
        }}
      >
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    markdown: state.markdown,
    isPreviewer: state.isPreviewer
  }
}

const mapDispatchToProps = {
  togglePreviewer
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
