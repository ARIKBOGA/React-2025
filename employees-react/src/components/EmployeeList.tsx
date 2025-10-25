import type { Employee } from "../types/ComponentTypes";
import EmployeeItem from "./EmployeeItem";

function EmployeeList({ employees }: { employees: Employee[] }) {

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll"></label>
                        </span>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(emp => (
                        <EmployeeItem key={emp.id} employee={emp} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default EmployeeList;