import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="bg-white bg-gray-950 border-gray-200 hover:shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-50 hover:text-blue-500">
            My-Todos
          </span>
        </Link>

        <div className="md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:p-0 bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hover:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
