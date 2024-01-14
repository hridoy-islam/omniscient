"use client"
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Tab, Tabs } from "@nextui-org/react";
import { Icon } from '@iconify/react';
export default function page() {
    return <div>
        <Tabs aria-label="Options" color="primary" variant="bordered"
            classNames={{
                tabList: "bg-white p-0 rounded-0 text-white",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-8 h-10",
                // tabContent: "group-data-[selected=true]:text-[#06b6d4]"
            }}>
            <Tab key="personal" title="Personal Info" >
                <Card>
                    <CardHeader>
                        <h2>Profile Information</h2>
                    </CardHeader>
                    <CardBody >
                        <div className="grid grid-cols-2 gap-2 items-center">
                            <div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" name="" className="roboinput" id="" />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" name="" className="roboinput" id="" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" className="roboinput" id="" />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Upload Photo</label>
                                    <input type="file" name="" className="roboinput" id="" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" name="" className="roboinput" id="" />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="w-full flex flex-row-reverse gap-3">
                        <Button className="btn-basic rounded-md">Save</Button>
                        <Button className="bg-white border border-stroke rounded-md shadow-sm">Clear</Button>
                    </CardFooter>
                </Card>
            </Tab>
            <Tab key="contact" title="Contact Info">
                <Card>
                    <CardHeader>
                        <h2>Contact Information</h2>
                    </CardHeader>
                    <CardBody >

                        <div className="flex flex-col w-full">
                            <label htmlFor="">Address</label>
                            <input type="text" name="" className="roboinput" id="" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 items-center">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="">State</label>
                                    <select name="" id="" className="roboinput">
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Country</label>
                                    <select name="" id="" className="roboinput">
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="">City</label>
                                    <input type="text" name="" className="roboinput" id="" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Zip Code</label>
                                    <input type="text" name="" className="roboinput" id="" />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="w-full flex flex-row-reverse gap-3">
                        <Button className="btn-basic rounded-md">Save</Button>
                        <Button className="bg-white border border-stroke rounded-md shadow-sm">Clear</Button>
                    </CardFooter>
                </Card>
            </Tab>
            <Tab key="bill" title="Billing Info">
                <Card>
                    <CardHeader>
                        <h2>Billing Information</h2>
                    </CardHeader>
                    <CardBody >

                        <div className="flex flex-col w-full">
                            <label htmlFor="">Address</label>
                            <input type="text" name="" className="roboinput" id="" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 items-center">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="">State</label>
                                    <select name="" id="" className="roboinput">
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Country</label>
                                    <select name="" id="" className="roboinput">
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="">City</label>
                                    <input type="text" name="" className="roboinput" id="" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Zip Code</label>
                                    <input type="text" name="" className="roboinput" id="" />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="w-full flex flex-row-reverse gap-3">
                        <Button className="btn-basic rounded-md">Save</Button>
                        <Button className="bg-white border border-stroke rounded-md shadow-sm">Clear</Button>
                    </CardFooter>
                </Card>
            </Tab>
            <Tab key="agreement" title="Agreement">
                <Card>
                    <CardHeader>
                        <h2>Agreement</h2>
                    </CardHeader>
                    <CardBody>
                        <Button className="border border-primary bg-transparent text-primary w-64 flex items-center">
                        <Icon icon="material-symbols-light:download" width={26} />Download Agreenment</Button>
                    </CardBody>
                    
                </Card>
            </Tab>
           
        </Tabs>
    </div>
}