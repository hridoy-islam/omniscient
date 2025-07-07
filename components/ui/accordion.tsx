"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/utils";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps {
  type: "single" | "multiple";
  collapsible?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type, collapsible = false, children, className, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const toggleItem = (value: string) => {
      if (type === "single") {
        setOpenItems((prev) =>
          prev.includes(value) ? (collapsible ? [] : prev) : [value]
        );
      } else {
        setOpenItems((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b", className)}
    data-value={value}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!context || !item) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const isOpen = context.openItems.includes(item.value);

  return (
    <div className="flex">
      <button
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left",
          className
        )}
        onClick={() => context.toggleItem(item.value)}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!context || !item) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const isOpen = context.openItems.includes(item.value);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up"
      )}
      style={{
        height: isOpen ? "auto" : "0",
      }}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

interface AccordionItemContextType {
  value: string;
}

const AccordionItemContext = React.createContext<
  AccordionItemContextType | undefined
>(undefined);

// Wrap AccordionItem to provide context
const AccordionItemWithContext = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ value, children, ...props }, ref) => (
  <AccordionItemContext.Provider value={{ value }}>
    <AccordionItem ref={ref} value={value} {...props}>
      {children}
    </AccordionItem>
  </AccordionItemContext.Provider>
));
AccordionItemWithContext.displayName = "AccordionItem";

export {
  Accordion,
  AccordionItemWithContext as AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
