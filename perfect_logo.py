import os
import subprocess

def create_svg(navy="#0A346C", purple="#8A56AC"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="1000" height="360">
  <g transform="translate(45, 60)">
    
    <!-- S -->
    <path d="M 120, 25 C 102, 10 78, 6 56, 6 C 20, 6 -4, 28 -4, 60 C -4, 95 28, 108 72, 118 C 110, 126 122, 136 122, 154 C 122, 175 100, 188 66, 188 C 30, 188 8, 168 -6, 146 L -34, 168 C -12, 202 24, 222 66, 222 C 124, 222 160, 192 160, 150 C 160, 110 126, 96 80, 86 C 42, 78 30, 68 30, 54 C 30, 38 48, 28 72, 28 C 92, 28 110, 38 124, 52 Z" fill="{navy}"/>

    <!-- O -->
    <g transform="translate(175, 6)">
      <path d="M 72, 0 C 22, 0 -18, 48 -18, 110 C -18, 172 22, 220 72, 220 C 122, 220 162, 172 162, 110 C 162, 48 122, 0 72, 0 Z M 72, 34 C 100, 34 122, 68 122, 110 C 122, 152 100, 186 72, 186 C 44, 186 22, 152 22, 110 C 22, 68 44, 34 72, 34 Z" fill="{navy}"/>
      <!-- Purple Badge inside O -->
      <g transform="translate(72, 110) rotate(-34)">
        <rect x="-18" y="-32" width="36" height="64" rx="18" fill="{purple}" />
        <line x1="-22" y1="10" x2="22" y2="-10" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round"/>
      </g>
    </g>

    <!-- L -->
    <g transform="translate(355, 6)">
      <path d="M 0, 0 L 38, 0 L 38, 184 L 126, 184 L 126, 216 L 0, 216 Z" fill="{navy}"/>
    </g>

    <!-- First I (Server Pin Icon) -->
    <g transform="translate(505, 6)">
      <circle cx="20" cy="18" r="16" fill="{purple}" />
      <rect x="14" y="34" width="12" height="96" fill="{purple}" />
      <rect x="-4" y="138" width="48" height="18" rx="9" fill="{purple}" />
      <rect x="-4" y="164" width="48" height="18" rx="9" fill="{purple}" />
      <rect x="-4" y="190" width="48" height="18" rx="9" fill="{purple}" />
    </g>

    <!-- N -->
    <g transform="translate(570, 6)">
      <path d="M 0, 0 L 38, 0 L 92, 142 L 92, 0 L 128, 0 L 128, 216 L 90, 216 L 36, 74 L 36, 216 L 0, 216 Z" fill="{navy}"/>
      <line x1="92" y1="12" x2="124" y2="12" stroke="{purple}" stroke-width="6" stroke-linecap="round"/>
    </g>

    <!-- Second I (Server Pin Icon) -->
    <g transform="translate(720, 6)">
      <circle cx="20" cy="18" r="16" fill="{purple}" />
      <rect x="14" y="34" width="12" height="96" fill="{purple}" />
      <rect x="-4" y="138" width="48" height="18" rx="9" fill="{purple}" />
      <rect x="-4" y="164" width="48" height="18" rx="9" fill="{purple}" />
      <rect x="-4" y="190" width="48" height="18" rx="9" fill="{purple}" />
    </g>

    <!-- X -->
    <g transform="translate(780, 6)">
      <path d="M 0, 0 L 42, 0 L 78, 98 L 116, 0 L 158, 0 L 100, 126 L 160, 216 L 116, 216 L 78, 144 L 38, 216 L 0, 216 L 56, 116 Z" fill="{navy}"/>
      <!-- Parallel stroke top right -->
      <line x1="126" y1="0" x2="164" y2="92" stroke="{navy}" stroke-width="8" stroke-linecap="round"/>
      <line x1="138" y1="0" x2="174" y2="88" stroke="{purple}" stroke-width="5" stroke-linecap="round"/>
    </g>

  </g>

  <!-- SOFTWARE SOLUTIONS Tagline -->
  <g transform="translate(500, 310)">
    <text x="0" y="0" text-anchor="middle" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="700" font-size="34" fill="{purple}" letter-spacing="12">SOFTWARE SOLUTIONS</text>
  </g>
</svg>'''

def render(svg_content, out_png):
    temp_html = "c:/Users/91784/solinix-website/temp_render.html"
    html = f'''<!DOCTYPE html>
<html>
<head>
<style>
  body {{ margin: 0; padding: 0; background: transparent; display: flex; justify-content: center; align-items: center; width: 1000px; height: 360px; overflow: hidden; }}
  svg {{ width: 1000px; height: 360px; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>'''
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html)

    chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    subprocess.run([
        chrome, "--headless", "--disable-gpu",
        f"--screenshot={out_png}",
        "--window-size=1000,360",
        "--default-background-color=00000000",
        temp_html
    ], capture_output=True)
    if os.path.exists(temp_html):
        os.remove(temp_html)
    print(f"Rendered {out_png}")

def main():
    target = "c:/Users/91784/solinix-website/public/images"
    os.makedirs(target, exist_ok=True)

    # Standard (Navy + Purple)
    svg_light = create_svg("#0A346C", "#8A56AC")
    with open(os.path.join(target, "solinix-logo.svg"), "w", encoding="utf-8") as f:
        f.write(svg_light)
    render(svg_light, os.path.join(target, "solinix-logo.png"))

    # White (White + Bright Purple)
    svg_dark = create_svg("#FFFFFF", "#A870D6")
    with open(os.path.join(target, "solinix-logo-white.svg"), "w", encoding="utf-8") as f:
        f.write(svg_dark)
    render(svg_dark, os.path.join(target, "solinix-logo-white.png"))

if __name__ == "__main__":
    main()
