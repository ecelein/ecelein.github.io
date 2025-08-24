function generateMenu(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  const menuHTML = `
    <div id="burger-menu">
      <span></span>
    </div>
    <div id="menu">
      <ul>
	  <!-- New Overview Menu Item placed above Authors -->
        <li><a href="/index.html">Overview</a></li>  <!-- The new "Overview" link -->
        <li>
          <a href="#">Authors ▾</a>
          <ul>
            <li>
              <a href="#"> F. Scott Fitzgerald and Zelda Fitzgerald ▾</a>
              <ul>
                <li>
                  <a href="#"> F. Scott Fitzgerald ▾</a>
                  <ul>
                    <li><a href="/subpages/introduction_scott.html">Introduction</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Zelda Fitzgerald ▾</a>
                  <ul>
                    <li><a href="/subpages/introduction_zelda.html">Introduction</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Analysis ▾</a>
                  <ul>
                    <li><a href="/subpages/empirical_assumption_fitzgerald.html">Empirical Assumption</a></li>
                    <li><a href="/subpages/normal_stylo_fitzgerald.html">Stylo</a></li>
                    <li><a href="/subpages/voyant_fitzgerald.html">Voyant</a></li>
                    <li><a href="/subpages/zeta_fitzgerald.html">Zeta Analysis</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">T.S. Eliot and Vivienne Haigh-Wood Eliot ▾</a>
              <ul>
                <li>
                  <a href="#">T.S. Eliot ▾</a>
                  <ul>
                    <li><a href="/subpages/introduction_ts.html">Introduction</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Vivienne Haigh-Wood Eliot ▾</a>
                  <ul>
                    <li><a href="/subpages/introduction_vivi.html">Introduction</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Analysis ▾</a>
                  <ul>
                    <li><a href="/subpages/empirical_assumption_eliot.html">Empirical Assumption</a></li>
                    <li><a href="/subpages/normal_stylo_eliot.html">Stylo</a></li>
                    <li><a href="/subpages/voyant_eliot.html">Voyant</a></li>
                    <li><a href="/subpages/zeta_eliot.html">Zeta Analysis</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Tools ▾</a>
          <ul>
            <li>
              <ul>
              </ul>
            </li>
            <li><a href="/subpages/problems.html">Problems</a></li>
            <li><a href="/subpages/limitations.html">Limitations</a></li>
            <li><a href="/subpages/recommendations.html">Recommendations</a></li>
          </ul>
        </li>
        <li><a href="/subpages/about_us.html">About Us</a></li>
        <li><a href="/subpages/references.html">References</a></li>
      </ul>
    </div>
  `;

  container.innerHTML = menuHTML;

  initializeMenu();
}

function initializeMenu() {
  const burgerMenu = document.getElementById("burger-menu");
  const menuOverlay = document.getElementById("menu");

  if (!burgerMenu || !menuOverlay) {
    console.error("Menu elements are missing.");
    return;
  }

  burgerMenu.addEventListener("click", function () {
    menuOverlay.classList.toggle("overlay");
    burgerMenu.classList.toggle("close");
  });

  document.querySelectorAll("#menu li > a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.tagName === "UL") {
        e.preventDefault();
        submenu.classList.toggle("open");
      }
    });
  });
}
