'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Edit,
  Save,
  Camera
} from 'lucide-react';

export default function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: 'Dr. Sarah Johnson',
    email: 'dr.johnson@school.edu',
    phone: '+1 234 567 8901',
    department: 'Science',
    subject: 'Physics',
    employeeId: 'TCH-2024-001',
    joinDate: 'August 2020',
    address: '123 Education Ave, Springfield, USA',
    bio: 'Passionate educator with 15 years of experience in Physics. Specialized in making complex concepts accessible to students of all levels.',
    qualifications: ['Ph.D. in Physics - Stanford University', 'M.Sc. in Physics - MIT', 'B.Sc. in Physics - UC Berkeley'],
    achievements: ['Best Teacher Award 2023', 'Published 12 Research Papers', 'Physics Olympiad Coach']
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Profile" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">SJ</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <p className="text-gray-500">{profile.subject} Teacher</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{profile.department}</Badge>
                          <Badge variant="secondary">{profile.employeeId}</Badge>
                        </div>
                      </div>
                      <Button onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? (
                          <><Save className="h-4 w-4 mr-2" /> Save</>  
                        ) : (
                          <><Edit className="h-4 w-4 mr-2" /> Edit</>  
                        )}
                      </Button>
                    </div>
                    <p className="mt-4 text-gray-600">{profile.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="info" className="space-y-6">
              <TabsList>
                <TabsTrigger value="info">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="info">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" /> Email
                        </Label>
                        <Input value={profile.email} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" /> Phone
                        </Label>
                        <Input value={profile.phone} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2" /> Department
                        </Label>
                        <Input value={profile.department} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" /> Join Date
                        </Label>
                        <Input value={profile.joinDate} disabled />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" /> Address
                      </Label>
                      <Input value={profile.address} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label>Bio</Label>
                      <Textarea value={profile.bio} disabled={!isEditing} rows={3} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="qualifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Educational Qualifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profile.qualifications.map((qual, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Award className="h-5 w-5 text-blue-600" />
                          <span>{qual}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profile.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                          <Award className="h-5 w-5 text-yellow-600" />
                          <span>{achievement}</span>
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
