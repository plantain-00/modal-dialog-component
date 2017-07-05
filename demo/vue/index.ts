import Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";
import { ModalDialogData } from "../../dist/vue";

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/modal-dialog-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <modal-dialog :data="data">
        </modal-dialog>
    </div>
    `,
})
class App extends Vue {
    data: ModalDialogData;
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
