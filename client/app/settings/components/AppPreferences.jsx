import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const getAppPreferences = async () => {
  return {
    confirmBeforeDelete: true,
    showTaskNotifications: true,
    autoDeleteCompleted: false,
    autoDeleteAfterDays: 7,
    showOverdueOnTop: true,
  };
};

const AppPreferences = async () => {
  const prefs = await getAppPreferences();

  return (
    <section className="w-full px-8 py-10 flex justify-center">
      <Card className="w-full max-w-6xl bg-secondary/40 border border-border/50 shadow-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-semibold">App Preferences</CardTitle>
        </CardHeader>

        <CardContent className="space-y-8 px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium text-foreground">Confirm Before Deleting</p>
              <p className="text-sm text-muted-foreground">
                Show a confirmation dialog before deleting any task or project.
              </p>
            </div>
            <Switch defaultChecked={prefs.confirmBeforeDelete} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium text-foreground">Task Notifications</p>
              <p className="text-sm text-muted-foreground">
                Get notified when tasks are due soon or overdue.
              </p>
            </div>
            <Switch defaultChecked={prefs.showTaskNotifications} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium text-foreground">Auto-Delete Completed Tasks</p>
              <p className="text-sm text-muted-foreground">
                Automatically remove completed tasks after a set number of days.
              </p>
            </div>
            <Switch defaultChecked={prefs.autoDeleteCompleted} />
          </div>

<div className="flex items-center gap-3">
  <Label htmlFor="autoDeleteDays" className="text-base font-medium">
    Auto-Delete After (Days)
  </Label>
  <Input
    id="autoDeleteDays"
    type="number"
    className="w-28"
    min={1}
    defaultValue={prefs.autoDeleteAfterDays}
  />
</div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium text-foreground">Show Overdue Tasks on Top</p>
              <p className="text-sm text-muted-foreground">
                Always list overdue tasks before others in lists.
              </p>
            </div>
            <Switch defaultChecked={prefs.showOverdueOnTop} />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end pt-8">
          <Button className="px-6 text-base">Save Changes</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AppPreferences;
