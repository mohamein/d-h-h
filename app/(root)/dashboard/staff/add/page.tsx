import AddEmployee from "@/components/forms/add/AddEmploye";

const Employee = () => {
  return (
    <div className="flex flex-col space-y-4 px-4">
      <h2 className="font-semibold text-xl text-gray-600">Add Employee.</h2>
      <p className="text-gray-500">Add new employee to the system.</p>

      <AddEmployee />
    </div>
  );
};

export default Employee;
