import logoFotter from "../../assets/svgs/logoFooter.svg";

export default function Footer(props) {
  return (
    <footer className="bg-yellow-500 flex flex-col gap-12 p-12 items-center">
      <div className="font-black text-2xl">MADE WITH LOVE</div>
      <div className="font-black text-2xl">
        <img className="h-24" src={logoFotter} />
      </div>
      <div className="font-bold text-lg">2023</div>
    </footer>
  );
}
