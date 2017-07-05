import * as React from "react";
import * as common from "./common";
export * from "./common";

export class ModalDialog extends React.Component<{
    data: common.ModalDialogData;
}, { }> {
    render() {
        return (
            <div className="modal-dialog">
            </div>
        );
    }
}
