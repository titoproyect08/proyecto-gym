import { useState } from "react";
import { MessageSquare, AlertTriangle, Shield, UserX, Trash2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const mockReports = [
  { id: "1", user: "Carlos Ruiz", reportedBy: "Ana Gómez", reason: "Comportamiento inapropiado en foros", date: "Hace 2 horas", status: "Pendiente" },
  { id: "2", user: "Luis Torres", reportedBy: "Sistema", reason: "Spam detectado en comentarios", date: "Hace 5 horas", status: "Pendiente" },
  { id: "3", user: "María López", reportedBy: "Juan Pérez", reason: "Foto de perfil ofensiva", date: "Ayer", status: "Revisado" },
];

const mockComments = [
  { id: "1", author: "Pedro Sánchez", text: "¡Excelente rutina, me sirvió mucho!", post: "Rutina Hipertrofia", date: "Hace 10 min", flagged: false },
  { id: "2", author: "Usuario Anónimo", text: "Compren suplementos baratos en www.spam.com", post: "Dieta Volumen", date: "Hace 20 min", flagged: true },
  { id: "3", author: "Laura M.", text: "¿Cuántas series recomiendan para principiantes?", post: "Sentadilla Libre", date: "Hace 1 hora", flagged: false },
];

export function Community() {
  const [activeTab, setActiveTab] = useState<"reports" | "comments">("reports");

  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Comunidad y Moderación</h1>
          <p className="text-zinc-400 text-sm mt-1">Supervisa la actividad de los usuarios y reportes</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-zinc-800">
        <button
          onClick={() => setActiveTab("reports")}
          className={`pb-4 px-4 text-sm font-medium transition-colors border-b-2 ${
            activeTab === "reports" ? "border-blue-500 text-blue-500" : "border-transparent text-zinc-400 hover:text-zinc-300"
          }`}
        >
          Reportes de Usuarios
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`pb-4 px-4 text-sm font-medium transition-colors border-b-2 ${
            activeTab === "comments" ? "border-blue-500 text-blue-500" : "border-transparent text-zinc-400 hover:text-zinc-300"
          }`}
        >
          Moderación de Comentarios
        </button>
      </div>

      {/* Content */}
      {activeTab === "reports" && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50">
            <div className="flex items-center text-rose-500">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium text-white">Reportes Pendientes</h3>
            </div>
          </div>
          <div className="divide-y divide-zinc-800">
            {mockReports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-zinc-800/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="font-bold text-white mr-2">{report.user}</span>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${report.status === 'Pendiente' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-zinc-800 text-zinc-400'}`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-1"><span className="text-zinc-500">Motivo:</span> {report.reason}</p>
                  <p className="text-xs text-zinc-500">Reportado por {report.reportedBy} • {report.date}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => handleAction('Revisar reporte')} className="flex items-center px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors">
                    <Shield className="w-4 h-4 mr-1.5 text-blue-400" />
                    Revisar
                  </button>
                  <button onClick={() => handleAction('Bloquear usuario')} className="flex items-center px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 text-sm font-medium rounded-lg transition-colors">
                    <UserX className="w-4 h-4 mr-1.5" />
                    Bloquear
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "comments" && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50">
            <div className="flex items-center text-blue-500">
              <MessageSquare className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium text-white">Comentarios Recientes</h3>
            </div>
          </div>
          <div className="divide-y divide-zinc-800">
            {mockComments.map((comment) => (
              <div key={comment.id} className="p-6 hover:bg-zinc-800/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center mb-1">
                    <span className="font-bold text-white mr-2">{comment.author}</span>
                    <span className="text-xs text-zinc-500">{comment.date}</span>
                    {comment.flagged && (
                      <span className="ml-2 px-1.5 py-0.5 bg-rose-500/10 text-rose-500 text-[10px] font-bold uppercase rounded border border-rose-500/20">
                        Flagged
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-300 mb-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800">"{comment.text}"</p>
                  <p className="text-xs text-zinc-500">En: <span className="text-blue-400 cursor-pointer hover:underline">{comment.post}</span></p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button onClick={() => handleAction('Aprobar comentario')} className="p-2 bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 text-zinc-400 rounded-lg transition-colors" title="Aprobar">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleAction('Eliminar publicación')} className="p-2 bg-zinc-800 hover:bg-red-500/20 hover:text-red-400 text-zinc-400 rounded-lg transition-colors" title="Eliminar">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
