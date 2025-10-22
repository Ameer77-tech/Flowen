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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="font-bold text-2xl">{count}</span>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
