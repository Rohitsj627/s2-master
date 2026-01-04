'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock,
  MapPin,
  Users,
  BookOpen
} from 'lucide-react';

export default function TeacherSchedule() {
  const todaySchedule = [
    { time: '08:00 - 08:45', class: 'Physics 101', room: 'Room 205', students: 28, status: 'completed' },
    { time: '09:00 - 09:45', class: 'Advanced Physics', room: 'Lab B', students: 22, status: 'current' },
    { time: '10:00 - 10:45', class: 'Physics Lab', room: 'Lab A', students: 15, status: 'upcoming' },
    { time: '11:00 - 11:45', class: 'Break', room: '-', students: 0, status: 'break' },
    { time: '12:00 - 12:45', class: 'AP Physics', room: 'Room 301', students: 18, status: 'upcoming' },
    { time: '13:00 - 13:45', class: 'Lunch', room: '-', students: 0, status: 'break' },
    { time: '14:00 - 14:45', class: 'Physics 101', room: 'Room 205', students: 30, status: 'upcoming' },
  ];

  const weekSchedule = {
    monday: ['Physics 101', 'Advanced Physics', 'Lab', '-', 'AP Physics'],
    tuesday: ['Physics 101', 'Physics 101', '-', 'Lab', 'Advanced Physics'],
    wednesday: ['Advanced Physics', 'Lab', 'Physics 101', '-', 'AP Physics'],
    thursday: ['Physics 101', 'AP Physics', 'Lab', '-', 'Advanced Physics'],
    friday: ['Physics 101', 'Advanced Physics', '-', 'Lab', 'Physics 101'],
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Timetable" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Classes Today</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Hours</p>
                      <p className="text-2xl font-bold">22</p>
                    </div>
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Students</p>
                      <p className="text-2xl font-bold">83</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Rooms</p>
                      <p className="text-2xl font-bold">4</p>
                    </div>
                    <MapPin className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Schedule */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Today's Schedule
                  </CardTitle>
                  <CardDescription>Thursday, March 21</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {todaySchedule.map((slot, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${
                      slot.status === 'current' ? 'border-blue-500 bg-blue-50' :
                      slot.status === 'break' ? 'bg-gray-50' : ''
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-500">{slot.time}</span>
                            {slot.status === 'current' && (
                              <Badge variant="default" className="text-xs">Now</Badge>
                            )}
                          </div>
                          <div className="font-medium mt-1">{slot.class}</div>
                          {slot.room !== '-' && (
                            <div className="text-sm text-gray-500">
                              {slot.room} • {slot.students} students
                            </div>
                          )}
                        </div>
                        {slot.status !== 'break' && slot.status !== 'completed' && (
                          <Button size="sm" variant={slot.status === 'current' ? 'default' : 'outline'}>
                            {slot.status === 'current' ? 'Join' : 'View'}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Weekly Schedule */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Weekly Timetable</CardTitle>
                  <CardDescription>Your teaching schedule for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Time</th>
                          <th className="text-center py-3 px-4 font-medium">Mon</th>
                          <th className="text-center py-3 px-4 font-medium">Tue</th>
                          <th className="text-center py-3 px-4 font-medium">Wed</th>
                          <th className="text-center py-3 px-4 font-medium">Thu</th>
                          <th className="text-center py-3 px-4 font-medium">Fri</th>
                        </tr>
                      </thead>
                      <tbody>
                        {['08:00', '09:00', '10:00', '11:00', '12:00'].map((time, i) => (
                          <tr key={i} className="border-b">
                            <td className="py-3 px-4 text-sm font-medium text-gray-500">{time}</td>
                            {Object.values(weekSchedule).map((day, j) => (
                              <td key={j} className="text-center py-3 px-4">
                                <Badge variant={day[i] === '-' ? 'secondary' : 'outline'} className="text-xs">
                                  {day[i]}
                                </Badge>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
