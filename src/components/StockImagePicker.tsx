import { Image as LucideImage } from "lucide-react";
import { cn } from "@/lib/utils";

// Free-to-use stock images from Unsplash (sports, team, university themed)
const STOCK_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
    label: "Basketball",
  },
  {
    url: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800",
    label: "Basketball game",
  },
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    label: "Team huddle",
  },
  {
    url: "https://images.unsplash.com/photo-1560273747-50ed41967ca1?auto=format&fit=crop&q=80&w=800",
    label: "Swimming",
  },
  {
    url: "https://images.unsplash.com/photo-1607978720255-838592994ca5?auto=format&fit=crop&q=80&w=800",
    label: "Volleyball",
  },
  {
    url: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=800",
    label: "Running",
  },
  {
    url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800",
    label: "Stadium",
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    label: "Trophy",
  },
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    label: "Gym",
  },
  {
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    label: "Athletes",
  },
  {
    url: "https://images.unsplash.com/photo-1504450758481-7338bbe75c4e?auto=format&fit=crop&q=80&w=800",
    label: "Stadium crowd",
  },
  {
    url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    label: "Team celebration",
  },
];

interface StockImagePickerProps {
  onSelect: (url: string) => void;
  selectedUrl?: string;
  className?: string;
}

export default function StockImagePicker({ onSelect, selectedUrl, className }: StockImagePickerProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-xs text-gray-500 flex items-center gap-1">
        <LucideImage className="h-3.5 w-3.5" />
        Choose from free stock images (Unsplash)
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto rounded-md border border-gray-200 p-2 bg-gray-50">
        {STOCK_IMAGES.map(({ url, label }) => (
          <button
            key={url}
            type="button"
            onClick={() => onSelect(url)}
            className={cn(
              "relative aspect-video rounded overflow-hidden border-2 transition focus:outline-none focus:ring-2 focus:ring-maroon focus:ring-offset-1",
              selectedUrl === url
                ? "border-maroon ring-2 ring-maroon/30"
                : "border-transparent hover:border-gray-300"
            )}
          >
            <img
              src={url}
              alt={label}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export { STOCK_IMAGES };
