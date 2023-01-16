export default function Container({ children, className }) {
  return (
    <section className={`max-w-[114rem] px-[3.2rem] w-[100%]  mx-auto xl:px-[0] overflow-hidden ${className}`}>
      {children}
    </section>
  );
}
