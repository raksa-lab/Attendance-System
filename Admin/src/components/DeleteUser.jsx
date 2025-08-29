// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
"use client"



export default function DeleteUser() {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-900">
        Delete User
      </h2>

      {/* Search Form */}
      <div className="flex gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="First Name"
          className="border rounded-lg p-2 w-1/4"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border rounded-lg p-2 w-1/4"
        />
      </div>

      {/* User Table */}
      <Card className="w-full">
        <CardContent>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Name</th>
                <th className="p-2">Gender</th>
                <th className="p-2">Phone Number</th>
                <th className="p-2">University</th>
                <th className="p-2">Faculties</th>
                <th className="p-2">Departments</th>
                <th className="p-2">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Nov Raksa</td>
                <td className="p-2">Male</td>
                <td className="p-2">(225) 555-0118</td>
                <td className="p-2">Rupp</td>
                <td className="p-2">Engineering</td>
                <td className="p-2">ITE</td>
                <td className="p-2">2</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Nov Sreyneth</td>
                <td className="p-2">Male</td>
                <td className="p-2">(225) 555-0118</td>
                <td className="p-2">Rupp</td>
                <td className="p-2">Engineering</td>
                <td className="p-2">ITE</td>
                <td className="p-2">2</td>
              </tr>
              <tr>
                <td className="p-2">Nov Raksa</td>
                <td className="p-2">Male</td>
                <td className="p-2">(225) 555-0118</td>
                <td className="p-2">Rupp</td>
                <td className="p-2">Engineering</td>
                <td className="p-2">ITE</td>
                <td className="p-2">2</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <Button className="bg-indigo-900 text-white px-6">Delete User</Button>
        <Button variant="outline" className="px-6">Back</Button>
      </div>
    </div>
  );
}
