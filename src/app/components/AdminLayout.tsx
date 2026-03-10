import { Outlet, NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Users,
  Dumbbell,
  ClipboardList,
  Apple,
  Trophy,
  MessageSquare,
  BarChart3,
  Settings,
  ShieldCheck,
  LogOut,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { toast } from "sonner";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Usuarios", href: "/admin/users", icon: Users },
  { name: "Ejercicios", href: "/admin/exercises", icon: Dumbbell },
  { name: "Rutinas", href: "/admin/routines", icon: ClipboardList },
  { name: "Nutrición", href: "/admin/nutrition", icon: Apple },
  { name: "Retos", href: "/admin/challenges", icon: Trophy },
  { name: "Comunidad", href: "/admin/community", icon: MessageSquare },
  { name: "Estadísticas", href: "/admin/statistics", icon: BarChart3 },
  { name: "Configuración", href: "/admin/settings", icon: Settings },
  { name: "Administradores", href: "/admin/admins", icon: ShieldCheck },
];

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Sesión cerrada");
    navigate("/");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-zinc-900 border-r border-zinc-800 transition-transform duration-300 lg:static lg:translate-x-0 flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-center h-16 border-b border-zinc-800 shrink-0">
          <Dumbbell className="w-8 h-8 text-blue-500 mr-2" />
          <h1 className="text-xl font-bold text-white tracking-tight">FitAdmin</h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-zinc-800">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/admin"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                clsx(
                  "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                  isActive
                    ? "bg-blue-600/10 text-blue-500"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={clsx(
                      "flex-shrink-0 w-5 h-5 mr-3 transition-colors",
                      isActive ? "text-blue-500" : "text-zinc-500 group-hover:text-zinc-300"
                    )}
                  />
                  {item.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors group"
          >
            <LogOut className="flex-shrink-0 w-5 h-5 mr-3 text-red-500/70 group-hover:text-red-400" />
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-16 bg-zinc-900 border-b border-zinc-800 px-4">
          <div className="flex items-center">
            <Dumbbell className="w-6 h-6 text-blue-500 mr-2" />
            <h1 className="text-lg font-bold text-white">FitAdmin</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -mr-2 text-zinc-400 hover:text-white focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Outlet area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
