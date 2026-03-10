import { useState } from "react";
import { BarChart3, Download, Filter, FileSpreadsheet } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { toast } from "sonner";

const userGrowthData = [
  { name: 'Ene', users: 4000 },
  { name: 'Feb', users: 4500 },
  { name: 'Mar', users: 5100 },
  { name: 'Abr', users: 5800 },
  { name: 'May', users: 6300 },
  { name: 'Jun', users: 7100 },
];

const activityData = [
  { name: 'Lun', active: 1200 },
  { name: 'Mar', active: 1400 },
  { name: 'Mie', active: 1300 },
  { name: 'Jue', active: 1500 },
  { name: 'Vie', active: 1600 },
  { name: 'Sab', active: 900 },
  { name: 'Dom', active: 800 },
];

const routinesData = [
  { name: 'Hipertrofia', value: 45 },
  { name: 'Pérdida Peso', value: 30 },
  { name: 'Fuerza', value: 15 },
  { name: 'Cardio', value: 10 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function Statistics() {
  const handleAction = (action: string) => {
    toast.success(`Acción simulada: ${action}`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Estadísticas y Reportes</h1>
          <p className="text-zinc-400 text-sm mt-1">Analiza el rendimiento y crecimiento de la plataforma</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleAction("Filtrar por fecha")}
            className="inline-flex items-center px-3 py-2 border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Últimos 30 días
          </button>
          <button
            onClick={() => handleAction("Exportar reporte")}
            className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crecimiento de usuarios */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Crecimiento de Usuarios</h3>
            <button onClick={() => handleAction("Descargar gráfico")} className="p-1.5 text-zinc-400 hover:text-white transition-colors" title="Descargar">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Actividad semanal */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Actividad Semanal</h3>
            <button onClick={() => handleAction("Descargar gráfico")} className="p-1.5 text-zinc-400 hover:text-white transition-colors" title="Descargar">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                  cursor={{ fill: '#27272a' }}
                />
                <Bar dataKey="active" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rutinas más usadas */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Rutinas Más Usadas (%)</h3>
            <button onClick={() => handleAction("Descargar gráfico")} className="p-1.5 text-zinc-400 hover:text-white transition-colors" title="Descargar">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-72 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={routinesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {routinesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }} />
                <Legend wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tiempo promedio de entrenamiento */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-sm flex flex-col justify-center items-center text-center">
          <div className="w-full flex justify-between items-center mb-6 absolute top-5 left-5 right-5 px-5">
            <h3 className="text-lg font-medium text-white">Tiempo Promedio</h3>
          </div>
          <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-inner mt-8">
            <BarChart3 className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-4xl font-bold text-white">45<span className="text-xl text-zinc-500 font-medium">m</span></span>
            <span className="text-sm text-zinc-400 mt-1">Por sesión</span>
          </div>
          <p className="mt-8 text-zinc-400 text-sm max-w-xs">
            El tiempo promedio de entrenamiento ha incrementado un <span className="text-emerald-400 font-bold">+12%</span> respecto al mes anterior.
          </p>
        </div>
      </div>
    </div>
  );
}
