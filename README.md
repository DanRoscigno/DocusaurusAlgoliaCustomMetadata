# Website

The `MetadataBranch` contains the setup to test metadata.

Test site deployed with Netlify.

Prod URL is https://docs.galacticbase.com

Algolia crawls the site under the Docsearch program

DNS is setup so that I can use the CNAME docs.galacticbase.com; the Netlify hostname is startling-narwhal-a89c08, which is a pretty cool name, but I registered docs.galacticbase.com with the Algolia folks and the crawler is locked to that.

## Adding Pinyin metadata

### Add the metadata to doc pages

Docusaurus allows adding custom metadata to the page `<head></head>` in the Markdown file. Here is an example:

```md
---
sidebar_position: 1
keywords: ['static', 'pages']
description: How to create a new static page
---
<head> <meta name="pinyin" content="Yuanshuju" /> </head>

# Create a Page

...
```

The above results in this being added to the HTML:

```html
<head>
...
<meta data-rh="true" name="pinyin" content="Yuanshuju">
...
</head>
...
```

### Configure the Algolia Crawler

The Algolia Docsearch program includes the Algolia Crawler. By default the crawler supports Docusaurus and
many other documentation frameworks. The following describes adding the new attribute `pinyin`.

#### Overview

These are the steps:
1. Publish the new content described in **Add the metadata to doc pages**
1. Add the new attribute to the crawler config
1. Run a URL test in the crawler editor
1. Initiate a crawl
1. Configure the index

#### Add the new attribute to the crawler config

The full file is [crawler.js](crawler.js). These extracts are to remind the reader to add the attribute
in the four indicated sections of the crawler configuration.

```js
...
      recordExtractor: ({ $, helpers }) => {
        // get the Pinyin metadata
        const pinyin = $("meta[name='pinyin']").attr("content") || "";
...

        return helpers.docsearch({
            pinyin: { defaultValue: pinyin },
...
      attributesToRetrieve: [
        "pinyin"
...
      searchableAttributes: [
        "unordered(pinyin)",
...
```

#### Run a URL test and save the config

While in the crawler config editor you can paste in a URL to test and select the `Records` tab. This output shows
the retrieved records. Confirm that your attribute is present and populated:

```json
[
  {
    "indexName": "galacticbase",
    "records": [
      {
        "objectID": "0-https://docs.galacticbase.com/docs/tutorial-basics/create-a-page/",
        "version": [
          "current"
        ],
        "tags": [],
        "url": "https://docs.galacticbase.com/docs/tutorial-basics/create-a-page/",
        "url_without_variables": "https://docs.galacticbase.com/docs/tutorial-basics/create-a-page/",
        "url_without_anchor": "https://docs.galacticbase.com/docs/tutorial-basics/create-a-page/",
        "anchor": "",
        "content": "\r\nTutorial - Basics\r\ncreate-a-page",
        "content_camel": "\r\nTutorial - Basics\r\ncreate-a-page",
        "lang": "en",
        "language": "en",
        "type": "content",
        "no_variables": false,
        "docusaurus_tag": "docs-default-current",
        "description": "How to create a new static page",
        "keywords": "static,pages",
        "pinyin": "Yuanshuju",
        "weight": {
          "pageRank": 0,
          "level": 0,
          "position": 0
        },
```

#### Initiate a crawl

If the attribute is populated, then save the config and launch a recrawl from the crawler overview.

#### Configure the index

If this is not the very first crawl the index will have to be configured to include the new attribute in search results.

1. When the crawl finishes open the index in the dashboard
1. Open **Configuration**, choose **Searchable attributes**, click **Add a Searchable Attribute**, and type in the attribute name.
1. **Save and Review**

## Using keywords

In addition to adding the `pinyin` metadata `keywords[]` and `description` are also added:

```js
      recordExtractor: ({ $, helpers }) => {
        // get the description metadata
        const description = $("meta[name='description']").attr("content") || "";
        const keywords = $("meta[name='keywords']").attr("content") || "";
        const pinyin = $("meta[name='pinyin']").attr("content") || "";
```

If the keywords field is used to prioritize pages in the documentation search results, then the index configuration in the Algolia UI needs to be edited. Open the index configuration and drag the keywords field to the top of the list to increase the priority of the keywords.

<img width="1384" alt="image" src="https://github.com/DanRoscigno/DocusaurusAlgoliaCustomMetadata/assets/25182304/13d290ed-6611-4bc9-be1e-1f56228c5e23">


