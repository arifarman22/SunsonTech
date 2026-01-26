import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  type: 'product' | 'solution' | 'page';
}

const searchData: SearchResult[] = [
  { id: '1', title: 'Cash Deposit Machine CDM', description: 'Advanced banking solution for cash deposits', category: 'Banking', url: '/products/banking', type: 'product' },
  { id: '2', title: 'Healthcare Kiosk', description: 'Self-service healthcare solutions', category: 'Healthcare', url: '/products/healthcare', type: 'product' },
  { id: '3', title: 'PCI Approved EPP', description: 'Secure payment processing modules', category: 'Security', url: '/products/security', type: 'product' },
  { id: '4', title: 'CDM Solution', description: 'Complete cash deposit management', category: 'Solutions', url: '/solutions/cdm', type: 'solution' },
  { id: '5', title: 'About Us', description: 'Learn about Sunson Technology', category: 'Company', url: '/about', type: 'page' },
];

const recentSearches = ['CDM', 'Healthcare Kiosk', 'EPP', 'Banking Solutions'];
const trendingSearches = ['Payment Kiosk', 'Security Module', 'ATM Solutions', 'Healthcare'];

interface InteractiveSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveSearch: React.FC<InteractiveSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [query]);

  const handleSearchClick = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] flex items-start justify-center pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-2xl mx-4"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            {/* Search Input */}
            <div className="flex items-center p-4 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, solutions, or pages..."
                className="border-0 focus-visible:ring-0 text-lg"
              />
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              <AnimatePresence>
                {query.trim() ? (
                  <div className="p-4">
                    {isSearching ? (
                      <div className="flex items-center justify-center py-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Search className="w-6 h-6 text-primary" />
                        </motion.div>
                        <span className="ml-2 text-muted-foreground">Searching...</span>
                      </div>
                    ) : results.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2"
                      >
                        {results.map((result, index) => (
                          <motion.div
                            key={result.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link href={result.url}>
                              <div
                                className="flex items-center p-3 rounded-lg hover:bg-accent/10 cursor-pointer group transition-colors"
                                onClick={onClose}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                      {result.title}
                                    </h4>
                                    <Badge variant="secondary" className="text-xs">
                                      {result.category}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {result.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <div className="text-center py-8">
                        <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <p className="text-muted-foreground">No results found for "{query}"</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 space-y-6">
                    {/* Recent Searches */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium text-muted-foreground">Recent Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search) => (
                          <Button
                            key={search}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSearchClick(search)}
                            className="text-xs"
                          >
                            {search}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Trending Searches */}
                    <div>
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-4 h-4 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium text-muted-foreground">Trending</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((search) => (
                          <Button
                            key={search}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSearchClick(search)}
                            className="text-xs"
                          >
                            {search}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveSearch;