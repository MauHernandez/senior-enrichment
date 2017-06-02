import React from 'react';

export default function CreateContainer (props) {
    //not a container... yet

    //the idea for doing markup with $object is that since both campus and students have two fields we could reuse the
    //same container,not sure if it would work yet cause of the logic but for nw I'll use that

    //Object sencond argument can be email or img route

    return (
        <div style={{marginTop: '20px'}}>
            <h3>Create $object</h3>
            <form>
                <div className="form-group row">
                    <div className="col-md-6 col-xs-12">
                        <label className="col-xs-12 control-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            // value={objectName}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <label className="col-xs-12 control-label">Second argument</label>
                        <input
                            className="form-control"
                            type="text"
                            // value={objSecondAttr}
                            placeholder="Enter email/img route"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">
                    Create $object
                </button>
            </form>
        </div>
    );
}