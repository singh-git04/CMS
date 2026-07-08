import { useForm } from "react-hook-form";
import {
  BrainCircuit,
  User,
  Mail,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
let {register,handleSubmit,onRegisterSubmit,watch,errors,navigate} = useAuth();
  const password = watch("password", "");

  const strength = () => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };

  const level = strength();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen bg-[#121018] text-white flex flex-col">
      <main className="flex-1 flex items-center justify-center p-6 py-0">
        <div className="w-full max-w-7xl border border-[#2d2938] rounded-xl overflow-hidden bg-[#17141d] grid lg:grid-cols-2">

          {/* LEFT */}
          <div
            className="relative h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1200&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0  bg-gradient-to-b from-[#10142fcc]/70 to-[#0d0b15]/90" />

            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 font-bold">
                <BrainCircuit className="text-violet-400" />
                team-sync
              </div>

              <div className="mt-auto">
                <p className="text-xs tracking-[4px] uppercase text-violet-300">
                  Next‑Gen Intelligence
                </p>

                <h1 className="mt-5 text-5xl font-bold leading-tight">
                  Accelerate your team's intelligence.
                </h1>

                <p className="mt-6 max-w-md text-gray-300 leading-7">
                  Connect your enterprise data to our specialized AI
                  models and unlock unparalleled strategic insights in
                  seconds.
                </p>

                <div className="flex gap-10 mt-12">
                  <div>
                    <h3 className="text-3xl font-bold">99.9%</h3>
                    <p className="text-sm text-gray-400">Uptime SLA</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">ISO</h3>
                    <p className="text-sm text-gray-400">
                      27001 Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-10 lg:p-16 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-4xl font-bold">
                Create your account
              </h2>

              <p className="text-gray-400 mt-2">
                Experience the future of collaborative data intelligence.
              </p>

              <form
                onSubmit={handleSubmit(onRegisterSubmit)}
                className="mt-10 space-y-6"
              >
                {[
                  {
                    name: "name",
                    label: "Full Name",
                    icon: User,
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    icon: Mail,
                    type: "email",
                    placeholder: "name@company.com",
                  },
                  {
                    name: "password",
                    label: "Password",
                    icon: Lock,
                    type: "password",
                    placeholder: "••••••••",
                  },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs uppercase font-semibold mb-2 text-gray-300">
                      {f.label}
                    </label>

                    <div className="flex items-center bg-[#1f1b26] border border-[#34303d] rounded-md px-4">
                      <f.icon className="w-4 h-4 text-gray-500" />
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        {...register(f.name, {
                          required: `${f.label} is required`,
                        })}
                        className="flex-1 bg-transparent h-12 px-3 outline-none"
                      />
                    </div>

                    {errors[f.name] && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors[f.name].message}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <div className="h-1 bg-[#2d2938] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-400"
                      style={{ width: `${level * 25}%` }}
                    />
                  </div>
                  <p className="text-xs text-violet-300 mt-2">
                    Strong password
                  </p>
                </div>

                <label className="flex items-center gap-3 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "Accept terms",
                    })}
                  />
                  I agree to the Terms of Service and Privacy Policy.
                </label>

                {errors.terms && (
                  <p className="text-red-400 text-xs">
                    {errors.terms.message}
                  </p>
                )}

                <button className="w-full h-12 rounded-md bg-violet-500 hover:bg-violet-400 font-semibold transition">
                  Create Account
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-px bg-[#34303d] flex-1" />
                  <span className="text-xs text-gray-500">
                    OR CONTINUE WITH
                  </span>
                  <div className="h-px bg-[#34303d] flex-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="border border-[#34303d] rounded-md h-12"
                  >
                    Google
                  </button>

                  <button
                    type="button"
                    className="border border-[#34303d] rounded-md h-12 flex items-center justify-center gap-2"
                  >
                    <ShieldCheck size={18} />
                    SSO
                  </button>
                </div>

                <p className="text-center text-sm text-gray-400">
                  Already have an account?{" "}
                  <span onClick={()=>{
                    navigate('/')
                  }}
                   className="text-violet-400 cursor-pointer">
                    Log In
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#2d2938] px-8 py-5 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-400">
        <h3 className="font-bold text-white">team-sync</h3>

        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
          <span>System Status</span>
        </div>

        <span>
          © 2024 team-sync. Enterprise Intelligence Platforms.
        </span>
      </footer>
    </div>
  );
}
