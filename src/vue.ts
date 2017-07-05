import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
export * from "./common";
import { vueTemplateHtml } from "./vue-variables";

@Component({
    template: vueTemplateHtml,
    props: ["data"],
})
class ModalDialog extends Vue {
    data: common.ModalDialogData;
}

Vue.component("modal-dialog", ModalDialog);
