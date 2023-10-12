#!/bin/bash

header="english-header.txt"
cat > "$header" << EOF
---
displayed_sidebar: "documentation"
---

EOF

find versioned_docs -type f -name "*\.md*" | while read file; do
  cat - "$file" < "$header" > "$file.new" && mv "$file.new" "$file"
done
