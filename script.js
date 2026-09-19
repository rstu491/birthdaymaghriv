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

  // Tombol Prev & Next Galeri
  const page1 = document.getElementById("gPage1");
  const page2 = document.getElementById("gPage2");
  const page3 = document.getElementById("gPage3");
  const page4 = document.getElementById("gPage4");
  const prevBtn = document.getElementById("prevGallery");
  const nextBtnGallery = document.getElementById("nextGallery");

  if (nextBtnGallery && prevBtn && page1 && page2 && page3 && page4) {
    nextBtnGallery.addEventListener("click", function () {
      page1.classList.remove("page-active");
      page2.classList.add("page-active");
    });

    prevBtn.addEventListener("click", function () {
      page2.classList.remove("page-active");
      page1.classList.add("page-active");
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
