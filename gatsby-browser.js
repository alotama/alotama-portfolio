const React = require("react")
const Layout = require("./src/template/Layout").default
require('./src/assets/styles/scss/general.scss')

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}