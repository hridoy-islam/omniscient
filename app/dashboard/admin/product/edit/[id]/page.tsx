import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function page() {
  return (
    <>
      <Card className="mx-20">
        <CardHeader className="tableHeader">
          <h3>Edit Product</h3>
        </CardHeader>
        <CardBody>
          <form>
            <div className="flex flex-col">
              <label htmlFor="">Title</label>
              <input type="text" name="" id="" className="roboinput" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Powerdby</label>
              <input type="text" name="" id="" className="roboinput" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Price</label>
              <input type="text" name="" id="" className="roboinput" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Upload Powerd By Image</label>
              <input type="file" name="" id="" className="roboinput" />
            </div>
            <h2 className="tex-xl font-semibold my-2">Configurations</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="">Motherboard</label>
                <input type="text" name="" id="" className="roboinput" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Processor</label>
                <input type="text" name="" id="" className="roboinput" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Ram</label>
                <input type="text" name="" id="" className="roboinput" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">SMPS</label>
                <input type="text" name="" id="" className="roboinput" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Graphics Card</label>
                <input type="text" name="" id="" className="roboinput" />
              </div>
            </div>
            <div className="border-t border-stroke py-2 flex justify-end">
              <Button className="bg-primary text-white rounded-sm">
                Update
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
