import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import { Eye } from "lucide-react"; // Eye icon for view
import { useGetAllUsersQuery } from "@/redux/features/users/users.api";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const UserManagement = () => {
  const { data: allUsersData, isLoading } = useGetAllUsersQuery(undefined);
  const allUsers = allUsersData?.data || [];
  const [search, setSearch] = useState<string>("");

  const { control, setValue } = useForm({});

  // Filtered data based on search
  const filteredData = useMemo(() => {
    if (!allUsers) return [];
    const searchValue = search.toLowerCase();
    return allUsers.filter((user) => {
      return (
        user?.name?.toLowerCase().includes(searchValue) ||
        user?.role.toLowerCase().includes(searchValue) ||
        user?.phone.toLowerCase().includes(searchValue)
      );
    });
  }, [search, allUsers]);

  const form = useForm({
    defaultValues: {
      blocked: false,
      role: "", // default value for role
    },
  });

  return (
    <div className="flex flex-1 min-h-screen bg-white">
      <div className="p-2 md:p-10 w-full">
        <div className="min-h-screen bg-white">
          <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex justify-between border-b pb-2">
              <h1 className="text-xl font-bold">Manage Users</h1>
              <Input
                value={search}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User Name</TableHead>
                  <TableHead>User Phone</TableHead>
                  <TableHead>User Role</TableHead>
                  <TableHead>Account Status</TableHead>
                  <TableHead className="w-[100px] text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((user) => (
                  <TableRow key={user?._id}>
                    <TableCell>{user?.name}</TableCell>
                    <TableCell>{user?.phone}</TableCell>
                    <TableCell>{user?.role}</TableCell>
                    <TableCell>
                      <span
                        className={`font-bold rounded ${
                          user?.blocked ? "bg-red-500" : "bg-green-500"
                        } text-white py-1 px-2`}
                      >
                        {user?.blocked ? "Blocked" : "Active"}
                      </span>
                    </TableCell>
                    <TableCell className="flex justify-end gap-2">
                      {/* Eye Icon to view the user info */}
                      <Modal>
                        <ModalTrigger>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-blue-500"
                          >
                            <Eye className="text-white" />
                          </Button>
                        </ModalTrigger>
                        <ModalBody>
                          <ModalContent>
                            <h4 className="text-2xl font-bold mb-4 text-center">
                              User Info Update
                            </h4>
                            <form className="space-y-4">
                              <FormField
                                control={form.control}
                                name="blocked"
                                render={({ field }) => (
                                  <div>
                                    <label>Blocked Status</label>
                                    <Switch
                                    defaultChecked={user?.blocked}
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </div>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                  <div>
                                    <label>Role</label>
                                    <Switch
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </div>
                                )}
                              />
                            </form>
                          </ModalContent>
                        </ModalBody>
                      </Modal>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
