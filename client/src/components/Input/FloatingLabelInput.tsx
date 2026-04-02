import type { ChangeEvent, FC } from "react";
import { useState } from "react";
import { Eye, EyeOff, CalendarDays } from "lucide-react";

interface FloatingLabelInputProps {
    label: string;
    type: "text" | "date" | "password";
    name: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    readonly?: boolean
    errors?: string[];
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    required,
    autoFocus,
    disabled,
    readonly,
    errors,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
        type === "password" ? (showPassword ? "text" : "password") : type;

    const hasRightIcon = type === "date" || type === "password";

    return (
        <div className="relative w-full">
            <input
                type={inputType}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder=" "
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                readOnly={readonly}
                className={`
          peer block w-full appearance-none border-0 border-b-2 border-gray-800
          bg-transparent px-0 pt-6 pb-2.5 text-sm text-gray-900
          focus:border-blue-600 focus:outline-none focus:ring-0
          ${hasRightIcon ? "pr-10" : ""}
          ${disabled ? "cursor-not-allowed opacity-60" : ""}
        `}
            />

            <label
                htmlFor={name}
                className="
          absolute top-4 left-0 z-10 origin-[0] -translate-y-4 scale-75
          transform text-sm text-gray-700 duration-300
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-4
          peer-focus:scale-75
          peer-focus:text-blue-600
        "
            >
                {label}
                {required && <span className="ml-1 text-red-600">*</span>}
            </label>

            {type === "date" && (
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-700">
                    <CalendarDays size={18} />
                </span>
            )}

            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 hover:text-blue-600"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}

            {errors && errors.length > 0 && (
                <p className="mt-1 text-sm text-red-600">{errors[0]}</p>
            )}
        </div>
    );
};

export default FloatingLabelInput;