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
  TrendingUp,
  TrendingDown,
  Users,
  BarChart3,
  FileText
} from 'lucide-react';

export default function AdminResults() {
  const [searchTerm, setSearchTerm] = useState('');

  const examResults = [
    { exam: 'Mid-Term Examination', class: 'Grade 10A', avgScore: 78, passRate: 94, topScore: 98, students: 30 },
    { exam: 'Mid-Term Examination', class: 'Grade 10B', avgScore: 75, passRate: 91, topScore: 95, students: 32 },
    { exam: 'Mid-Term Examination', class: 'Grade 11A', avgScore: 82, passRate: 96, topScore: 99, students: 25 },
    { exam: 'Mid-Term Examination', class: 'Grade 11B', avgScore: 79, passRate: 93, topScore: 97, students: 28 },
    { exam: 'Unit Test - March', class: 'Grade 9A', avgScore: 72, passRate: 88, topScore: 92, students: 33 },
    { exam: 'Unit Test - March', class: 'Grade 9B', avgScore: 74, passRate: 90, topScore: 94, students: 31 },
  ];

  const gradeDistribution = [
    { grade: 'A (90-100)', count: 145, percentage: 12, color: 'bg-green-500' },
    { grade: 'B (80-89)', count: 312, percentage: 25, color: 'bg-blue-500' },
    { grade: 'C (70-79)', count: 423, percentage: 34, color: 'bg-yellow-500' },
    { grade: 'D (60-69)', count: 256, percentage: 21, color: 'bg-orange-500' },
    { grade: 'F (Below 60)', count: 111, percentage: 8, color: 'bg-red-500' },
  ];

  const stats = {
    totalStudents: 1247,
    avgScore: 76.5,
    passRate: 92,
    examsPublished: 7
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Results Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Total Students</p>
                      <p className="text-2xl font-bold text-blue-900">{stats.totalStudents}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Avg Score</p>
                      <p className="text-2xl font-bold text-green-900">{stats.avgScore}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">Pass Rate</p>
                      <p className="text-2xl font-bold text-purple-900">{stats.passRate}%</p>
                    </div>
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-700">Published</p>
                      <p className="text-2xl font-bold text-orange-900">{stats.examsPublished}</p>
                    </div>
                    <FileText className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Grade Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Grade Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {gradeDistribution.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.grade}</span>
                        <span className="text-gray-500">{item.count} ({item.percentage}%)</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Results by Class */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Exam Results by Class</CardTitle>
                      <CardDescription>Performance breakdown by class</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select defaultValue="midterm">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="midterm">Mid-Term Examination</SelectItem>
                          <SelectItem value="unit">Unit Test - March</SelectItem>
                          <SelectItem value="final">Final Examination</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {examResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div>
                          <div className="font-medium">{result.class}</div>
                          <div className="text-sm text-gray-500">{result.students} students</div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{result.avgScore}%</div>
                            <div className="text-xs text-gray-500">Avg Score</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">{result.passRate}%</div>
                            <div className="text-xs text-gray-500">Pass Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-600">{result.topScore}</div>
                            <div className="text-xs text-gray-500">Top Score</div>
                          </div>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
