import * as React from "react";

export class ModalDialog extends React.Component<{
    content: React.ComponentClass<{}> | React.StatelessComponent<{}>;
}, {}> {
    render() {
        const content = React.createElement(this.props.content as React.ComponentClass<{}>, {});
        return (
            <div className="modal-dialog">
                <div className="mask"></div>
                <div className="content">{content}</div>
            </div>
        );
    }
}
