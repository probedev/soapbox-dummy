import * as React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSwitch.Root>
>(({ className, ...props }, ref) => (
  <RadixSwitch.Root
    ref={ref}
    className={cn(
      "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-300 transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2",
      className
    )}
    {...props}
  >
    <RadixSwitch.Thumb className="inline-block h-4 w-4 translate-x-0.5 transform rounded-full bg-white transition-transform" />
  </RadixSwitch.Root>
));
Switch.displayName = RadixSwitch.Root.displayName;

export { Switch };