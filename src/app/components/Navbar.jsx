
const Navbar = () => {
  return (
    <div className="navbar bg-tranparent mx-5 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-GrayishViolet font-bold text-lg"
          >
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-bold">Shortly</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-GrayishViolet font-bold text-lg">
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex space-x-4">
        <a className="btn btn-primary text-White">Sign Up</a>
        <a className="btn btn-transparent">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
