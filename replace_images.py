import os
import glob

mapping = {
    "/assets/images/ai/modern_pharma_lab.png": "/assets/images/pharma_hero_lab.png",
    "/assets/images/ai/hero_slide_1.png": "/assets/images/pharma_hero_lab.png",
    "/assets/images/ai/hero_slide_2.png": "/assets/images/pharma_hero_mfg.png",
    "/assets/images/ai/hero_slide_3.png": "/assets/images/pharma_hero_corporate.png",
    "/assets/images/ai/hero_slide_4.png": "/assets/images/pharma_hero_corporate.png",
    "/assets/images/ai/manufacturing_1785826419695.png": "/assets/images/pharma_hero_mfg.png",
    "/assets/images/ai/global_reach_1785828011652.png": "/assets/images/pharma_hero_corporate.png",
    "/assets/images/ai/corporate_governance.png": "/assets/images/pharma_hero_corporate.png",
    "/assets/images/ai/quality_control_1785826430290.png": "/assets/images/pharma_quality_control.png",
    "/assets/images/ai/csr_sustainability.png": "/assets/images/pharma_hero_lab.png",
    "/assets/images/ai/product_nutra_1785826451390.png": "/assets/images/pharma_product_nutra.png",
    "/assets/images/ai/product_pharma_1785826440640.png": "/assets/images/pharma_product_pharma.png"
}

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    for old, new in mapping.items():
        content = content.replace(old, new)
        
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            replace_in_file(os.path.join(root, file))

for root, _, files in os.walk('components'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            replace_in_file(os.path.join(root, file))

for root, _, files in os.walk('data'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
            replace_in_file(os.path.join(root, file))
