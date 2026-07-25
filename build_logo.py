import os
import subprocess

def generate_exact_logo_svg(dark_mode=False):
    text_blue = "#FFFFFF" if dark_mode else "#063673"
    purple_accent = "#A870D6" if dark_mode else "#8552A8"
    
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 320" width="950" height="320">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&amp;display=swap');
      
      .main-title {{
        font-family: 'Montserrat', 'Arial Black', -apple-system, sans-serif;
        font-weight: 900;
        font-size: 135px;
        fill: {text_blue};
      }}
      
      .tagline-text {{
        font-family: 'Montserrat', 'Arial', sans-serif;
        font-weight: 600;
        font-size: 36px;
        fill: {purple_accent};
        letter-spacing: 11.5px;
      }}
    </style>
  </defs>

  <g transform="translate(30, 165)">
    <!-- Letter S -->
    <text x="0" y="0" class="main-title">S</text>

    <!-- Letter O with Purple Capsule Badge -->
    <g transform="translate(100, -125)">
      <text x="0" y="125" class="main-title">O</text>
      <!-- Purple Badge inside O -->
      <g transform="translate(56, 74) rotate(-35)">
        <rect x="-14" y="-26" width="28" height="52" rx="14" fill="{purple_accent}" />
        <line x1="-16" y1="8" x2="16" y2="-8" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
      </g>
    </g>

    <!-- Letter L -->
    <text x="225" y="0" class="main-title">L</text>

    <!-- First Letter I (Server Pin Icon) -->
    <g transform="translate(325, -100)">
      <circle cx="16" cy="12" r="14" fill="{purple_accent}" />
      <rect x="11" y="24" width="10" height="56" fill="{purple_accent}" />
      <rect x="-4" y="80" width="40" height="14" rx="6" fill="{purple_accent}" />
      <rect x="-4" y="98" width="40" height="14" rx="6" fill="{purple_accent}" />
      <rect x="-4" y="116" width="40" height="14" rx="6" fill="{purple_accent}" />
    </g>

    <!-- Letter N -->
    <g transform="translate(372, -125)">
      <text x="0" y="125" class="main-title">N</text>
      <line x1="78" y1="28" x2="104" y2="28" stroke="{purple_accent}" stroke-width="5" stroke-linecap="round"/>
    </g>

    <!-- Second Letter I (Server Pin Icon) -->
    <g transform="translate(500, -100)">
      <circle cx="16" cy="12" r="14" fill="{purple_accent}" />
      <rect x="11" y="24" width="10" height="56" fill="{purple_accent}" />
      <rect x="-4" y="80" width="40" height="14" rx="6" fill="{purple_accent}" />
      <rect x="-4" y="98" width="40" height="14" rx="6" fill="{purple_accent}" />
      <rect x="-4" y="116" width="40" height="14" rx="6" fill="{purple_accent}" />
    </g>

    <!-- Letter X -->
    <g transform="translate(548, -125)">
      <text x="0" y="125" class="main-title">X</text>
      <!-- Double-line stroke on top right branch -->
      <line x1="72" y1="18" x2="102" y2="58" stroke="{text_blue}" stroke-width="8" stroke-linecap="round"/>
      <line x1="84" y1="14" x2="114" y2="54" stroke="{purple_accent}" stroke-width="4" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Bottom Tagline -->
  <text x="450" y="275" text-anchor="middle" class="tagline-text">SOFTWARE SOLUTIONS</text>
</svg>'''
    return svg

def render(svg_content, out_png):
    temp_html = "c:/Users/91784/solinix-website/temp_render.html"
    html = f'''<!DOCTYPE html>
<html>
<head>
<style>
  body {{ margin: 0; padding: 0; background: transparent; display: flex; justify-content: center; align-items: center; width: 950px; height: 320px; overflow: hidden; }}
  svg {{ width: 950px; height: 320px; }}
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
        "--window-size=950,320",
        "--default-background-color=00000000",
        temp_html
    ], capture_output=True)
    if os.path.exists(temp_html):
        os.remove(temp_html)
    print(f"Rendered {out_png}")

def main():
    target = "c:/Users/91784/solinix-website/public/images"
    os.makedirs(target, exist_ok=True)

    # Standard
    svg_light = generate_exact_logo_svg(dark_mode=False)
    with open(os.path.join(target, "solinix-logo.svg"), "w", encoding="utf-8") as f:
        f.write(svg_light)
    render(svg_light, os.path.join(target, "solinix-logo.png"))

    # White variant for dark backgrounds
    svg_dark = generate_exact_logo_svg(dark_mode=True)
    with open(os.path.join(target, "solinix-logo-white.svg"), "w", encoding="utf-8") as f:
        f.write(svg_dark)
    render(svg_dark, os.path.join(target, "solinix-logo-white.png"))

if __name__ == "__main__":
    main()
