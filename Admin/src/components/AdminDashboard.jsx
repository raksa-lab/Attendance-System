import Overview from "../../Organizer/components/Overview";
import Createvent from "../../Organizer/components/Createvent";
import VieweventDetail from "../../Organizer/components/VieweventDetail";
import EventDetail from "../../Organizer/components/EventDetail";
import Update from "../../Organizer/components/Update";
import Delete from "../../Organizer/components/Delete";
import Deletesucess from "../../Organizer/components/Deletesucess";
import Edit from "../../Organizer/components/Edit";

// Example usage in your AdminDashboard component
export default function AdminDashboard() {
  return (
    <div>
      <Overview />
      <Createvent />
      <VieweventDetail />
      <EventDetail />
      <Update />
      <Delete />
      <Deletesucess />
      <Edit />
    </div>
  );
}