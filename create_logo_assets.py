import os
from PIL import Image, ImageDraw, ImageFont

def create_logo_svg(filename):
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" width="1000" height="400">
  <style>
    .navy-text { fill: #0A346C; font-family: 'Plus Jakarta Sans', 'Inter', 'Segoe UI', Arial, sans-serif; font-weight: 900; }
    .purple-text { fill: #7E4FA4; font-family: 'Plus Jakarta Sans', 'Inter', 'Segoe UI', Arial, sans-serif; font-weight: 600; letter-spacing: 14px; }
  </style>
  
  <g transform="translate(40, 40)">
    <!-- Letter S -->
    <path d="M 60,70 C 60,35 110,35 130,35 C 160,35 180,50 180,75 C 180,110 100,115 100,145 C 100,165 170,165 180,145 M 180,165 C 170,185 135,190 110,190 C 70,190 55,170 55,145" fill="none" stroke="#0A346C" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Letter S (Solid Filled Vector Path) -->
    <g fill="#0A346C">
      <!-- S solid shape -->
      <path d="M 165,65 C 155,50 135,46 115,46 C 85,46 65,62 65,85 C 65,122 155,115 155,152 C 155,172 132,180 110,180 C 85,180 70,168 64,152 L 34,162 C 44,192 72,210 112,210 C 155,210 188,188 188,150 C 188,110 98,105 98,78 C 98,62 114,56 128,56 C 144,56 156,64 162,75 Z" />
    </g>

    <!-- Letter O -->
    <g transform="translate(190, 46)">
      <path d="M 65,0 C 105,0 130,32 130,82 C 130,132 105,164 65,164 C 25,164 0,132 0,82 C 0,32 25,0 65,0 Z M 65,30 C 45,30 33,52 33,82 C 33,112 45,134 65,134 C 85,134 97,112 97,82 C 97,52 85,30 65,30 Z" fill="#0A346C"/>
      
      <!-- Purple Badge inside O -->
      <g transform="translate(65, 82) rotate(-28)">
        <rect x="-16" y="-28" width="32" height="56" rx="14" fill="#7E4FA4" />
        <line x1="-18" y1="10" x2="18" y2="-10" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      </g>
    </g>

    <!-- Letter L -->
    <g transform="translate(340, 46)">
      <path d="M 0,0 L 34,0 L 34,132 L 105,132 L 105,164 L 0,164 Z" fill="#0A346C"/>
    </g>

    <!-- First Letter I (Server/Tower Pin Icon) -->
    <g transform="translate(470, 46)">
      <!-- Top Bulb/Circle -->
      <circle cx="20" cy="14" r="14" fill="#7E4FA4" />
      <!-- Vertical Stem -->
      <rect x="15" y="28" width="10" height="74" fill="#7E4FA4" />
      <!-- 3 Stacked Pills at Base -->
      <rect x="0" y="104" width="40" height="14" rx="7" fill="#7E4FA4" />
      <rect x="0" y="124" width="40" height="14" rx="7" fill="#7E4FA4" />
      <rect x="0" y="144" width="40" height="14" rx="7" fill="#7E4FA4" />
    </g>

    <!-- Letter N -->
    <g transform="translate(535, 46)">
      <path d="M 0,0 L 34,0 L 80,105 L 80,0 L 112,0 L 112,164 L 78,164 L 32,58 L 32,164 L 0,164 Z" fill="#0A346C"/>
      <!-- Top Right accent line inside N -->
      <line x1="82" y1="8" x2="108" y2="8" stroke="#7E4FA4" stroke-width="4" stroke-linecap="round"/>
    </g>

    <!-- Second Letter I (Server/Tower Pin Icon) -->
    <g transform="translate(670, 46)">
      <!-- Top Bulb/Circle -->
      <circle cx="20" cy="14" r="14" fill="#7E4FA4" />
      <!-- Vertical Stem -->
      <rect x="15" y="28" width="10" height="74" fill="#7E4FA4" />
      <!-- 3 Stacked Pills at Base -->
      <rect x="0" y="104" width="40" height="14" rx="7" fill="#7E4FA4" />
      <rect x="0" y="124" width="40" height="14" rx="7" fill="#7E4FA4" />
      <rect x="0" y="144" width="40" height="14" rx="7" fill="#7E4FA4" />
    </g>

    <!-- Letter X -->
    <g transform="translate(735, 46)">
      <!-- Base X path -->
      <path d="M 0,0 L 36,0 L 68,76 L 102,0 L 138,0 L 88,96 L 142,164 L 104,164 L 68,110 L 32,164 L 0,164 L 48,90 Z" fill="#0A346C"/>
      <!-- Parallel accent stroke on upper-right branch of X -->
      <line x1="106" y1="-2" x2="142" y2="76" stroke="#0A346C" stroke-width="7" stroke-linecap="round"/>
      <!-- Purple touch inside X -->
      <path d="M 58,80 L 78,80 L 68,102 Z" fill="#7E4FA4" />
    </g>

    <!-- Tagline: SOFTWARE SOLUTIONS -->
    <text x="460" y="262" text-anchor="middle" class="purple-text" font-size="34">SOFTWARE SOLUTIONS</text>
  </g>
</svg>'''

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Saved {filename}")

def create_logo_png(filename, bg_color=None):
    # Supersampling 4x for smooth anti-aliasing
    scale = 4
    width, height = 1000 * scale, 400 * scale
    
    if bg_color:
        img = Image.new("RGBA", (width, height), bg_color)
    else:
        img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        
    draw = ImageDraw.Draw(img)
    
    NAVY = (10, 52, 108, 255)
    PURPLE = (126, 79, 164, 255)
    WHITE = (255, 255, 255, 255)
    
    ox, oy = 40 * scale, 40 * scale
    
    # 1. Letter S
    # Draw S with filled polygon/arcs
    # Outer box approx (40, 46) -> width 150, height 164
    s_x = ox + 35 * scale
    draw.ellipse([s_x, oy + 46 * scale, s_x + 130 * scale, oy + 120 * scale], outline=NAVY, width=32*scale)
    draw.ellipse([s_x, oy + 90 * scale, s_x + 130 * scale, oy + 210 * scale], outline=NAVY, width=32*scale)
    # Clear inner overlaps with smooth masking or draw as path in PIL
    
    # Alternatively, draw SVG to high-res image or use PIL with fonts if available, 
    # Or render via headless browser or python drawing.

if __name__ == "__main__":
    os.makedirs("c:/Users/91784/solinix-website/public/images", exist_ok=True)
    create_logo_svg("c:/Users/91784/solinix-website/public/images/solinix-logo.svg")

