import { Link, useLocation } from "react-router-dom";

export default function Layout(props) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <div className="w-full bg-amber-400 px-8">
          <div className="flex justify-start items-center gap-2 h-full">
            <Link to="https://www.paypal.com/donate/?hosted_button_id=JVGB4VNZXTWWU" target="_blank" className="font-black text-sm py-2">
              Wesprzyj projekt <span className="text-slate-50">TUTAJ</span>!
            </Link>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-10">{props.header}</header>
      <main className="bg-slate-50">{props.content}</main>
      <footer>{props.footer}</footer>
    </>
  );
}
