import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MdDelete } from "react-icons/md";

const SideBarTwo = ({
  notes,
  selectedNote,
  onSelectNote,
  onDeleteNote,
  activeTab,
}) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3  sidebar-2"
      style={{ width: "280px" }}
    >
      <h5 className="text-white mb-3">
        {activeTab === "notes" ? "Your Notes" : "Recently Deleted"}
      </h5>

      <ul className="nav nav-pills flex-column mb-auto">
        {notes.map((note, index) => (
          <li
            key={index}
            className="nav-item d-flex justify-content-between align-items-center"
          >
            <button
              className={`nav-link flex-grow-1 text-start ${
                selectedNote === index ? "active" : "text-white"
              }`}
              onClick={() => onSelectNote(index)}
            >
              {note.length > 20
                ? note.substring(0, 20) + "..."
                : note || "Untitled"}
            </button>

            {/* Show delete button only in Notes */}
            {activeTab === "notes" && (
              <MdDelete
                className="text-danger ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => onDeleteNote(index)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarTwo;
