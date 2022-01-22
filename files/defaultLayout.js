exports.defaultLayout = function () {
  return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{= it.title }}</title>
  <link href="/global/global.css" rel="stylesheet">
  <link href="/pages/{{= it.pageName}}/{{= it.pageName}}.css" rel="stylesheet">
</head>
  <body>
    {{~ it.body }}
  </body>
  <script src="/pages/{{= it.pageName}}/{{= it.pageName}}.js"></script>
</html>`
}