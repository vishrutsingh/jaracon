#!/usr/bin/env python3
"""Generate JARACON EPC Projects Quotation PDF — Landscape A4."""

from fpdf import FPDF

# ─── Colors (website palette) ───
BG = (243, 243, 244)
SURFACE = (217, 197, 178)
DARK = (20, 17, 15)
MID = (52, 49, 45)
MUTED = (126, 127, 131)
WHITE = (255, 255, 255)
BORDER = (220, 220, 222)

# Landscape A4: 297 x 210 mm
PW = 297
PH = 210
M = 25  # margin
CW = PW - 2 * M  # content width = 247


class Q(FPDF):
    def __init__(self):
        super().__init__('L', 'mm', 'A4')
        self.set_auto_page_break(auto=False)
        self.set_margins(M, M, M)

    def bg(self):
        self.set_fill_color(*BG)
        self.rect(0, 0, PW, PH, 'F')

    def bar(self, title, y=None):
        if y: self.set_y(y)
        y0 = self.get_y()
        self.set_fill_color(*MID)
        self.rect(M, y0, 1.5, 8, 'F')
        self.set_xy(M + 5, y0)
        self.set_font('Helvetica', 'B', 14)
        self.set_text_color(*DARK)
        self.cell(0, 8, title, new_x='LMARGIN', new_y='NEXT')
        self.ln(5)

    def chk(self, text):
        y0 = self.get_y()
        self.set_xy(M + 2, y0 + 1)
        self.set_font('Helvetica', 'B', 8)
        self.set_text_color(*MID)
        self.cell(4, 4, '>', align='C')
        self.set_xy(M + 9, y0)
        self.set_font('Helvetica', '', 9)
        self.set_text_color(*MID)
        self.multi_cell(CW / 2 - 20, 4.5, text)
        self.ln(1.5)

    def lbl(self, text, x=None, y=None):
        if x is not None and y is not None:
            self.set_xy(x, y)
        self.set_font('Helvetica', '', 7)
        self.set_text_color(*MUTED)
        self.cell(0, 4, text, new_x='LMARGIN', new_y='NEXT')

    def body(self, text, bold_prefix=None, w=None):
        if w is None: w = CW / 2 - 10
        self.set_font('Helvetica', '', 9)
        self.set_text_color(*MID)
        if bold_prefix:
            self.set_font('Helvetica', 'B', 9)
            self.set_text_color(*DARK)
            self.write(4.5, bold_prefix + ' ')
            self.set_font('Helvetica', '', 9)
            self.set_text_color(*MID)
        self.multi_cell(w, 4.5, text)

    def divider(self):
        self.set_draw_color(*BORDER)
        self.line(M, PH - 15, PW - M, PH - 15)


pdf = Q()
RX = M + CW / 2 + 15  # right column x

# ═══ PAGE 1: COVER ═══
pdf.add_page()
pdf.bg()
pdf.set_fill_color(*MID)
pdf.rect(0, 0, 3, PH, 'F')

pdf.set_xy(M, 40)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(0, 5, 'O F F I C I A L   W E B   P R O P O S A L')

pdf.set_xy(M, 55)
pdf.set_font('Helvetica', 'B', 48)
pdf.set_text_color(*DARK)
pdf.cell(0, 20, 'JARACON', new_x='LMARGIN', new_y='NEXT')
pdf.set_x(M)
pdf.cell(0, 20, 'EPC PROJECTS', new_x='LMARGIN', new_y='NEXT')

pdf.set_xy(M, 105)
pdf.set_font('Helvetica', '', 11)
pdf.set_text_color(*MID)
pdf.multi_cell(180, 5.5, 'Accelerated Digital Infrastructure & Modern Enterprise Platform\nfor Doha, Qatar.')

pdf.set_draw_color(*BORDER)
pdf.line(M, 130, PW - M, 130)

pdf.set_xy(M, 138)
pdf.lbl('P R E P A R E D   F O R', M, 138)
pdf.set_xy(M, 145)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(*DARK)
pdf.cell(200, 5, 'JARACON EPC PROJECTS TRADING CONTRACTING & SERVICES')
pdf.set_xy(M, 152)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(80, 4, 'DOHA, QATAR')

