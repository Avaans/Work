export default function Register() {
  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button type="submit" className="btn-primary">Register</button>
      </form>
    </section>
  );
}
