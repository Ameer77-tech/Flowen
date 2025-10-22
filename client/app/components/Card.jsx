import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
const DashboardCard = ({ title, count, description, trend }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-right text-sm text-cyan-500 sm:underline cursor-pointer">
          CHECK
        </p>
      </CardHeader>
      <CardContent>
        <span className="font-bold text-3xl">{count}</span>
        <CardDescription className={"pt-3"}>
          {trend == "up" ? (
            <p className="flex items-center text-emerald-500 justify-end">
              <ArrowUp size={15} className="text-emerald-500" />{" "}
              <span>10% since last week</span>
            </p>
          ) : (
            <p className="flex items-center text-red-500 justify-end">
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
