'use client';

import { useFormContext } from "react-hook-form";

const Step1 = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Informações Pessoais</h2>

            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-1">Nome:</label>
                <input
                    {...register("name")}
                    className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Digite seu nome completo"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-1">Email:</label>
                <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Digite seu email"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-1">Telefone:</label>
                <input
                    type="tel"
                    {...register("phone")}
                    className={`w-full px-4 py-2 border ${errors.phone ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="(XX) XXXXX-XXXX"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
            </div>
        </div>
    );
};

export default Step1;
