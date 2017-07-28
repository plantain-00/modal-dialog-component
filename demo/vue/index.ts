import Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `<button>OK</button>`,
    props: [],
})
class CustomContent extends Vue {
}
Vue.component("custom-content", CustomContent);

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/modal-dialog-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <br/>
        <modal-dialog content="custom-content">
        </modal-dialog>
    </div>
    `,
})
class App extends Vue {
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
