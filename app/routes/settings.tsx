import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Configuración - App Móvil" },
    { name: "description", content: "Página de configuración" },
  ];
}

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Configuración</h1>
      </div>

      {/* Settings Sections */}
      <div className="p-4 space-y-4">
        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Notificaciones</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Apariencia</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Tema</span>
              <span className="text-gray-500">Claro</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Tamaño de fuente</span>
              <span className="text-gray-500">Medio</span>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Privacidad</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Compartir datos de uso</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Permitir seguimiento</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">Acerca de</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Versión</span>
              <span className="text-gray-500">1.0.0</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Términos de Servicio</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-gray-900">Política de Privacidad</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
