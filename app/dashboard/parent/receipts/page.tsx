'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Receipt, 
  Download,
  Calendar,
  DollarSign,
  CheckCircle2
} from 'lucide-react';

export default function ParentReceipts() {
  const receipts = [
    { id: 'REC-2024-001', date: '2024-02-01', amount: 2000, description: 'Q3 Tuition Fee + Lab Fee', method: 'Credit Card', status: 'paid' },
    { id: 'REC-2024-002', date: '2024-01-15', amount: 10000, description: 'Annual Fee 2024', method: 'Bank Transfer', status: 'paid' },
    { id: 'REC-2023-015', date: '2023-11-10', amount: 500, description: 'Science Fair Participation', method: 'Cash', status: 'paid' },
    { id: 'REC-2023-012', date: '2023-10-05', amount: 1500, description: 'Q2 Tuition Fee', method: 'Credit Card', status: 'paid' },
    { id: 'REC-2023-008', date: '2023-08-15', amount: 5000, description: 'Admission Fee + Books', method: 'Bank Transfer', status: 'paid' },
  ];

  const totalPaid = receipts.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Fee Receipts" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Child Selector */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Receipts for:</span>
                  <Select defaultValue="emma">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emma">Emma Thompson (Grade 10A)</SelectItem>
                      <SelectItem value="james">James Thompson (Grade 7B)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Total Paid (This Year)</p>
                      <p className="text-2xl font-bold text-green-900">${totalPaid.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Receipts</p>
                      <p className="text-2xl font-bold">{receipts.length}</p>
                    </div>
                    <Receipt className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Last Payment</p>
                      <p className="text-2xl font-bold">Feb 1</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Receipts List */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Receipts</CardTitle>
                <CardDescription>Download receipts for your records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {receipts.map((receipt) => (
                    <div key={receipt.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">{receipt.id}</div>
                          <div className="text-sm text-gray-500">{receipt.description}</div>
                          <div className="text-xs text-gray-400">{receipt.method}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-bold text-lg">${receipt.amount.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">{receipt.date}</div>
                        </div>
                        <Badge variant="default">Paid</Badge>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
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
