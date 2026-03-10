import { useState } from "react";
import { Plus, Search, Apple, Edit2, Trash2, X, ClipboardList } from "lucide-react";
import { toast } from "sonner";

const mockFoods = [
  { id: "1", name: "Pechuga de Pollo", calories: "165", protein: "31g", carbs: "0g", fats: "3.6g" },
  { id: "2", name: "Arroz Integral", calories: "111", protein: "2.6g", carbs: "23g", fats: "0.9g" },
  { id: "3", name: "Huevo Entero", calories: "155", protein: "13g", carbs: "1.1g", fats: "11g" },
  { id: "4", name: "Avena", calories: "389", protein: "16.9g", carbs: "66.3g", fats: "6.9g" },
  { id: "5", name: "Aguacate", calories: "160", protein: "2g", carbs: "8.5g", fats: "14.7g" },
];

export function Nutrition() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"food" | "plan">("food");

  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
    setShowModal(false);
  };

  const openModal = (type: "food" | "plan") => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestión de Nutrición</h1>
          <p className="text-zinc-400 text-sm mt-1">Administra la base de datos de alimentos y planes</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => openModal("food")}
            className="inline-flex items-center px-4 py-2 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Crear alimento
          </button>
          <button
            onClick={() => openModal("plan")}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <ClipboardList className="w-4 h-4 mr-2" />
            Crear plan
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar alimento por nombre..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-800">
            <thead className="bg-zinc-950/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Alimento (100g)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Calorías</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Proteínas</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Carbohidratos</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Grasas</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-400 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {mockFoods.map((food) => (
                <tr key={food.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-1.5 bg-green-500/10 rounded-lg mr-3">
                        <Apple className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-sm font-medium text-white">{food.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-500 font-medium">{food.calories} kcal</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400">{food.protein}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-400">{food.carbs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-rose-400">{food.fats}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={() => openModal("food")} className="text-zinc-400 hover:text-white transition-colors p-1" title="Editar alimento">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleAction('Eliminar alimento')} className="text-red-500 hover:text-red-400 transition-colors p-1" title="Eliminar">
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
          <p className="text-sm text-zinc-400">Mostrando <span className="font-medium text-white">5</span> alimentos</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-zinc-700 rounded-md text-sm text-zinc-400 hover:bg-zinc-800 transition-colors disabled:opacity-50">Anterior</button>
            <button className="px-3 py-1 border border-zinc-700 rounded-md text-sm text-zinc-400 hover:bg-zinc-800 transition-colors">Siguiente</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <h3 className="text-lg font-medium text-white">
                {modalType === "food" ? "Crear Alimento" : "Crear Plan Nutricional"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {modalType === "food" ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre del alimento (por 100g)</label>
                    <input type="text" placeholder="Ej. Pechuga de Pollo" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-1">Calorías (kcal)</label>
                      <input type="number" placeholder="Ej. 165" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-1">Proteínas (g)</label>
                      <input type="number" placeholder="Ej. 31" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-1">Carbohidratos (g)</label>
                      <input type="number" placeholder="Ej. 0" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-1">Grasas (g)</label>
                      <input type="number" placeholder="Ej. 3.6" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Nombre del plan</label>
                    <input type="text" placeholder="Ej. Plan Déficit Calórico" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Objetivo</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
                      <option>Pérdida de grasa</option>
                      <option>Mantenimiento</option>
                      <option>Aumento de masa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1">Calorías objetivo diarias</label>
                    <input type="number" placeholder="Ej. 2000" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 border-dashed text-center text-zinc-500 text-sm mt-4">
                    Sección para agregar comidas al plan (simulada)
                  </div>
                </>
              )}
            </div>
            
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/50 flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                Cancelar
              </button>
              <button 
                onClick={() => handleAction(modalType === "food" ? "Crear alimento" : "Crear plan nutricional")} 
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
