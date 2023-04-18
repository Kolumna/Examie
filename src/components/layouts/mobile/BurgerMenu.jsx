import { MdClose } from "react-icons/md";

const BurgerMenu = (props) => {
  return (
    <section
      className={`absolute ${
        !props.isMobile ? "translate-x-full" : "translate-x-0"
      } w-full transition-all flex flex-col justify-start items-end p-4 ease-in-out duration-500 h-screen top-0 left-0 z-50 bg-amber-400`}
    >
      <button
        onClick={() => {
          props.setIsMobile(false);
        }}
      >
        <div className="text-4xl">
          <MdClose/>
        </div>
      </button>
      <section className="bg-slate-200">
        
      </section>
    </section>
  );
};

export default BurgerMenu;
