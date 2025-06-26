import { Card } from "@/app/components/card";
import Link from "next/link";
import '../../globals.css'

export default function Notifications() {
  return(
  <Card>
    <div>Notifications</div>
    <div className="text-[blue]">
      <Link href='/complex-dashboard/archived'>Archived</Link>
    </div>
  </Card>);
}
