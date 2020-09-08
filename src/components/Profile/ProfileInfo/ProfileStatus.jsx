import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        console.log("End activateEditMode");
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChenge = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status) {
            this.setState(
                {status: this.props.status}
            );
        }
        console.log("componentDidUpdate");
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {
                        this.activateEditMode();
                        console.log("render activateEditMode");
                    }}>{this.state.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChenge}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;