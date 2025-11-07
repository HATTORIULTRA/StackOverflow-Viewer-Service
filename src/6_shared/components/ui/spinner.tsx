import { Loader2 } from "lucide-react";
import { cn } from "@/6_shared/lib/utils";

export function Spinner({ size = "medium", className }: { size?: "small" | "medium" | "large"; className?: string }) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12"
  };
  return (
    <Loader2 className={cn("animate-spin text-primary", sizeClasses[size], className)} />
  );
}