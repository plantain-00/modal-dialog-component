import * as React from "react";
import * as ReactDOM from "react-dom";
import { ModalDialog, ModalDialogData } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    data: ModalDialogData;

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/modal-dialog-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br />
                <ModalDialog data={this.data}>
                </ModalDialog>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
