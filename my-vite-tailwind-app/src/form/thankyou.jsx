function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Thank You!</h1>
      <p className="text-gray-700 text-lg text-center">
        Your subscription was successful. Check your email for updates!
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}

export default ThankYou;
