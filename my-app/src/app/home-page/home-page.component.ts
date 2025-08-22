// home-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AppItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: 'installed' | 'update available' | 'updated';
  category: string;
  gradient?: string;
  isFeatured?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  isActive?: boolean;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add these imports
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  activeTab: string = 'all';
  searchQuery: string = '';
  
  categories: Category[] = [
    { id: 'all', name: 'All Tools', icon: '🛠️', count: 247, isActive: true },
    { id: 'extensions', name: 'Extensions', icon: '🧩', count: 89 },
    { id: 'ai-models', name: 'AI Models', icon: '🤖', count: 45 },
    { id: 'ai-news', name: 'AI News', icon: '📰', count: 23 },
    { id: 'trending', name: 'Trending', icon: '🔥', count: 31 },
    { id: 'shortcuts', name: 'Shortcuts', icon: '⚡', count: 67 },
    { id: 'development', name: 'Dev Tools', icon: '💻', count: 54 },
    { id: 'productivity', name: 'Productivity', icon: '📈', count: 38 }
  ];

  featuredApp: AppItem = {
    id: 'claude-ai',
    name: 'Claude AI Assistant',
    description: 'Access Claude AI directly in your browser. Get instant help with coding, writing, analysis, and creative tasks with one-click integration',
    icon: '🤖',
    status: 'installed',
    category: 'ai-models',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    isFeatured: true
  };

  installedApps: AppItem[] = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'AI chatbot for conversations and tasks',
      icon: '💬',
      status: 'updated',
      category: 'ai-models'
    },
    {
      id: 'github-copilot', 
      name: 'GitHub Copilot',
      description: 'AI-powered code completion',
      icon: '🐙',
      status: 'update available',
      category: 'development'
    },
    {
      id: 'vscode-shortcut',
      name: 'VS Code Quick Launch', 
      description: 'Launch VS Code projects instantly',
      icon: '⚡',
      status: 'updated',
      category: 'shortcuts'
    },
    {
      id: 'adblock-plus',
      name: 'AdBlock Plus',
      description: 'Block ads and trackers',
      icon: '🛡️',
      status: 'updated',
      category: 'extensions'
    }
  ];

  appsInPlan: AppItem[] = [
    {
      id: 'midjourney',
      name: 'Midjourney Helper',
      description: 'Generate stunning AI images with prompt optimization',
      icon: '🎨',
      status: 'installed',
      category: 'ai-models'
    },
    {
      id: 'notion-web-clipper',
      name: 'Notion Web Clipper', 
      description: 'Save web pages directly to your Notion workspace',
      icon: '📄',
      status: 'installed',
      category: 'productivity'
    },
    {
      id: 'windows-shortcuts',
      name: 'Windows Power Tools',
      description: 'Quick access to Windows utilities and shortcuts',
      icon: '🪟',
      status: 'installed', 
      category: 'shortcuts'
    },
    {
      id: 'ai-news-feed',
      name: 'AI News Aggregator',
      description: 'Latest AI news and trending developments',
      icon: '📰',
      status: 'installed', 
      category: 'ai-news'
    }
  ];

  fonts: any[] = [
    { name: 'Chrome Extensions', icon: '🧩' },
    { name: 'AI Tools Hub', icon: '🤖' }
  ];

  resourceLinks: any[] = [
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'AI News', icon: '📰' },
    { name: 'Chrome Store', icon: '🏪' },
    { name: 'Trending Tools', icon: '🔥' }
  ];

  setActiveCategory(categoryId: string): void {
    this.categories.forEach(cat => cat.isActive = cat.id === categoryId);
    this.activeTab = categoryId;
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'updated': return '#10b981';
      case 'update available': return '#f59e0b'; 
      case 'installed': return '#6366f1';
      default: return '#64748b';
    }
  }

  // Fix the event handler to properly handle input events
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    // Implement search logic here
  }

  openApp(app: AppItem): void {
    console.log('Opening app:', app.name);
    // Implement app opening logic
  }

  updateApp(app: AppItem): void {
    console.log('Updating app:', app.name);
    // Implement app update logic
  }
}