using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeMGT.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        [Required]
        public string EmployeeFirstName { get; set; }
        [Required]
        public string EmployeeLastName { get; set; }
        public DateTime? EmployeeDateOfBirth { get; set; }
        public string EmployeeDepartment { get; set; }
    }
}
