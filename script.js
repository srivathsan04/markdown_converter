function insertAtCursor(textareaId, textToInsert, cursorOffset) {
  var textarea = document.querySelector(textareaId);
  var cursorPosition = textarea.selectionStart;
  var textBefore = textarea.value.substring(0, cursorPosition);
  var textAfter = textarea.value.substring(
    cursorPosition,
    textarea.value.length
  );
  textarea.value = textBefore + textToInsert + textAfter;
  textarea.selectionStart = textarea.selectionEnd =
    cursorPosition + cursorOffset;
  textarea.focus();
}

$(document).ready(function () {
  $("#mdtext").keyup(function () {
    document.getElementById("htmltext").value = marked.parse(
      document.getElementById("mdtext").value
    );
  });
});
