import { Button } from "@nextui-org/react";
import { Icon } from '@iconify/react';
export default function DownloadInvoiceButton(){
    return <Button className="flex items-center text-purple border border-purple bg-transparent text-lg">
        <Icon icon="material-symbols-light:download" width={27} /> Download
    </Button>
}