#!/usr/bin/env python3
"""
Generates an executive, single-page, standards-compliant PDF 1.4 for Mohammed Hussain's CV.
Features:
- Exact Adobe Helvetica character metric calculations (zero awkward gaps, zero overflow)
- Proper text wrapping ensuring NO line ever goes out of frame
- Balanced vertical distribution filling the page with comfortable, legible font sizes
- Pure Python (no external dependencies)
"""

import os

# Standard Adobe Helvetica Character Metrics (width in 1/1000th of em)
HELVETICA_WIDTHS = {
    ' ': 278, '!': 278, '"': 355, '#': 556, '$': 556, '%': 889, '&': 667, '\'': 191,
    '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
    '0': 556, '1': 556, '2': 556, '3': 556, '4': 556, '5': 556, '6': 556, '7': 556, '8': 556, '9': 556,
    ':': 278, ';': 278, '<': 584, '=': 584, '>': 584, '?': 556, '@': 1015,
    'A': 667, 'B': 667, 'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778, 'H': 722, 'I': 278, 'J': 500,
    'K': 667, 'L': 556, 'M': 833, 'N': 722, 'O': 778, 'P': 667, 'Q': 778, 'R': 722, 'S': 667, 'T': 611,
    'U': 722, 'V': 667, 'W': 944, 'X': 667, 'Y': 667, 'Z': 611,
    '[': 278, '\\': 278, ']': 278, '^': 469, '_': 556, '`': 222,
    'a': 556, 'b': 556, 'c': 500, 'd': 556, 'e': 556, 'f': 278, 'g': 556, 'h': 556, 'i': 222, 'j': 222,
    'k': 500, 'l': 222, 'm': 833, 'n': 556, 'o': 556, 'p': 556, 'q': 556, 'r': 333, 's': 500, 't': 278,
    'u': 556, 'v': 500, 'w': 722, 'x': 500, 'y': 500, 'z': 500,
    '{': 334, '|': 260, '}': 334, '~': 584,
    '\u2014': 1000, # em-dash
    '\u2013': 500,  # en-dash
    '\u2022': 350,  # bullet
    '\u00b7': 278,  # middle dot
}

# Bold weights have slightly wider characters
HELVETICA_BOLD_WIDTHS = {
    ' ': 278, '!': 333, '"': 474, '#': 556, '$': 556, '%': 889, '&': 722, '\'': 238,
    '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
    '0': 556, '1': 556, '2': 556, '3': 556, '4': 556, '5': 556, '6': 556, '7': 556, '8': 556, '9': 556,
    ':': 333, ';': 333, '<': 584, '=': 584, '>': 584, '?': 611, '@': 975,
    'A': 722, 'B': 722, 'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778, 'H': 722, 'I': 278, 'J': 556,
    'K': 722, 'L': 611, 'M': 833, 'N': 722, 'O': 778, 'P': 667, 'Q': 778, 'R': 722, 'S': 667, 'T': 611,
    'U': 722, 'V': 667, 'W': 944, 'X': 667, 'Y': 667, 'Z': 611,
    'a': 556, 'b': 611, 'c': 556, 'd': 611, 'e': 556, 'f': 333, 'g': 611, 'h': 611, 'i': 278, 'j': 278,
    'k': 556, 'l': 278, 'm': 889, 'n': 611, 'o': 611, 'p': 611, 'q': 611, 'r': 389, 's': 556, 't': 333,
    'u': 611, 'v': 556, 'w': 778, 'x': 556, 'y': 556, 'z': 500,
    '|': 260, '\u2014': 1000, '\u2013': 500, '\u2022': 350, '\u00b7': 278
}

def str_w(s, size, bold=False):
    table = HELVETICA_BOLD_WIDTHS if bold else HELVETICA_WIDTHS
    return sum(table.get(c, 550) for c in s) * size / 1000.0

def wrap_text(text, size, max_width, bold=False):
    words = text.split(' ')
    lines = []
    cur = []
    for w in words:
        test = ' '.join(cur + [w])
        if str_w(test, size, bold=bold) <= max_width:
            cur.append(w)
        else:
            if cur:
                lines.append(' '.join(cur))
                cur = [w]
            else:
                lines.append(w)
                cur = []
    if cur:
        lines.append(' '.join(cur))
    return lines

