import { useState } from "react";
import { Save, RefreshCw, Moon, Sun, Globe, Bell, Shield, Smartphone } from "lucide-react";
import { toast } from "sonner";

export function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [isDark, setIsDark] = useState(true);

  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
    if (action === "Cambiar tema") {
      setIsDark(!isDark);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Configuración del Sistema</h1>
          <p className="text-zinc-400 text-sm mt-1">Ajusta las preferencias globales de la plataforma</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleAction("Restablecer")}
            className="inline-flex items-center px-4 py-2 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-sm font-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Restablecer
          </button>
          <button
            onClick={() => handleAction("Guardar cambios")}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <Save className="w-4 h-4 mr-2" />
            Guardar cambios
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Menú de configuración */}
        <div className="md:col-span-1 space-y-1">
          <button
            onClick={() => setActiveTab("general")}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "general" ? "bg-blue-600/10 text-blue-500" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Globe className="w-4 h-4 mr-3" />
            General
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "preferences" ? "bg-blue-600/10 text-blue-500" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Smartphone className="w-4 h-4 mr-3" />
            Preferencias de App
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "notifications" ? "bg-blue-600/10 text-blue-500" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Bell className="w-4 h-4 mr-3" />
            Notificaciones
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "security" ? "bg-blue-600/10 text-blue-500" : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <Shield className="w-4 h-4 mr-3" />
            Seguridad
          </button>
        </div>

        {/* Panel de configuración */}
        <div className="md:col-span-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm min-h-[400px]">
            
            {activeTab === "general" && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="text-lg font-medium text-white border-b border-zinc-800 pb-3">Configuración General</h3>
                
                <div className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre de la plataforma</label>
                    <input type="text" defaultValue="FitApp Pro" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Correo electrónico de contacto</label>
                    <input type="email" defaultValue="soporte@fitapp.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="pt-2">
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Idioma principal</label>
                    <div className="flex gap-3">
                      <select className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                        <option>Español (ES)</option>
                        <option>Inglés (EN)</option>
                        <option>Portugués (PT)</option>
                      </select>
                      <button onClick={() => handleAction("Cambiar idioma")} className="px-4 py-2 border border-zinc-700 bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-colors">
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="text-lg font-medium text-white border-b border-zinc-800 pb-3">Preferencias de la App</h3>
                
                <div className="space-y-5 max-w-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-200">Tema del panel</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">Alterna entre modo oscuro y claro</p>
                    </div>
                    <button 
                      onClick={() => handleAction("Cambiar tema")}
                      className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                    >
                      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-200">Videos de ejercicios automáticos</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">Reproducir videos al abrir los detalles</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-200">Modo mantenimiento</h4>
                      <p className="text-xs text-zinc-500 mt-0.5">Desactiva el acceso a los usuarios</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="text-lg font-medium text-white border-b border-zinc-800 pb-3">Alertas y Notificaciones</h3>
                
                <div className="space-y-5 max-w-lg">
                  {[
                    "Nuevos usuarios registrados",
                    "Reportes de la comunidad",
                    "Suscripciones canceladas",
                    "Actualizaciones del sistema",
                    "Resúmenes semanales"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-zinc-300">{item}</h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={i !== 2} />
                        <div className="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="text-lg font-medium text-white border-b border-zinc-800 pb-3">Seguridad y Autenticación</h3>
                
                <div className="space-y-5 max-w-lg">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Contraseña actual</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Nueva contraseña</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="pt-4 border-t border-zinc-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-zinc-200">Autenticación de dos factores (2FA)</h4>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-800 text-zinc-400">Inactivo</span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-3">Agrega una capa extra de seguridad a tu cuenta administrativa.</p>
                    <button onClick={() => handleAction("Activar 2FA")} className="px-3 py-1.5 border border-zinc-700 bg-zinc-950 hover:bg-zinc-800 text-zinc-300 text-sm font-medium rounded-lg transition-colors">
                      Configurar 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
