import { TbLayoutSidebarFilled } from "react-icons/tb";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <header
        className={`header text-white p-3 d-flex align-items-center`}
        style={{ backgroundColor: "#444746" }}
      >
        <button
          className={`btn btn-dark me-3`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <TbLayoutSidebarFilled size={24} />
        </button>
        <h4 className="m-0">Notes App</h4>
      </header>
    </>
  );
};

export default Header;
