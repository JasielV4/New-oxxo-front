import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default async function ManagerPage({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard:managers`]
        }
    })
    const data = await response.json();
    return (

        <Card className="mx-20 py-2 bg-orange-50">
            <CardHeader>
                <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                <p className="w-full">Telefono: <b>{data.managerPhoneNumber}</b></p>
                {data.location ? (
                    <>
                        <p>Si tiene tienda</p>
                    </>

                ) : (
                    <p>No tiene tienda</p>
                )}
            </CardBody>
        </Card>

    )
}