
import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://submissionform-1.onrender.com/api/contact",
        form
      );

      setSuccess(res.data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setSuccess("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">

      <div className="absolute top-0 left-0 h-96 w-96 bg-purple-600 rounded-full blur-[180px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-pink-500 rounded-full blur-[180px] opacity-20"></div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <span className="inline-flex items-center bg-purple-600/20 border border-purple-500/30 text-purple-200 px-8 py-4 rounded-full text-xl font-semibold shadow-lg shadow-purple-500/20">
  ✨ She Can Foundation
</span>

          <h1 className="text-6xl font-bold text-white mt-6 leading-tight">
            Empowering Women Through
            <span className="text-purple-400">
              {" "}Technology
            </span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg leading-relaxed">
            We believe every woman deserves access to opportunities,
            education and technology. Connect with us and become a
            part of the movement.
          </p>

          <div className="flex gap-4 mt-8">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <h3 className="text-white text-xl font-bold">1000+</h3>
              <p className="text-slate-400">Students Reached</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <h3 className="text-white text-xl font-bold">50+</h3>
              <p className="text-slate-400">Programs Conducted</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-white mb-2">
            Contact Us
          </h2>

          <p className="text-slate-400 mb-8">
            We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-[1.02] transition"
            >
              {loading ? "Submitting..." : "Submit Message"}
            </button>

            {success && (
              <div className="text-green-400 text-center font-medium">
                {success}
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;

