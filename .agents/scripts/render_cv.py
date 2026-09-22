from pathlib import Path

import fitz


source = Path("attached_assets/SpecializedCV_TejasviJain_2026_1790096953971.pdf")
output_dir = Path(".agents/outputs/cv-render")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(source)
for page_number, page in enumerate(document, start=1):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pixmap.save(output_dir / f"page-{page_number}.png")

print(f"Rendered {len(document)} page(s) to {output_dir}")