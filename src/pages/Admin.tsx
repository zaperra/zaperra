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
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Menu,
  X,
  LogOut,
  ChevronRight,
  Download,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type AdminSection = 'dashboard' | 'workflows' | 'users' | 'transactions' | 'settings';

const AdminSidebar = ({ 
  isOpen, 
  onClose,
  activeSection,
  onSectionChange
}: { 
  isOpen: boolean; 
  onClose: () => void;
  activeSection: AdminSection;
  onSectionChange: (section: AdminSection) => void;
}) => {
  const menuItems: { icon: React.ElementType; label: string; section: AdminSection }[] = [
    { icon: LayoutDashboard, label: 'Dashboard', section: 'dashboard' },
    { icon: Zap, label: 'Workflows', section: 'workflows' },
    { icon: Users, label: 'Users', section: 'users' },
    { icon: CreditCard, label: 'Transactions', section: 'transactions' },
    { icon: Settings, label: 'Settings', section: 'settings' },
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
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif italic text-lg">Z</span>
              </div>
              <span className="font-serif italic text-lg text-foreground group-hover:text-primary transition-colors">Admin</span>
            </Link>
            <button className="lg:hidden text-muted-foreground hover:text-foreground" onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      onSectionChange(item.section);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === item.section
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                    {activeSection === item.section && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
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
  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 corner-brackets">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {change}
      </div>
    </div>
    <div className="text-3xl font-serif italic text-foreground mb-1">{value}</div>
    <div className="text-xs text-muted-foreground tracking-wide uppercase">{title}</div>
  </div>
);

const AddWorkflowDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter a workflow name");
      return;
    }
    toast.success(`Workflow "${name}" created successfully!`);
    setOpen(false);
    setName('');
    setDescription('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif italic text-xl">Create New Workflow</DialogTitle>
          <DialogDescription>
            Add a new automation workflow to your marketplace.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Workflow Name</Label>
            <Input 
              id="name" 
              placeholder="e.g., Email Automation" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe what this workflow does..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create Workflow
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Dashboard Section
const DashboardSection = () => {
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
    <>
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
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif italic text-lg text-foreground">Recent Users</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{user.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">{user.credits} credits</Badge>
                  <div className="text-xs text-muted-foreground mt-1">{user.joined}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif italic text-lg text-foreground">Recent Transactions</h2>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{tx.user}</div>
                    <div className="text-xs text-muted-foreground">{tx.credits} credits</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm text-foreground">
                    {tx.amount > 0 ? `$${tx.amount}` : 'Free'}
                  </div>
                  <Badge 
                    variant={tx.status === 'completed' ? 'secondary' : 'outline'}
                    className={tx.status === 'free' ? 'border-primary text-primary' : 'bg-green-500/10 text-green-600 dark:text-green-400 border-0'}
                  >
                    {tx.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Workflows Section
const WorkflowsSection = () => {
  const workflows = [
    { id: 1, name: 'Email Automation', category: 'Marketing', downloads: 1234, status: 'active' },
    { id: 2, name: 'Lead Scoring', category: 'Sales', downloads: 892, status: 'active' },
    { id: 3, name: 'Social Media Scheduler', category: 'Marketing', downloads: 756, status: 'draft' },
    { id: 4, name: 'Customer Onboarding', category: 'Support', downloads: 543, status: 'active' },
    { id: 5, name: 'Invoice Generator', category: 'Finance', downloads: 421, status: 'active' },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-serif italic text-lg text-foreground">All Workflows</h2>
          <AddWorkflowDialog>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </AddWorkflowDialog>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Workflow</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Category</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Downloads</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
              <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow) => (
              <tr key={workflow.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{workflow.name}</span>
                  </div>
                </td>
                <td className="p-4 text-muted-foreground">{workflow.category}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="w-4 h-4" />
                    {workflow.downloads}
                  </div>
                </td>
                <td className="p-4">
                  <Badge variant={workflow.status === 'active' ? 'secondary' : 'outline'} 
                    className={workflow.status === 'active' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-0' : ''}>
                    {workflow.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info(`Viewing ${workflow.name}`)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info(`Editing ${workflow.name}`)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => toast.error(`Deleted ${workflow.name}`)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Users Section
const UsersSection = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', credits: 30, plan: 'Pro', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', credits: 10, plan: 'Starter', status: 'active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', credits: 75, plan: 'Pro', status: 'active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', credits: 2, plan: 'Free', status: 'inactive' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', credits: 50, plan: 'Agency', status: 'active' },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="font-serif italic text-lg text-foreground">All Users</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">User</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Plan</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Credits</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
              <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">{user.plan}</Badge>
                </td>
                <td className="p-4 text-muted-foreground">{user.credits} credits</td>
                <td className="p-4">
                  <Badge variant={user.status === 'active' ? 'secondary' : 'outline'} 
                    className={user.status === 'active' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-0' : 'text-muted-foreground'}>
                    {user.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info(`Viewing ${user.name}`)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info(`Editing ${user.name}`)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Transactions Section
const TransactionsSection = () => {
  const transactions = [
    { id: 'TXN001', user: 'John Doe', amount: 29, plan: 'Pro Monthly', date: '2024-01-15', status: 'completed' },
    { id: 'TXN002', user: 'Jane Smith', amount: 9, plan: 'Starter Monthly', date: '2024-01-14', status: 'completed' },
    { id: 'TXN003', user: 'Bob Wilson', amount: 99, plan: 'Pro Annual', date: '2024-01-13', status: 'completed' },
    { id: 'TXN004', user: 'Alice Brown', amount: 0, plan: 'Free Trial', date: '2024-01-12', status: 'free' },
    { id: 'TXN005', user: 'Charlie Davis', amount: 199, plan: 'Agency Annual', date: '2024-01-11', status: 'completed' },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="font-serif italic text-lg text-foreground">All Transactions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Transaction ID</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">User</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Plan</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Amount</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Date</th>
              <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4 font-mono text-sm text-muted-foreground">{tx.id}</td>
                <td className="p-4 text-foreground">{tx.user}</td>
                <td className="p-4 text-muted-foreground">{tx.plan}</td>
                <td className="p-4 font-medium text-foreground">{tx.amount > 0 ? `$${tx.amount}` : 'Free'}</td>
                <td className="p-4 text-muted-foreground">{tx.date}</td>
                <td className="p-4">
                  <Badge variant={tx.status === 'completed' ? 'secondary' : 'outline'} 
                    className={tx.status === 'completed' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-0' : 'border-primary text-primary'}>
                    {tx.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Settings Section
const SettingsSection = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="font-serif italic text-lg text-foreground mb-6">General Settings</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Zenith Workflows" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteDescription">Site Description</Label>
            <Textarea id="siteDescription" defaultValue="Premium n8n workflow marketplace" rows={3} />
          </div>
          <Button onClick={() => toast.success("Settings saved!")}>Save Changes</Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="font-serif italic text-lg text-foreground mb-6">Pricing Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="starterPrice">Starter Price</Label>
            <Input id="starterPrice" type="number" defaultValue="9" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="proPrice">Pro Price</Label>
            <Input id="proPrice" type="number" defaultValue="29" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="agencyPrice">Agency Price</Label>
            <Input id="agencyPrice" type="number" defaultValue="99" />
          </div>
        </div>
        <Button className="mt-4" onClick={() => toast.success("Pricing updated!")}>Update Pricing</Button>
      </div>
    </div>
  );
};

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');

  const getSectionTitle = () => {
    const titles: Record<AdminSection, string> = {
      dashboard: 'Dashboard',
      workflows: 'Workflows',
      users: 'Users',
      transactions: 'Transactions',
      settings: 'Settings'
    };
    return titles[activeSection];
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'workflows':
        return <WorkflowsSection />;
      case 'users':
        return <UsersSection />;
      case 'transactions':
        return <TransactionsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-muted-foreground hover:text-foreground" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="font-serif italic text-xl text-foreground">{getSectionTitle()}</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-64 bg-muted/50" />
              </div>
              {activeSection === 'dashboard' && (
                <AddWorkflowDialog>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Workflow
                  </Button>
                </AddWorkflowDialog>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
