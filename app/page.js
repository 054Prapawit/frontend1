import Navbar from '../app/component/navbar.js'; // Adjust the path according to your project structure

export default function Home() {
  return (

    <>
      <Navbar />

      <div className="container">
        <div id="carouselExample" className="carousel slide p-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/img1.jpg" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="/img/img2.jpg" className="d-block w-100" alt="Slide 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/nike.png" className="custom-img" alt="Card Image 5" />
              <div className="card-body text-center">
                <h5 className="card-title">รองเท้า</h5>
                <p className="card-text">
                  Nike vapor 16
                </p>
                <a href="#" className="btn btn-primary">Watch</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/supfly.jpg" className="custom-img" alt="Card Image 6" />
              <div className="card-body text-center">
                <h5 className="card-title">รองเท้า</h5>
                <p className="card-text">
                  Kimitsuno Yaiba
                </p>
                <a href="#" className="btn btn-primary">Watch</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/psg.jpg" className="custom-img" alt="Card Image 7" />
              <div className="card-body text-center">
                <h5 className="card-title">อนิเมะแนะนำ</h5>
                <p className="card-text">
                  One piece
                </p>
                <a href="#" className="btn btn-primary">Watch</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="py-5 container">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Service</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Service</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Service</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}