pdf.lbl('C O N T A C T', 160, 138)
pdf.set_xy(160, 145)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(*DARK)
pdf.cell(80, 5, 'info@jaraconepc.com')
pdf.set_xy(160, 152)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(*DARK)
pdf.cell(80, 5, '+974 5589 0643')

# ═══ PAGE 2: 7-PAGE ARCHITECTURE ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('7-PAGE MODERN ARCHITECTURE')

y_start = pdf.get_y() + 4
col_w = 58
row_h = 30
gap = 5

pages = [
    ('01', 'Home: High-Impact Hero & Cinematic Visuals'),
    ('02', 'About: Legacy, Vision & Qatar Mission'),
    ('03', 'Services: Full EPC Technical Spectrum'),
    ('04', 'Projects: Interactive Industrial Portfolio'),
    ('05', 'Quality: QA/QC Standards & ISO Listing'),
    ('06', 'Certifications: Industry Standards & Compliance'),
    ('07', 'Contact: Enterprise Inquiry Gateway'),
]

for i, (num, title) in enumerate(pages):
    col = i % 4
    row = i // 4
    x = M + col * (col_w + gap)
    y = y_start + row * (row_h + gap)
    is_last = num == '07'
    pdf.set_fill_color(*(MID if is_last else WHITE))
    pdf.set_draw_color(*BORDER)
    pdf.rect(x, y, col_w, row_h, 'DF')
    pdf.set_xy(x + 5, y + 5)
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_text_color(*(WHITE if is_last else MUTED))
    pdf.cell(10, 4, num)
    pdf.set_xy(x + 5, y + 14)
    pdf.set_font('Helvetica', 'B', 8.5)
    pdf.set_text_color(*(WHITE if is_last else DARK))
    pdf.multi_cell(col_w - 10, 4, title)

# ═══ PAGE 3: COMPLETE PACKAGE ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('COMPLETE PACKAGE: SITE + LOGO + POLISH')

pdf.set_x(M)
pdf.lbl('ALL-INCLUSIVE BUILD')
pdf.ln(2)
pdf.set_x(M)
pdf.body('Full 7-page enterprise site deployment, professional logo design, and premium UX polish - delivered as a single cohesive package.', bold_prefix='EVERYTHING IN ONE.')
pdf.ln(6)
pdf.set_x(M)
pdf.lbl('INCLUDED IN PACKAGE')
pdf.ln(2)
for item in [
    'Core deployment of the 7-page enterprise site.',
    'Live Inquiry system for business lead generation.',
    'Modern architecture optimized for desktop precision.',
    'Professional Logo Design with multiple variations.',
    'Color palette, typography, and visual language definition.',
    'Custom motion effects & premium UX polish.',
    'Contact Email & WhatsApp integration for direct communication.',
    'Localized Qatar Search Visibility (SEO).',
]:
    pdf.chk(item)

pdf.lbl('TOTAL INVESTMENT', RX, M + 14)
pdf.set_xy(RX, M + 22)
pdf.set_font('Helvetica', 'B', 36)
pdf.set_text_color(*DARK)
pdf.cell(CW / 2 - 15, 16, 'Rs.35,000', align='R')
pdf.set_xy(RX, M + 42)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(CW / 2 - 15, 4, 'SITE + LOGO + POLISH', align='R')

# ═══ PAGE 4: FUTURE PROJECT PAGES ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('FUTURE PROJECT PAGES')

pdf.set_x(M)
pdf.lbl('SCALABLE PORTFOLIO')
pdf.ln(2)
pdf.set_x(M)
pdf.body('each completed project can have its own dedicated page with a unique URL slug - showcasing project details, gallery, scope of work, and technical specifications.', bold_prefix='As Jaracon EPC Projects wins new contracts,')
pdf.ln(6)
pdf.set_x(M)
pdf.lbl('EACH PROJECT PAGE INCLUDES')
pdf.ln(2)
for item in [
    'Dedicated URL slug (e.g. /projects/al-wakra-stadium).',
    'Project gallery with high-resolution imagery.',
    'Scope of work, technical details & specifications.',
    'Consistent design matching the main site aesthetic.',
]:
    pdf.chk(item)

