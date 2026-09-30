#!/usr/bin/env python3
"""
Generates an executive, single-page, standards-compliant PDF 1.4 for Mohammed Hussain's CV.
No external dependencies (pure Python).
"""

import sys
import os

class SimplePDF:
    def __init__(self, width=612, height=792):
        self.width = width
        self.height = height
        self.objects = []
        self.stream = []
        self.y = height - 42 # Start 42pt from top (15mm)
        self.left = 42       # 42pt from left (15mm)
        self.right = width - 42 # 570pt
        self.content_width = self.right - self.left # 528pt

    def add_raw(self, cmd):
        self.stream.append(cmd)

    def set_color(self, r, g, b):
        self.stream.append(f"{r:.3f} {g:.3f} {b:.3f} rg")

    def set_stroke_color(self, r, g, b):
        self.stream.append(f"{r:.3f} {g:.3f} {b:.3f} RG")

    def draw_line(self, x1, y1, x2, y2, width=1.0):
        self.stream.append(f"{width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def escape_text(self, text):
        return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

    def text(self, x, y, text, font="F1", size=10, color=(0,0,0)):
        self.set_color(*color)
        escaped = self.escape_text(text)
        self.stream.append(f"BT /{font} {size} Tf {x:.2f} {y:.2f} Td ({escaped}) Tj ET")

    def text_right(self, y, text, font="F1", size=10, color=(0,0,0), approx_char_w=5.5):
        # approximate width
        w = len(text) * approx_char_w
        x = self.right - w
        self.text(x, y, text, font=font, size=size, color=color)

    def section_header(self, title, tag=""):
        self.y -= 14
        # Title
        self.text(self.left, self.y, title, font="F2", size=8.5, color=(0.04, 0.06, 0.10))
        if tag:
            self.text_right(self.y, tag, font="F2", size=7.5, color=(1.0, 0.30, 0.0), approx_char_w=4.8)
        self.y -= 4
        # Divider line
        self.set_stroke_color(0.85, 0.88, 0.92)
        self.draw_line(self.left, self.y, self.right, self.y, width=0.75)
        self.y -= 9

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

        # 4: F1 = Helvetica
        add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
        # 5: F2 = Helvetica-Bold
        add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
        # 6: F3 = Helvetica-Oblique
        add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>")
        # 7: Contents
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
    pdf = SimplePDF(width=612, height=792) # Letter size

    # HEADER
    # Name
    pdf.text(pdf.left, pdf.y, "MOHAMMED HUSSAIN", font="F2", size=20, color=(0.04, 0.06, 0.10))
    # Right-aligned tag
    pdf.text_right(pdf.y + 4, "AI & DATA SCIENCE ENGINEER", font="F2", size=9, color=(1.0, 0.30, 0.0), approx_char_w=5.2)
    pdf.y -= 13

    # Subtitle
    pdf.text(pdf.left, pdf.y, "Enterprise Operations and Systems Architecture", font="F1", size=9, color=(0.30, 0.35, 0.45))
    pdf.text_right(pdf.y, "Executive Curriculum Vitae", font="F1", size=8, color=(0.45, 0.50, 0.60), approx_char_w=4.8)
    pdf.y -= 11

    # Contact line
    contact = "Chennai, Tamil Nadu, India   |   +91 91763 30206   |   s.m.d.hussainjoe@gmail.com   |   linkedin.com/in/smdhussain06   |   github.com/smdhussain06"
    pdf.text(pdf.left, pdf.y, contact, font="F1", size=7.5, color=(0.20, 0.25, 0.35))
    pdf.y -= 5

    # Header border
    pdf.set_stroke_color(0.04, 0.06, 0.10)
    pdf.draw_line(pdf.left, pdf.y, pdf.right, pdf.y, width=1.5)
    pdf.y -= 4

    # PROFILE
    pdf.section_header("PROFILE", "Executive Summary")
    summary = "Artificial Intelligence and Data Science graduate with hands-on experience in financial operations at State Bank of India Koyambedu, voice processes at Zealous Services Ambattur and LeadPro Business Services Maduravoyal, and automation systems at A Generative Slice. Focused on building reliable software workflows, handling client communication, and solving operational challenges."
    # Wrap summary into 3 lines
    lines = [
        "Artificial Intelligence and Data Science graduate with hands-on experience in financial operations at State Bank of India Koyambedu,",
        "voice processes at Zealous Services Ambattur and LeadPro Business Services Maduravoyal, and automation systems at A Generative Slice.",
        "Focused on building reliable software workflows, handling client communication, and solving operational challenges."
    ]
    for line in lines:
        pdf.text(pdf.left, pdf.y, line, font="F1", size=8.5, color=(0.20, 0.25, 0.35))
        pdf.y -= 10.5

    # PROFESSIONAL EXPERIENCE
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
        # Title and company
        title_str = role["title"] + "  \u00b7  "
        pdf.text(pdf.left, pdf.y, title_str, font="F2", size=9, color=(0.04, 0.06, 0.10))
        # approximate title offset
        t_w = len(title_str) * 5.2
        pdf.text(pdf.left + t_w, pdf.y, role["company"], font="F1", size=9, color=(0.30, 0.35, 0.45))
        # Date right-aligned
        d_color = (1.0, 0.30, 0.0) if role["is_current"] else (0.45, 0.50, 0.60)
        pdf.text_right(pdf.y, role["dates"], font="F2" if role["is_current"] else "F1", size=8, color=d_color, approx_char_w=4.8)
        pdf.y -= 9.5

        # Bullets
        for b in role["bullets"]:
            pdf.text(pdf.left + 8, pdf.y, "\u2022", font="F2", size=8, color=(1.0, 0.30, 0.0))
            pdf.text(pdf.left + 16, pdf.y, b, font="F1", size=8, color=(0.25, 0.30, 0.40))
            pdf.y -= 9.5
        pdf.y -= 2.5

    # EDUCATION
    pdf.section_header("EDUCATION", "Anna University")
    deg = "Bachelor of Technology in Artificial Intelligence and Data Science  \u00b7  "
    pdf.text(pdf.left, pdf.y, deg, font="F2", size=9, color=(0.04, 0.06, 0.10))
    d_w = len(deg) * 4.9
    pdf.text(pdf.left + d_w, pdf.y, "First Class Distinction", font="F2", size=8.5, color=(1.0, 0.30, 0.0))
    pdf.text_right(pdf.y, "2021 \u2014 2025", font="F1", size=8, color=(0.45, 0.50, 0.60), approx_char_w=4.8)
    pdf.y -= 10
    uni_desc = "Aalim Muhammed Salegh College of Engineering, Anna University, Chennai. Coursework in neural computing, statistical modeling, distributed systems, and practical software design."
    pdf.text(pdf.left, pdf.y, uni_desc, font="F1", size=8, color=(0.30, 0.35, 0.45))
    pdf.y -= 6

    # CORE COMPETENCIES & SKILLS
    pdf.section_header("CORE COMPETENCIES & SKILLS", "Capabilities")

    skills = [
        ("Financial Operations:", "Accounts Receivable, Billing Verification, KYC Compliance, Account Reconciliation, Dispute Resolution."),
        ("Voice & Client Communication:", "US Night Shift Operations, Carrier Verification, Customer Retention, Telecalling in Hindi and Tamil."),
        ("Intelligent Automation:", "Intelligent Process Automation, FastMCP, OCR Extraction, REST APIs, Python, SQL, PostgreSQL."),
        ("Languages:", "English Fluent Professional Voice  \u00b7  Tamil Native  \u00b7  Hindi Working Professional Fluency  \u00b7  Urdu Fluent.")
    ]

    for label, desc in skills:
        pdf.text(pdf.left, pdf.y, label, font="F2", size=8, color=(0.04, 0.06, 0.10))
        l_w = len(label) * 4.8
        pdf.text(pdf.left + l_w + 4, pdf.y, desc, font="F1", size=8, color=(0.30, 0.35, 0.45))
        pdf.y -= 10

    # FOOTER
    pdf.y = 28 # 28pt from bottom
    pdf.set_stroke_color(0.85, 0.88, 0.92)
    pdf.draw_line(pdf.left, pdf.y + 10, pdf.right, pdf.y + 10, width=0.75)
    pdf.text(pdf.left, pdf.y, "Curriculum Vitae  \u00b7  Mohammed Hussain", font="F1", size=7.5, color=(0.50, 0.55, 0.65))
    pdf.text_right(pdf.y, "Chennai, Tamil Nadu, India", font="F1", size=7.5, color=(0.50, 0.55, 0.65), approx_char_w=4.5)

    os.makedirs("public", exist_ok=True)
    pdf.build("public/mohammed-hussain-cv.pdf")
    print("Successfully built public/mohammed-hussain-cv.pdf")

if __name__ == "__main__":
    generate()
