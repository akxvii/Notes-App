import { useState, useEffect } from "react";

const Content = ({ noteText, onSave }) => {
  const [text, setText] = useState(noteText);

  // Reset text whenever noteText changes
  useEffect(() => {
    setText(noteText);
  }, [noteText]);

  const handleSave = () => {
    if (text.trim()) {
      onSave(text);
      setText(""); // clear after save
    }
  };

  return (
    <div>
      <textarea
        style={{
          backgroundColor: "#171717",
          outline: "none",
          // border: "2px solid transparent",
        }}
        className="textarea text-white w-100 "
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Content;
