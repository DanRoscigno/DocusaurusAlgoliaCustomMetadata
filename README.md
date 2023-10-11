# Website

## Deploying to GitHub Pages

These docs are deployed at
[https://danroscigno.github.io/doc/](https://danroscigno.github.io/doc/).
In the `.github/workflows/` dir are workflows that build and deploy
versions 3.1 and 3.0 in English and Chinese. I will add 2.5 next. There is 
also a workflow to crawl and index to Algolia, this is a manually deployed
workflow, but could be set to run after building the docs.

## Node version

Docusaurus v3 requires Node 18

I use 8GB for Node, in Netlify I set the build command in the file `netlify.toml` 
and locally I use:

```shell
NODE_OPTIONS=--max_old_space_size=8192
```

## Install Docusaurus

```shell
yarn install
```

## Build script

The script `_IGNORE/testbuild`

- pulls the Chinese and English docs for versions 3.1 and 3.0
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
