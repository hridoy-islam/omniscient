"use client"
import { Accordion, AccordionItem } from "@nextui-org/react"
import { Icon } from '@iconify/react';

export default function Faq() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    return (
        <div className="py-10 px-16 bg-white">
            <div className="mb-5 space-y-4">
                <h2 className="text-center text-primary">FAQ</h2>
                <h3 className="text-center text-4xl">Got Questions? Find Answers Here</h3>
            </div>


            <Accordion>
                <AccordionItem key="first" aria-label="first" indicator={<Icon icon="ic:baseline-plus" color="black" />} title="How does the free trial work?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="second" aria-label="second" indicator={<Icon icon="ic:baseline-plus" color="black" />} title="What happens when my trial ends?">
                    {defaultContent}
                </AccordionItem>
                <AccordionItem key="third" aria-label="third" indicator={<Icon icon="ic:baseline-plus" color="black" />} title="When do i get billed?">
                    {defaultContent}
                </AccordionItem>

                <AccordionItem key="fourth" aria-label="fourth" indicator={<Icon icon="ic:baseline-plus" color="black" />} title="Can i cancel my subscription anytime?">
                    {defaultContent}
                </AccordionItem>

                <AccordionItem key="five" aria-label="five" indicator={<Icon icon="ic:baseline-plus" color="black" />} title="What happens if i lose my account details?">
                    {defaultContent}
                </AccordionItem>

                <AccordionItem key="six" aria-label="six" indicator={<Icon icon="ic:baseline-plus" color="black" />} title="Do i pay tax?">
                    {defaultContent}
                </AccordionItem>
            </Accordion>
        </div>
    )
}