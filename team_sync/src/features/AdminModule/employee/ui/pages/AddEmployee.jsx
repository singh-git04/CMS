import { useState } from "react";
import { useNavigate } from "react-router";

import AddEmployeeHeader from "../components/addEmployee/AddEmployeeHeader";
import PersonalInformation from "../components/addEmployee/PersonalInformation";
import EmploymentDetails from "../components/addEmployee/EmploymentDetails";
import FormActions from "../components/addEmployee/FormActions";
import { createEmployee } from "../../apis/employeeApi";

const AddEmployee = () => {
  const navigate = useNavigate();

  /* ============================
            PERSONAL INFO
     ============================ */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  /* ============================
         EMPLOYMENT DETAILS
     ============================ */

  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [status, setStatus] = useState("active");

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ============================
            IMAGE HANDLER
     ============================ */

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ============================
            SUBMIT
     ============================ */

  const handleSubmit =async   (e) => {

   e.preventDefault();
   
    setIsSubmitting(true);

    const employeeData = {
      name,
      email,
      bio,
      image,
      department,
      role,
      joiningDate,
      status,
      password:'12345678',
    };
     try {
  const res = await createEmployee(employeeData);

  console.log(res);

  navigate("/home/employee");
} catch (error) {
  console.log(error);
} finally {
  setIsSubmitting(false);
}

alert("Employee Added")
console.log(employeeData);

   
  };

  /* ============================
            CANCEL
     ============================ */

  const handleCancel = () => {
    navigate("/home/employee");
  };

  return (
    <section className="space-y-6">

      <AddEmployeeHeader />

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <PersonalInformation
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          bio={bio}
          setBio={setBio}
          preview={preview}
          onImageChange={handleImageChange}
        />

        <EmploymentDetails
          department={department}
          setDepartment={setDepartment}
          role={role}
          setRole={setRole}
          joiningDate={joiningDate}
          setJoiningDate={setJoiningDate}
          status={status}
          setStatus={setStatus}
        />

        <FormActions
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />

      </form>

    </section>
  );
};

export default AddEmployee;