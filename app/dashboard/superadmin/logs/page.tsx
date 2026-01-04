'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Activity, 
  Search,
  Filter,
  Download,
  User,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Clock,
  Eye
} from 'lucide-react';

export default function SuperAdminLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const logs = [
    { id: 1, type: 'auth', action: 'User Login', user: 'john.smith@school.edu', institution: 'Springfield High', ip: '192.168.1.45', timestamp: '2 minutes ago', status: 'success' },
    { id: 2, type: 'security', action: 'Failed Login Attempt', user: 'unknown@test.com', institution: 'N/A', ip: '45.67.89.12', timestamp: '15 minutes ago', status: 'warning' },
    { id: 3, type: 'admin', action: 'User Role Updated', user: 'admin@riverside.edu', institution: 'Riverside International', ip: '192.168.2.100', timestamp: '1 hour ago', status: 'success' },
    { id: 4, type: 'system', action: 'Database Backup Completed', user: 'system', institution: 'System', ip: 'localhost', timestamp: '2 hours ago', status: 'success' },
    { id: 5, type: 'payment', action: 'Subscription Payment Failed', user: 'billing@oakvalley.edu', institution: 'Oak Valley Academy', ip: '192.168.3.50', timestamp: '3 hours ago', status: 'error' },
    { id: 6, type: 'auth', action: 'Password Reset', user: 'sarah.j@school.edu', institution: 'Springfield High', ip: '192.168.1.78', timestamp: '4 hours ago', status: 'success' },
    { id: 7, type: 'admin', action: 'New Institution Created', user: 'superadmin@edusmart.com', institution: 'Maple Grove School', ip: '10.0.0.1', timestamp: '5 hours ago', status: 'success' },
    { id: 8, type: 'security', action: 'Multiple Failed Logins Detected', user: 'test@malicious.com', institution: 'N/A', ip: '123.45.67.89', timestamp: '6 hours ago', status: 'error' },
    { id: 9, type: 'system', action: 'Scheduled Maintenance Started', user: 'system', institution: 'System', ip: 'localhost', timestamp: '8 hours ago', status: 'info' },
    { id: 10, type: 'payment', action: 'Subscription Renewed', user: 'admin@mountainview.edu', institution: 'Mountain View High', ip: '192.168.5.25', timestamp: '12 hours ago', status: 'success' },
  ];

  const stats = {
    total: 15847,
    today: 342,
    warnings: 23,
    errors: 5
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'info': return <Info className="h-4 w-4 text-blue-500" />;
      default: return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'auth': return 'bg-blue-100 text-blue-700';
      case 'security': return 'bg-red-100 text-red-700';
      case 'admin': return 'bg-purple-100 text-purple-700';
      case 'system': return 'bg-gray-100 text-gray-700';
      case 'payment': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="superadmin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Audit Logs" role="superadmin" userName="Super Admin" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-600">Total Logs</p>
                      <p className="text-xl font-bold">{stats.total.toLocaleString()}</p>
                    </div>
                    <Activity className="h-6 w-6 text-gray-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-blue-700">Today</p>
                      <p className="text-xl font-bold text-blue-900">{stats.today}</p>
                    </div>
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-yellow-700">Warnings</p>
                      <p className="text-xl font-bold text-yellow-900">{stats.warnings}</p>
                    </div>
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-red-700">Errors</p>
                      <p className="text-xl font-bold text-red-900">{stats.errors}</p>
                    </div>
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search logs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Log Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="auth">Authentication</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="admin">Admin Actions</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="payment">Payments</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      More Filters
                    </Button>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Logs List */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>System-wide audit trail and activity logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(log.status)}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{log.action}</span>
                            <Badge className={getTypeColor(log.type)} variant="secondary">
                              {log.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center space-x-2 mt-1">
                            <User className="h-3 w-3" />
                            <span>{log.user}</span>
                            <span>•</span>
                            <span>{log.institution}</span>
                            <span>•</span>
                            <span>IP: {log.ip}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{log.timestamp}</span>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
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
