import { Check } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import "../input.css";

type CardProps = React.ComponentProps<typeof Card>;

export function ShadcnComponent({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader className="flex items-center justify-center">
        <Avatar className="w-[200px] h-[200px]">
          <AvatarImage src="https://images.prom.ua/4601879626_w640_h640_yarkie-muzhskie-krossovki.jpg" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <CardTitle>Sneakers</CardTitle>
        <CardDescription>Nike air max</CardDescription>
        <CardDescription>120$</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Add to buy
        </Button>
      </CardFooter>
    </Card>
  );
}
