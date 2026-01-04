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
  DollarSign,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Send
} from 'lucide-react';

export default function AdminPayments() {
  const [searchTerm, setSearchTerm] = useState('');

  const payments = [
    { id: 'INV-001', student: 'Emma Wilson', class: 'Grade 10A', amount: '$1,500', dueDate: '2024-04-15', status: 'paid', paidDate: '2024-04-10' },
    { id: 'INV-002', student: 'Alex Chen', class: 'Grade 11A', amount: '$1,500', dueDate: '2024-04-15', status: 'paid', paidDate: '2024-04-12' },
    { id: 'INV-003', student: 'Sarah Johnson', class: 'Grade 9B', amount: '$1,500', dueDate: '2024-04-15', status: 'pending', paidDate: '-' },
    { id: 'INV-004', student: 'Michael Brown', class: 'Grade 12A', amount: '$1,500', dueDate: '2024-04-15', status: 'overdue', paidDate: '-' },
    { id: 'INV-005', student: 'Lisa Davis', class: 'Grade 10B', amount: '$1,500', dueDate: '2024-04-15', status: 'paid', paidDate: '2024-04-08' },
    { id: 'INV-006', student: 'David Wilson', class: 'Grade 11B', amount: '$1,500', dueDate: '2024-04-15', status: 'partial', paidDate: '2024-04-05' },
  ];

  const stats = {
    totalCollected: '$145,000',
    pending: '$23,500',
    overdue: '$8,200',
    thisMonth: '$45,000'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Invoices & Payments" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Total Collected</p>
                      <p className="text-2xl font-bold text-green-900">{stats.totalCollected}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-700">Pending</p>
                      <p className="text-2xl font-bold text-yellow-900">{stats.pending}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Overdue</p>
                      <p className="text-2xl font-bold text-red-900">{stats.overdue}</p>
                    </div>
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">This Month</p>
                      <p className="text-2xl font-bold text-blue-900">{stats.thisMonth}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="invoices" className="space-y-6">
              <TabsList>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="payments">Payment History</TabsTrigger>
              </TabsList>

              <TabsContent value="invoices" className="space-y-6">
                {/* Search and Filter */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="relative flex-1 max-w-md">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            placeholder="Search invoices..."
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
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="overdue">Overdue</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                        <Button>
                          <Send className="h-4 w-4 mr-2" />
                          Send Reminders
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Invoices List */}
                <Card>
                  <CardHeader>
                    <CardTitle>All Invoices</CardTitle>
                    <CardDescription>Manage student fee invoices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {payments.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              payment.status === 'paid' ? 'bg-green-100' :
                              payment.status === 'pending' ? 'bg-yellow-100' :
                              payment.status === 'overdue' ? 'bg-red-100' : 'bg-orange-100'
                            }`}>
                              <Receipt className={`h-5 w-5 ${
                                payment.status === 'paid' ? 'text-green-600' :
                                payment.status === 'pending' ? 'text-yellow-600' :
                                payment.status === 'overdue' ? 'text-red-600' : 'text-orange-600'
                              }`} />
                            </div>
                            <div>
                              <div className="font-medium">{payment.student}</div>
                              <div className="text-sm text-gray-500">
                                {payment.id} • {payment.class}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="font-bold">{payment.amount}</div>
                              <div className="text-xs text-gray-500">Due: {payment.dueDate}</div>
                            </div>
                            <Badge variant={
                              payment.status === 'paid' ? 'default' :
                              payment.status === 'pending' ? 'secondary' :
                              payment.status === 'overdue' ? 'destructive' : 'outline'
                            }>
                              {payment.status}
                            </Badge>
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>All completed payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      Payment history will be displayed here
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
