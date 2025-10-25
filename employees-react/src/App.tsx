import { useState } from 'react';
import type { Employee } from './types/ComponentTypes';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import AddEmployeeModel from './components/AddEmployeeModal';


export function EmployeeApp() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'johnDoe@mail.com',
            address: '89 Chiaroscuro Rd, Portland, USA',
            phone: '(171) 555-2222',
            gender: 'Male',
            department: 'Engineering'
        }
    ]);

    const [title, setTitle] = useState("Default Title");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    function updateTitle(newTitle?: string) {
        setTitle(newTitle!);
    }

    function addEmployee(newEmployee: Omit<Employee, 'id'>) {
        setEmployees([
            ...employees,
            {
                id: Math.max(...employees.map(emp => emp.id)) + 1 || 1,
                ...newEmployee
            }
        ])
    }

    return (
        <div className='container'>
            <div className='table-wrapper'>
                <Header title={title} onUpdateTitle={updateTitle} onOpenAddModal={() => setIsAddModalOpen(true)} />
                <EmployeeList employees={employees} />
                <AddEmployeeModel isOpen={isAddModalOpen} onCloseAddModal={() => setIsAddModalOpen(false)} onAddEmployee={addEmployee} />
            </div>
        </div>
    )
}





