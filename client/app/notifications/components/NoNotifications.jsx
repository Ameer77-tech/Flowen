import React from "react";
import { BellOff } from "lucide-react";

// You would typically import Card and CardContent if using the actual shadcn components
// import { Card, CardContent } from '@/components/ui/card';
// Since this is a simple "No Content" block, we'll implement the pattern directly with Tailwind classes.

const NoNotifications = () => {
  return (
    // Mimics the base styling of a Shadcn Card for a clean, contained look
    <div
      className="
      w-full max-w-sm mx-auto 
      p-8 sm:p-12 
      bg-card text-card-foreground 
      rounded-lg border 
      shadow-sm 
      flex flex-col items-center justify-center 
      space-y-4
    "
    >
      {/* Icon: Large, Bold, and uses the Primary/Accent Color */}
      <div
        className="
        text-4xl sm:text-5xl 
        text-primary 
        p-3 
        bg-primary/10 
        rounded-full 
        flex items-center justify-center
      "
      >
        <BellOff className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Title: Uses Primary Text Color for High Readability */}
      <h3
        className="
        text-xl sm:text-2xl 
        font-semibold 
        text-foreground
      "
      >
        No Notifications Yet
      </h3>

      {/* Message: Uses Muted Text Color (Secondary) for a Subtle Hint */}
      <p
        className="
        text-center 
        text-sm sm:text-base 
        text-muted-foreground
      "
      >
        All caught up! We'll notify you when new activities or updates occur.
      </p>

      {/* Optional: A simple button to explore or refresh */}
      {/* If you have the Shadcn Button component, uncomment the line below */}
      {/* <Button variant="outline" className="mt-2">Check Updates</Button> */}
    </div>
  );
};

export default NoNotifications;
