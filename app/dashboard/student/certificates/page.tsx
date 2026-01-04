'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Scroll, 
  Download,
  Eye,
  Award,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function StudentCertificates() {
  const certificates = [
    { id: 1, title: 'Course Completion Certificate', course: 'Advanced Mathematics', date: '2024-03-15', status: 'available', type: 'academic' },
    { id: 2, title: 'Merit Certificate', event: 'Science Fair 2024', date: '2024-02-20', status: 'available', type: 'achievement', position: '2nd Place' },
    { id: 3, title: 'Participation Certificate', event: 'Inter-School Debate', date: '2024-01-15', status: 'available', type: 'participation' },
    { id: 4, title: 'Character Certificate', purpose: 'General', date: '2023-12-01', status: 'available', type: 'character' },
    { id: 5, title: 'Sports Achievement', event: 'Annual Sports Day', date: '2023-11-20', status: 'available', type: 'sports', position: 'Gold Medal' },
  ];

  const requestable = [
    { name: 'Bonafide Certificate', description: 'Proof of enrollment in the school', processingTime: '2-3 days' },
    { name: 'Transfer Certificate', description: 'Required when transferring to another school', processingTime: '5-7 days' },
    { name: 'Migration Certificate', description: 'Required for board/university changes', processingTime: '7-10 days' },
  ];

  const stats = {
    total: 12,
    academic: 5,
    achievement: 4,
    participation: 3
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Certificates" role="student" userName="Emma Wilson" />
        
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
                    <Scroll className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Academic</p>
                      <p className="text-2xl font-bold">{stats.academic}</p>
                    </div>
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Achievements</p>
                      <p className="text-2xl font-bold">{stats.achievement}</p>
                    </div>
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Participation</p>
                      <p className="text-2xl font-bold">{stats.participation}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Available Certificates */}
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>View and download your certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${
                          cert.type === 'academic' ? 'bg-blue-100' :
                          cert.type === 'achievement' ? 'bg-yellow-100' :
                          cert.type === 'sports' ? 'bg-green-100' : 'bg-purple-100'
                        }`}>
                          <Scroll className={`h-5 w-5 ${
                            cert.type === 'academic' ? 'text-blue-600' :
                            cert.type === 'achievement' ? 'text-yellow-600' :
                            cert.type === 'sports' ? 'text-green-600' : 'text-purple-600'
                          }`} />
                        </div>
                        <div>
                          <div className="font-medium">{cert.title}</div>
                          <div className="text-sm text-gray-500">
                            {cert.course || cert.event || cert.purpose}
                            {cert.position && ` - ${cert.position}`}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.date}
                        </div>
                        <Badge variant="default">Available</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Request Certificates */}
            <Card>
              <CardHeader>
                <CardTitle>Request Certificate</CardTitle>
                <CardDescription>Request official certificates from the school</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {requestable.map((cert, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">{cert.description}</p>
                        <p className="text-xs text-gray-400 mt-2">Processing: {cert.processingTime}</p>
                        <Button className="w-full mt-4" variant="outline">Request</Button>
                      </CardContent>
                    </Card>
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
