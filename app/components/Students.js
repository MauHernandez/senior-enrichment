import React, {Component} from 'react';
import { Link } from 'react-router';

export default function Students () {
    return (
        <div className="container">

            <div className="meta">

                {/*I was thinking about doing one view for Campus Students and One for Students view but I thought
                If I pass this line with empy objects they will not draw and in that case the view/container can be reused */}

                <img className="campus" src="scott-webb-12981.jpg" alt="..." />

                <div className="col-xs-6">
                    <h2>Campus: Campus X</h2>
                    <h2>Students Listed</h2>
                </div>

                <div className="col-xs-4 pull-right">
                    <Link to='student/add'>
                        <button type="button" className="btn btn-default btn-info">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Create student
                        </button>
                    </Link>
                </div>

            </div>


         <table className="table table-striped">
             <thead>
                 <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>CampusName</th>
                     <th>Edit</th>
                     <th>Delete</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>@email</td>
                     <td>Campus1</td>
                     <td>
                         <Link to='student/edit'>
                         <button type="button" className="btn btn-default btn-small">
                             <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                         </button>
                         </Link>
                     </td>
                     <td>
                         <Link to='student/edit'>
                             <button type="button" className="btn btn-default btn-danger btn-small">
                                 <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                             </button>
                         </Link>
                     </td>
                 </tr>
                 <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>@email</td>
                     <td>Campus1</td>
                     <td>
                         <Link to='student/edit'>
                             <button type="button" className="btn btn-default btn-small">
                                 <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                             </button>
                         </Link>
                     </td>
                     <td>
                         <Link to='student/edit'>
                             <button type="button" className="btn btn-default btn-danger btn-small">
                                 <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                             </button>
                         </Link>
                     </td>
                 </tr>
                 <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>@email</td>
                     <td>Campus1</td>
                     <td>
                         <Link to='student/edit'>
                             <button type="button" className="btn btn-default btn-small">
                                 <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                             </button>
                         </Link>
                     </td>
                     <td>
                         <Link to='student/edit'>
                             <button type="button" className="btn btn-default btn-danger btn-small">
                                 <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                             </button>
                         </Link>
                     </td>
                 </tr>
             </tbody>
         </table>
        </div>
    );
}