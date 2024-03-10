const Navbar = () => {
    return (
    <nav className="tran_one absolute z-50 top-5 flex justify-between px-5  w-screen items-center overflow-hidden"> 
   <div className=" btn flex justify-between h-fit ">
    <p className="rounded-md p-1 text-center border-2 border-black mr-1">More</p>
    <p className="rounded-md p-1 text-center border-2 border-black"> icon</p>
   </div>
<div className="logo flex h-10 items-center">
    <p><span className="  p-1 text-center mr-1 rounded-full base_color">🔆</span>DENTYTECH</p>
</div>
<div className="flex justify-between h-fit btn">
    <p className=" rounded-md border-2 border-black p-1 text-center mr-1">Login</p>
    <p className="rounded-md p-1 text-center base_color">sign up</p>
</div>
    </nav>
    );
}
 
export default Navbar;