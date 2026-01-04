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
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info,
  Eye
} from 'lucide-react';

export default function AdminLogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const logs = [
    { id: 1, action: 'Student Enrolled', user: 'admin@school.edu', details: 'New student Emma Wilson added to Grade 10A', timestamp: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Grades Published', user: 'dr.smith@school.edu', details: 'Mid-term grades published for Physics 101', timestamp: '15 minutes ago', type: 'academic' },
    { id: 3, action: 'Fee Payment Received', user: 'system', details: 'Payment of $1,500 received from Alex Chen', timestamp: '1 hour ago', type: 'payment' },
    { id: 4, action: 'Class Schedule Updated', user: 'admin@school.edu', details: 'Timetable updated for Grade 11A', timestamp: '2 hours ago', type: 'schedule' },
    { id: 5, action: 'User Login', user: 'dr.johnson@school.edu', details: 'Successful login from IP 192.168.1.45', timestamp: '3 hours ago', type: 'auth' },
    { id: 6, action: 'Attendance Marked', user: 'ms.davis@school.edu', details: 'Attendance recorded for English 101', timestamp: '4 hours ago', type: 'attendance' },
    { id: 7, action: 'Assignment Created', user: 'dr.wilson@school.edu', details: 'New assignment created for Chemistry 101', timestamp: '5 hours ago', type: 'academic' },
    { id: 8, action: 'Parent Account Created', user: 'admin@school.edu', details: 'Parent account created for Michael Thompson', timestamp: '6 hours ago', type: 'user' },
  ];

  const stats = {
    today: 156,
    week: 892,
    userActions: 523,
    systemEvents: 369
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'user': return 'bg-blue-100 text-blue-700';
      case 'academic': return 'bg-purple-100 text-purple-700';
      case 'payment': return 'bg-green-100 text-green-700';
      case 'schedule': return 'bg-orange-100 text-orange-700';
      case 'auth': return 'bg-gray-100 text-gray-700';
      case 'attendance': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Activity Logs" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Today</p>
                      <p className="text-2xl font-bold">{stats.today}</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Week</p>
                      <p className="text-2xl font-bold">{stats.week}</p>
                    </div>
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">User Actions</p>
                      <p className="text-2xl font-bold">{stats.userActions}</p>
                    </div>
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">System Events</p>
                      <p className="text-2xl font-bold">{stats.systemEvents}</p>
                    </div>
                    <Info className="h-8 w-8 text-orange-600" />
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
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="user">User Actions</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="payment">Payments</SelectItem>
                        <SelectItem value="auth">Authentication</SelectItem>
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
                <CardDescription>System-wide activity logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Activity className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{log.action}</span>
                            <Badge className={getTypeColor(log.type)} variant="secondary">
                              {log.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500">{log.details}</div>
                          <div className="text-xs text-gray-400 mt-1">by {log.user}</div>
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
