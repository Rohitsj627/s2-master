'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Search,
  Plus,
  Edit,
  Building2,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function SuperAdminSubscriptions() {
  const [searchTerm, setSearchTerm] = useState('');

  const plans = [
    { name: 'Enterprise', price: '$999/mo', institutions: 45, revenue: '$44,955', features: 'Unlimited users, AI features, Priority support', color: 'bg-purple-500' },
    { name: 'Professional', price: '$499/mo', institutions: 68, revenue: '$33,932', features: 'Up to 2,000 users, Standard AI, Email support', color: 'bg-blue-500' },
    { name: 'Basic', price: '$199/mo', institutions: 32, revenue: '$6,368', features: 'Up to 500 users, Basic features', color: 'bg-green-500' },
    { name: 'Trial', price: 'Free', institutions: 11, revenue: '$0', features: '14-day trial, Limited features', color: 'bg-gray-500' },
  ];

  const subscriptions = [
    { id: 1, institution: 'Springfield High School', plan: 'Enterprise', status: 'active', users: 1250, nextBilling: '2024-04-15', amount: '$999' },
    { id: 2, institution: 'Oak Valley Academy', plan: 'Professional', status: 'active', users: 890, nextBilling: '2024-04-20', amount: '$499' },
    { id: 3, institution: 'Riverside International', plan: 'Enterprise', status: 'active', users: 2100, nextBilling: '2024-04-18', amount: '$999' },
    { id: 4, institution: 'Maple Grove School', plan: 'Basic', status: 'trial', users: 650, nextBilling: '2024-04-10', amount: '$0' },
    { id: 5, institution: 'Sunset Academy', plan: 'Professional', status: 'past_due', users: 1500, nextBilling: '2024-03-25', amount: '$499' },
    { id: 6, institution: 'Mountain View High', plan: 'Professional', status: 'active', users: 980, nextBilling: '2024-04-22', amount: '$499' },
  ];

  const stats = {
    mrr: '$85,255',
    arr: '$1,023,060',
    growth: '+18.5%',
    churn: '2.3%'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="superadmin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Subscription Management" role="superadmin" userName="Super Admin" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Revenue Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <p className="text-sm text-white/80">Monthly Recurring Revenue</p>
                  <p className="text-3xl font-bold mt-1">{stats.mrr}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <p className="text-sm text-white/80">Annual Recurring Revenue</p>
                  <p className="text-3xl font-bold mt-1">{stats.arr}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/80">MRR Growth</p>
                      <p className="text-3xl font-bold mt-1">{stats.growth}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-white/80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6">
                  <p className="text-sm text-white/80">Churn Rate</p>
                  <p className="text-3xl font-bold mt-1">{stats.churn}</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="subscriptions" className="space-y-6">
              <TabsList>
                <TabsTrigger value="subscriptions">Active Subscriptions</TabsTrigger>
                <TabsTrigger value="plans">Pricing Plans</TabsTrigger>
              </TabsList>

              <TabsContent value="subscriptions" className="space-y-6">
                {/* Search */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search subscriptions..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-40">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="trial">Trial</SelectItem>
                          <SelectItem value="past_due">Past Due</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Subscriptions List */}
                <Card>
                  <CardHeader>
                    <CardTitle>All Subscriptions</CardTitle>
                    <CardDescription>Manage institution subscriptions and billing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {subscriptions.map((sub) => (
                        <div key={sub.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Building2 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">{sub.institution}</div>
                              <div className="text-sm text-gray-500">
                                {sub.users.toLocaleString()} users • {sub.plan} Plan
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="font-medium">{sub.amount}/mo</div>
                              <div className="text-xs text-gray-500 flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                Next: {sub.nextBilling}
                              </div>
                            </div>
                            <Badge variant={
                              sub.status === 'active' ? 'default' :
                              sub.status === 'trial' ? 'secondary' : 'destructive'
                            }>
                              {sub.status === 'past_due' ? 'Past Due' : sub.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="plans" className="space-y-6">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Plan
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {plans.map((plan, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${plan.color}`} />
                          <CardTitle>{plan.name}</CardTitle>
                        </div>
                        <div className="text-2xl font-bold">{plan.price}</div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-gray-500">{plan.features}</p>
                        <div className="pt-4 border-t">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Institutions</span>
                            <span className="font-medium">{plan.institutions}</span>
                          </div>
                          <div className="flex justify-between text-sm mt-2">
                            <span className="text-gray-500">Revenue</span>
                            <span className="font-medium text-green-600">{plan.revenue}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Edit Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
