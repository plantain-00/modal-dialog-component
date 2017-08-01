[![Dependency Status](https://david-dm.org/plantain-00/modal-dialog-component.svg)](https://david-dm.org/plantain-00/modal-dialog-component)
[![devDependency Status](https://david-dm.org/plantain-00/modal-dialog-component/dev-status.svg)](https://david-dm.org/plantain-00/modal-dialog-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/modal-dialog-component.svg?branch=master)](https://travis-ci.org/plantain-00/modal-dialog-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/modal-dialog-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/modal-dialog-component/branch/master)
[![npm version](https://badge.fury.io/js/modal-dialog-component.svg)](https://badge.fury.io/js/modal-dialog-component)
[![Downloads](https://img.shields.io/npm/dm/modal-dialog-component.svg)](https://www.npmjs.com/package/modal-dialog-component)

# modal-dialog-component
A vuejs, reactjs modal dialog component.

#### features

+ vuejs component
+ reactjs component
+ custom component

#### install

`npm i modal-dialog-component`

#### link css

```html
<link rel="stylesheet" href="./node_modules/modal-dialog-component/modal-dialog.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "modal-dialog-component/vue";
```

```html
<modal-dialog :content="content">
</modal-dialog>
```

the online demo: https://plantain-00.github.io/modal-dialog-component/demo/vue/index.html

#### reactjs component demo

```ts
import { ModalDialog } from "modal-dialog-component/react";
```

```jsx
<ModalDialog content={this.content}>
</ModalDialog>
```

the online demo: https://plantain-00.github.io/modal-dialog-component/demo/react/index.html

#### properties and events of the component

name | type | description
--- | --- | ---
content | string or Function | the item component, for vuejs, it is the component name, for reactjs, it is the class object
