import { useState } from "react";
import { Plus, Search, ShieldCheck, Edit2, Trash2, X } from "lucide-react";
import { toast } from "sonner";

const mockAdmins = [
  { id: "1", name: "Super Admin", email: "admin@fitapp.com", role: "Super Administrador", status: "Activo" },
  { id: "2", name: "Moderador Carlos", email: "carlos@fitapp.com", role: "Moderador", status: "Activo" },
  { id: "3", name: "Entrenador Ana", email: "ana@fitapp.com", role: "Editor de Contenido", status: "Activo" },
];

export function Admins() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"create" | "edit">("create");

  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
    setShowModal(false);
  };

  const openModal = (type: "create" | "edit") => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestión de Administradores</h1>
          <p className="text-zinc-400 text-sm mt-1">Controla el acceso al panel administrativo</p>
        </div>
        <button
          onClick={() => openModal("create")}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Crear administrador
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar administrador..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-800">
            <thead className="bg-zinc-950/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Usuario</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Rol</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {mockAdmins.map((admin) => (
                <tr key={admin.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                        <ShieldCheck className="h-5 w-5 text-zinc-400" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{admin.name}</div>
                        <div className="text-xs text-emerald-400">{admin.status}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{admin.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <button onClick={() => openModal("edit")} className="text-blue-400 hover:text-blue-300 transition-colors p-1" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleAction('Eliminar administrador')} className="text-red-500 hover:text-red-400 transition-colors p-1" title="Eliminar">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <h3 className="text-lg font-medium text-white">
                {modalType === "create" ? "Crear Administrador" : "Editar Administrador"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre completo</label>
                <input type="text" placeholder="Ej. Juan Pérez" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Correo electrónico</label>
                <input type="email" placeholder="admin@fitapp.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Rol en el sistema</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option>Super Administrador</option>
                  <option>Moderador</option>
                  <option>Editor de Contenido</option>
                  <option>Analista de Datos</option>
                </select>
                <p className="mt-1.5 text-xs text-zinc-500">
                  Los roles definen los permisos y accesos dentro del panel.
                </p>
              </div>

              {modalType === "create" && (
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Contraseña temporal</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/50 flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Cancelar
              </button>
              <button 
                onClick={() => handleAction(modalType === "create" ? "Crear administrador" : "Guardar administrador")} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
