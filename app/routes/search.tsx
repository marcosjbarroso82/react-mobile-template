import type { Route } from "./+types/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Buscar - App Móvil" },
    { name: "description", content: "Página de búsqueda" },
  ];
}

export default function Search() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Buscar</h1>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 space-y-3">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-900">Resultado 1</h3>
          <p className="text-sm text-gray-600 mt-1">Descripción del resultado de búsqueda...</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-900">Resultado 2</h3>
          <p className="text-sm text-gray-600 mt-1">Otro resultado de búsqueda interesante...</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-medium text-gray-900">Resultado 3</h3>
          <p className="text-sm text-gray-600 mt-1">Más contenido para mostrar...</p>
        </div>
      </div>
    </div>
  );
}
