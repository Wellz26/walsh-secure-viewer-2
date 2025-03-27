export default function Login() {
  return (
    <div className="text-white p-8">
      <h2 className="text-2xl font-bold">Login Required</h2>
      <a href="/api/login" className="bg-yellow-400 text-red-900 px-4 py-2 rounded mt-4 inline-block">Login with Microsoft</a>
    </div>
  );
}