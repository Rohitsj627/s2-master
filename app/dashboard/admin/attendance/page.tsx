'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  UserCheck, 
  Users,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Download
} from 'lucide-react';

export default function AdminAttendance() {
  const [selectedDate, setSelectedDate] = useState('today');

  const classAttendance = [
    { name: 'Grade 9A', present: 30, absent: 2, late: 1, total: 33, percentage: 91 },
    { name: 'Grade 9B', present: 28, absent: 3, late: 0, total: 31, percentage: 90 },
    { name: 'Grade 10A', present: 27, absent: 1, late: 2, total: 30, percentage: 90 },
    { name: 'Grade 10B', present: 29, absent: 2, late: 1, total: 32, percentage: 91 },
    { name: 'Grade 11A', present: 24, absent: 1, late: 0, total: 25, percentage: 96 },
    { name: 'Grade 11B', present: 25, absent: 2, late: 1, total: 28, percentage: 89 },
    { name: 'Grade 12A', present: 22, absent: 0, late: 1, total: 23, percentage: 96 },
    { name: 'Grade 12B', present: 20, absent: 2, late: 0, total: 22, percentage: 91 },
  ];

  const teacherAttendance = [
    { name: 'Dr. Smith', subject: 'Mathematics', status: 'present', checkIn: '07:45 AM' },
    { name: 'Dr. Johnson', subject: 'Physics', status: 'present', checkIn: '07:50 AM' },
    { name: 'Ms. Davis', subject: 'English', status: 'late', checkIn: '08:15 AM' },
    { name: 'Dr. Wilson', subject: 'Chemistry', status: 'present', checkIn: '07:40 AM' },
    { name: 'Mr. Brown', subject: 'History', status: 'absent', checkIn: '-' },
  ];

  const stats = {
    totalStudents: 1247,
    presentToday: 1178,
    absentToday: 56,
    lateToday: 13,
    averageAttendance: 94.5
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Attendance Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-blue-700">Total Students</p>
                      <p className="text-xl font-bold text-blue-900">{stats.totalStudents}</p>
                    </div>
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-green-700">Present Today</p>
                      <p className="text-xl font-bold text-green-900">{stats.presentToday}</p>
                    </div>
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-red-700">Absent</p>
                      <p className="text-xl font-bold text-red-900">{stats.absentToday}</p>
                    </div>
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-yellow-700">Late</p>
                      <p className="text-xl font-bold text-yellow-900">{stats.lateToday}</p>
                    </div>
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-purple-700">Avg Rate</p>
                      <p className="text-xl font-bold text-purple-900">{stats.averageAttendance}%</p>
                    </div>
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="students" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="students">Student Attendance</TabsTrigger>
                  <TabsTrigger value="teachers">Teacher Attendance</TabsTrigger>
                </TabsList>
                <div className="flex items-center space-x-4">
                  <Select value={selectedDate} onValueChange={setSelectedDate}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="yesterday">Yesterday</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              <TabsContent value="students" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Class-wise Attendance</CardTitle>
                    <CardDescription>Today's attendance summary by class</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {classAttendance.map((cls, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Users className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium">{cls.name}</div>
                              <div className="text-sm text-gray-500">Total: {cls.total} students</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="flex items-center text-green-600">
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                {cls.present}
                              </span>
                              <span className="flex items-center text-red-600">
                                <XCircle className="h-4 w-4 mr-1" />
                                {cls.absent}
                              </span>
                              <span className="flex items-center text-yellow-600">
                                <AlertTriangle className="h-4 w-4 mr-1" />
                                {cls.late}
                              </span>
                            </div>
                            <div className="w-32">
                              <div className="flex justify-between text-sm mb-1">
                                <span>{cls.percentage}%</span>
                              </div>
                              <Progress value={cls.percentage} className="h-2" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="teachers" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Teacher Attendance</CardTitle>
                    <CardDescription>Today's teacher attendance status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teacherAttendance.map((teacher, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              teacher.status === 'present' ? 'bg-green-100' :
                              teacher.status === 'late' ? 'bg-yellow-100' : 'bg-red-100'
                            }`}>
                              <UserCheck className={`h-5 w-5 ${
                                teacher.status === 'present' ? 'text-green-600' :
                                teacher.status === 'late' ? 'text-yellow-600' : 'text-red-600'
                              }`} />
                            </div>
                            <div>
                              <div className="font-medium">{teacher.name}</div>
                              <div className="text-sm text-gray-500">{teacher.subject}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-500">Check-in: {teacher.checkIn}</div>
                            <Badge variant={
                              teacher.status === 'present' ? 'default' :
                              teacher.status === 'late' ? 'secondary' : 'destructive'
                            }>
                              {teacher.status}
                            </Badge>
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
