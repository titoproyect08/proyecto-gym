import { useState } from "react";
import { Plus, Search, Dumbbell, Play, Edit2, Trash2, X } from "lucide-react";
import { toast } from "sonner";

const mockExercises = [
  { id: "1", name: "Press de Banca", group: "Pecho", level: "Intermedio", type: "Fuerza", video: "Sí" },
  { id: "2", name: "Sentadilla Libre", group: "Piernas", level: "Avanzado", type: "Fuerza", video: "Sí" },
  { id: "3", name: "Remo con Mancuerna", group: "Espalda", level: "Principiante", type: "Fuerza", video: "No" },
  { id: "4", name: "Plancha Abdominal", group: "Core", level: "Principiante", type: "Resistencia", video: "Sí" },
  { id: "5", name: "Burpees", group: "Cuerpo Completo", level: "Avanzado", type: "Cardio", video: "Sí" },
];

export function Exercises() {
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
          <h1 className="text-2xl font-bold text-white">Gestión de Ejercicios</h1>
          <p className="text-zinc-400 text-sm mt-1">Administra la biblioteca de ejercicios y movimientos</p>
        </div>
        <button
          onClick={() => openModal("create")}
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Crear ejercicio
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar ejercicio..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <select className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Todos los grupos</option>
          <option>Pecho</option>
          <option>Espalda</option>
          <option>Piernas</option>
          <option>Core</option>
          <option>Brazos</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockExercises.map((exercise) => (
          <div key={exercise.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group">
            <div className="h-40 bg-zinc-950 flex items-center justify-center relative border-b border-zinc-800">
              <Dumbbell className="h-12 w-12 text-zinc-800" />
              {exercise.video === "Sí" && (
                <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center text-xs text-white border border-zinc-700">
                  <Play className="w-3 h-3 mr-1 text-blue-500" /> Video
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-2">{exercise.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">{exercise.group}</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">{exercise.level}</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300">{exercise.type}</span>
              </div>
              <div className="flex justify-between items-center border-t border-zinc-800 pt-4 mt-2">
                <button onClick={() => handleAction("Vista previa")} className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">Vista previa</button>
                <div className="flex space-x-2">
                  <button onClick={() => openModal("edit")} className="p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md text-zinc-300 transition-colors" title="Editar">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleAction("Eliminar ejercicio")} className="p-1.5 bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 rounded-md text-zinc-300 transition-colors" title="Eliminar">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <h3 className="text-lg font-medium text-white">{modalType === "create" ? "Crear Nuevo Ejercicio" : "Editar Ejercicio"}</h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre del ejercicio</label>
                <input type="text" placeholder="Ej. Press Militar" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Grupo muscular</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>Pecho</option>
                    <option>Espalda</option>
                    <option>Piernas</option>
                    <option>Hombros</option>
                    <option>Brazos</option>
                    <option>Core</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">Nivel de dificultad</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                    <option>Principiante</option>
                    <option>Intermedio</option>
                    <option>Avanzado</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Tipo de ejercicio</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                  <option>Fuerza</option>
                  <option>Cardio</option>
                  <option>Flexibilidad</option>
                  <option>Equilibrio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Descripción e instrucciones</label>
                <textarea rows={3} placeholder="Instrucciones paso a paso..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">Video demostración (URL)</label>
                <input type="url" placeholder="https://youtube.com/..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/50 flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Cancelar
              </button>
              <button onClick={() => handleAction(modalType === "create" ? 'Crear ejercicio' : 'Guardar cambios')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                {modalType === "create" ? "Crear Ejercicio" : "Guardar Cambios"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
