import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
const DashboardCard = ({ title, count, description, trend }) => {
  return (
    <Card className={"bg-secondary rounded-2xl border-0"}>
      <CardHeader className={"p-0 flex justify-between mb-2"}>
        <CardTitle className={"ml-5"}>{title}</CardTitle>
        <p className="text-right text-foreground hidden lg:block md:block text-sm  sm:underline cursor-pointer mr-5">
          CHECK
        </p>
      </CardHeader>
      <CardContent className={"p-0"}>
        <span className="font-bold text-3xl px-5">{count}</span>  
        <CardDescription className={"pt-3"}>
          {trend == "up" ? (
            <p className="flex items-center text-emerald-500 lg:justify-end md:justify-end justify-center text-xs lg:text-sm lg:px-5">
              <ArrowUp size={15} className="text-emerald-500" />{" "}
              <span>10% since last week</span>
            </p>
          ) : (
            <p className="flex items-center text-red-500  lg:justify-end md:justify-end justify-center text-xs lg:text-sm lg:px-5">
              <ArrowDown size={15} className="text-red-500" />{" "}
              <span>10% since last week</span>
            </p>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
