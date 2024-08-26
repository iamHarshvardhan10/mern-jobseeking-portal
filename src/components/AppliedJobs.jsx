import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const appledJobs = [1, 2];
const AppliedJobs = () => {
  return (
    <div>
      <Table>
        <TableCaption>A List Of Your Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appledJobs.length > 0 ? (
            appledJobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>createdAt</TableCell>
                <TableCell>title</TableCell>
                <TableCell>Name</TableCell>
                <TableCell className="text-right">
                  <Badge>Status</Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <span>You Havent applied any job yet.</span>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;