pdf.ln(4)
pdf.set_x(M)
pdf.lbl('COMPLIMENTARY ADDITIONS')
pdf.ln(2)
pdf.chk('First 2 project page additions are complimentary within 6 months of launch.')
pdf.chk('Subsequent project pages billed at Rs.1,000 each.')

pdf.ln(4)
pdf.set_x(M)
pdf.lbl('ADDITIONAL')
pdf.ln(2)
pdf.set_x(M)
pdf.chk('CMS integration for self-managed project pages - can be discussed later.')

pdf.lbl('PER PROJECT PAGE', RX, M + 14)
pdf.set_xy(RX, M + 22)
pdf.set_font('Helvetica', 'B', 36)
pdf.set_text_color(*DARK)
pdf.cell(CW / 2 - 15, 16, '+Rs.1,000', align='R')
pdf.set_xy(RX, M + 42)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(CW / 2 - 15, 4, 'PER ADDITIONAL PROJECT', align='R')

# Free additions badge
pdf.set_fill_color(*SURFACE)
pdf.rect(RX + 20, M + 52, 75, 18, 'F')
pdf.set_xy(RX + 24, M + 55)
pdf.set_font('Helvetica', 'B', 8)
pdf.set_text_color(*DARK)
pdf.cell(67, 4, '2 FREE ADDITIONS', align='R')
pdf.set_xy(RX + 24, M + 61)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MID)
pdf.cell(67, 4, 'Within 6 months of launch', align='R')

# ═══ PAGE 5: ENTERPRISE INQUIRY GATEWAY ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('ENTERPRISE INQUIRY GATEWAY')

boxy = pdf.get_y()
pdf.set_fill_color(*SURFACE)
pdf.rect(M, boxy, CW / 2 - 10, 55, 'F')

pdf.set_xy(M + 5, boxy + 5)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MID)
pdf.cell(70, 4, 'DIRECT CONNECT')

pdf.set_xy(M + 5, boxy + 14)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(*DARK)
pdf.cell(100, 5, 'info@jaraconepc.com')

pdf.set_xy(M + 5, boxy + 22)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(*DARK)
pdf.cell(100, 5, '+974 5589 0643')

pdf.set_xy(M + 5, boxy + 32)
pdf.set_font('Helvetica', '', 8.5)
pdf.set_text_color(*MID)
pdf.multi_cell(CW / 2 - 25, 4.5, 'Integrated corporate communication hub that routes high-value inquiries directly to your executive team, filtered by project type.')

features = [
    ('Direct Access:', 'Seamless professional engagement.'),
    ('Smart Responders:', 'Formalized instant confirmation.'),
    ('Lead Tracking:', 'Secure database for contract tenders.'),
    ('Data Validation:', 'High-quality B2B inquiry capture.'),
]

pdf.set_xy(RX, boxy)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(80, 4, 'Integrated Business Features:')

fy = boxy + 10
for label, desc in features:
    pdf.set_xy(RX, fy)
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_text_color(*MID)
    pdf.cell(4, 4, '>')
    pdf.set_xy(RX + 6, fy)
    pdf.set_font('Helvetica', 'B', 9)
    pdf.set_text_color(*DARK)
    pdf.write(4.5, label + ' ')
    pdf.set_font('Helvetica', '', 9)
    pdf.set_text_color(*MID)
    pdf.write(4.5, desc)
    fy += 12
    pdf.set_draw_color(*BORDER)
    pdf.line(RX, fy - 3, PW - M, fy - 3)

# ═══ PAGE 6: TECHNICAL PERFORMANCE ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('TECHNICAL PERFORMANCE')

boxy = pdf.get_y()
pdf.set_draw_color(*BORDER)
pdf.rect(M, boxy, CW / 2 - 10, 60, 'D')

pdf.set_xy(M, boxy + 12)
pdf.set_font('Helvetica', 'B', 52)
pdf.set_text_color(*DARK)
pdf.cell(CW / 2 - 10, 20, '1.1', align='C')
pdf.set_xy(M, boxy + 32)
pdf.set_font('Helvetica', 'B', 20)
pdf.set_text_color(*SURFACE)
pdf.cell(CW / 2 - 10, 10, 's', align='C')
pdf.set_xy(M, boxy + 48)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(CW / 2 - 10, 4, 'I N I T I A L   L O A D   T I M E', align='C')

