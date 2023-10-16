#!/bin/bash

header="chinese-header.txt"
cat > "$header" << EOF
---
displayed_sidebar: "Chinese31"
---

EOF

find i18n/zh/docusaurus-plugin-content-docs -type f -name "*\.md*" | while read file; do
  cat - "$file" < "$header" > "$file.new" && mv "$file.new" "$file"
done
