// all-tools.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  status: 'installed' | 'available' | 'trending';
  rating: number;
  downloads: string;
  size: string;
  url?: string;
}

interface ToolCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  isActive?: boolean;
}

@Component({
  selector: 'app-all-tools',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-tools.component.html',
  styleUrls: ['./all-tools.component.scss']
})
export class AllToolsComponent {
  searchQuery: string = '';
  selectedCategory: string = 'all';
  viewMode: 'grid' | 'list' = 'grid';
  sortBy: 'name' | 'rating' | 'downloads' = 'rating';
  showAddForm: boolean = false; // Toggle for showing/hiding the add form
  newTool: Tool = {
    id: '', // Will be generated
    name: '',
    description: '',
    icon: '',
    category: 'ai-models', // Default category
    status: 'available',
    rating: 0,
    downloads: '',
    size: '',
    url: ''
  };
  categories: ToolCategory[] = [
    { id: 'all', name: 'All Tools', icon: '🛠️', count: 10 }, // Initial count, will update dynamically
    { id: 'extensions', name: 'Chrome Extensions', icon: '🧩', count: 3 },
    { id: 'ai-models', name: 'AI Models', icon: '🤖', count: 3 },
    { id: 'ai-news', name: 'AI News', icon: '📰', count: 0 },
    { id: 'trending', name: 'Trending', icon: '🔥', count: 1 },
    { id: 'shortcuts', name: 'Shortcuts', icon: '⚡', count: 1 },
    { id: 'development', name: 'Dev Tools', icon: '💻', count: 2 },
    { id: 'productivity', name: 'Productivity', icon: '📈', count: 0 }
  ];

  allTools: Tool[] = [
    // AI Models
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'Advanced AI chatbot for conversations, coding, and creative tasks',
      icon: '💬',
      category: 'ai-models',
      status: 'installed',
      rating: 4.8,
      downloads: '10M+',
      size: '2.3MB',
      url: 'https://chat.openai.com'
    },
    {
      id: 'claude-ai',
      name: 'Claude AI',
      description: 'Anthropic\'s AI assistant for analysis, writing, and complex reasoning',
      icon: '🤖',
      category: 'ai-models',
      status: 'installed',
      rating: 4.9,
      downloads: '5M+',
      size: '1.8MB',
      url: 'https://claude.ai'
    },
    {
      id: 'midjourney',
      name: 'Midjourney',
      description: 'AI-powered image generation with stunning artistic results',
      icon: '🎨',
      category: 'ai-models',
      status: 'available',
      rating: 4.7,
      downloads: '8M+',
      size: '3.1MB',
      url: 'https://midjourney.com'
    },
    // Chrome Extensions
    {
      id: 'adblock-plus',
      name: 'AdBlock Plus',
      description: 'Block ads, trackers, and malware across all websites',
      icon: '🛡️',
      category: 'extensions',
      status: 'installed',
      rating: 4.5,
      downloads: '100M+',
      size: '1.2MB'
    },
    {
      id: 'lastpass',
      name: 'LastPass',
      description: 'Secure password manager and digital vault',
      icon: '🔐',
      category: 'extensions',
      status: 'available',
      rating: 4.3,
      downloads: '50M+',
      size: '2.8MB'
    },
    {
      id: 'grammarly',
      name: 'Grammarly',
      description: 'AI writing assistant for grammar and style',
      icon: '📝',
      category: 'extensions',
      status: 'trending',
      rating: 4.6,
      downloads: '80M+',
      size: '4.2MB'
    },
    // Development Tools
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      description: 'AI-powered code completion and suggestions',
      icon: '🐙',
      category: 'development',
      status: 'installed',
      rating: 4.4,
      downloads: '20M+',
      size: '15MB',
      url: 'https://github.com/features/copilot'
    },
    {
      id: 'vscode',
      name: 'VS Code Web',
      description: 'Lightweight web-based code editor',
      icon: '💻',
      category: 'development',
      status: 'available',
      rating: 4.8,
      downloads: '15M+',
      size: '8.5MB',
      url: 'https://vscode.dev'
    },
    // Trending
    {
      id: 'honey',
      name: 'Honey',
      description: 'Automatically find and apply coupon codes',
      icon: '💸',
      category: 'trending',
      status: 'trending',
      rating: 4.5,
      downloads: '30M+',
      size: '2.1MB'
    },
    // Shortcuts
    {
      id: 'windows-shortcuts',
      name: 'Windows Power Tools',
      description: 'Quick access to Windows utilities and system shortcuts',
      icon: '🪟',
      category: 'shortcuts',
      status: 'available',
      rating: 4.0,
      downloads: '2M+',
      size: '890KB'
    }
  ];

  constructor(private router: Router) {}

  get filteredTools(): Tool[] {
    let tools = this.allTools;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      tools = tools.filter(tool => tool.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      tools = tools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      );
    }

    // Sort tools
    tools.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'downloads':
          return this.parseDownloads(b.downloads) - this.parseDownloads(a.downloads);
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    return tools;
  }

  private parseDownloads(downloads: string): number {
    const num = parseFloat(downloads);
    if (downloads.includes('M')) return num * 1000000;
    if (downloads.includes('K')) return num * 1000;
    return num;
  }

  setCategory(categoryId: string): void {
    this.categories.forEach(cat => cat.isActive = cat.id === categoryId);
    this.selectedCategory = categoryId;
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
  }

  installTool(tool: Tool): void {
    if (tool.url) {
      window.open(tool.url, '_blank');
    } else {
      console.log('Installing tool:', tool.name);
      tool.status = 'installed';
    }
  }

  openTool(tool: Tool): void {
    if (tool.url) {
      window.open(tool.url, '_blank');
    } else {
      console.log('Opening tool:', tool.name);
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'installed': return '#10b981';
      case 'trending': return '#f59e0b';
      case 'available': return '#6366f1';
      default: return '#64748b';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'installed': return 'Open';
      case 'trending': return 'Try Now';
      case 'available': return 'Install';
      default: return 'Get';
    }
  }

  getCurrentCategoryName(): string {
    if (this.selectedCategory === 'all') {
      return 'All Tools';
    }
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category?.name || 'Unknown Category';
  }

  handleToolAction(tool: Tool): void {
    if (tool.status === 'installed') {
      this.openTool(tool);
    } else {
      this.installTool(tool);
    }
  }

  isToolInstalled(tool: Tool): boolean {
    return tool.status === 'installed';
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetNewTool();
    }
  }

  addTool(): void {
    if (this.newTool.name && this.newTool.description && this.newTool.rating > 0 && this.newTool.downloads && this.newTool.size) {
      // Generate a unique ID (simple approach using timestamp + random number)
      this.newTool.id = `tool_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      this.allTools.push({ ...this.newTool });
      // Update category count
      const category = this.categories.find(c => c.id === this.newTool.category);
      if (category) category.count++;
      this.toggleAddForm(); // Hide form after adding
    } else {
      alert('Please fill all required fields (name, description, rating, downloads, size).');
    }
  }

  resetNewTool(): void {
    this.newTool = {
      id: '',
      name: '',
      description: '',
      icon: '',
      category: 'ai-models',
      status: 'available',
      rating: 0,
      downloads: '',
      size: '',
      url: ''
    };
  }
}