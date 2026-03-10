import {
  Users,
  Dumbbell,
  ClipboardList,
  Trophy,
  DollarSign,
  Activity,
  ArrowRight,
  Plus
} from "lucide-react";
import { Link } from "react-router";

const stats = [
  { name: "Usuarios totales", value: "2,405", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Entrenamientos", value: "14,302", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Ejercicios disp.", value: "320", icon: Dumbbell, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Rutinas activas", value: "48", icon: ClipboardList, color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Retos activos", value: "3", icon: Trophy, color: "text-rose-500", bg: "bg-rose-500/10" },
  { name: "Ingresos (mes)", value: "$12,450", icon: DollarSign, color: "text-zinc-400", bg: "bg-zinc-800" },
];

const recentActivity = [
  { id: 1, text: "Carlos Martínez completó el reto 'Verano Fit'", time: "Hace 5 min" },
  { id: 2, text: "Nueva suscripción Premium: Ana Gómez", time: "Hace 12 min" },
  { id: 3, text: "Rutina 'Hipertrofia 4 Días' fue actualizada", time: "Hace 1 hora" },
  { id: 4, text: "5 usuarios nuevos registrados", time: "Hace 2 horas" },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-zinc-400 text-sm mt-1">Resumen general de la plataforma</p>
        </div>
        <div className="flex gap-2">
          <Link
            to="/admin/exercises"
            className="inline-flex items-center px-3 py-2 border border-zinc-700 rounded-lg shadow-sm text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Ejercicio
          </Link>
          <Link
            to="/admin/routines"
            className="inline-flex items-center px-3 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Rutina
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-400">{stat.name}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-800 flex justify-between items-center">
            <h3 className="text-lg font-medium text-white">Actividad reciente</h3>
            <button className="text-sm text-blue-500 hover:text-blue-400">Ver todo</button>
          </div>
          <div className="divide-y divide-zinc-800">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="px-6 py-4 flex items-center justify-between hover:bg-zinc-800/30 transition-colors">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-zinc-500 mr-3" />
                  <p className="text-sm text-zinc-300">{activity.text}</p>
                </div>
                <span className="text-xs text-zinc-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-800">
            <h3 className="text-lg font-medium text-white">Accesos rápidos</h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <Link
              to="/admin/users"
              className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-blue-500/50 hover:bg-zinc-800/50 transition-all group"
            >
              <Users className="h-8 w-8 text-zinc-400 group-hover:text-blue-500 mb-3 transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Ver usuarios</span>
            </Link>
            <Link
              to="/admin/statistics"
              className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all group"
            >
              <Activity className="h-8 w-8 text-zinc-400 group-hover:text-purple-500 mb-3 transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Ver estadísticas</span>
            </Link>
            <Link
              to="/admin/challenges"
              className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-rose-500/50 hover:bg-zinc-800/50 transition-all group"
            >
              <Trophy className="h-8 w-8 text-zinc-400 group-hover:text-rose-500 mb-3 transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Crear reto</span>
            </Link>
            <Link
              to="/admin/routines"
              className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-amber-500/50 hover:bg-zinc-800/50 transition-all group"
            >
              <ClipboardList className="h-8 w-8 text-zinc-400 group-hover:text-amber-500 mb-3 transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Gestionar rutinas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
