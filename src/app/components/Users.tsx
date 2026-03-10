import { useState } from "react";
import { Plus, Search, MoreVertical, Edit2, Trash2, Eye, Ban, X } from "lucide-react";
import { toast } from "sonner";

const mockUsers = [
  { id: "1", name: "Juan Pérez", email: "juan@example.com", level: "Intermedio", status: "Activo", date: "2023-10-15" },
  { id: "2", name: "Ana Gómez", email: "ana@example.com", level: "Principiante", status: "Activo", date: "2023-11-02" },
  { id: "3", name: "Carlos Ruiz", email: "carlos@example.com", level: "Avanzado", status: "Inactivo", date: "2023-09-20" },
  { id: "4", name: "María López", email: "maria@example.com", level: "Principiante", status: "Activo", date: "2023-12-05" },
  { id: "5", name: "Luis Torres", email: "luis@example.com", level: "Intermedio", status: "Suspendido", date: "2023-08-11" },
];

export function Users() {
  const [showModal, setShowModal] = useState(false);

  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
    setShowModal(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestión de Usuarios</h1>
          <p className="text-zinc-400 text-sm mt-1">Administra los usuarios registrados en la app</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Crear usuario
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar por nombre, email o ID..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <select className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Todos los niveles</option>
          <option>Principiante</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
        </select>
        <select className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Todos los estados</option>
          <option>Activo</option>
          <option>Inactivo</option>
          <option>Suspendido</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-800">
            <thead className="bg-zinc-950/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Nombre</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Nivel</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Estado</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Fecha de registro</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">#{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">
                      {user.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400' : 
                        user.status === 'Inactivo' ? 'bg-zinc-500/10 text-zinc-400' : 
                        'bg-red-500/10 text-red-400'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{user.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={() => handleAction('Ver usuario')} className="text-zinc-400 hover:text-white transition-colors p-1" title="Ver perfil">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleAction('Editar usuario')} className="text-blue-500 hover:text-blue-400 transition-colors p-1" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleAction('Desactivar usuario')} className="text-amber-500 hover:text-amber-400 transition-colors p-1" title="Desactivar">
                        <Ban className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleAction('Eliminar usuario')} className="text-red-500 hover:text-red-400 transition-colors p-1" title="Eliminar">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-zinc-800 flex items-center justify-between">
          <p className="text-sm text-zinc-400">Mostrando <span className="font-medium text-white">5</span> de <span className="font-medium text-white">2,405</span> usuarios</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-zinc-700 rounded-md text-sm text-zinc-400 hover:bg-zinc-800 transition-colors disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-zinc-700 rounded-md text-sm text-zinc-400 hover:bg-zinc-800 transition-colors">Siguiente</button>
          </div>
        </div>
      </div>

      {/* Modal / Formulario Simulado */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <h3 className="text-lg font-medium text-white">Crear Nuevo Usuario</h3>
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
                <input type="email" placeholder="ejemplo@correo.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Nivel fitness</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Objetivo</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>Pérdida de peso</option>
                    <option>Hipertrofia</option>
                    <option>Resistencia</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Estado de cuenta</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/50 flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Cancelar
              </button>
              <button onClick={() => handleAction('Crear usuario')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                Guardar Usuario
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
