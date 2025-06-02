import logo from '../assets/chef-claude-icon.png';

export default function Header() {
  return (
    <nav className=" flex items-center justify-center py-6 gap-3 shadow-md">
      <img className="w-12" src={logo} alt="Chef Claude Logo" />
      <h1 className="text-4xl">CookBox</h1>
    </nav>
  );
}
