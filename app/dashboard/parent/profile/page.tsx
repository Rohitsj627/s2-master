'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail,
  Phone,
  MapPin,
  Edit,
  Save,
  Camera,
  Users
} from 'lucide-react';

export default function ParentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: 'Michael Thompson',
    email: 'michael.thompson@email.com',
    phone: '+1 234 567 8901',
    address: '456 Family Lane, Springfield, USA',
    occupation: 'Software Engineer',
    relationship: 'Father'
  };

  const children = [
    { name: 'Emma Thompson', class: 'Grade 10A', rollNo: 'STU-2024-001', dob: 'March 15, 2008' },
    { name: 'James Thompson', class: 'Grade 7B', rollNo: 'STU-2024-045', dob: 'June 22, 2011' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Profile" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-2xl bg-purple-100 text-purple-600">MT</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <p className="text-gray-500">Parent / Guardian</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{profile.relationship}</Badge>
                          <Badge variant="secondary">{children.length} Children</Badge>
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
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="children">Children</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
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
                        <Label>Occupation</Label>
                        <Input value={profile.occupation} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label>Relationship</Label>
                        <Input value={profile.relationship} disabled />
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

              <TabsContent value="children">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      My Children
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {children.map((child, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-blue-100 text-blue-600">
                                {child.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="font-medium">{child.name}</div>
                              <div className="text-sm text-gray-500">{child.class} • {child.rollNo}</div>
                              <div className="text-xs text-gray-400">DOB: {child.dob}</div>
                            </div>
                            <Button variant="outline" size="sm">View Profile</Button>
                          </div>
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
