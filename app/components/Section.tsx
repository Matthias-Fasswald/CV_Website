export default function Section({ id, children }: any) {
  return (
    <section
      id={id}
      className="relative w-full py-32 overflow-visible"
    >
      {children}
    </section>
  );
}
