import { useRef, useState } from "react";
import { CalendarDays, Eye, EyeOff } from "lucide-react";

type FloatingLabelInputProps = {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    autoFocus?: boolean;
};

const FloatingLabelInput = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    required = false,
    autoFocus = false,
}: FloatingLabelInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const isDate = type === "date";
    const isPassword = type === "password";

    const inputType = isPassword
        ? showPassword
            ? "text"
            : "password"
        : type;

    const openDatePicker = () => {
        if (inputRef.current) {
            inputRef.current.focus();

            if (typeof inputRef.current.showPicker === "function") {
                inputRef.current.showPicker();
            }
        }
    };

    return (
        <div className="relative w-full">
            <input
                ref={inputRef}
                type={inputType}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                autoFocus={autoFocus}
                placeholder=" "
                className={`
                    peer w-full border-0 border-b border-slate-700 bg-transparent
                    px-0 pt-6 pb-2 text-[16px] text-slate-900
                    focus:border-slate-900 focus:outline-none focus:ring-0
                    ${isDate ? "[&::-webkit-calendar-picker-indicator]:hidden" : ""}
                `}
            />

            <label
                htmlFor={name}
                className="
                    absolute left-0 top-2 text-sm text-slate-600 transition-all
                    peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-slate-500
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-slate-600
                "
            >
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>

            {isDate && (
                <button
                    type="button"
                    onClick={openDatePicker}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-700"
                >
                    <CalendarDays size={22} />
                </button>
            )}

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-700"
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            )}
        </div>
    );
};

export default FloatingLabelInput;