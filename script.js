document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. LOGIKA UNTUK INDEX.HTML (HALAMAN UTAMA)
  // ==========================================
  const nextBtn = document.getElementById("nextBtn");

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      // Berpindah ke halaman2.html
      window.location.href = "halaman2.html";
    });
  }

  // ==========================================
  // 2. LOGIKA UNTUK HALAMAN2.HTML
  // ==========================================

  // Fungsi Utama Pindah Section
  function switchSection(targetId) {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".section-content");

    if (navItems.length > 0) {
      navItems.forEach((nav) => {
        nav.classList.remove("active");
        if (nav.getAttribute("data-target") === targetId) {
          nav.classList.add("active");
        }
      });
    }

    if (sections.length > 0) {
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });
    }
  }

  // Navigasi Navbar
  const navItems = document.querySelectorAll(".nav-item");
  if (navItems.length > 0) {
    navItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
        switchSection(targetId);
      });
    });
  }

  // Tombol-Tombol di Home Halaman 2
  const wishBtn = document.getElementById("wishbtn");
  if (wishBtn) {
    wishBtn.addEventListener("click", function () {
      switchSection("wish");
    });
  }

  const galleryBtn = document.getElementById("gallerybtn");
  if (galleryBtn) {
    galleryBtn.addEventListener("click", function () {
      switchSection("gallery");
    });
  }

  const surpriseBtn = document.getElementById("surprisebtn");
  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", function () {
      switchSection("surprise");
    });
  }

  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      switchSection("home");
    });
  }

  // --- LOGIKA SLIDER GALERI (4 HALAMAN) ---
  const pages = [document.getElementById("gPage1"), document.getElementById("gPage2"), document.getElementById("gPage3"), document.getElementById("gPage4")];

  const prevBtn = document.getElementById("prevGallery"); // Sesuaikan jika ID tombol prev kamu "prevGallery"
  const nextBtnGallery = document.getElementById("nextGallery"); // Sesuaikan jika ID tombol next kamu "nextGallery"

  let currentPage = 0; // Index halaman (0 = Halaman 1, 1 = Halaman 2, dst)

  // Fungsi untuk memunculkan halaman yang sesuai dan menyembunyikan sisanya
  function updateGallery() {
    pages.forEach((page, index) => {
      if (page) {
        if (index === currentPage) {
          page.classList.add("page-active");
        } else {
          page.classList.remove("page-active");
        }
      }
    });
  }

  // Event Listener Tombol Next (Maju 1 Halaman)
  if (nextBtnGallery) {
    nextBtnGallery.addEventListener("click", function () {
      if (currentPage < pages.length - 1) {
        currentPage++;
        updateGallery();
      }
    });
  }

  // Event Listener Tombol Prev (Mundur 1 Halaman)
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        updateGallery();
      }
    });
  }

  //    // 5. LOGIKA TOMBOL SURPRISE (Garis merah akan hilang di sini)
  //     const surpriseBtn = document.getElementById("surprisebtn");
  //     if (surpriseBtn) {
  //         surpriseBtn.addEventListener("click", function () {
  //             switchSection("surprise");
  //         });
  //     }

  //     // 6. LOGIKA TOMBOL BACK TO HOME
  //     const backBtn = document.getElementById("backBtn");
  //     if (backBtn) {
  //         backBtn.addEventListener("click", function () {
  //             switchSection("home");
  //         });
  //     }
});
