'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Award, 
  Search,
  Download,
  Upload,
  Edit,
  Save,
  Users,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

export default function TeacherGrades() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('physics-101');

  const students = [
    { id: 1, name: 'Emma Wilson', assignments: 92, quizzes: 88, midterm: 85, participation: 95, total: 90, grade: 'A-', trend: 'up' },
    { id: 2, name: 'Alex Chen', assignments: 88, quizzes: 92, midterm: 90, participation: 85, total: 89, grade: 'B+', trend: 'up' },
    { id: 3, name: 'Sarah Johnson', assignments: 78, quizzes: 75, midterm: 72, participation: 80, total: 76, grade: 'C+', trend: 'down' },
    { id: 4, name: 'Michael Brown', assignments: 95, quizzes: 98, midterm: 96, participation: 92, total: 95, grade: 'A', trend: 'stable' },
    { id: 5, name: 'Lisa Davis', assignments: 82, quizzes: 80, midterm: 78, participation: 88, total: 82, grade: 'B-', trend: 'up' },
    { id: 6, name: 'David Wilson', assignments: 70, quizzes: 68, midterm: 65, participation: 75, total: 70, grade: 'C-', trend: 'down' },
  ];

  const classStats = {
    avgGrade: 84,
    highestGrade: 95,
    lowestGrade: 70,
    passRate: 100
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Gradebook" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Class Selection and Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physics-101">Physics 101</SelectItem>
                    <SelectItem value="advanced-physics">Advanced Physics</SelectItem>
                    <SelectItem value="physics-lab">Physics Lab</SelectItem>
                    <SelectItem value="ap-physics">AP Physics</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-blue-700">Class Average</p>
                      <p className="text-xl font-bold text-blue-900">{classStats.avgGrade}%</p>
                    </div>
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-green-700">Highest Grade</p>
                      <p className="text-xl font-bold text-green-900">{classStats.highestGrade}%</p>
                    </div>
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-orange-700">Lowest Grade</p>
                      <p className="text-xl font-bold text-orange-900">{classStats.lowestGrade}%</p>
                    </div>
                    <TrendingDown className="h-6 w-6 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-purple-700">Pass Rate</p>
                      <p className="text-xl font-bold text-purple-900">{classStats.passRate}%</p>
                    </div>
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gradebook Table */}
            <Card>
              <CardHeader>
                <CardTitle>Physics 101 - Gradebook</CardTitle>
                <CardDescription>28 students enrolled</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-3 px-4 font-medium">Student</th>
                        <th className="text-center py-3 px-4 font-medium">Assignments (30%)</th>
                        <th className="text-center py-3 px-4 font-medium">Quizzes (20%)</th>
                        <th className="text-center py-3 px-4 font-medium">Mid-term (30%)</th>
                        <th className="text-center py-3 px-4 font-medium">Participation (20%)</th>
                        <th className="text-center py-3 px-4 font-medium">Total</th>
                        <th className="text-center py-3 px-4 font-medium">Grade</th>
                        <th className="text-center py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{student.name}</span>
                              {student.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                              {student.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                            </div>
                          </td>
                          <td className="text-center py-3 px-4">{student.assignments}</td>
                          <td className="text-center py-3 px-4">{student.quizzes}</td>
                          <td className="text-center py-3 px-4">{student.midterm}</td>
                          <td className="text-center py-3 px-4">{student.participation}</td>
                          <td className="text-center py-3 px-4 font-bold">{student.total}%</td>
                          <td className="text-center py-3 px-4">
                            <Badge variant={
                              student.grade.startsWith('A') ? 'default' :
                              student.grade.startsWith('B') ? 'secondary' : 'outline'
                            }>
                              {student.grade}
                            </Badge>
                          </td>
                          <td className="text-center py-3 px-4">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
