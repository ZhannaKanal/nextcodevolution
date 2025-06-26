import { Card } from "@/app/components/card";
import Link from "next/link";
import '../../../globals.css'

export default function ArchivedNotifications() {
  return(
  <Card>
    <div>Archived</div>
    <div className="text-[blue]">
      <Link href='/complex-dashboard'>Default</Link>
    </div>
  </Card>);
}
