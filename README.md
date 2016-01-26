# <file-input-button>
A custom Component that wraps a file input and lets you live bind to its selected files.

[![npm version](https://badge.fury.io/js/file-input-button.svg)](https://badge.fury.io/js/file-input-button)

[![NPM](https://nodei.co/npm/file-input-button.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/file-input-button/)

## Installation
```
npm install file-input-button --save
```

You can use any of the builds in the dist folder to meet your project needs.

Using CanJS's built-in support for StealJS, you can now import the module directly inside your templates.  For example:
```html
<can-import from="file-input-button"/>

<file-input-button {^files}="uploads" multiple> </file-input-button>

<ul class="file-upload-list">
  {{#each files}}
    <li class="file">
      <span class="name">{{name}}</span>
    </li>
  {{/each}}
</ul>
```


## Usage
The <file-input-button> component wraps a file input and lets you live bind to the selected files.  It hides the internal file input and displays a button.

It is minimally styled and lets you provide an `button-class=""` html attribute that gets passed directly to the button:
```
<file-input-button {^files}="uploads" button-class="btn btn-primary"> </file-input-button>
```

By default, the button label says "Select Files", but you can change this using the `button-label=""` attribute:
```
<file-input-button {^files}="uploads" button-label="Pick some files, Y'all!"> </file-input-button>
```

You can also supply your own button by using the `no-ui` attribute. Just make sure you put a fancy click handler that calls the `selectFiles()` function, like this:
```
<file-input-button {^files}="uploads" no-ui>
  <button ($click)="selectFiles()" class="what-evs">My Groovy Custom Button</button>
</file-input-button>
```

And let's not forget, you can use the `multiple` attribute, just like on any file input:
```
<file-input-button {^files}="uploads" multiple> </file-input-button>
```


## API

- `multiple`: Lets you select multiple files in the browser's file picker.
- `no-ui`: Let's you turn off the included button so you can provide your own.
- `($click)="selectFiles()"`: The required attribute to put on your own button. Used with the `no-ui` attribute.
- `button-label`: Lets you customize the text inside the button.
- `button-class`: Lets you set classes directly to the included button.
- `files`: The list of files that have been selected.  Each time you select more file, this list will grow. Instead of being a simple FileList, this is live-bindable List.  The file is wrapped in a can.Map with the same attributes.  You can access the actual File object at List[index].file.  Each file in the list will look like this:

```js
{
  name: file.name,
  size: file.size,
  type: file.type,
  lastModified: file.lastModified,
  lastModifiedDate: file.lastModifiedDate,
  file: file // <--- Here's the actual File object.
}
```



## Contributing
Pull requests are welcome.

## Authors

- [Marshall Thompson](https://github.com/marshallswain)

[![Built with StealJS](./dist/build-with-stealjs.jpg)](http://StealJS.com)
