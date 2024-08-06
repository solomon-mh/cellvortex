import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type DashboardCardProps = {
  title: string;
  subtitle: string | number;
  body: string | number;
  subtitleStyle?: React.CSSProperties;
};

export function DashboardCard({
  title,
  subtitle,
  body,
  subtitleStyle,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription style={subtitleStyle}>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
      <CardFooter>{title}</CardFooter>
    </Card>
  );
}
