import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBarOne from "./Components/Sidebar1";
import SideBarTwo from "./Components/Sidebar2";
import Content from "./Components/Content";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");

  // whenever tab changes, reset selection
  useEffect(() => {
    setSelectedNote(null);
  }, [activeTab]);

  const handleSaveNote = (text) => {
    if (selectedNote !== null && activeTab === "notes") {
      // update existing note
      const updated = [...notes];
      updated[selectedNote] = text;
      setNotes(updated);
    } else if (activeTab === "notes") {
      // add new note at the top
      setNotes([text, ...notes]);
    }
    setSelectedNote(null);
  };

  const handleSelectNote = (index) => {
    setSelectedNote(index);
  };

  const handleDeleteNote = (index) => {
    const noteToDelete = notes[index];
    setDeletedNotes([noteToDelete, ...deletedNotes]);
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);

    if (selectedNote === index) {
      setSelectedNote(null);
    } else if (selectedNote > index) {
      setSelectedNote(selectedNote - 1);
    }
  };

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <SideBarOne
        isOpen={isOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className={`main-container ${isOpen ? "open" : "closed"} `}>
        <SideBarTwo
          notes={activeTab === "notes" ? notes : deletedNotes}
          selectedNote={selectedNote}
          onSelectNote={handleSelectNote}
          onDeleteNote={handleDeleteNote}
          activeTab={activeTab}
        />

        <div className="content p-3 text-white">
          {activeTab === "notes" ? (
            <Content
              noteText={selectedNote !== null ? notes[selectedNote] : ""}
              onSave={handleSaveNote}
            />
          ) : (
            <div className="deleted-content">
              {selectedNote !== null ? (
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {deletedNotes[selectedNote]}
                </pre>
              ) : (
                <p>Select a deleted note to view it.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
