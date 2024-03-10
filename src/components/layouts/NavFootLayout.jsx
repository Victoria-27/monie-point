import Navbar from "../nav";

export default function NavFootLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
