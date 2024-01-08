import { Button, Card } from "@nextui-org/react";

export default function Pagination(){
    return(
        <div className="border border-primary flex justify-between bg-white rounded-xl bg-white p-4 items-center">
            <div>
                <p>Showing 1 to 10 of 87 Results</p>
            </div>
            <div>
                <Button className="rounded-sm text-primary bg-white border border-stroke shadow-sm">Previous</Button>
                <Button className="ml-2 btn-basic rounded-sm">Next</Button>
            </div>
        </div>
    )
}