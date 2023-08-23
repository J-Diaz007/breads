//HTML Boilerplate with JSX
const React = require('react')

function Default(html) {
  return (
    //HTML within the return statement
    // html.childern below is injecting the html from other jsx files
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered!</h1>
      <div className="container">
        {html.children}
      </div>
    </body>
    </html>
  )
}

module.exports = Default
