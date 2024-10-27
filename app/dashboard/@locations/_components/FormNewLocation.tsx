import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import { authHeaders } from "@/helpers/authHeaders";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location${store}`, {
        headers: {
            ...authHeaders()
        }
    });
    return data.map((employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastName
        return (
            <Card className="mx-10 my-10">
                <CardHeader>
                    <p className="w-full">Nombre: <b>{fullName}</b></p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                    <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>

                </CardBody>
            </Card>
        )
    });
}