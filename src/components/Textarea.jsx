import { useState } from "react";

function Textarea({ text, setText }) {
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      ></textarea>
      {showWarning && <div className="warning">No script tag allowed!</div>}
    </div>
  );
}

export default Textarea;
