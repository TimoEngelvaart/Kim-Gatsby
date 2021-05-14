var plugins = [{
      plugin: require('/Users/timoengelvaart/Desktop/Kim-Gatsby/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/timoengelvaart/Desktop/Kim-Gatsby/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/timoengelvaart/Desktop/Kim-Gatsby/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"rbhcbzxq","dataset":"production","watchMode":true,"token":"sk3SceQ1uiqE4xBHWDscyd2wdVabFT9MGAJbU9fm97169QV8wZHmf5D4l2X76itur27sURJCVebBh0cZ93D0ri5VmCQZftQZhPEoJ6sqgFW9Xsv9r3ZaZrXTEdwHZM39RKfh1LLaZYtBA3lsU5TRKAOeltlhHdrPu3WWz7qw2eiVtNA02JLi","overlayDrafts":true},
    },{
      plugin: require('/Users/timoengelvaart/Desktop/Kim-Gatsby/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
