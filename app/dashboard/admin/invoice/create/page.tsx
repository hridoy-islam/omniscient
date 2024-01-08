import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"

export default function page() {
    
    return <div>
        <Card>
            <CardHeader>
                <h2>Create Invoice</h2>
            </CardHeader>
            <CardBody>
                <h2 className="mb-4">User Information</h2>
                <div className="flex flex-col">
                    <label htmlFor="">Rig Name</label>
                    <select name="" className="roboinput" id="">
                        <option>Hridoy</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Invoice Type</label>
                    <select name="" className="roboinput" id="">
                        <option>Bill Invoice</option>
                        <option>Add On Invoice</option>
                        <option>Rig Invoice</option>
                    </select>
                    
                </div>
                <div className="grid grid-cols-2 gap-2 items-center">
                    <div>
                        <div className="flex flex-col">
                            <label htmlFor="">User Name</label>
                            <input type="text" name="" className="roboinput" id="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Actual Mining Proficiency</label>
                            <input type="text" name="" className="roboinput" id="" />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <label htmlFor="">GPU</label>
                            <input type="text" name="" className="roboinput" id="" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Proficiency Value</label>
                            <input type="text" name="" className="roboinput" id="" />
                        </div>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="w-full flex flex-row-reverse gap-3">
                <Button className="btn-basic rounded-md">Create</Button>
                <Button className="bg-white border border-stroke rounded-md shadow-sm">Clear</Button>
            </CardFooter>
        </Card>
    </div>
}