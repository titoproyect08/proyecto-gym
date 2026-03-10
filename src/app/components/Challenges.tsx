import { useState } from "react";
import { Plus, Trophy, Calendar, CheckCircle2, Play, StopCircle, Edit2, X } from "lucide-react";
import { toast } from "sonner";

const mockChallenges = [
  { id: "1", name: "Reto Verano Fit", duration: "30 días", participants: 154, reward: "1 mes Premium gratis", status: "Activo" },
  { id: "2", name: "10,000 Pasos Diarios", duration: "14 días", participants: 320, reward: "Insignia Caminante", status: "Borrador" },
  { id: "3", name: "Fuerza Extrema", duration: "60 días", participants: 85, reward: "Camiseta Oficial", status: "Finalizado" },
];

export function Challenges() {
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
          <h1 className="text-2xl font-bold text-white">Gestión de Retos</h1>
          <p className="text-zinc-400 text-sm mt-1">Crea desafíos para mantener motivada a la comunidad</p>
        </div>
        <button
          onClick={() => openModal("create")}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Crear reto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockChallenges.map((challenge) => (
          <div key={challenge.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm hover:border-zinc-700 transition-all group">
            <div className="h-32 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative p-6 border-b border-zinc-800">
              <Trophy className={`h-12 w-12 ${challenge.status === 'Activo' ? 'text-rose-500' : challenge.status === 'Finalizado' ? 'text-zinc-600' : 'text-zinc-400'}`} />
              <div className="absolute top-4 right-4">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border 
                  ${challenge.status === 'Activo' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
                    challenge.status === 'Borrador' ? 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' : 
                    'bg-zinc-800 text-zinc-500 border-zinc-700'}`}>
                  {challenge.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-4">{challenge.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-zinc-300">
                  <Calendar className="w-4 h-4 mr-2 text-zinc-500" />
                  <span className="font-medium text-white">{challenge.duration}</span>
                </div>
                <div className="flex items-center text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-zinc-500" />
                  <span className="font-medium text-white">{challenge.participants} participantes</span>
                </div>
                <div className="flex items-start text-sm text-zinc-300">
                  <Trophy className="w-4 h-4 mr-2 text-zinc-500 mt-0.5" />
                  <span className="font-medium text-white line-clamp-1">{challenge.reward}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-zinc-800">
                <button onClick={() => openModal("edit")} className="flex items-center justify-center px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors">
                  <Edit2 className="w-4 h-4 mr-1.5 text-zinc-400" />
                  Editar
                </button>
                
                {challenge.status === 'Borrador' ? (
                  <button onClick={() => handleAction('Activar reto')} className="flex items-center justify-center px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-sm font-medium rounded-lg transition-colors">
                    <Play className="w-4 h-4 mr-1.5" />
                    Activar
                  </button>
                ) : challenge.status === 'Activo' ? (
                  <button onClick={() => handleAction('Finalizar reto')} className="flex items-center justify-center px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium rounded-lg transition-colors">
                    <StopCircle className="w-4 h-4 mr-1.5 text-zinc-400" />
                    Finalizar
                  </button>
                ) : (
                  <button disabled className="flex items-center justify-center px-3 py-2 bg-zinc-950 text-zinc-600 text-sm font-medium rounded-lg cursor-not-allowed border border-zinc-800">
                    Completado
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <h3 className="text-lg font-medium text-white">
                {modalType === "create" ? "Crear Nuevo Reto" : "Editar Reto"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre del reto</label>
                <input type="text" placeholder="Ej. Reto Abdomen Plano 30 Días" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Duración (días)</label>
                  <input type="number" placeholder="Ej. 30" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Dificultad</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>Cualquier nivel</option>
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Recompensa</label>
                <input type="text" placeholder="Ej. Medalla virtual y 10% dto en tienda" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Reglas e instrucciones</label>
                <textarea rows={4} placeholder="Condiciones para completar el reto..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"></textarea>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/50 flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Cancelar
              </button>
              <button 
                onClick={() => handleAction(modalType === "create" ? "Crear reto" : "Editar reto")} 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
              >
                {modalType === "create" ? "Crear Reto" : "Guardar Cambios"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
