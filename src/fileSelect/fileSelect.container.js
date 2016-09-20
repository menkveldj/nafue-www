'use strict';

import React from 'react';
import { browserHistory } from 'react-router'
import FileInputDropZone from './components/fileInput.Dropzone'
import { connect } from 'react-redux'
import { fileSelected } from './fileSelect.actions'


class FileSelectPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleFileSelected = this.handleFileSelected.bind(this);
    }

    render() {
        return (
            <div>
                <div className="for-site-indexing no-select">
                    <h1>Nafue</h1>
                    <p>Anonymous, secure file transfers that self destruct after first use or 24 hours using
                        client side
                        encryption.</p>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-push-2 center-block">
                        <FileInputDropZone handleFileSelected={this.handleFileSelected}/>
                    </div>
                </div>
            </div>
        );
    }


    handleFileSelected(e) {
        e.stopPropagation();
        e.preventDefault();

        var files;
        if (!!e.dataTransfer && !!e.dataTransfer.files) {
            files = e.dataTransfer.files;
        }

        if (!!e.target && !!e.target.files) {
            files = e.target.files;
        }

        // only 1 file at a time
        if (files.length > 1) {
            error("Only 1 file at a time.");
            return;
        }

        var file = files[0];

        // getPassword
        this.props.fileSelected(file);
        browserHistory.push('/passwordPrompt');
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {
    fileSelected
})(FileSelectPage);