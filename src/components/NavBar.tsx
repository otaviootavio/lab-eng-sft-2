import AuthShowcase from "./AuthShowcase";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-[#2e026d] via-[#3A3480] to-[#454093] p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold uppercase tracking-wide text-white">
            Painel do treino
          </span>
        </div>
        <AuthShowcase />
      </div>
    </nav>
  );
}

export default NavBar;
