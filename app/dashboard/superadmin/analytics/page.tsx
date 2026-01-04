'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Building2,
  DollarSign,
  Activity,
  Globe,
  Clock,
  Zap
} from 'lucide-react';

export default function SuperAdminAnalytics() {
  const metrics = [
    {
      title: 'Platform Usage',
      stats: [
        { label: 'Daily Active Users', value: '12,847', change: '+8.2%', up: true },
        { label: 'Monthly Active Users', value: '38,294', change: '+12.5%', up: true },
        { label: 'Avg Session Duration', value: '24m 32s', change: '+3.1%', up: true },
        { label: 'Page Views/Session', value: '8.4', change: '-1.2%', up: false },
      ]
    }
  ];

  const topInstitutions = [
    { name: 'Riverside International', users: 2100, engagement: 94 },
    { name: 'Springfield High School', users: 1250, engagement: 91 },
    { name: 'Mountain View High', users: 980, engagement: 89 },
    { name: 'Oak Valley Academy', users: 890, engagement: 87 },
    { name: 'Sunset Academy', users: 1500, engagement: 85 },
  ];

  const featureUsage = [
    { name: 'Attendance Tracking', usage: 92, color: 'bg-blue-500' },
    { name: 'Grade Management', usage: 88, color: 'bg-green-500' },
    { name: 'Fee Collection', usage: 76, color: 'bg-purple-500' },
    { name: 'AI Assistant', usage: 65, color: 'bg-orange-500' },
    { name: 'Live Classes', usage: 58, color: 'bg-pink-500' },
    { name: 'Quiz Generator', usage: 45, color: 'bg-cyan-500' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="superadmin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="System Analytics" role="superadmin" userName="Super Admin" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Time Period</label>
                    <Select defaultValue="30d">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Last 7 Days</SelectItem>
                        <SelectItem value="30d">Last 30 Days</SelectItem>
                        <SelectItem value="90d">Last 90 Days</SelectItem>
                        <SelectItem value="1y">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold">48,392</p>
                      <div className="flex items-center text-green-600 text-sm mt-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +12.5%
                      </div>
                    </div>
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Institutions</p>
                      <p className="text-2xl font-bold">156</p>
                      <div className="flex items-center text-green-600 text-sm mt-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +8.3%
                      </div>
                    </div>
                    <Building2 className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold">$1.2M</p>
                      <div className="flex items-center text-green-600 text-sm mt-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +18.2%
                      </div>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Uptime</p>
                      <p className="text-2xl font-bold">99.9%</p>
                      <div className="flex items-center text-green-600 text-sm mt-1">
                        <Activity className="h-4 w-4 mr-1" />
                        Healthy
                      </div>
                    </div>
                    <Zap className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Usage Stats */}
            <Card className="ai-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">Platform Usage Statistics</CardTitle>
                <CardDescription className="text-white/80">Real-time platform engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {metrics[0].stats.map((stat, index) => (
                    <div key={index} className="p-4 bg-white/10 rounded-lg">
                      <p className="text-sm text-white/80">{stat.label}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      <div className={`flex items-center text-sm mt-1 ${stat.up ? 'text-green-300' : 'text-red-300'}`}>
                        {stat.up ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Institutions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Top Performing Institutions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topInstitutions.map((inst, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{inst.name}</div>
                          <div className="text-sm text-gray-500">{inst.users.toLocaleString()} users</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{inst.engagement}%</div>
                        <div className="text-xs text-gray-500">engagement</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Feature Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Feature Adoption Rates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {featureUsage.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{feature.name}</span>
                        <span className="text-gray-500">{feature.usage}%</span>
                      </div>
                      <Progress value={feature.usage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Geographic Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { region: 'North America', institutions: 89, users: 28450, percentage: 57 },
                    { region: 'Europe', institutions: 34, users: 10230, percentage: 22 },
                    { region: 'Asia Pacific', institutions: 21, users: 6420, percentage: 13 },
                    { region: 'Latin America', institutions: 8, users: 2180, percentage: 5 },
                    { region: 'Other', institutions: 4, users: 1112, percentage: 3 },
                  ].map((region, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{region.percentage}%</div>
                      <div className="font-medium mt-1">{region.region}</div>
                      <div className="text-xs text-gray-500 mt-1">{region.institutions} institutions</div>
                      <div className="text-xs text-gray-500">{region.users.toLocaleString()} users</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
