'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Receipt, 
  Search,
  Download,
  Filter,
  Building2,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  CreditCard,
  RefreshCw,
  Eye
} from 'lucide-react';

export default function SuperAdminPayments() {
  const [searchTerm, setSearchTerm] = useState('');

  const payments = [
    { id: 'PAY-001', institution: 'Springfield High School', amount: '$999.00', date: '2024-03-21', method: 'Credit Card', status: 'completed', invoice: 'INV-2024-001' },
    { id: 'PAY-002', institution: 'Oak Valley Academy', amount: '$499.00', date: '2024-03-20', method: 'Bank Transfer', status: 'completed', invoice: 'INV-2024-002' },
    { id: 'PAY-003', institution: 'Riverside International', amount: '$999.00', date: '2024-03-18', method: 'Credit Card', status: 'completed', invoice: 'INV-2024-003' },
    { id: 'PAY-004', institution: 'Sunset Academy', amount: '$499.00', date: '2024-03-15', method: 'Credit Card', status: 'failed', invoice: 'INV-2024-004' },
    { id: 'PAY-005', institution: 'Mountain View High', amount: '$499.00', date: '2024-03-12', method: 'Bank Transfer', status: 'completed', invoice: 'INV-2024-005' },
    { id: 'PAY-006', institution: 'Pine Ridge School', amount: '$199.00', date: '2024-03-10', method: 'Credit Card', status: 'pending', invoice: 'INV-2024-006' },
  ];

  const stats = {
    totalRevenue: '$1,245,890',
    thisMonth: '$85,255',
    pending: '$4,485',
    failed: '$1,996'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="superadmin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Payment Management" role="superadmin" userName="Super Admin" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue}</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-blue-600">{stats.thisMonth}</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Failed</p>
                      <p className="text-2xl font-bold text-red-600">{stats.failed}</p>
                    </div>
                    <div className="p-3 bg-red-100 rounded-full">
                      <XCircle className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="transactions" className="space-y-6">
              <TabsList>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="refunds">Refunds</TabsTrigger>
              </TabsList>

              <TabsContent value="transactions" className="space-y-6">
                {/* Search and Filter */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="relative flex-1 max-w-md">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Search transactions..."
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
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filters
                        </Button>
                      </div>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Transactions List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>All payment transactions across institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {payments.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              payment.status === 'completed' ? 'bg-green-100' :
                              payment.status === 'pending' ? 'bg-yellow-100' : 'bg-red-100'
                            }`}>
                              {payment.status === 'completed' ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                              ) : payment.status === 'pending' ? (
                                <Clock className="h-5 w-5 text-yellow-600" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{payment.institution}</div>
                              <div className="text-sm text-gray-500">
                                {payment.id} • {payment.method} • {payment.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="font-bold text-lg">{payment.amount}</div>
                              <div className="text-xs text-gray-500">{payment.invoice}</div>
                            </div>
                            <Badge variant={
                              payment.status === 'completed' ? 'default' :
                              payment.status === 'pending' ? 'secondary' : 'destructive'
                            }>
                              {payment.status}
                            </Badge>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              {payment.status === 'failed' && (
                                <Button size="sm" variant="ghost">
                                  <RefreshCw className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="invoices">
                <Card>
                  <CardHeader>
                    <CardTitle>Invoices</CardTitle>
                    <CardDescription>All generated invoices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      Invoice management coming soon
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="refunds">
                <Card>
                  <CardHeader>
                    <CardTitle>Refunds</CardTitle>
                    <CardDescription>Process and track refunds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      Refund management coming soon
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
