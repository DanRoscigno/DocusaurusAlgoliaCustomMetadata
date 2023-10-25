#!/bin/bash

placeholder="english-missing.txt"
cat > "$placeholder" << EOF
# REMOVE

This document only exists in the Chinese docs
EOF

cp english-missing.txt versioned_docs/version-3.1/deployment/deploy_shared_data.md

rm english-missing.txt