class ExecutivePDF:
    def __init__(self, width=612, height=792):
        self.width = width
        self.height = height
        self.stream = []
        self.y = height - 42      # Top margin 42pt (15mm)
        self.left = 42            # Left margin 42pt (15mm)
        self.right = width - 42   # Right margin 570pt (15mm)
        self.content_width = self.right - self.left # 528pt

    def set_color(self, r, g, b):
        self.stream.append(f"{r:.3f} {g:.3f} {b:.3f} rg")

    def set_stroke_color(self, r, g, b):
        self.stream.append(f"{r:.3f} {g:.3f} {b:.3f} RG")

    def draw_line(self, x1, y1, x2, y2, width=1.0):
        self.stream.append(f"{width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def escape_text(self, text):
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

    def text(self, x, y, text, font="F1", size=10, color=(0, 0, 0)):
        self.set_color(*color)
        escaped = self.escape_text(text)
        self.stream.append(f"BT /{font} {size} Tf {x:.2f} {y:.2f} Td ({escaped}) Tj ET")

    def text_right(self, y, text, font="F1", size=10, color=(0, 0, 0), bold=False):
        w = str_w(text, size, bold=bold)
        x = self.right - w
        self.text(x, y, text, font=font, size=size, color=color)

    def rich_line(self, x, y, segments):
        """Draws segments sequentially with exact text metrics (no gaps)."""
        cur_x = x
        for text, font, size, color in segments:
            self.text(cur_x, y, text, font=font, size=size, color=color)
            is_bold = (font == "F2")
            cur_x += str_w(text, size, bold=is_bold)

    def section_header(self, title, tag=""):
        self.y -= 14
        # Section Title (Bold Uppercase)
        self.text(self.left, self.y, title, font="F2", size=9.5, color=(0.04, 0.06, 0.10))
        # Category Tag (Right Aligned in signature orange)
        if tag:
            self.text_right(self.y, tag, font="F2", size=8, color=(1.0, 0.30, 0.0), bold=True)
        self.y -= 4
        # Divider Line
        self.set_stroke_color(0.85, 0.88, 0.92)
        self.draw_line(self.left, self.y, self.right, self.y, width=0.75)
        self.y -= 10

    def build(self, output_path):
        stream_bytes = "\n".join(self.stream).encode("cp1252")
        
        objects = []
        def add_obj(b):
            objects.append(b)
            return len(objects)

        # 1: Catalog
        add_obj(b"<< /Type /Catalog /Pages 2 0 R >>")
        # 2: Pages
        add_obj(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
        # 3: Page
        page_dict = (
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {self.width} {self.height}] "
            f"/Resources << /Font << "
            f"/F1 4 0 R /F2 5 0 R /F3 6 0 R "
            f">> >> /Contents 7 0 R >>"
        ).encode("ascii")
        add_obj(page_dict)

        # 4: F1 = Helvetica (Regular)
        add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
        # 5: F2 = Helvetica-Bold
        add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
        # 6: F3 = Helvetica-Oblique
        add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>")
        # 7: Contents Stream
        contents = b"<< /Length " + str(len(stream_bytes)).encode("ascii") + b" >>\nstream\n" + stream_bytes + b"\nendstream"
        add_obj(contents)

        pdf = b"%PDF-1.4\n"
        offsets = []
        for i, obj in enumerate(objects, 1):
            offsets.append(len(pdf))
            pdf += f"{i} 0 obj\n".encode("ascii") + obj + b"\nendobj\n"

        xref_pos = len(pdf)
        pdf += f"xref\n0 {len(objects)+1}\n0000000000 65535 f \n".encode("ascii")
        for off in offsets:
            pdf += f"{off:010d} 00000 n \n".encode("ascii")

        pdf += f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode("ascii")

        with open(output_path, "wb") as f:
            f.write(pdf)

def generate():
    pdf = ExecutivePDF(width=612, height=792) # Standard US Letter

    # ==========================================
    # HEADER
    # ==========================================
    # Name
    pdf.text(pdf.left, pdf.y, "MOHAMMED HUSSAIN", font="F2", size=22, color=(0.04, 0.06, 0.10))
    # Right-aligned Role Tag
    pdf.text_right(pdf.y + 4, "AI & DATA SCIENCE ENGINEER", font="F2", size=9.5, color=(1.0, 0.30, 0.0), bold=True)
    pdf.y -= 14

    # Subtitle
    pdf.text(pdf.left, pdf.y, "Enterprise Operations and Systems Architecture", font="F1", size=10, color=(0.28, 0.33, 0.42))
    pdf.text_right(pdf.y, "Executive Curriculum Vitae", font="F1", size=8.5, color=(0.45, 0.50, 0.60))
    pdf.y -= 12

    # Contact line
    contact = "Chennai, Tamil Nadu, India   |   +91 91763 30206   |   s.m.d.hussainjoe@gmail.com   |   linkedin.com/in/smdhussain06   |   github.com/smdhussain06"
    pdf.text(pdf.left, pdf.y, contact, font="F1", size=8, color=(0.22, 0.26, 0.35))
    pdf.y -= 6

    # Header border line
    pdf.set_stroke_color(0.04, 0.06, 0.10)
    pdf.draw_line(pdf.left, pdf.y, pdf.right, pdf.y, width=1.5)
    pdf.y -= 6

    # ==========================================
    # PROFILE / EXECUTIVE SUMMARY
    # ==========================================
    pdf.section_header("PROFILE", "Executive Summary")
    summary = (
        "Artificial Intelligence and Data Science graduate with hands-on experience in financial operations at "
        "State Bank of India Koyambedu, voice processes at Zealous Services Ambattur and LeadPro Business Services "
        "Maduravoyal, and automation systems at A Generative Slice. Focused on building reliable software workflows, "
        "handling client communication, and solving operational challenges."
    )
    for line in wrap_text(summary, 9.5, pdf.content_width):
        pdf.text(pdf.left, pdf.y, line, font="F1", size=9.5, color=(0.20, 0.25, 0.33))
        pdf.y -= 13
    pdf.y -= 4

    # ==========================================
    # PROFESSIONAL EXPERIENCE
    # ==========================================
    pdf.section_header("PROFESSIONAL EXPERIENCE", "Career Record")

    roles = [
        {
            "title": "Founder and Lead Systems Architect",
            "company": "A Generative Slice, Chennai",
            "dates": "2024 \u2014 Present",
            "is_current": True,
            "bullets": [
                "Architected automated email triage systems for international client communication.",
                "Implemented OCR invoice extraction pipelines and internal ERP workflows.",
                "Delivered custom software automation solutions for business clients."
            ]
        },
        {
            "title": "Financial Operations Specialist",
            "company": "State Bank of India, Koyambedu",
            "dates": "2022 \u2014 2023",
            "is_current": False,
            "bullets": [
                "Managed customer documentation, account verification, and KYC compliance.",
                "Assisted clients with banking inquiries, billing questions, and dispute mitigation.",
                "Maintained high documentation accuracy and professional customer service standards."
            ]
        },
        {
            "title": "Voice Process Specialist",
            "company": "Zealous Services, Ambattur",
            "dates": "2022 \u00b7 3 Months",
            "is_current": False,
            "bullets": [
                "Handled US night shift calls verifying insurance coverage with US carriers.",
                "Reviewed policy declarations to confirm active coverage prior to loan disbursement.",
                "Maintained high verification accuracy following compliance guidelines."
            ]
        },
        {
            "title": "Telecalling and Collections Specialist",
            "company": "LeadPro, Maduravoyal",
            "dates": "2021 \u2014 2022 \u00b7 6 Months",
            "is_current": False,
            "bullets": [
                "Handled customer telecalling in Hindi and Tamil for Kotak Mahindra Bank accounts.",
                "Assisted customers with structured payment schedules and resolved billing questions.",
                "Consistently met monthly collection targets adhering to ethical guidelines."
            ]
        },
        {
            "title": "Creative Designer",
            "company": "A Graphic Slice, Chennai",
            "dates": "2020 \u2014 2024",
            "is_current": False,
            "bullets": [
                "Designed brand assets, executive presentations, and 3D visual models."
            ]
        }
    ]

    for role in roles:
        # Title and Company formatted seamlessly with zero awkward gaps
        pdf.rich_line(pdf.left, pdf.y, [
            (role["title"], "F2", 9.5, (0.04, 0.06, 0.10)),
            ("  \u00b7  " + role["company"], "F1", 9.5, (0.30, 0.35, 0.45))
        ])
        
        # Right-aligned date
        d_color = (1.0, 0.30, 0.0) if role["is_current"] else (0.45, 0.50, 0.60)
        pdf.text_right(pdf.y, role["dates"], font="F2" if role["is_current"] else "F1", size=8.5, color=d_color, bold=role["is_current"])
        pdf.y -= 11.5

        # Bullets
        for b in role["bullets"]:
            pdf.text(pdf.left + 6, pdf.y, "\u2022", font="F2", size=8.5, color=(1.0, 0.30, 0.0))
            pdf.text(pdf.left + 15, pdf.y, b, font="F1", size=9, color=(0.22, 0.27, 0.36))
            pdf.y -= 11.5
        pdf.y -= 3.5
    pdf.y -= 2

    # ==========================================
    # EDUCATION
    # ==========================================
    pdf.section_header("EDUCATION", "Anna University")
    
    # Degree + Distinction seamlessly placed
    pdf.rich_line(pdf.left, pdf.y, [
        ("Bachelor of Technology in Artificial Intelligence and Data Science", "F2", 9.5, (0.04, 0.06, 0.10)),
        ("  \u00b7  ", "F1", 9.5, (0.50, 0.55, 0.65)),
        ("First Class Distinction", "F2", 9, (1.0, 0.30, 0.0))
    ])
    pdf.text_right(pdf.y, "2021 \u2014 2025", font="F1", size=8.5, color=(0.45, 0.50, 0.60))
    pdf.y -= 12

    # Coursework wrapped cleanly so it NEVER goes out of frame
    edu_desc = "Aalim Muhammed Salegh College of Engineering, Anna University, Chennai. Coursework in neural computing, statistical modeling, distributed systems, and practical software design."
    for el in wrap_text(edu_desc, 9, pdf.content_width):
        pdf.text(pdf.left, pdf.y, el, font="F1", size=9, color=(0.30, 0.35, 0.45))
        pdf.y -= 11.5
    pdf.y -= 5

    # ==========================================
    # CORE COMPETENCIES & SKILLS
    # ==========================================
    pdf.section_header("CORE COMPETENCIES & SKILLS", "Capabilities")

    skills = [
        ("Financial Operations: ", "Accounts Receivable, Billing Verification, KYC Compliance, Account Reconciliation, Dispute Resolution."),
        ("Voice & Client Communication: ", "US Night Shift Operations, Carrier Verification, Customer Retention, Telecalling in Hindi and Tamil."),
        ("Intelligent Automation: ", "Intelligent Process Automation, FastMCP, OCR Extraction, REST APIs, Python, SQL, PostgreSQL."),
        ("Languages: ", "English Fluent Professional Voice  \u00b7  Tamil Native  \u00b7  Hindi Working Professional Fluency  \u00b7  Urdu Fluent.")
    ]

    for label, desc in skills:
        full = label + desc
        wrapped = wrap_text(full, 9, pdf.content_width)
        for i, line in enumerate(wrapped):
            if i == 0:
                # First line contains bold label
                l_w = str_w(label, 9, bold=True)
                pdf.text(pdf.left, pdf.y, label, font="F2", size=9, color=(0.04, 0.06, 0.10))
                # Remainder of first line
                rem = line[len(label):]
                pdf.text(pdf.left + l_w, pdf.y, rem, font="F1", size=9, color=(0.28, 0.33, 0.43))
            else:
                # Wrapped overflow lines indented cleanly
                pdf.text(pdf.left + 12, pdf.y, line, font="F1", size=9, color=(0.28, 0.33, 0.43))
            pdf.y -= 11.5
        pdf.y -= 1.5

    # ==========================================
    # FOOTER
    # ==========================================
    pdf.y = 38 # 38pt from bottom (clean margin)
    pdf.set_stroke_color(0.85, 0.88, 0.92)
    pdf.draw_line(pdf.left, pdf.y + 10, pdf.right, pdf.y + 10, width=0.75)
    pdf.text(pdf.left, pdf.y, "Curriculum Vitae  \u00b7  Mohammed Hussain", font="F1", size=8, color=(0.50, 0.55, 0.65))
    pdf.text_right(pdf.y, "Chennai, Tamil Nadu, India", font="F1", size=8, color=(0.50, 0.55, 0.65))

    os.makedirs("public", exist_ok=True)
    pdf.build("public/mohammed-hussain-cv.pdf")
    print(f"Successfully generated public/mohammed-hussain-cv.pdf (Final y: {pdf.y:.1f})")

if __name__ == "__main__":
    generate()
