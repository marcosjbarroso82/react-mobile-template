import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Inicio - App Móvil" },
    { name: "description", content: "Página principal de la aplicación móvil" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Bienvenido</h1>
        <p className="text-sm text-gray-600 mt-1">Tu aplicación móvil</p>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 mb-3">Acciones Rápidas</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900">Nuevo</h3>
            <p className="text-xs text-gray-600">Crear algo nuevo</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900">Completar</h3>
            <p className="text-xs text-gray-600">Ver tareas</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4">
        <h2 className="text-lg font-medium text-gray-900 mb-3">Actividad Reciente</h2>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Nueva actualización disponible</p>
                <p className="text-xs text-gray-600">Hace 2 horas</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Tarea completada</p>
                <p className="text-xs text-gray-600">Ayer</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Recordatorio pendiente</p>
                <p className="text-xs text-gray-600">Hace 3 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
