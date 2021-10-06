export const updateMarkdown = (markdown) => {
  return {
    type: "UPDATE_MARKDOWN",
    data: markdown,
  };
};

export const toggleEditor = (isEditor) => {
  return {
    type: "TOGGLE_EDITOR",
    data: isEditor
  }
}

export const togglePreviewer = (isPreviewer) => {
  return {
    type: "TOGGLE_PREVIEWER",
    data: isPreviewer
  }
}
