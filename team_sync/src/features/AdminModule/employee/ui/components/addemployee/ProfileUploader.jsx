import { Camera } from "lucide-react";

const ProfileUploader = ({
  preview,
  onImageChange,
}) => {
  return (
    <div className="flex flex-col items-center">

      <label
        htmlFor="profile-image"
        className="group relative flex h-40 w-40 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[var(--bg-border)] bg-[var(--input-bg)] transition hover:border-[var(--primary)]"
      >

        {preview ? (

          <img
            src={preview}
            alt="Profile Preview"
            className="h-full w-full object-cover"
          />

        ) : (

          <div className="flex flex-col items-center">

            <Camera
              size={34}
              className="text-[var(--icon-primary)]"
            />

            <span className="mt-3 text-sm font-medium text-[var(--text-primary)]">
              Upload Photo
            </span>

            <span className="mt-1 text-xs text-[var(--text-muted)]">
              JPG, PNG (Max 5 MB)
            </span>

          </div>

        )}

        {/* Hover Overlay */}

        <div className="absolute inset-0 hidden items-center justify-center bg-black/40 group-hover:flex">

          <span className="rounded-lg bg-[var(--primary)] px-3 py-2 text-sm font-medium text-white">
            Change Photo
          </span>

        </div>

      </label>

      <input
        id="profile-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onImageChange}
      />

    </div>
  );
};

export default ProfileUploader;