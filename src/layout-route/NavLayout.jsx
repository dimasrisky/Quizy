import { Outlet, NavLink } from "react-router-dom";

const NavLayout = () => {

  return (
    <>
      <nav className="w-full bg-[#c7c7c751] fixed top-0">
        <div className="w-[80%] flex justify-between items-center m-auto py-[0.8rem] text-white ">
          <h1 className="font-lilita text-[1.5rem] text-white">Quizy.</h1>
          <ul className="flex justify-center items-center gap-[3rem] text-xs">
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'category'}>Category</NavLink>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavLayout;
