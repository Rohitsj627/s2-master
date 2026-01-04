'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ClipboardCheck, 
  Plus,
  Edit,
  Eye,
  Calendar,
  Clock,
  Users,
  FileText,
  Search
} from 'lucide-react';

export default function TeacherExams() {
  const [searchTerm, setSearchTerm] = useState('');

  const upcomingExams = [
    { id: 1, name: 'Physics Mid-Term', class: 'Physics 101', date: '2024-04-15', time: '09:00 AM', duration: '2 hours', students: 28, status: 'scheduled' },
    { id: 2, name: 'Lab Practical', class: 'Physics Lab', date: '2024-04-18', time: '10:00 AM', duration: '1.5 hours', students: 15, status: 'scheduled' },
    { id: 3, name: 'AP Physics Exam', class: 'AP Physics', date: '2024-04-20', time: '08:00 AM', duration: '3 hours', students: 18, status: 'draft' },
  ];

  const pastExams = [
    { id: 1, name: 'Unit Test 1', class: 'Physics 101', date: '2024-03-10', avgScore: 78, highScore: 98, students: 28, graded: true },
    { id: 2, name: 'Lab Quiz', class: 'Physics Lab', date: '2024-03-05', avgScore: 85, highScore: 95, students: 15, graded: true },
    { id: 3, name: 'AP Quiz 2', class: 'AP Physics', date: '2024-02-28', avgScore: 82, highScore: 100, students: 18, graded: true },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Exams & Tests" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                    <ClipboardCheck className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">To Grade</p>
                      <p className="text-2xl font-bold">0</p>
                    </div>
                    <FileText className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Score</p>
                      <p className="text-2xl font-bold">82%</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="upcoming" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
                  <TabsTrigger value="past">Past Exams</TabsTrigger>
                </TabsList>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Exam
                </Button>
              </div>

              <TabsContent value="upcoming" className="space-y-4">
                {upcomingExams.map((exam) => (
                  <Card key={exam.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <ClipboardCheck className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium">{exam.name}</div>
                            <div className="text-sm text-gray-500">{exam.class}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exam.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {exam.time} ({exam.duration})
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{exam.students}</div>
                            <div className="text-xs text-gray-500">students</div>
                          </div>
                          <Badge variant={exam.status === 'scheduled' ? 'default' : 'secondary'}>
                            {exam.status}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                {pastExams.map((exam) => (
                  <Card key={exam.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <ClipboardCheck className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">{exam.name}</div>
                            <div className="text-sm text-gray-500">{exam.class} • {exam.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="font-bold text-blue-600">{exam.avgScore}%</div>
                            <div className="text-xs text-gray-500">Avg Score</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-green-600">{exam.highScore}</div>
                            <div className="text-xs text-gray-500">High Score</div>
                          </div>
                          <Badge variant="outline">{exam.students} students</Badge>
                          <Button size="sm" variant="outline">View Results</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
