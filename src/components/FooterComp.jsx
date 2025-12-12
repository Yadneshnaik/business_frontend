export default function FooterComp() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-light text-dark pt-3 pb-2 mt-5 w-100 footer-shadow"
      style={{ zIndex: 1000 }}
    >
      <div className="container text-center">
        <p className="m-0">
          © {year} Vista Developer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
