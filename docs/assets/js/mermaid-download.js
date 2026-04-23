// Adds "Download SVG" / "Download PNG" buttons to every rendered mermaid diagram.
// Mermaid (via Material's superfences integration) renders diagrams client-side
// into a <svg> inside a .mermaid container. We wait for that, then inject
// controls.

(function () {
  const BUTTON_CLASS = "md-mermaid-download";
  const CONTAINER_CLASS = "md-mermaid-container";

  function filenameFor(svg, ext) {
    const page = (document.title || "sitrep-diagram")
      .replace(/[—–].*$/, "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "sitrep-diagram";
    return `${page}.${ext}`;
  }

  function serializeSvg(svgEl) {
    const clone = svgEl.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    if (!clone.getAttribute("xmlns:xlink")) {
      clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    }
    const source = new XMLSerializer().serializeToString(clone);
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + source;
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadSvg(svgEl) {
    const svgText = serializeSvg(svgEl);
    downloadBlob(new Blob([svgText], { type: "image/svg+xml;charset=utf-8" }), filenameFor(svgEl, "svg"));
  }

  function downloadPng(svgEl) {
    const svgText = serializeSvg(svgEl);
    const bbox = svgEl.getBoundingClientRect();
    const scale = 2;
    const width = Math.max(svgEl.viewBox.baseVal.width || bbox.width || 800, 400);
    const height = Math.max(svgEl.viewBox.baseVal.height || bbox.height || 600, 300);

    const img = new Image();
    const svgUrl = URL.createObjectURL(new Blob([svgText], { type: "image/svg+xml;charset=utf-8" }));
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(svgUrl);
      canvas.toBlob(function (blob) {
        if (blob) downloadBlob(blob, filenameFor(svgEl, "png"));
      }, "image/png");
    };
    img.onerror = function () {
      URL.revokeObjectURL(svgUrl);
      console.error("mermaid-download: failed to rasterize SVG");
    };
    img.src = svgUrl;
  }

  function enhance(mermaidBlock) {
    if (mermaidBlock.dataset.mdDownloadAttached === "1") return;
    const svg = mermaidBlock.querySelector("svg");
    if (!svg) return;
    mermaidBlock.dataset.mdDownloadAttached = "1";

    // Wrap so we can position the toolbar consistently.
    let wrapper = mermaidBlock.closest("." + CONTAINER_CLASS);
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = CONTAINER_CLASS;
      mermaidBlock.parentNode.insertBefore(wrapper, mermaidBlock);
      wrapper.appendChild(mermaidBlock);
    }

    const bar = document.createElement("div");
    bar.className = "md-mermaid-toolbar";

    const svgBtn = document.createElement("button");
    svgBtn.type = "button";
    svgBtn.className = BUTTON_CLASS;
    svgBtn.textContent = "SVG";
    svgBtn.title = "Download diagram as SVG";
    svgBtn.addEventListener("click", function () { downloadSvg(svg); });

    const pngBtn = document.createElement("button");
    pngBtn.type = "button";
    pngBtn.className = BUTTON_CLASS;
    pngBtn.textContent = "PNG";
    pngBtn.title = "Download diagram as PNG (2x)";
    pngBtn.addEventListener("click", function () { downloadPng(svg); });

    bar.appendChild(svgBtn);
    bar.appendChild(pngBtn);
    wrapper.insertBefore(bar, mermaidBlock);
  }

  function scan() {
    document.querySelectorAll(".mermaid").forEach(enhance);
  }

  // Mermaid renders after DOMContentLoaded + script execution. Poll briefly and
  // also observe future navigations (instant.loading).
  function start() {
    let tries = 0;
    const iv = setInterval(function () {
      scan();
      if (++tries > 40) clearInterval(iv); // ~8s max
    }, 200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  // Material's instant navigation: re-run on page changes.
  if (window.document$) {
    window.document$.subscribe(function () { start(); });
  }
})();
