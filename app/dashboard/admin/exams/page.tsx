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
  ClipboardCheck, 
  Search,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Users,
  FileText
} from 'lucide-react';

export default function AdminExams() {
  const [searchTerm, setSearchTerm] = useState('');

  const exams = [
    { id: 1, name: 'Mid-Term Examination', type: 'Term Exam', classes: 'Grade 9-12', startDate: '2024-04-15', endDate: '2024-04-25', status: 'upcoming', subjects: 8 },
    { id: 2, name: 'Unit Test - March', type: 'Unit Test', classes: 'Grade 10', startDate: '2024-03-25', endDate: '2024-03-27', status: 'completed', subjects: 5 },
    { id: 3, name: 'Physics Practical', type: 'Practical', classes: 'Grade 11-12', startDate: '2024-04-10', endDate: '2024-04-12', status: 'upcoming', subjects: 1 },
    { id: 4, name: 'Final Examination', type: 'Term Exam', classes: 'Grade 9-12', startDate: '2024-06-01', endDate: '2024-06-15', status: 'scheduled', subjects: 8 },
    { id: 5, name: 'Chemistry Lab Test', type: 'Practical', classes: 'Grade 11-12', startDate: '2024-04-08', endDate: '2024-04-09', status: 'ongoing', subjects: 1 },
  ];

  const stats = {
    total: 12,
    upcoming: 4,
    ongoing: 1,
    completed: 7
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Exam Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Total Exams</p>
                      <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
                    </div>
                    <ClipboardCheck className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-700">Upcoming</p>
                      <p className="text-2xl font-bold text-yellow-900">{stats.upcoming}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Ongoing</p>
                      <p className="text-2xl font-bold text-green-900">{stats.ongoing}</p>
                    </div>
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Completed</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
                    </div>
                    <FileText className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Add */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search exams..."
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
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Exam
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Exams List */}
            <Card>
              <CardHeader>
                <CardTitle>All Examinations</CardTitle>
                <CardDescription>Manage exam schedules and configurations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exams.map((exam) => (
                    <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          exam.status === 'upcoming' ? 'bg-yellow-100' :
                          exam.status === 'ongoing' ? 'bg-green-100' :
                          exam.status === 'completed' ? 'bg-gray-100' : 'bg-blue-100'
                        }`}>
                          <ClipboardCheck className={`h-5 w-5 ${
                            exam.status === 'upcoming' ? 'text-yellow-600' :
                            exam.status === 'ongoing' ? 'text-green-600' :
                            exam.status === 'completed' ? 'text-gray-600' : 'text-blue-600'
                          }`} />
                        </div>
                        <div>
                          <div className="font-medium">{exam.name}</div>
                          <div className="text-sm text-gray-500">
                            {exam.type} • {exam.classes} • {exam.subjects} subjects
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right text-sm text-gray-500">
                          <div>{exam.startDate} - {exam.endDate}</div>
                        </div>
                        <Badge variant={
                          exam.status === 'upcoming' ? 'secondary' :
                          exam.status === 'ongoing' ? 'default' :
                          exam.status === 'completed' ? 'outline' : 'secondary'
                        }>
                          {exam.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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