pdf.set_xy(RX, boxy)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(80, 4, 'CORPORATE PERFORMANCE')

pdf.set_xy(RX, boxy + 10)
pdf.set_font('Helvetica', '', 9)
pdf.set_text_color(*MID)
pdf.multi_cell(CW / 2 - 15, 4.5, 'The Jaracon EPC Projects platform is built with a "Desktop-First" precision mindset, mirroring the clean, modern aesthetics of elite global firms.')

pdf.set_xy(RX, pdf.get_y() + 4)
pdf.multi_cell(CW / 2 - 15, 4.5, 'This ensures that government officials and project bidders experience zero friction when reviewing your extensive capabilities gallery.')

# ═══ PAGE 7: INVESTMENT SUMMARY + ROADMAP ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('PROJECT INVESTMENT SUMMARY')

table_y = pdf.get_y()
col_widths = [55, 90, 40, 62]
headers = ['ITEM', 'OBJECTIVE', 'TIMELINE', 'INVESTMENT']
rows = [
    ['COMPLETE PACKAGE', '7-Page Site + Logo Design + Polish', '3 Weeks', 'Rs.35,000'],
    ['PROJECT PAGES', 'Dedicated page per future project (slug)*', 'As needed', 'Rs.1,000 / page*'],
]
total = ['TOTAL', 'Full Jaracon EPC Modern Corporate Ecosystem', '3 Weeks', 'Rs.35,000 INR']

x = M
pdf.set_fill_color(*MID)
for i, h in enumerate(headers):
    pdf.set_xy(x, table_y)
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_text_color(*WHITE)
    pdf.cell(col_widths[i], 10, h, fill=True)
    x += col_widths[i]

for ri, row in enumerate(rows):
    ry = table_y + 10 + ri * 10
    x = M
    pdf.set_draw_color(*BORDER)
    pdf.line(M, ry, PW - M, ry)
    for ci, cell in enumerate(row):
        pdf.set_xy(x, ry)
        is_bold = ci == 0 or ci == 3
        pdf.set_font('Helvetica', 'B' if is_bold else '', 9)
        pdf.set_text_color(*DARK if is_bold else MID)
        pdf.cell(col_widths[ci], 10, cell)
        x += col_widths[ci]

ty = table_y + 10 + len(rows) * 10
pdf.set_draw_color(*MID)
pdf.set_line_width(0.5)
pdf.line(M, ty, PW - M, ty)
pdf.set_line_width(0.2)
x = M
for ci, cell in enumerate(total):
    pdf.set_xy(x, ty)
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(*DARK)
    pdf.cell(col_widths[ci], 10, cell)
    x += col_widths[ci]

pdf.set_xy(M, ty + 14)
pdf.set_font('Helvetica', 'I', 7)
pdf.set_text_color(*MUTED)
pdf.cell(CW, 4, '*First 2 project page additions are complimentary within 6 months of launch.')
pdf.set_xy(M, ty + 20)
pdf.set_font('Helvetica', '', 7)
pdf.set_text_color(*MUTED)
pdf.cell(CW / 2, 4, 'Jaracon EPC Projects Trading Contracting & Services | Doha, Qatar')
pdf.cell(CW / 2, 4, 'info@jaraconepc.com | +974 5589 0643', align='R')

# Roadmap
pdf.set_y(ty + 34)
pdf.bar('STRATEGIC EXECUTION ROADMAP')

weeks = [
    ('01', 'WEEK 1', None, 'Logo Design, Asset Extraction & Sitemap Layout.'),
    ('02', 'WEEK 2', None, 'Live Deployment. Functional corporate site launch.'),
    ('03', 'WEEK 3', 'POLISH', 'Motion design, SEO, and premium UX refinement.'),
]

wy = pdf.get_y() + 2
circle_r = 8
gap_x = CW / 3

