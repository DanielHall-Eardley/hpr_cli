exports.globalCSS = `
* 
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html 
{
  font-size: 10px;
}

:root 
{
  /* colors */
  --brown: #231900;
  --yellow: #FFCC00;
  --white: #FFFFFF;

  /* color assignment */
  --primary-clr: var(--yellow);
  --secondary-clr: var(--brown);

  /* typography */
  --heading-ft: 'Open Sans', sans-serif;
  --heading-light: 300;
  --heading-regular: 400;
  --heading-bold: 700;
  --body-ft: 'Merriweather', serif;
  --body-light: 300;
  --body-regular: 400;

  /* spacing */
  --1sp: .8rem;
  --2sp: 1.6rem;
  --3sp: 2.4rem;
  --4sp: 3.2rem;
  --5sp: 4rem;
  --6sp: 4.8rem;
}

h1, h2, h3, h4, h5, h6 
{
  font-family: var(--heading-ft);
  font-weight: var(--heading-regular);
}

h1 
{
  font-size: 4.2rem;
  font-weight: var(--heading-bold);
}

h2 
{
  font-size: 3.1rem;
}

h3 
{
  font-size: 2.3rem;
}

body 
{
  font-family: var(--body-ft);
  font-weight: var(--body-regular);
  font-size: 1.7rem;
}

label 
{
  font-weight: var(--heading-light);
  font-size: 1.3rem;
}
`