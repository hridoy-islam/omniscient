"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Button,
} from "@nextui-org/react";
import ViewButton from "@/components/ViewButton";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import intel from "../../../../public/intel.png";

export default function Page() {
  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          classNames={{
            tabList: "bg-white p-0 rounded-0 text-white",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-8 h-10",
            // tabContent: "group-data-[selected=true]:text-[#06b6d4]"
          }}
        >
          <Tab key="items" title="Items">
            <div className="grid grid-cols-2 gap-6">
              {/* Loop start */}
              <Card className="p-4 space-y-3">
                <Chip className="bg-primaryLight text-primary">
                  Basic Mining
                </Chip>

                <div className="bg-primaryLight rounded-xl p-4 flex justify-between items-center">
                  <p className="text-5xl font-bold">$500</p>
                  <div>
                    <p className="text-sm">Powerd By</p>
                    <Image src={intel} alt="powerdby" />
                  </div>
                </div>

                <div className="productview">
                  <table className="w-full">
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Processor</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Ram</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                  </table>
                </div>

                <Button className="btn-basic w-full rounded-md">
                  Add To Cart
                </Button>
              </Card>

              {/* Loop End */}
              <Card className="p-4 space-y-3">
                <Chip className="bg-primaryLight text-primary">
                  Basic Mining
                </Chip>

                <div className="bg-primaryLight rounded-xl p-4 flex justify-between items-center">
                  <p className="text-5xl font-bold">$500</p>
                  <div>
                    <p className="text-sm">Powerd By</p>
                    <Image src={intel} alt="powerdby" />
                  </div>
                </div>

                <div className="productview">
                  <table className="w-full">
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Processor</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Ram</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                  </table>
                </div>

                <Button className="btn-basic w-full rounded-md">
                  Add To Cart
                </Button>
              </Card>
              <Card className="p-4 space-y-3">
                <Chip className="bg-primaryLight text-primary">
                  Basic Mining
                </Chip>

                <div className="bg-primaryLight rounded-xl p-4 flex justify-between items-center">
                  <p className="text-5xl font-bold">$500</p>
                  <div>
                    <p className="text-sm">Powerd By</p>
                    <Image src={intel} alt="powerdby" />
                  </div>
                </div>

                <div className="productview">
                  <table className="w-full">
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Processor</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Ram</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                  </table>
                </div>

                <Button className="btn-basic w-full rounded-md">
                  Add To Cart
                </Button>
              </Card>
              <Card className="p-4 space-y-3">
                <Chip className="bg-primaryLight text-primary">
                  Basic Mining
                </Chip>

                <div className="bg-primaryLight rounded-xl p-4 flex justify-between items-center">
                  <p className="text-5xl font-bold">$500</p>
                  <div>
                    <p className="text-sm">Powerd By</p>
                    <Image src={intel} alt="powerdby" />
                  </div>
                </div>

                <div className="productview">
                  <table className="w-full">
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Processor</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Ram</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                    <tr>
                      <td className="w-12">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-stroke rounded-full h-6 w-6 p-1 text-primary"
                        />
                      </td>
                      <td className="w-30">Motherboard</td>
                      <td>TUF GAMING Z590-PLUS</td>
                    </tr>
                  </table>
                </div>

                <Button className="btn-basic w-full rounded-md">
                  Add To Cart
                </Button>
              </Card>
            </div>
          </Tab>
          <Tab key="orders" title="Orders">
            <Card>
              <CardHeader className="tableHeader">
                <div>
                  <h2>Orders</h2>
                </div>
              </CardHeader>
              <CardBody>
                <table className="table-fixed">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Product</th>
                      <th>Payment</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice-0019</td>
                      <td>$292</td>
                      <td>$292</td>
                      <td>1961</td>
                      <td>$292</td>
                      <td>
                        <Link href="/dashboard/user/order/1">
                          <ViewButton />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
