import { ImagePlus } from "lucide-react";

const PersonalInformation = ({
  name,
  setName,
  email,
  setEmail,
  bio,
  setBio,
}) => {
  return (
    <section className="rounded-2xl border border-[var(--bg-border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)]">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-[var(--text-primary)]">
          Personal Information
        </h2>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Basic employee profile information.
        </p>

      </div>

      {/* Content */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

        {/* Upload */}

        <div className="lg:col-span-3">

          <label
            htmlFor="avatar"
            className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--bg-border)] bg-[var(--input-bg)] transition hover:border-[var(--primary)]"
          >

            <ImagePlus
              size={34}
              className="text-[var(--icon-primary)]"
            />

            <span className="mt-3 text-sm font-medium text-[var(--text-primary)]">
              Upload Photo
            </span>

            <span className="mt-1 text-xs text-[var(--text-muted)]">
              JPG, PNG up to 5MB
            </span>

          </label>

          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="hidden"
          />

        </div>

        {/* Inputs */}

        <div className="space-y-5 lg:col-span-9">

          {/* Row */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Name */}

            <div>

              <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter employee name"
                className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
              />

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
              />

            </div>

          </div>

          {/* Bio */}

          <div>

            <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              Bio
            </label>

            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us something about this employee..."
              className="w-full resize-none rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default PersonalInformation;