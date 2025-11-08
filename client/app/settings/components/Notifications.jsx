import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const getNotificationSettings = async () => {
  return {
    taskReminders: true,
    projectActivity: true,
    weeklySummary: false,
    emailUpdates: false,
    productAnnouncements: true,
  };
};

const Notifications = async () => {
  const settings = await getNotificationSettings();

  return (
    <section className="w-full px-8 py-10 flex justify-center">
      <Card className="w-full max-w-6xl bg-secondary/40 border border-border/50 shadow-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-semibold">Notifications & Updates</CardTitle>
        </CardHeader>

        <CardContent className="space-y-10 px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">Task Reminders</p>
              <p className="text-sm text-muted-foreground">
                Get notified when tasks are approaching their due time.
              </p>
            </div>
            <Switch defaultChecked={settings.taskReminders} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">Project Activity</p>
              <p className="text-sm text-muted-foreground">
                Receive notifications when updates are made to your projects.
              </p>
            </div>
            <Switch defaultChecked={settings.projectActivity} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">Weekly Summary</p>
              <p className="text-sm text-muted-foreground">
                Get a weekly summary of your completed and pending tasks.
              </p>
            </div>
            <Switch defaultChecked={settings.weeklySummary} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">Email Updates</p>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for reminders and updates.
              </p>
            </div>
            <Switch defaultChecked={settings.emailUpdates} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">Product Announcements</p>
              <p className="text-sm text-muted-foreground">
                Stay informed about new features, tips, and improvements.
              </p>
            </div>
            <Switch defaultChecked={settings.productAnnouncements} />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end pt-8">
          <Button className="px-6 text-base">Save Changes</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Notifications;
