'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Calendar,
  Clock,
  MapPin,
  Video,
  CheckCircle2
} from 'lucide-react';

export default function ParentMeetings() {
  const upcomingMeetings = [
    { id: 1, type: 'PTM', teacher: 'All Teachers', date: '2024-03-30', time: '09:00 AM - 01:00 PM', venue: 'School Auditorium', status: 'scheduled' },
    { id: 2, type: 'Individual', teacher: 'Dr. Smith (Mathematics)', date: '2024-04-05', time: '02:00 PM', venue: 'Room 205', status: 'requested' },
  ];

  const pastMeetings = [
    { id: 1, type: 'PTM', teacher: 'All Teachers', date: '2024-01-15', notes: 'Discussed overall progress. Emma is performing well in all subjects.' },
    { id: 2, type: 'Individual', teacher: 'Ms. Davis (English)', date: '2023-12-10', notes: 'Discussed essay writing skills improvement plan.' },
    { id: 3, type: 'PTM', teacher: 'All Teachers', date: '2023-10-20', notes: 'Mid-term review. Good progress in Science subjects.' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Meetings (PTM)" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Child Selector */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">Meetings for:</span>
                    <Select defaultValue="emma">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emma">Emma Thompson (Grade 10A)</SelectItem>
                        <SelectItem value="james">James Thompson (Grade 7B)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>
                    <Calendar className="h-4 w-4 mr-2" />
                    Request Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completed</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Year</p>
                      <p className="text-2xl font-bold">10</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Meetings */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
                <CardDescription>Your scheduled meetings with teachers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{meeting.type}</div>
                          <div className="text-sm text-gray-600">{meeting.teacher}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {meeting.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {meeting.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {meeting.venue}
                          </div>
                        </div>
                        <Badge variant={meeting.status === 'scheduled' ? 'default' : 'secondary'}>
                          {meeting.status}
                        </Badge>
                        <Button variant="outline">
                          <Video className="h-4 w-4 mr-2" />
                          Join Online
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Past Meetings */}
            <Card>
              <CardHeader>
                <CardTitle>Past Meetings</CardTitle>
                <CardDescription>History of your meetings with teachers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastMeetings.map((meeting) => (
                    <div key={meeting.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{meeting.type}</Badge>
                          <span className="font-medium">{meeting.teacher}</span>
                        </div>
                        <span className="text-sm text-gray-500">{meeting.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{meeting.notes}</p>
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
