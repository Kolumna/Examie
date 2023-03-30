export default function Layout(props) {
  return (
    <>
      <header>{props.header}</header>
      <main className="bg-slate-100">{props.content}</main>
      <footer>{props.footer}</footer>
    </>
  );
}