for i, (num, title, sub, desc) in enumerate(weeks):
    cx = M + gap_x / 2 + i * gap_x
    cy = wy + circle_r

    pdf.set_fill_color(*MID)
    pdf.set_draw_color(*MID)
    pdf.ellipse(cx - circle_r, cy - circle_r, circle_r * 2, circle_r * 2, 'F')

    pdf.set_xy(cx - circle_r, cy - 3)
    pdf.set_font('Helvetica', 'B', 9)
    pdf.set_text_color(*WHITE)
    pdf.cell(circle_r * 2, 6, num, align='C')

    pdf.set_xy(cx - 25, cy + circle_r + 3)
    pdf.set_font('Helvetica', 'B', 8)
    pdf.set_text_color(*DARK)
    pdf.cell(50, 4, title, align='C')

    if sub:
        pdf.set_xy(cx - 25, cy + circle_r + 7)
        pdf.set_font('Helvetica', 'B', 6.5)
        pdf.set_text_color(*MID)
        pdf.cell(50, 4, sub, align='C')

    desc_y = cy + circle_r + (11 if sub else 7)
    pdf.set_xy(cx - 25, desc_y)
    pdf.set_font('Helvetica', '', 7)
    pdf.set_text_color(*MUTED)
    pdf.multi_cell(50, 3.5, desc, align='C')

pdf.set_xy(M, PH - 20)
pdf.set_font('Helvetica', 'I', 7)
pdf.set_text_color(*MUTED)
pdf.cell(CW, 4, '*First 2 project pages are complimentary within 6 months of launch. Subsequent pages billed separately.')

# ═══ PAGE 8: TERMS & CONDITIONS ═══
pdf.add_page()
pdf.bg()
pdf.set_y(M)
pdf.bar('TERMS & CONDITIONS')

terms = [
    ('SCOPE & TIMING', [
        ('1.1 Deployment:', 'The 3-week delivery is contingent upon receipt of all brand assets within 48 hours of project kickoff.'),
        ('1.2 Revisions:', 'Two rounds of refinements are included. Additional changes may affect final handover dates.'),
        ('1.3 Project Pages:', 'First 2 project page additions are complimentary within 6 months of launch. Subsequent pages are billed at Rs.1,000 each and delivered within 3 business days of receiving content.'),
    ]),
    ('PAYMENTS', [
        ('2.1 Schedule:', '50% Kickoff Deposit | 50% Final Delivery & Handover.'),
        ('2.2 Retention:', 'Payments are non-refundable once work has been initiated.'),
        ('2.3 Project Pages:', 'Billed individually upon delivery.'),
    ]),
    ('OWNERSHIP', [
        ('3.1 IP Rights:', 'Jaracon EPC Projects retains 100% intellectual property rights to the final code and design upon full payment.'),
        ('3.2 Support:', '30 days of post-launch technical support is included for bug fixes and adjustments.'),
    ]),
    ('INFRASTRUCTURE', [
        ('4.1 Hosting:', "Domain/Hosting costs are the client's responsibility. We assist in Doha-localized server setup."),
        ('4.2 Security:', 'Systems are built to align with modern international B2B data privacy standards.'),
    ]),
]

base_y = pdf.get_y()
positions = [(M, base_y), (RX, base_y), (M, base_y + 55), (RX, base_y + 55)]

for i, (section_title, items) in enumerate(terms):
    x, y = positions[i]
    pdf.set_xy(x, y)
    pdf.set_font('Helvetica', '', 7)
    pdf.set_text_color(*MUTED)
    pdf.cell(CW / 2 - 20, 4, section_title)

    iy = y + 8
    for label, desc in items:
        pdf.set_xy(x, iy)
        pdf.set_font('Helvetica', 'B', 9)
        pdf.set_text_color(*DARK)
        pdf.write(4.5, label + ' ')
        pdf.set_font('Helvetica', '', 9)
        pdf.set_text_color(*MID)
        pdf.multi_cell(CW / 2 - 25, 4.5, desc)
        iy = pdf.get_y() + 4

pdf.set_draw_color(*BORDER)
pdf.line(M, PH - 25, PW - M, PH - 25)
pdf.set_xy(M, PH - 21)
pdf.set_font('Helvetica', 'B', 11)
pdf.set_text_color(*DARK)
pdf.cell(CW / 2, 5, "LET'S BUILD THE FUTURE.")
pdf.set_font('Helvetica', '', 9)
pdf.set_text_color(*MID)
pdf.cell(CW / 2, 5, 'info@jaraconepc.com | +974 5589 0643', align='R')

# ─── Output ───
output_path = '/home/vishrut/Downloads/Jaracon_Quotation.pdf'
pdf.output(output_path)
print(f'PDF generated: {output_path}')
