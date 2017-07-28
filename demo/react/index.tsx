import * as React from "react";
import * as ReactDOM from "react-dom";
import { ModalDialog } from "../../dist/react";

const CustomContent: React.StatelessComponent<{}> = props => <button>OK</button>;

class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/modal-dialog-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <br />
                <ModalDialog content={CustomContent}>
                </ModalDialog>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));
