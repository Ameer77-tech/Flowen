import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const getPrivacySettings = async () => {
  return {
    localBackup: true,
    autoClearLogs: false,
    analyticsAllowed: false,
  };
};

const Privacy = async () => {
  const settings = await getPrivacySettings();

  return (
    <section className="w-full px-8 py-10 flex justify-center">
      <Card className="w-full max-w-6xl bg-secondary/40 border border-border/50 shadow-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-semibold">Privacy</CardTitle>
        </CardHeader>

        <CardContent className="space-y-10 px-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">
                Local Backup
              </p>
              <p className="text-sm text-muted-foreground">
                Automatically create local backups of your data.
              </p>
            </div>
            <Switch defaultChecked={settings.localBackup} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">
                Auto-Clear Activity Logs
              </p>
              <p className="text-sm text-muted-foreground">
                Automatically clear your activity logs after 30 days.
              </p>
            </div>
            <Switch defaultChecked={settings.autoClearLogs} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-foreground">
                Usage Analytics
              </p>
              <p className="text-sm text-muted-foreground">
                Share anonymous usage data to help improve the app.
              </p>
            </div>
            <Switch defaultChecked={settings.analyticsAllowed} />
          </div>

          <div className="pt-6 border-t border-border/50">
            <p className="text-lg font-medium text-foreground mb-3">
              Export Your Data
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Download all your tasks, projects, and preferences as a local
              backup file.
            </p>
            <Button variant="outline" className="px-6">
              Export Data
            </Button>
          </div>

          <div className="pt-6 border-t border-border/50">
            <p className="text-lg font-medium text-destructive mb-3">
              Delete Account
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Permanently delete your data from this device. This action cannot
              be undone.
            </p>
            <Button variant="destructive" className="px-6">
              Delete Account
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end pt-8">
          <Button className="px-6 text-base">Save Changes</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Privacy;
