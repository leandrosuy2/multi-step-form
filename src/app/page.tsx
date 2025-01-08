import MultiStepForm from './components/MultiStepForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Formulário de Cadastro</h1>
        <MultiStepForm />
      </div>
    </div>
  );
}
