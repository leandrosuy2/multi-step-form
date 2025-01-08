'use client';

import { useFormContext } from "react-hook-form";

const Step3 = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Confirmação e Observações</h2>

            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        {...register("confirmation")}
                        className="mr-2"
                    />
                    Aceito os termos e condições.
                </label>
                {errors.confirmation && (
                    <p className="text-red-500 text-sm">{errors.confirmation.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Observações:</label>
                <textarea
                    {...register("notes")}
                    className="w-full px-3 py-2 border rounded-md"
                    rows="4"
                />
            </div>
        </div>
    );
};

export default Step3;

