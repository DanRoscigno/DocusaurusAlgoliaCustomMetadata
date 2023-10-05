# Website

## Node version

Docusaurus v3 requires Node 18

## Install Docusaurus

```shell
yarn install
```

## Temporary script

The script `_IGNORE/testbuild-en`

- pulls the English docs for versions 3.1, 3.0, and 2.5
- Removes the intro page while we update it to use built-in nav components
- Removes the TOC while we migrate those to JSON format
- Runs an MDX checker
- Builds the site

```shell
./_IGNORE/testbuild-en`
```

Note: The dir is named `_IGNORE` because I had some markdown files that I needed to move to a dir that Docusaurus would leave out of the nav; it does not add files to the nav from dirs that start with an underscore.

## Serve the pages locally

```shell
yarn serve
```
