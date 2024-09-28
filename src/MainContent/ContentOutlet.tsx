import { Outlet } from "react-router-dom";

const ContentOutlet = () => {
  return (
    <div className="w-[100%] min-h-screen">
      <Outlet />
    </div>
  );
};

export default ContentOutlet;
