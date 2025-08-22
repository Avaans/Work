export default function Login() {
  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button type="submit" className="btn-primary">Sign in</button>
      </form>
    </section>
  );
}
