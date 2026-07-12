"use client";

export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={handleClick}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
