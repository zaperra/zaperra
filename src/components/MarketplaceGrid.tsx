import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Star, 
  Zap,
  ChevronDown
} from "lucide-react";
import { 
  MOCK_WORKFLOWS, 
  CATEGORY_LABELS, 
  COMPLEXITY_LABELS, 
  COMPLEXITY_CREDITS,
  type WorkflowComplexity,
  type WorkflowCategory
} from "@/lib/data";
import { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WorkflowCard = ({ workflow }: { workflow: typeof MOCK_WORKFLOWS[0] }) => {
  const complexityColors: Record<WorkflowComplexity, string> = {
    low: 'bg-green-500/10 text-green-600',
    medium: 'bg-yellow-500/10 text-yellow-600',
    high: 'bg-red-500/10 text-red-600',
  };

  return (
    <div className="group glass-card rounded-2xl p-6 hover-lift">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Zap className="w-6 h-6 text-accent" />
        </div>
        <div className="flex items-center gap-2">
          <Badge className={complexityColors[workflow.complexity]}>
            {COMPLEXITY_LABELS[workflow.complexity]}
          </Badge>
          <Badge variant="outline" className="border-accent/30 text-accent">
            {COMPLEXITY_CREDITS[workflow.complexity]} Credits
          </Badge>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
        {workflow.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {workflow.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {workflow.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            {workflow.downloads}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            {workflow.rating}
          </span>
        </div>
        <Badge variant="secondary">
          {CATEGORY_LABELS[workflow.category]}
        </Badge>
      </div>

      {/* Hover Action */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="hero" className="w-full">
          Download Workflow
        </Button>
      </div>
    </div>
  );
};

const MarketplaceGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<WorkflowCategory[]>([]);
  const [selectedComplexities, setSelectedComplexities] = useState<WorkflowComplexity[]>([]);

  const filteredWorkflows = useMemo(() => {
    return MOCK_WORKFLOWS.filter((workflow) => {
      const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workflow.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        workflow.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(workflow.category);
      const matchesComplexity = selectedComplexities.length === 0 || selectedComplexities.includes(workflow.complexity);

      return matchesSearch && matchesCategory && matchesComplexity;
    });
  }, [searchQuery, selectedCategories, selectedComplexities]);

  const toggleCategory = (category: WorkflowCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleComplexity = (complexity: WorkflowComplexity) => {
    setSelectedComplexities(prev =>
      prev.includes(complexity)
        ? prev.filter(c => c !== complexity)
        : [...prev, complexity]
    );
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search workflows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Category
                {selectedCategories.length > 0 && (
                  <Badge variant="secondary" className="ml-1">{selectedCategories.length}</Badge>
                )}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <DropdownMenuCheckboxItem
                  key={key}
                  checked={selectedCategories.includes(key as WorkflowCategory)}
                  onCheckedChange={() => toggleCategory(key as WorkflowCategory)}
                >
                  {label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Complexity
                {selectedComplexities.length > 0 && (
                  <Badge variant="secondary" className="ml-1">{selectedComplexities.length}</Badge>
                )}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {Object.entries(COMPLEXITY_LABELS).map(([key, label]) => (
                <DropdownMenuCheckboxItem
                  key={key}
                  checked={selectedComplexities.includes(key as WorkflowComplexity)}
                  onCheckedChange={() => toggleComplexity(key as WorkflowComplexity)}
                >
                  {label} ({COMPLEXITY_CREDITS[key as WorkflowComplexity]} cr)
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-muted-foreground">
        Showing {filteredWorkflows.length} of {MOCK_WORKFLOWS.length} workflows
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkflows.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>

      {filteredWorkflows.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold mb-2">No workflows found</h3>
          <p className="text-muted-foreground text-sm">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default MarketplaceGrid;
