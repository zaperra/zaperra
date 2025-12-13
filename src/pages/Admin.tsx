import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Users, 
  Zap, 
  CreditCard, 
  Settings,
  Search,
  Plus,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Zap, label: 'Workflows', active: false },
    { icon: Users, label: 'Users', active: false },
    { icon: CreditCard, label: 'Transactions', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 bg-card border-r border-border z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="font-display font-bold text-lg">Admin</span>
            </Link>
            <button className="lg:hidden" onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      item.active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
                <LogOut className="w-5 h-5" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

const StatCard = ({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon: Icon 
}: { 
  title: string; 
  value: string; 
  change: string; 
  isPositive: boolean;
  icon: React.ElementType;
}) => (
  <div className="glass-card rounded-2xl p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {change}
      </div>
    </div>
    <div className="text-2xl font-bold font-display mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{title}</div>
  </div>
);

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data
  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', credits: 30, joined: '2 hours ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', credits: 10, joined: '5 hours ago' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', credits: 75, joined: '1 day ago' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', credits: 2, joined: '2 days ago' },
  ];

  const recentTransactions = [
    { id: 1, user: 'John Doe', amount: 5, credits: 30, status: 'completed' },
    { id: 2, user: 'Jane Smith', amount: 2, credits: 10, status: 'completed' },
    { id: 3, user: 'Bob Wilson', amount: 10, credits: 75, status: 'completed' },
    { id: 4, user: 'Alice Brown', amount: 0, credits: 2, status: 'free' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 glass-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="font-display text-xl font-bold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-64" />
              </div>
              <Button variant="hero" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Workflow
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Users" 
              value="1,234" 
              change="+12%" 
              isPositive={true}
              icon={Users}
            />
            <StatCard 
              title="Total Workflows" 
              value="2,048" 
              change="+8%" 
              isPositive={true}
              icon={Zap}
            />
            <StatCard 
              title="Revenue" 
              value="$12,450" 
              change="+23%" 
              isPositive={true}
              icon={CreditCard}
            />
            <StatCard 
              title="Downloads" 
              value="8,912" 
              change="+5%" 
              isPositive={true}
              icon={TrendingUp}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-semibold text-lg">Recent Users</h2>
                <Button variant="ghost" size="sm">View all</Button>
              </div>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-sm font-medium">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{user.credits} credits</Badge>
                      <div className="text-xs text-muted-foreground mt-1">{user.joined}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-semibold text-lg">Recent Transactions</h2>
                <Button variant="ghost" size="sm">View all</Button>
              </div>
              <div className="space-y-4">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{tx.user}</div>
                        <div className="text-xs text-muted-foreground">{tx.credits} credits</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">
                        {tx.amount > 0 ? `$${tx.amount}` : 'Free'}
                      </div>
                      <Badge 
                        variant={tx.status === 'completed' ? 'secondary' : 'outline'}
                        className={tx.status === 'free' ? 'border-accent text-accent' : ''}
                      >
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
