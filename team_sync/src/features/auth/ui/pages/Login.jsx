import { useAuth } from "../../hooks/useAuth";
import {
  BrainCircuit,
  Cloud,
//   Github,
  ArrowRight,
} from "lucide-react";

export default function App() {
 let {register,handleSubmit,onLoginSubmit,watch,errors,navigate} = useAuth();

  return (
    <div className="min-h-screen bg-[#16141d] flex items-center justify-center px-4">

      {/* Card */}

      <div className="w-full max-w-md rounded-xl border border-[#33303d] bg-[#1d1b24] p-8">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <div className="h-14 w-14 rounded-xl bg-[#7b5ce5] flex items-center justify-center">

            <BrainCircuit className="text-white" size={28} />

          </div>

          <h1 className="mt-5 text-3xl font-semibold text-white">
            team-sync
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to your workspace
          </p>

        </div>

        {/* Social Buttons */}

        <div className="grid grid-cols-2 gap-3 mt-8">

          <button
            className="h-10 rounded-md border border-[#383443]
            bg-[#25222d]
            flex items-center justify-center gap-2
            text-sm text-white hover:bg-[#2d2a35]
            transition"
          >
            <Cloud size={17} />
            GOOGLE
          </button>

          <button
            className="h-10 rounded-md border border-[#383443]
            bg-[#25222d]
            flex items-center justify-center gap-2
            text-sm text-white hover:bg-[#2d2a35]
            transition"
          >
            {/* <Github size={17} /> */}
            GITHUB
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-px bg-[#34313c]" />

          <span className="text-xs text-gray-400">
            or continue with email
          </span>

          <div className="flex-1 h-px bg-[#34313c]" />

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onLoginSubmit)}
          className="space-y-5"
        >

          {/* Email */}

          <div>

            <label className="text-[11px] uppercase font-semibold text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid Email",
                },
              })}
              className="mt-2 w-full h-11 rounded-md
              border border-[#36333f]
              bg-[#17141d]
              px-4
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-[#7b5ce5]"
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}

          <div>

            <div className="flex justify-between items-center">

              <label className="text-[11px] uppercase font-semibold text-gray-300">
                Password
              </label>

              <button
                type="button"
                className="text-xs text-[#8d6dff]"
              >
                Forgot Password?
              </button>

            </div>

            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="mt-2 w-full h-11 rounded-md
              border border-[#36333f]
              bg-[#17141d]
              px-4
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-[#7b5ce5]"
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Checkbox */}

          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              {...register("remember")}
              className="accent-[#7b5ce5]"
            />

            <span className="text-sm text-gray-300">
              Stay signed in
            </span>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full h-11 rounded-md
            bg-[#7b5ce5]
            hover:bg-[#8c6fff]
            text-white
            flex items-center justify-center gap-2
            transition"
          >
            Sign In

            <ArrowRight size={18} />

          </button>

        </form>

        {/* Bottom */}

        <div className="mt-8 text-center text-sm text-gray-400">

          Don't have an account?

          <button onClick={()=>{
            navigate('/register')
          }}
           className="text-[#8d6dff] ml-2">
            Sign Up
          </button>

        </div>

        {/* Footer */}

        <div className="mt-8 border-t border-[#33303d] pt-6 text-center text-xs text-gray-500">

          <p>
            © 2024 team-sync Enterprise Intelligence Platforms.
          </p>

          <div className="flex justify-center gap-5 mt-2">

            <button className="hover:text-white">
              Privacy Policy
            </button>

            <button className="hover:text-white">
              Terms of Service
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}