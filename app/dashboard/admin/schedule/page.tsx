'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Plus,
  Edit,
  Clock,
  BookOpen,
  Users,
  MapPin
} from 'lucide-react';

export default function AdminSchedule() {
  const [selectedClass, setSelectedClass] = useState('all');

  const schedule = [
    { time: '08:00 - 08:45', monday: 'Math - 10A', tuesday: 'Physics - 10A', wednesday: 'Math - 10A', thursday: 'Chemistry - 10A', friday: 'English - 10A' },
    { time: '08:50 - 09:35', monday: 'English - 10A', tuesday: 'Math - 10A', wednesday: 'Physics - 10A', thursday: 'Math - 10A', friday: 'Physics - 10A' },
    { time: '09:40 - 10:25', monday: 'Physics - 10A', tuesday: 'English - 10A', wednesday: 'Chemistry - 10A', thursday: 'English - 10A', friday: 'Chemistry - 10A' },
    { time: '10:30 - 11:15', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break' },
    { time: '11:20 - 12:05', monday: 'Chemistry - 10A', tuesday: 'Chemistry - 10A', wednesday: 'English - 10A', thursday: 'Physics - 10A', friday: 'Math - 10A' },
    { time: '12:10 - 12:55', monday: 'History - 10A', tuesday: 'Geography - 10A', wednesday: 'History - 10A', thursday: 'Geography - 10A', friday: 'History - 10A' },
    { time: '13:00 - 13:45', monday: 'Lunch', tuesday: 'Lunch', wednesday: 'Lunch', thursday: 'Lunch', friday: 'Lunch' },
    { time: '13:50 - 14:35', monday: 'Computer - 10A', tuesday: 'Art - 10A', wednesday: 'Computer - 10A', thursday: 'PE - 10A', friday: 'Art - 10A' },
  ];

  const classes = [
    { name: 'Grade 9A', students: 32, subjects: 8 },
    { name: 'Grade 9B', students: 30, subjects: 8 },
    { name: 'Grade 10A', students: 28, subjects: 8 },
    { name: 'Grade 10B', students: 31, subjects: 8 },
    { name: 'Grade 11A', students: 25, subjects: 7 },
    { name: 'Grade 11B', students: 27, subjects: 7 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Timetable Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Classes</p>
                      <p className="text-2xl font-bold">42</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Periods/Day</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Subjects</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Rooms</p>
                      <p className="text-2xl font-bold">35</p>
                    </div>
                    <MapPin className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="timetable" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="timetable">Weekly Timetable</TabsTrigger>
                  <TabsTrigger value="classes">Class List</TabsTrigger>
                </TabsList>
                <div className="flex items-center space-x-4">
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Grade 10A</SelectItem>
                      <SelectItem value="9a">Grade 9A</SelectItem>
                      <SelectItem value="9b">Grade 9B</SelectItem>
                      <SelectItem value="10b">Grade 10B</SelectItem>
                      <SelectItem value="11a">Grade 11A</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Schedule
                  </Button>
                </div>
              </div>

              <TabsContent value="timetable">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Timetable - Grade 10A</CardTitle>
                    <CardDescription>View and manage class schedules</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left font-medium">Time</th>
                            <th className="border p-3 text-center font-medium">Monday</th>
                            <th className="border p-3 text-center font-medium">Tuesday</th>
                            <th className="border p-3 text-center font-medium">Wednesday</th>
                            <th className="border p-3 text-center font-medium">Thursday</th>
                            <th className="border p-3 text-center font-medium">Friday</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schedule.map((row, index) => (
                            <tr key={index} className={row.monday === 'Break' || row.monday === 'Lunch' ? 'bg-gray-50' : ''}>
                              <td className="border p-3 font-medium text-sm">{row.time}</td>
                              <td className="border p-3 text-center">
                                <Badge variant={row.monday === 'Break' || row.monday === 'Lunch' ? 'secondary' : 'outline'}>
                                  {row.monday}
                                </Badge>
                              </td>
                              <td className="border p-3 text-center">
                                <Badge variant={row.tuesday === 'Break' || row.tuesday === 'Lunch' ? 'secondary' : 'outline'}>
                                  {row.tuesday}
                                </Badge>
                              </td>
                              <td className="border p-3 text-center">
                                <Badge variant={row.wednesday === 'Break' || row.wednesday === 'Lunch' ? 'secondary' : 'outline'}>
                                  {row.wednesday}
                                </Badge>
                              </td>
                              <td className="border p-3 text-center">
                                <Badge variant={row.thursday === 'Break' || row.thursday === 'Lunch' ? 'secondary' : 'outline'}>
                                  {row.thursday}
                                </Badge>
                              </td>
                              <td className="border p-3 text-center">
                                <Badge variant={row.friday === 'Break' || row.friday === 'Lunch' ? 'secondary' : 'outline'}>
                                  {row.friday}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="classes">
                <Card>
                  <CardHeader>
                    <CardTitle>Class Schedules</CardTitle>
                    <CardDescription>Quick overview of all class schedules</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {classes.map((cls, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">{cls.name}</h3>
                                <p className="text-sm text-gray-500">{cls.students} students • {cls.subjects} subjects</p>
                              </div>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
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
