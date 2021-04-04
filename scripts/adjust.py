#!/usr/bin/env python

import re
from sys import argv
from pathlib import Path

def is_ok(line) -> bool:
    return True

txt = Path(argv[1]).read_text()
trimmed = txt.partition('<body>')[2].partition('</body>')[0]

trimmed = """---

---
""" + trimmed

trimmed = trimmed.replace(".html", "/")
trimmed = trimmed.replace("href=\"", "href=\"/")
trimmed = trimmed.replace("index/", "/docs")

Path(argv[1]).write_text(trimmed)
