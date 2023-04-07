function Login() {
  return (
    <section className="pt-12 px-8">
      <section className="flex flex-col gap-12">
        <h1 className="text-6xl font-bold">Logowanie</h1>
        <form className="flex flex-col items-start gap-8 mb-24">
          <input type="text" placeholder="login" required />
          <input type="password" placeholder="login" required />
          <button>Zaloguj</button>
        </form>
      </section>
    </section>
  );
}

export default Login;
