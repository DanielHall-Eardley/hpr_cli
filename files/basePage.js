exports.basePage = function (pageName) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="/${pageName}/${pageName}.css" rel="stylesheet">
    <link href="/global/global.css" rel="stylesheet">
  </head>
  <body>
    
    <script src="/${pageName}/${pageName}.js"></script>
  </body>
  </html>`
}