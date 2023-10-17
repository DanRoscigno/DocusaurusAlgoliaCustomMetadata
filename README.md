# Docs

Live URL: https://danroscigno.github.io/doc/docs/introduction/StarRocks_intro

## Building with GitHub actions

There are test build and deploy to GitHub Pages jobs in `.github/workflows/`.
These pull the English docs and the Chinese docs, check out the versions,
and put the Markdown files into place for Docusaurus.

Before generating the HTML some modifications are made to the Markdown files:

- removing the TOC.md and README.md files
- replacing the StarRocks_intro pages with ones that use Docusaurus styling
- adding frontmatter to all of the Markdown to specify which sidebar (English or Chinese) is to be used

Once we go into production the three changes above can be removed as we will:

- remove the TOC.md files as they are not used, and leave the README out of the nav
- replace the current intro pages with the new ones that work with Docusaurus
- add the frontmatter to the Markdown files in thir repos

## Building local

### Node version

Docusaurus v3 requires Node 18

I use 8GB for Node, in Netlify I set the build command in the file `netlify.toml` 
and locally I use:

```shell
NODE_OPTIONS=--max_old_space_size=8192
```

### Install Docusaurus

```shell
yarn install
```

### Build script

The script `_IGNORE/testbuild`

- pulls the Chinese and English docs for versions 3.1, 3.0, and 2.5 
- Removes the intro page while we update it to use built-in nav components
- Removes the TOC while we migrate those to JSON format
- Runs an MDX checker
- Builds the site

```shell
./_IGNORE/testbuild`
```

Note: The dir is named `_IGNORE` because I had some markdown files that I needed to move to a dir that Docusaurus would leave out of the nav; it does not add files to the nav from dirs that start with an underscore.

## Serve the pages locally

```shell
yarn serve
```
