import logo from "../assets/blog_logo.png";

export default function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <img
        src={logo}
        alt="Blog Logo"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
