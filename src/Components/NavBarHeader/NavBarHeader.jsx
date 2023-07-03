import "./navBarStyle.css"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ top: "40px", background: "#00000080", borderRadius: "5px" }}>
    <div class="container">
      <a class="navbar-brand" href="/">Kastha</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/veener-doors">Veener Doors</a></li>
              <li><a class="dropdown-item" href="/veener-doors">Lamination Doors</a></li>
              <li><a class="dropdown-item" href="/veener-doors">Skin Doors</a></li>
              <li><a class="dropdown-item" href="/veener-doors">Royal Paint Doors</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pre Hung Door</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contactus">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gallery">Gallary</a>
          </li>
        </ul>
        <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">DOWNLOAD BROCHURE</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;