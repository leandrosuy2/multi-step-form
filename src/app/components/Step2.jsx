'use client';

import { useFormContext } from "react-hook-form";

const Step2 = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Informações Adicionais</h2>

            <div className="mb-4">
                <label className="block mb-1">Idade:</label>
                <input
                    type="number"
                    {...register("age", { valueAsNumber: true })}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.age && (
                    <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
            </div>

            <div className="mb-4">
                <label className="block mb-1">Endereço:</label>
                <input
                    {...register("address")}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                )}
            </div>

            <div>
                <label className="block mb-1">Cidade:</label>
                <input
                    {...register("city")}
                    className="w-full px-3 py-2 border rounded-md"
                />
                {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
            </div>
        </div>
    );
};

export default Step2;
