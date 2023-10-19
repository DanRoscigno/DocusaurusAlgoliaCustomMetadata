#!/bin/bash

echo "cleanup before running yarn build"
find . -type f -name TOC.md | xargs rm
rm i18n/zh/docusaurus-plugin-content-docs/*/README.md
rm versioned_docs/version-*/README.md

echo "replacing StarRocks intro page\n\n"
find versioned_docs -type f -name "StarRocks_intro.md"  -print0 -exec cp _IGNORE/_StarRocks_intro_English.mdx "{}" \;
find i18n/zh/docusaurus-plugin-content-docs -type f -name "StarRocks_intro.md"  -print0 -exec cp _IGNORE/_StarRocks_intro_Chinese.mdx "{}" \;

echo "adding index pages"
find versioned_docs -type d -name quick_start -print0 -exec cp _IGNORE/index_pages/English/quick_start.mdx "{}" \;
find i18n/zh/docusaurus-plugin-content-docs -type d -name quick_start -print0 -exec cp _IGNORE/index_pages/Chinese/quick_start.mdx "{}" \;

echo "\nadd placeholders for pages in Chinese docs but not in English docs"
_IGNORE/add_missing_english_files.sh

echo "\nadding frontmatter for sidebar language"
_IGNORE/add_chinese_sidebar.sh
_IGNORE/add_english_sidebar.sh

echo "verifying Markdown"
npx docusaurus-mdx-checker -c versioned_docs
npx docusaurus-mdx-checker -c docs
npx docusaurus-mdx-checker -c i18n
