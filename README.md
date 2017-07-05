[![Dependency Status](https://david-dm.org/plantain-00/modal-dialog-component.svg)](https://david-dm.org/plantain-00/modal-dialog-component)
[![devDependency Status](https://david-dm.org/plantain-00/modal-dialog-component/dev-status.svg)](https://david-dm.org/plantain-00/modal-dialog-component#info=devDependencies)
[![Build Status](https://travis-ci.org/plantain-00/modal-dialog-component.svg?branch=master)](https://travis-ci.org/plantain-00/modal-dialog-component)
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
<link rel="stylesheet" href="./node_modules/modal-dialog-component/dist/modal-dialog.min.css" />
```

#### vuejs component demo

`npm i vue vue-class-component`

```ts
import "modal-dialog-component/dist/vue";
```

```html
<modal-dialog :data="data">
</modal-dialog>
```

the online demo: https://plantain-00.github.io/modal-dialog-component/demo/vue/index.html

#### reactjs component demo

```ts
import { ModalDialog } from "modal-dialog-component/dist/react";
```

```jsx
<ModalDialog data={this.data}>
</ModalDialog>
```

the online demo: https://plantain-00.github.io/modal-dialog-component/demo/react/index.html



#### properties and events of the component

name | type | description
--- | --- | ---
data | [ModalDialogData](#modal-dialog-data-structure)[] | the data of the modal-dialog

#### modal-dialog data structure

```ts
type ModalDialogData = {
    component: string | Function; // the item component, for vuejs, it is the component name, for reactjs, it is the class object
    data: any; // the data will be passed to the component as `data` props
};
```
