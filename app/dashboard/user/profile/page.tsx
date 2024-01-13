"use client"
import { Avatar, Card } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import Link from "next/link";
export default function Page() {
  return <div>
  <Card className="flex flex-row gap-4 p-6">
      <div>
          <Avatar className="w-20 h-20" radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      </div>
      <div className="flex flex-col justify-between w-full">
          <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-semibold">Mahfuz Alam</h1>
              <Link href="/" className="flex items-center gap-1 text-primary"><Icon icon="basil:edit-outline" /><span>Edit</span></Link>
          </div>
          <p className="flex flex-row items-center"><Icon icon="ic:outline-email" className="mr-2" /><span>Email: hridoy4t@gmail.com</span></p>
          <div className="flex flex-row items-center">
              <Icon icon="tdesign:location" className="mr-2" /> <p>Baily Road, Ramna, Dhaka, Bangladesh</p>
          </div>
      </div>
  </Card>
  <Card className="p-6 my-6">
      <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold">Basic Informaion</h2>
              <Link href="/" className="flex items-center gap-1 text-primary"><Icon icon="basil:edit-outline" /><span>Edit</span></Link>
          </div>
      <div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Name</h2> <p>Ridoy Islam</p></div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Profession</h2> <p>Ridoy Islam</p></div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Location</h2> <p>Ridoy Islam</p></div>
      </div>
  </Card>
  <Card className="p-6 my-6">
      <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold">Contact Informaion</h2>
              <Link href="/" className="flex items-center gap-1 text-primary"><Icon icon="basil:edit-outline" /><span>Edit</span></Link>
          </div>
      <div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Name</h2> <p>Ridoy Islam</p></div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Profession</h2> <p>Ridoy Islam</p></div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Location</h2> <p>Ridoy Islam</p></div>
      </div>
  </Card>
  <Card className="p-6 my-6">
      <div className="flex flex-row justify-between">
              <h2 className="text-lg font-semibold">Billing Informaion</h2>
              <Link href="/" className="flex items-center gap-1 text-primary"><Icon icon="basil:edit-outline" /><span>Edit</span></Link>
          </div>
      <div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Name</h2> <p>Ridoy Islam</p></div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Profession</h2> <p>Ridoy Islam</p></div>
          <div className="flex flex-row justify-between items-center my-2"><h2 className="text-primary">Location</h2> <p>Ridoy Islam</p></div>
      </div>
  </Card>
</div>;
}
