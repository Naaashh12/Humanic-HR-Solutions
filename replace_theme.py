import os
import re

directory = '/Users/nashratjahan/Desktop/GP'

replacements = [
    (r'brand-red-dark', r'brand-gold-dark'),
    (r'brand-red-light', r'brand-gold-light'),
    (r'brand-red-neon', r'brand-gold-neon'),
    (r'brand-red-ultra', r'brand-gold-ultra'),
    (r'red-dark', r'gold-dark'),
    (r'red-light', r'gold-light'),
    (r'red-neon', r'gold-neon'),
    (r'red-ultra', r'gold-ultra'),
    (r'glow-red', r'glow-gold'),
    (r'text-gradient-red', r'text-gradient-gold'),
    (r'text-glow-red', r'text-glow-gold'),
    (r'#8c0415', r'#997a00'),
    (r'#bf0614', r'#cca300'),
    (r'#ff1a2e', r'#ffd700'),
    (r'#5c0010', r'#665200'),
    (r'#000000', r'#020b14'),
    (r'#0a0a0a', r'#061727'),
    (r'rgba\(140,\s*4,\s*21', r'rgba(153, 122, 0'),
    (r'rgba\(191,\s*6,\s*20', r'rgba(204, 163, 0'),
    (r'rgba\(255,\s*26,\s*46', r'rgba(255, 215, 0'),
]

for root, dirs, files in os.walk(directory):
    if 'node_modules' in root or '.git' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.js', '.md', '.json', '.txt')):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = re.sub(old, new, new_content, flags=re.IGNORECASE)
                    
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
            except Exception as e:
                pass

print("Done")
