from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[1] / "public" / "product-hunt"
OUT.mkdir(parents=True, exist_ok=True)

BG = (17, 20, 21)
PANEL = (27, 32, 32)
PANEL_2 = (31, 38, 37)
PAPER = (242, 239, 231)
MUTED = (165, 170, 162)
LIME = (201, 240, 106)
CORAL = (255, 118, 93)
BLUE = (128, 162, 255)

FONT = "/System/Library/Fonts/SFNS.ttf"
FONT_BOLD = "/System/Library/Fonts/SFNS.ttf"
MONO = "/System/Library/Fonts/SFNSMono.ttf"

def f(size, mono=False):
    path = MONO if mono else FONT_BOLD
    return ImageFont.truetype(path, size)

def fit_text(draw, text, max_width, size, mono=False):
    font = f(size, mono)
    if draw.textbbox((0, 0), text, font=font)[2] <= max_width:
        return font
    while size > 10 and draw.textbbox((0, 0), text, font=font)[2] > max_width:
        size -= 1
        font = f(size, mono)
    return font

def rounded(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)

def brand(draw, x, y, size=24):
    rounded(draw, (x, y, x + size, y + size), 7, LIME)
    draw.text((x + size // 2, y + size // 2 - 1), "↗", anchor="mm", fill=BG, font=f(size - 6))
    draw.text((x + size + 12, y + size // 2), "CPM", anchor="lm", fill=PAPER, font=f(size - 5))
    draw.text((x + size + 12 + draw.textbbox((0, 0), "CPM", font=f(size - 5))[2], y + size // 2), ".calc", anchor="lm", fill=CORAL, font=f(size - 5))

def footer(draw, w, h, label):
    draw.text((54, h - 48), label.upper(), fill=MUTED, font=f(12, True))
    draw.text((w - 54, h - 48), "CPM.calc", anchor="ra", fill=LIME, font=f(12, True))

def thumbnail():
    im = Image.new("RGB", (240, 240), BG)
    d = ImageDraw.Draw(im)
    d.ellipse((24, 24, 216, 216), outline=LIME, width=2)
    d.ellipse((42, 42, 198, 198), outline=CORAL, width=1)
    d.ellipse((64, 64, 176, 176), fill=PANEL, outline=LIME, width=2)
    d.text((120, 101), "CPM", anchor="mm", fill=PAPER, font=f(30))
    d.text((120, 137), "×1,000", anchor="mm", fill=CORAL, font=f(13, True))
    d.text((120, 205), "CPM.calc", anchor="mm", fill=LIME, font=f(12, True))
    im.save(OUT / "thumbnail.png", optimize=True)

def base(w=1270, h=760):
    im = Image.new("RGB", (w, h), BG)
    d = ImageDraw.Draw(im)
    d.ellipse((w - 250, -100, w + 100, 250), fill=(25, 48, 33))
    d.ellipse((-160, h - 150, 180, h + 160), fill=(47, 29, 27))
    brand(d, 54, 43, 29)
    return im, d

def gallery_one():
    im, d = base()
    d.text((54, 150), "One number.", fill=PAPER, font=f(56))
    d.text((54, 215), "More clarity.", fill=LIME, font=f(56))
    d.text((54, 300), "Check the price of 1,000 impressions\nbefore you move a dollar of budget.", fill=MUTED, font=f(21))
    rounded(d, (620, 120, 1190, 640), 22, PANEL, outline=(66, 76, 68), width=2)
    d.text((660, 160), "CAMPAIGN MATH", fill=CORAL, font=f(12, True))
    d.text((660, 190), "Calculate your CPM", fill=PAPER, font=f(27))
    for y, label, value in [(270, "Ad spend", "$500"), (350, "Impressions", "100,000")]:
        d.text((660, y), label, fill=MUTED, font=f(13))
        rounded(d, (660, y + 25, 960, y + 78), 10, BG, outline=(74, 85, 75), width=1)
        d.text((680, y + 51), value, anchor="lm", fill=PAPER, font=f(19, True))
    rounded(d, (660, 465, 1150, 520), 10, LIME)
    d.text((685, 492), "Calculate CPM", anchor="lm", fill=BG, font=f(16))
    d.text((660, 566), "YOUR RESULT", fill=MUTED, font=f(11, True))
    d.text((660, 598), "$5.00", fill=LIME, font=f(39, True))
    d.text((850, 615), "CPM", fill=CORAL, font=f(13, True))
    footer(d, 1270, 760, "Free advertising math, made clear")
    im.save(OUT / "gallery-01-calculator.png", optimize=True)

def gallery_two():
    im, d = base()
    d.text((54, 150), "Plan reach", fill=PAPER, font=f(56))
    d.text((54, 215), "backwards.", fill=LIME, font=f(56))
    d.text((54, 300), "Start with a target.\nSee the budget it takes to get there.", fill=MUTED, font=f(21))
    rounded(d, (620, 120, 1190, 640), 22, PANEL, outline=(66, 76, 68), width=2)
    d.text((660, 160), "REVERSE PLANNING", fill=CORAL, font=f(12, True))
    d.text((660, 190), "Build a media estimate", fill=PAPER, font=f(27))
    cards = [("Target CPM", "$5.00", LIME), ("Target reach", "1,000,000", PAPER), ("Required budget", "$5,000", CORAL)]
    for i, (label, value, color) in enumerate(cards):
        x = 660 + (i % 2) * 250
        y = 280 + (i // 2) * 145
        width = 230 if i < 2 else 480
        rounded(d, (x, y, x + width, y + 105), 12, PANEL_2, outline=(67, 80, 70), width=1)
        d.text((x + 18, y + 22), label.upper(), fill=MUTED, font=f(10, True))
        d.text((x + 18, y + 63), value, fill=color, font=f(24, True))
    d.text((660, 585), "Planning estimate · not a platform quote", fill=MUTED, font=f(11, True))
    footer(d, 1270, 760, "Budget, reach, and CPM in one place")
    im.save(OUT / "gallery-02-planning.png", optimize=True)

def gallery_three():
    im, d = base()
    d.text((54, 150), "Know what", fill=PAPER, font=f(56))
    d.text((54, 215), "the metric means.", fill=LIME, font=f(56))
    d.text((54, 300), "A cheap impression is not automatically\na good campaign result.", fill=MUTED, font=f(21))
    labels = [("CPM", "delivery", "$5 / 1K", LIME), ("CPC", "traffic", "$2 / click", CORAL), ("CPA", "outcome", "$50 / lead", BLUE)]
    for i, (metric, purpose, value, color) in enumerate(labels):
        x = 620 + i * 185
        rounded(d, (x, 180, x + 160, 560), 18, PANEL, outline=(67, 80, 70), width=1)
        d.ellipse((x + 42, 215, x + 118, 291), outline=color, width=2)
        d.text((x + 80, 253), metric, anchor="mm", fill=color, font=f(22))
        d.text((x + 80, 345), purpose.upper(), anchor="mm", fill=MUTED, font=f(10, True))
        d.text((x + 80, 420), value, anchor="mm", fill=PAPER, font=f(15, True))
        d.line((x + 42, 482, x + 118, 482), fill=color, width=2)
    footer(d, 1270, 760, "Compare delivery, traffic, and outcomes")
    im.save(OUT / "gallery-03-metrics.png", optimize=True)

def demo_gif():
    frames = []
    for step in range(4):
        im, d = base(960, 600)
        d.text((54, 132), "CPM.calc", fill=LIME, font=f(17, True))
        d.text((54, 170), ["Enter two numbers.", "Calculate the result.", "Plan the reach.", "Make the next decision."][step], fill=PAPER, font=f(39))
        if step == 0:
            d.text((54, 250), "Ad spend", fill=MUTED, font=f(14)); rounded(d, (54, 280, 400, 340), 10, PANEL, outline=(72, 83, 73)); d.text((78, 310), "$500", anchor="lm", fill=PAPER, font=f(21, True))
            d.text((54, 380), "Impressions", fill=MUTED, font=f(14)); rounded(d, (54, 410, 400, 470), 10, PANEL, outline=(72, 83, 73)); d.text((78, 440), "100,000", anchor="lm", fill=PAPER, font=f(21, True))
        elif step == 1:
            rounded(d, (54, 265, 520, 390), 16, PANEL, outline=LIME, width=2); d.text((82, 300), "YOUR RESULT", fill=MUTED, font=f(12, True)); d.text((82, 352), "$5.00 CPM", fill=LIME, font=f(38, True))
        elif step == 2:
            for i, (label, value, color) in enumerate([("Budget", "$5,000", CORAL), ("Reach", "1,000,000", PAPER), ("Target CPM", "$5.00", LIME)]):
                y = 245 + i * 88; d.text((54, y), label.upper(), fill=MUTED, font=f(11, True)); d.text((260, y), value, fill=color, font=f(23, True))
        else:
            d.text((54, 260), "CPM", fill=LIME, font=f(28, True)); d.text((54, 315), "delivery", fill=MUTED, font=f(13, True)); d.text((300, 260), "CPC", fill=CORAL, font=f(28, True)); d.text((300, 315), "traffic", fill=MUTED, font=f(13, True)); d.text((546, 260), "CPA", fill=BLUE, font=f(28, True)); d.text((546, 315), "outcome", fill=MUTED, font=f(13, True))
        d.text((54, 540), "Free advertising math, made clear", fill=MUTED, font=f(12, True))
        frames.append(im)
    frames[0].save(OUT / "demo.gif", save_all=True, append_images=frames[1:], duration=1300, loop=0, optimize=False)

thumbnail(); gallery_one(); gallery_two(); gallery_three(); demo_gif()
print(f"Created assets in {OUT}")
