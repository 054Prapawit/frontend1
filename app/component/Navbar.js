import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="p-3 bg-dark text-dark">
        <div className="container-fluid p-0">
          <div className="d-flex align-items-center">
            {/* โลโก้ */}
            <a href="/" className="d-flex align-items-center me-3">
              <img src="/img/logo.jpg" alt="Logo" className="logo" style={{ height: '40px' }} />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link href="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link href="/service" className="nav-link px-2 text-white">Service</Link></li>
              <li><Link href="/contact" className="nav-link px-2 text-white">Contact</Link></li>
              <li><Link href="/about" className="nav-link px-2 text-white">About</Link></li>
              <li><Link href="/users" className="nav-link px-2 text-white">User</Link></li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end d-flex justify-content-end align-items-center">
            <button type="button" className="btn btn-outline-light me-2">
        <Link href="/login" className="text-decoration-none text-light">
          Login
        </Link>
      </button>
              <li className="list-unstyled">
                <Link href="/signup" className="btn btn-danger">Signup</Link>
              </li>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
