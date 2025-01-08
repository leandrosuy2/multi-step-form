'use client';
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

// Define os schemas para cada etapa
const stepSchemas = [
    z.object({
        name: z.string().nonempty("O nome é obrigatório."),
        email: z.string().email("Insira um e-mail válido."),
        phone: z.string().nonempty("O telefone é obrigatório."),
    }),
    z.object({
        age: z.number().min(18, "Você deve ter pelo menos 18 anos."),
        address: z.string().nonempty("O endereço é obrigatório."),
        city: z.string().nonempty("A cidade é obrigatória."),
    }),
    z.object({
        confirmation: z.literal(true, {
            errorMap: () => ({ message: "Você deve aceitar os termos." }),
        }),
        notes: z.string().optional(),
    }),
];

// Combina os schemas para validação completa no final
const combinedSchema = stepSchemas.reduce((acc, curr) => acc.merge(curr), z.object({}));

const MultiStepForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({}); // Armazena os dados de todas as etapas
    const isLastStep = step === stepSchemas.length - 1;

    // Configuração do React Hook Form
    const methods = useForm({
        resolver: zodResolver(stepSchemas[step]),
        mode: "onChange",
        defaultValues: formData, // Define os valores padrão para manter os dados
    });

    const onSubmit = (data) => {
        // Atualiza o estado com os dados da etapa atual
        setFormData((prev) => ({ ...prev, ...data }));

        if (!isLastStep) {
            // Vai para a próxima etapa
            setStep((prev) => prev + 1);
        } else {
            // Envia os dados finais
            console.log("Dados do formulário:", { ...formData, ...data });
        }
    };

    const onBack = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    const steps = [<Step1 />, <Step2 />, <Step3 />];

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-md"
            >
                {steps[step]}

                <div className="flex justify-between mt-4">
                    {step > 0 && (
                        <button
                            type="button"
                            onClick={onBack}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                        >
                            Voltar
                        </button>
                    )}

                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        {isLastStep ? "Enviar" : "Próximo"}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

export default MultiStepForm;
