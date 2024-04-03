import Link from "next/link";
import AuthShowcase from "./AuthShowcase";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-[#2e026d] via-[#3A3480] to-[#454093] p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="text-xl font-bold uppercase tracking-wide text-white">
            <Link href="/" legacyBehavior>
              <a className="nav-link">Home</a>
            </Link>
          </span>
          <span className="text-xl font-bold uppercase tracking-wide text-white">
            <Link href="/training" legacyBehavior>
              <a className="nav-link">Training</a>
            </Link>
          </span>
          <span className="text-xl font-bold uppercase tracking-wide text-white">
            <Link href="/agenda" legacyBehavior>
              <a className="nav-link">Agenda</a>
            </Link>
          </span>
        </div>
        <AuthShowcase />
      </div>
    </nav>
  );
}

export default NavBar;
