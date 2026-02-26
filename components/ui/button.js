export default function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-[var(--radius)] bg-[var(--color-secondary)] text-white hover:opacity-90 transition">
      {children}
    </button>
  );
}