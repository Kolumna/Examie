export default function Layout(props) {
  return (
    <>
      <header>{props.header}</header>
      <main className="bg-slate-100 min-h-screen">{props.content}</main>
      <footer>{props.footer}</footer>
    </>
  );
}
