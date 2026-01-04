'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Edit,
  Save,
  Camera,
  Users
} from 'lucide-react';

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: 'Emma Wilson',
    email: 'emma.wilson@school.edu',
    phone: '+1 234 567 8901',
    class: 'Grade 10A',
    rollNo: 'STU-2024-001',
    dob: 'March 15, 2008',
    address: '456 Student Lane, Springfield, USA',
    bloodGroup: 'O+',
    admissionDate: 'August 2020'
  };

  const parent = {
    fatherName: 'Michael Wilson',
    fatherPhone: '+1 234 567 8902',
    fatherEmail: 'michael.wilson@email.com',
    motherName: 'Sarah Wilson',
    motherPhone: '+1 234 567 8903',
    motherEmail: 'sarah.wilson@email.com'
  };

  const academics = {
    gpa: 3.8,
    attendance: 94,
    rank: 5,
    totalStudents: 30
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Profile" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">EW</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <p className="text-gray-500">Student</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{profile.class}</Badge>
                          <Badge variant="secondary">{profile.rollNo}</Badge>
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
                    <div className="grid grid-cols-4 gap-4 mt-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{academics.gpa}</div>
                        <div className="text-xs text-gray-500">GPA</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{academics.attendance}%</div>
                        <div className="text-xs text-gray-500">Attendance</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">#{academics.rank}</div>
                        <div className="text-xs text-gray-500">Rank</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-xl font-bold text-orange-600">{academics.totalStudents}</div>
                        <div className="text-xs text-gray-500">Class Size</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="parent">Parent/Guardian</TabsTrigger>
                <TabsTrigger value="academic">Academic Info</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
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
                          <Calendar className="h-4 w-4 mr-2" /> Date of Birth
                        </Label>
                        <Input value={profile.dob} disabled />
                      </div>
                      <div className="space-y-2">
                        <Label>Blood Group</Label>
                        <Input value={profile.bloodGroup} disabled />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" /> Address
                      </Label>
                      <Input value={profile.address} disabled={!isEditing} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parent">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Parent/Guardian Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Father's Details</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input value={parent.fatherName} disabled />
                        </div>
                        <div className="space-y-2">
                          <Label>Phone</Label>
                          <Input value={parent.fatherPhone} disabled />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input value={parent.fatherEmail} disabled />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Mother's Details</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input value={parent.motherName} disabled />
                        </div>
                        <div className="space-y-2">
                          <Label>Phone</Label>
                          <Input value={parent.motherPhone} disabled />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input value={parent.motherEmail} disabled />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Academic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Class</Label>
                        <Input value={profile.class} disabled />
                      </div>
                      <div className="space-y-2">
                        <Label>Roll Number</Label>
                        <Input value={profile.rollNo} disabled />
                      </div>
                      <div className="space-y-2">
                        <Label>Admission Date</Label>
                        <Input value={profile.admissionDate} disabled />
                      </div>
                      <div className="space-y-2">
                        <Label>Academic Year</Label>
                        <Input value="2023-2024" disabled />
                      </div>
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
