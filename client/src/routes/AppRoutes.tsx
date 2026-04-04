import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import FloatingLabelInput from "../components/Input/FloatingLabelInput";
import FloatingLabelSelect from "../components/Input/Select/FloatingLabelSelect";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
} from "../components/Table";

const SampleComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const genders = [
        { value: "", text: "Select Gender" },
        { value: "1", text: "Male" },
        { value: "2", text: "Female" },
        { value: "3", text: "Preferred Not to Say" },
    ];

    return (
        <div className="px-10 py-8">
            <h1 className="mb-6 text-[20px] font-medium text-red-700">
                Hello World
            </h1>

            <p className="font-medium">First Name: {firstName}</p>

            <div className="space-y-6">
                <FloatingLabelInput
                    label="First Name"
                    type="text"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    autoFocus
                />

                <p className="font-medium">Last Name: {lastName}</p>

                <FloatingLabelInput
                    label="Last Name"
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <p className="font-medium">Date Of Birth: {birthDate}</p>

                <FloatingLabelInput
                    label="Birth Date"
                    type="date"
                    name="birth_date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />

                <p className="font-medium">Password: {password}</p>

                <FloatingLabelInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="font-medium">Gender: {gender}</p>

                <div className="mb-4">
                    <FloatingLabelSelect
                        label="Gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        {genders.map((item, index) => (
                            <option value={item.value} key={index}>
                                {item.text}
                            </option>
                        ))}
                    </FloatingLabelSelect>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">
                    <Table>
                        <TableHeader className="sticky top-0 z-30 border-b border-gray-100 bg-blue-600 text-xs text-white">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-center"
                                >
                                    No.
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-start"
                                >
                                    Gender
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {genders.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="px-4 py-4 text-center">
                                        {item.value || "-"}
                                    </TableCell>
                                    <TableCell className="px-4 py-4 text-start">
                                        {item.text}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<SampleComponent />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;