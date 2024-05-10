import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-950">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}        
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <span>Developed By : </span>
            <Link to='https://samuelmasihsls777.wixsite.com/portfolio' target='_blank' className="hover:underline me-4 md:me-6">
               Samuel Masih
            </Link>
          </li>        
        </ul>
      </div>
    </footer>
  );
}
