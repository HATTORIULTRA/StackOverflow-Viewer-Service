import { Card, CardContent, CardHeader, CardTitle } from "@/6_shared/components/ui/card";
import { Button } from "@/6_shared/components/ui/button";
import { Badge } from "@/6_shared/components/ui/badge";
import { useAppSelector } from "@/6_shared/hooks/redux.hooks";

const QuickView = () => {
  const {authorPosts} = useAppSelector(state => state.quickView)
  console.log(authorPosts)
  return (
    <div className="fixed right-4 top-20 w-80 z-50">
      <Card className="bg-card border-border shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-card-foreground">
            Quick Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Recent Searches</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                React
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                JavaScript
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Quick Actions</h4>
            <div className="space-y-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start text-left hover:bg-accent"
              >
                🔍 Search Questions
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start text-left hover:bg-accent"
              >
                📊 View Results
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start text-left hover:bg-accent"
              >
                ⭐ Favorites
              </Button>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <div className="text-xs text-muted-foreground">
              <p>Last search: 2 minutes ago</p>
              <p>Total results: 1,234</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickView