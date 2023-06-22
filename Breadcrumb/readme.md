# Breadcrumb (for uStore NG Themes)
I have created a few uStore sites where it makes sense to have quite deep categorizations. However, it exposes a weak side of the standard uStore NG Theme; it is difficult to traverse back to the parent category.
Therefore, I started investigating if anyone had created a breadcrumb for any uStore NG themes. To my dissapointment, I couldn't find one...<br />
Then again, why not try to make it myself and create my first ever pull request?

<br />
The code in this directory uses `UStoreProvider.state.customState` to traverse the `categoryTree` and locate the `currentCategory`. The path revealed by the algorithm is used to create the breadcrumb, with links to direct the user to the category.

<br />
An example is shown in the gif below:
<img src='imgs/breadcrumb.gif' />
<i>The example uses a norwegian website.</i>
<br />
<hr>

## Installation
The installation guide below will be based on the AquaBlue Theme from XMPie.

Located in this directory are four files. `Breadcrumb.js` and `Breadcrumb.scss` are completely new. `config.json` and `variables.scss` contain code that need to be added to exisiting files within the AquaBlue Theme. Additionally there are two files within the AquaBlue Theme that need some modifications, namely `Category.js` and `initThemeState.js`. I'll cover all of these files in the subsections below.

<br />

### `Breadcrumb.js` and `Breadcrumb.scss`
These files contain the Breadcrumb component and styling. Put these files wherever you please, but remember to update the relative import statements.<br/>
Personally, I have them located at `src/components/Layout` in the AquaBlue theme.

<br />
<b>Additional configuration that can be done</b><br>
The first breadcrumb is constant - "Home". This value can be modified to your liking. Also, it is possible to connect it to the <a href="https://github.com/XMPieLab/uStore-NG/wiki/Working-with-localizations">uStore localization system</a> or add a custom customization field within "Customize Theme". This can be done in the `config.json` file, which will be explained below.

<br />

### `Category.js`
To use the breadcrumb component, it has to be added to the category-pages, or any other page you have set up to use the categories.<br />
Locate `src/routes/Category.js`. Within the `render` method, locate the `<Layout>` component with `className="category"` in the return statement. Underneath, but above the div containing the title, add:
```js
<div>
    <BreadCrumb />
</div>
```
It should be looking something like this:
```js
      [...]
      <Layout {...this.props} className="category">

        <div>
          <BreadCrumb />
        </div>

        <div className="title" dangerouslySetInnerHTML={{ __html: currentCategory && currentCategory.Name }} />
        [...]
```
<i>The component is wrapped in a `<div>` because it fixed a bug where the DOM broke after reloading the website.</i>
<br />
<br />
Also, add the import for the breadcrumb-component at the top of the `Category.js`-file:
```js
    [...]
    import BreadCrumb from '../components/Layout/BreadCrumb'
```
or another path you yours isn't located in the Layout directory.

<br />

### `config.json`
In the root of the theme-directory there is a file named `config.json`. This file contains every dial that is used in uStore Theme Editor. 
To be able to change font colors, separator and hover color of the breadcrumb from uStore, we have to add a few dials, and a new section to the theme editor.  
As there already exist a good guide by XMPie on how to add sections and dials to the uStore Theme Editor, <a href="https://github.com/XMPieLab/uStore-NG/wiki/Customizing-the-Theme-Editor">I would recommend following theirs</a>. The `config.json`-file located in this directory is split between the dials and the section to be added. Simply follow the guide by XMPie to properly add the "Breadcrumb" section.

<br />

### `variables.scss`
Within the variables.scss file in this directory are the new css-variables to be used to store any configuration-values set through uStore Theme Editor.
Locate `src/styles/variables.scss` in the theme, and add the new variables at the bottom of the file.

<br />

### `initThemeState.js`
The standard category tree stored in `customState` has depth of 3. In some of my sites I used deeper structures. To allow `customState` to store the whole tree-structure, navigate to `src/services/initThemeState.js`. 
Within the `initiateThemeState`, you will find the API-call where the theme retrieves the category-tree. The parameter will by standard be 3 - I have set it to 5.
```js
export const initiateThemeState = async () => {
  const { Categories: categoriesTree } = await UStoreProvider.api.categories.getCategoryTree(5)
  [...]
}
```


## Thank you
Contributing to the XMPie community feels nice, and thank you for using my work. Further improvements to this little project is encouraged, but I would appreciate to be kept in the loop for any significant changes!<br /> 
If you have any suggestions for improvements to this project, or have any other projects you want to lay of, feel free to <a href="mailto:magnus.e.b@hotmail.com">contact me!</a>