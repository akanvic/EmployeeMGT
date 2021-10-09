﻿var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { //We are using an Ajax call so we have to pass in the URL
            "url": "/Employee/GetAll"
        }, //Then we have to pass in the columns
        "columns": [
            { "data": "employeeFirstName", "width": "15%" },
            { "data": "employeeLastName", "width": "15%" },
            { "data": "employeeDateOfBirth", "width": "15%" },
            { "data": "employeeDepartment", "width": "15%" },

            {
                "data": "id",
                "render": function (data) {//Here we render and pass in the id 
                    return `
                            <div class="text-center">
                                <a href="/Employee/Create/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                    <i class="fas fa-edit"></i>
                                </a>

                                <a onclick=Delete("/Employee/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </div>
                            `;

                }, "width" : "40%"
                
            }
        ]
    });
}

function Delete(url) {
    swal({
        title: "Are you sure you want to Delete?",
        text: "You will not be able to restore the data!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            });
        }
    });
}
