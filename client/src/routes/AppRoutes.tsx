import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import FloatingLabelInput from "../components/Input/FloatingLabelInput";
import { useState } from "react";

const SampleComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");

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