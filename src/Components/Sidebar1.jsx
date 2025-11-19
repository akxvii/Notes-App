import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoFolderOpenOutline } from "react-icons/io5";

const SideBarOne = ({ isOpen, activeTab, setActiveTab }) => {
  return (
    <div
      style={{ backgroundColor: "#333" }}
      className={`d-flex flex-column flex-shrink-0 p-3 sidebar-1 ${
        isOpen ? "open" : "closed"
      } `}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${
              activeTab === "notes" ? "active" : "text-white"
            }`}
            onClick={() => setActiveTab("notes")}
          >
            <IoFolderOpenOutline
              className="folder-icon"
              size={25}
              style={{ marginRight: "5px", marginBottom: "4px" }}
            />
            Notes
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              activeTab === "deleted" ? "active" : "text-white"
            }`}
            onClick={() => setActiveTab("deleted")}
          >
            <MdOutlineDeleteOutline
              className="delete-icon"
              size={25}
              style={{ marginBottom: "5px" }}
            />
            Recently Deleted
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarOne;
