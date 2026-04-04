import type { ChangeEvent, FC, ReactNode } from "react";

interface FloatingLabelSelectProps {
    label: string;
    newSelectClassName?: string;
    selectClassName?: string;
    newLabelClassName?: string;
    labelClassName?: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    errors?: string[];
    children: ReactNode;
}

const FloatingLabelSelect: FC<FloatingLabelSelectProps> = ({
    label,
    newSelectClassName,
    selectClassName,
    newLabelClassName,
    labelClassName,
    name,
    value,
    onChange,
    required,
    autoFocus,
    disabled,
    errors,
    children,
}) => {
    return (
        <div className="relative">
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                autoFocus={autoFocus}
                disabled={disabled}
                className={`${
                    newSelectClassName
                        ? newSelectClassName
                        : `peer w-full border-0 border-b border-slate-700 bg-transparent px-0 pt-6 pb-2 text-[16px] text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-0 ${selectClassName || ""}`
                }`}
            >
                {children}
            </select>

            <label
                htmlFor={name}
                className={
                    newLabelClassName
                        ? newLabelClassName
                        : `absolute left-0 top-2 text-sm text-slate-600 transition-all
                           peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
                           peer-placeholder-shown:text-slate-500
                           peer-focus:top-2 peer-focus:text-sm peer-focus:text-slate-600
                           ${labelClassName || ""}`
                }
            >
                {label}
                {required && <span className="ml-1 text-red-600">*</span>}
            </label>

            {errors && errors.length > 0 && (
                <span className="text-red-600 text-sm">{errors[0]}</span>
            )}
        </div>
    );
};

export default FloatingLabelSelect;