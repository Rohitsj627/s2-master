'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Bell, 
  Plus,
  Edit,
  Trash2,
  Send,
  Calendar,
  Users,
  Eye
} from 'lucide-react';

export default function TeacherAnnouncements() {
  const [showCreate, setShowCreate] = useState(false);

  const announcements = [
    { id: 1, title: 'Mid-Term Exam Schedule Released', content: 'The mid-term examination will be held on April 15th. Please review chapters 1-5.', date: '2024-03-20', class: 'Physics 101', views: 28, status: 'published' },
    { id: 2, title: 'Lab Report Submission Deadline', content: 'All lab reports must be submitted by March 25th. Late submissions will not be accepted.', date: '2024-03-18', class: 'Physics Lab', views: 15, status: 'published' },
    { id: 3, title: 'Extra Help Session This Friday', content: 'I will be available for extra help on Friday from 3-5 PM in Room 205.', date: '2024-03-15', class: 'All Classes', views: 45, status: 'published' },
    { id: 4, title: 'AP Physics Review Materials', content: 'Review materials for the AP exam have been uploaded to the course portal.', date: '2024-03-10', class: 'AP Physics', views: 18, status: 'published' },
  ];

  const stats = {
    total: 12,
    thisMonth: 4,
    drafts: 2,
    totalViews: 156
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Announcements" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total</p>
                      <p className="text-2xl font-bold">{stats.total}</p>
                    </div>
                    <Bell className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">{stats.thisMonth}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Drafts</p>
                      <p className="text-2xl font-bold">{stats.drafts}</p>
                    </div>
                    <Edit className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Views</p>
                      <p className="text-2xl font-bold">{stats.totalViews}</p>
                    </div>
                    <Eye className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Create Announcement */}
            {showCreate ? (
              <Card>
                <CardHeader>
                  <CardTitle>Create Announcement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input placeholder="Announcement title..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Class</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        <SelectItem value="physics-101">Physics 101</SelectItem>
                        <SelectItem value="advanced-physics">Advanced Physics</SelectItem>
                        <SelectItem value="physics-lab">Physics Lab</SelectItem>
                        <SelectItem value="ap-physics">AP Physics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Content</label>
                    <Textarea placeholder="Write your announcement..." rows={4} />
                  </div>
                  <div className="flex space-x-2">
                    <Button>
                      <Send className="h-4 w-4 mr-2" />
                      Publish
                    </Button>
                    <Button variant="outline">Save as Draft</Button>
                    <Button variant="ghost" onClick={() => setShowCreate(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex justify-end">
                <Button onClick={() => setShowCreate(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Announcement
                </Button>
              </div>
            )}

            {/* Announcements List */}
            <Card>
              <CardHeader>
                <CardTitle>My Announcements</CardTitle>
                <CardDescription>Manage your class announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{announcement.title}</h3>
                            <Badge variant="outline">{announcement.class}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {announcement.date}
                            </span>
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {announcement.views} views
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
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
