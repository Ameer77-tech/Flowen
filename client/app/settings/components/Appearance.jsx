import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const getAppearanceSettings = async () => {
  return {
    theme: "system",
    accent: "blue",
    font: "inter",
    density: "comfortable",
  };
};

const Appearance = async () => {
  const settings = await getAppearanceSettings();

  return (
    <section className="w-full px-8 py-10 flex justify-center">
      <Card className="w-full max-w-6xl bg-secondary/40 border border-border/50 shadow-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-semibold">Appearance</CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 px-8">
          <div className="space-y-3">
            <Label className="text-lg  font-medium text-foreground">Theme</Label>
            <Select defaultValue={settings.theme}>
              <SelectTrigger className="w-100">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-lg font-medium text-foreground">Accent Color</Label>
            <Select defaultValue={settings.accent}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Select Accent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="violet">Violet</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-lg font-medium text-foreground">Font</Label>
            <Select defaultValue={settings.font}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Select Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="roboto">Roboto</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label className="text-lg  font-medium text-foreground">Layout Density</Label>
            <RadioGroup defaultValue={settings.density} className="flex gap-6 pt-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="comfortable" />
                <Label htmlFor="comfortable" className="text-sm">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="compact" />
                <Label htmlFor="compact" className="text-sm">Compact</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end pt-8">
          <Button className="px-6 text-base">Save Changes</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Appearance;
