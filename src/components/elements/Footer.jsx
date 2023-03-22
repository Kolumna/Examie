import logoFotter from "../../assets/svgs/logoFooter.svg";

export default function Footer(props) {
  return (
    <footer className="bg-yellow-500 flex flex-col gap-12 p-12 items-center">
      <div className="font-black text-2xl">MADE WITH LOVE</div>
      <div className="font-black text-2xl">
        <img className="h-24" src={logoFotter} />
      </div>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">FB</div>
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">IN</div>
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">GG</div>
        <div className="w-12 h-12 bg-zinc-900 rounded-full flex justify-center items-center text-yellow-500 font-bold">YT</div>
      </div>
      <div className="font-bold text-lg">2023</div>
    </footer>
  );
}
