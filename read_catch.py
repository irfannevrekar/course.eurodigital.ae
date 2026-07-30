import sys

filepath = r"c:\Users\ADMIN\Desktop\Landing page\index.html"

with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "catch" in line:
        print(f"Line {i+1}: {repr(line)}")
