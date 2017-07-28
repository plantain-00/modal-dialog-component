import Vue from "vue";
import Component from "vue-class-component";
import { vueTemplateHtml } from "./vue-variables";

@Component({
    template: vueTemplateHtml,
    props: ["content"],
})
class ModalDialog extends Vue {
    content: string;
}

Vue.component("modal-dialog", ModalDialog);
