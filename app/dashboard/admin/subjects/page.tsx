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
  Layers, 
  Search,
  Plus,
  Edit,
  Trash2,
  BookOpen,
  Users,
  Clock
} from 'lucide-react';

export default function AdminSubjects() {
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = [
    { id: 1, name: 'Mathematics', code: 'MATH101', department: 'Science', teachers: 8, classes: 12, status: 'active' },
    { id: 2, name: 'Physics', code: 'PHY101', department: 'Science', teachers: 5, classes: 8, status: 'active' },
    { id: 3, name: 'Chemistry', code: 'CHEM101', department: 'Science', teachers: 4, classes: 6, status: 'active' },
    { id: 4, name: 'English Literature', code: 'ENG101', department: 'Languages', teachers: 6, classes: 10, status: 'active' },
    { id: 5, name: 'History', code: 'HIST101', department: 'Humanities', teachers: 3, classes: 5, status: 'active' },
    { id: 6, name: 'Computer Science', code: 'CS101', department: 'Technology', teachers: 4, classes: 7, status: 'active' },
    { id: 7, name: 'Biology', code: 'BIO101', department: 'Science', teachers: 4, classes: 6, status: 'inactive' },
    { id: 8, name: 'Geography', code: 'GEO101', department: 'Humanities', teachers: 2, classes: 4, status: 'active' },
  ];

  const stats = {
    total: 24,
    active: 22,
    departments: 5,
    teachers: 87
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Subject Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Total Subjects</p>
                      <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
                    </div>
                    <Layers className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Active</p>
                      <p className="text-2xl font-bold text-green-900">{stats.active}</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">Departments</p>
                      <p className="text-2xl font-bold text-purple-900">{stats.departments}</p>
                    </div>
                    <Layers className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-700">Teachers</p>
                      <p className="text-2xl font-bold text-orange-900">{stats.teachers}</p>
                    </div>
                    <Users className="h-8 w-8 text-orange-600" />
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
                        placeholder="Search subjects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Departments</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="languages">Languages</SelectItem>
                        <SelectItem value="humanities">Humanities</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Subject
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Subjects List */}
            <Card>
              <CardHeader>
                <CardTitle>All Subjects</CardTitle>
                <CardDescription>Manage academic subjects and their assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{subject.name}</div>
                          <div className="text-sm text-gray-500">
                            {subject.code} • {subject.department}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right text-sm text-gray-500">
                          <div>{subject.teachers} teachers</div>
                          <div>{subject.classes} classes</div>
                        </div>
                        <Badge variant={subject.status === 'active' ? 'default' : 'secondary'}>
                          {subject.status}
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
