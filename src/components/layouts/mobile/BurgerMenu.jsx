const BurgerMenu = (props) => {
  return (
    <section
      className={`absolute ${
        !props.isMobile ? "translate-x-full" : "translate-x-0"
      } w-full transition-all flex justify-end items-start px-4 ease-in-out duration-500 h-screen top-0 left-0 z-50 bg-amber-400`}
    >
      <button
        onClick={() => {
          props.setIsMobile(false);
        }}
      >
        <div className="w-12 h-12 relative mt-8">
          <div className="w-full h-2 bg-black rotate-45 absolute"></div>
          <div className="w-full h-2 bg-black -rotate-45 absolute"></div>
        </div>
      </button>
    </section>
  );
};

export default BurgerMenu;
