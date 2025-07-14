import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div class="container">
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
              <a
                href="/"
                class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                aria-label="Bootstrap"
              ></a>
              <p class="text-body-secondary">
                ©2025 Fashions- All rights reserved.
              </p>
            </div>
            <div class="col mb-3"></div>
            <div class="col mb-3">
              <h5>Sales and Support:</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    LHR: 042-34781-2-3
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    KHI: 021-34781-2-3
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    WhatsApp: 0092 300 997 1171
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    UAN: 0004 111 2733
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    Email: info@travair.com.pk
                  </a>
                </li>
              </ul>
            </div>

            <div class="col mb-3">
              <h5>OFFICE</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    <span class="fw-bold">Lahore Office:</span> Suite No. 1-223
                    GF, Shopping Mall, Ground Floor, 82-D/1 Main Boulevard,
                    Gulberg 3, Lahore.
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-body-secondary">
                    <span class="fw-bold">Karachi Office: </span>Suite No. 888,
                    Bihar Muslim Cooperative Housing Society, Shaheed-e-Millat
                    Road, Karachi.
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default Footer;
