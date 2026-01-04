'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  Receipt
} from 'lucide-react';

export default function StudentFees() {
  const feesSummary = {
    totalFees: 15000,
    paid: 12000,
    pending: 3000,
    dueDate: '2024-04-15'
  };

  const feeBreakdown = [
    { item: 'Tuition Fee', amount: 8000, status: 'paid', paidDate: '2024-01-15' },
    { item: 'Lab Fee', amount: 1500, status: 'paid', paidDate: '2024-01-15' },
    { item: 'Library Fee', amount: 500, status: 'paid', paidDate: '2024-01-15' },
    { item: 'Sports Fee', amount: 1000, status: 'paid', paidDate: '2024-02-01' },
    { item: 'Technology Fee', amount: 1000, status: 'paid', paidDate: '2024-02-01' },
    { item: 'Exam Fee', amount: 1500, status: 'pending', dueDate: '2024-04-15' },
    { item: 'Activity Fee', amount: 1500, status: 'pending', dueDate: '2024-04-15' },
  ];

  const paymentHistory = [
    { id: 'TXN-001', date: '2024-02-01', amount: 2000, method: 'Credit Card', status: 'success' },
    { id: 'TXN-002', date: '2024-01-15', amount: 10000, method: 'Bank Transfer', status: 'success' },
    { id: 'TXN-003', date: '2023-08-15', amount: 5000, method: 'Credit Card', status: 'success' },
  ];

  const percentPaid = (feesSummary.paid / feesSummary.totalFees) * 100;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Fees" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Total Fees</p>
                      <p className="text-2xl font-bold text-blue-900">${feesSummary.totalFees.toLocaleString()}</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Paid</p>
                      <p className="text-2xl font-bold text-green-900">${feesSummary.paid.toLocaleString()}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-700">Pending</p>
                      <p className="text-2xl font-bold text-orange-900">${feesSummary.pending.toLocaleString()}</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Due Date</p>
                      <p className="text-2xl font-bold text-red-900">{feesSummary.dueDate}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Payment Progress</h3>
                    <p className="text-sm text-gray-500">{percentPaid.toFixed(0)}% of total fees paid</p>
                  </div>
                  <Button>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                </div>
                <Progress value={percentPaid} className="h-3" />
              </CardContent>
            </Card>

            <Tabs defaultValue="breakdown" className="space-y-6">
              <TabsList>
                <TabsTrigger value="breakdown">Fee Breakdown</TabsTrigger>
                <TabsTrigger value="history">Payment History</TabsTrigger>
              </TabsList>

              <TabsContent value="breakdown">
                <Card>
                  <CardHeader>
                    <CardTitle>Fee Structure</CardTitle>
                    <CardDescription>Detailed breakdown of all fees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeBreakdown.map((fee, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              fee.status === 'paid' ? 'bg-green-100' : 'bg-orange-100'
                            }`}>
                              {fee.status === 'paid' ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                              ) : (
                                <Clock className="h-5 w-5 text-orange-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{fee.item}</div>
                              <div className="text-sm text-gray-500">
                                {fee.status === 'paid' ? `Paid on ${fee.paidDate}` : `Due on ${fee.dueDate}`}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-bold">${fee.amount.toLocaleString()}</span>
                            <Badge variant={fee.status === 'paid' ? 'default' : 'secondary'}>
                              {fee.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Your past payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentHistory.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <Receipt className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">{payment.id}</div>
                              <div className="text-sm text-gray-500">{payment.date} • {payment.method}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="font-bold text-green-600">${payment.amount.toLocaleString()}</span>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Receipt
                            </Button>
                          </div>
                        </div>
                      ))}
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
