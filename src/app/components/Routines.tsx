import { useState } from "react";
import { Plus, Search, ClipboardList, Edit2, Trash2, Save, Send, PlusCircle, X } from "lucide-react";
import { toast } from "sonner";

const mockRoutines = [
  { id: "1", name: "Hipertrofia 4 Días", level: "Intermedio", duration: "60 min", objective: "Ganar masa muscular", status: "Publicada" },
  { id: "2", name: "Quema Grasa Express", level: "Principiante", duration: "30 min", objective: "Pérdida de peso", status: "Borrador" },
  { id: "3", name: "Powerlifting Básico", level: "Avanzado", duration: "90 min", objective: "Aumento de fuerza", status: "Publicada" },
];

export function Routines() {
  const [showEditor, setShowEditor] = useState(false);
  const [exercises, setExercises] = useState([{ id: 1, name: "Press de Banca", sets: "4", reps: "10" }]);

  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
    if (action === "Guardar rutina" || action === "Publicar rutina") {
      setShowEditor(false);
    }
  };

  const addExercise = () => {
    setExercises([...exercises, { id: Date.now(), name: "Nuevo Ejercicio", sets: "3", reps: "12" }]);
    toast.success("Ejercicio añadido (simulado)");
  };

  const removeExercise = (id: number) => {
    setExercises(exercises.filter(ex => ex.id !== id));
    toast.success("Ejercicio eliminado (simulado)");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 relative">
      {!showEditor ? (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Gestión de Rutinas</h1>
              <p className="text-zinc-400 text-sm mt-1">Crea y administra planes de entrenamiento</p>
            </div>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              Crear rutina
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Buscar rutina..."
                className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <select className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos los objetivos</option>
              <option>Hipertrofia</option>
              <option>Pérdida de peso</option>
              <option>Fuerza</option>
              <option>Resistencia</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRoutines.map((routine) => (
              <div key={routine.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors group relative flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <ClipboardList className="h-6 w-6 text-blue-500" />
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${routine.status === "Publicada" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"}`}>
                    {routine.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{routine.name}</h3>
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Nivel</span>
                    <span className="text-zinc-300 font-medium">{routine.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Duración</span>
                    <span className="text-zinc-300 font-medium">{routine.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Objetivo</span>
                    <span className="text-zinc-300 font-medium">{routine.objective}</span>
                  </div>
                </div>
                <div className="flex space-x-2 pt-4 border-t border-zinc-800">
                  <button onClick={() => setShowEditor(true)} className="flex-1 flex items-center justify-center px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4 mr-2 text-zinc-400" />
                    Editar
                  </button>
                  <button onClick={() => handleAction('Eliminar rutina')} className="px-3 py-2 bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 text-zinc-400 text-sm font-medium rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Routine Editor */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <button onClick={() => setShowEditor(false)} className="text-sm text-zinc-400 hover:text-white mb-2 flex items-center transition-colors">
                ← Volver a rutinas
              </button>
              <h1 className="text-2xl font-bold text-white">Editor de Rutina</h1>
            </div>
            <div className="flex space-x-3">
              <button onClick={() => handleAction("Guardar rutina")} className="inline-flex items-center px-4 py-2 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-colors">
                <Save className="w-4 h-4 mr-2" />
                Guardar Borrador
              </button>
              <button onClick={() => handleAction("Publicar rutina")} className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                <Send className="w-4 h-4 mr-2" />
                Publicar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Información General */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-medium text-white mb-4">Información General</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre de la rutina</label>
                    <input type="text" placeholder="Ej. Hipertrofia 4 Días" defaultValue="Nueva Rutina" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Nivel</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                      <option>Principiante</option>
                      <option>Intermedio</option>
                      <option>Avanzado</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Duración estimada</label>
                    <input type="text" placeholder="Ej. 60 min" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Objetivo principal</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                      <option>Ganar masa muscular</option>
                      <option>Pérdida de peso</option>
                      <option>Aumento de fuerza</option>
                      <option>Acondicionamiento</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Descripción</label>
                    <textarea rows={4} placeholder="Descripción de la rutina..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejercicios */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-white">Ejercicios de la Rutina</h3>
                  <button onClick={addExercise} className="inline-flex items-center px-3 py-1.5 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 text-sm font-medium rounded-lg transition-colors">
                    <PlusCircle className="w-4 h-4 mr-1.5" />
                    Añadir Ejercicio
                  </button>
                </div>
                
                <div className="space-y-3">
                  {exercises.map((exercise, index) => (
                    <div key={exercise.id} className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 p-4 rounded-xl group relative">
                      <div className="flex-shrink-0 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-sm font-bold text-zinc-400">
                        {index + 1}
                      </div>
                      <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-1">
                          <label className="block text-xs text-zinc-500 mb-1">Ejercicio</label>
                          <select className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500">
                            <option>Press de Banca</option>
                            <option>Sentadilla</option>
                            <option>Dominadas</option>
                            <option>Curl de Bíceps</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-500 mb-1">Series</label>
                          <input type="number" defaultValue={exercise.sets} className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                          <label className="block text-xs text-zinc-500 mb-1">Repeticiones</label>
                          <input type="text" defaultValue={exercise.reps} className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500" />
                        </div>
                      </div>
                      <button onClick={() => removeExercise(exercise.id)} className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors sm:self-end sm:mb-[2px]">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  
                  {exercises.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed border-zinc-800 rounded-xl">
                      <p className="text-zinc-500">No hay ejercicios en esta rutina</p>
                      <button onClick={addExercise} className="mt-4 text-blue-500 text-sm hover:underline">
                        Añadir el primer ejercicio
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
