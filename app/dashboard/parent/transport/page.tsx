'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Bus, 
  MapPin,
  Clock,
  Phone,
  User,
  Navigation
} from 'lucide-react';

export default function ParentTransport() {
  const transportInfo = {
    busNo: 'BUS-12',
    route: 'Route A - Downtown',
    driver: 'John Davis',
    driverPhone: '+1 234 567 8901',
    helper: 'Mary Smith',
    helperPhone: '+1 234 567 8902',
    pickupTime: '07:15 AM',
    dropTime: '03:45 PM',
    pickupPoint: '123 Main Street, Block A',
    status: 'On Route'
  };

  const stops = [
    { name: 'School Campus', time: '07:00 AM', status: 'completed' },
    { name: 'Downtown Plaza', time: '07:10 AM', status: 'completed' },
    { name: '123 Main Street (Emma\'s Stop)', time: '07:15 AM', status: 'current' },
    { name: 'Oak Avenue', time: '07:25 AM', status: 'upcoming' },
    { name: 'Riverside Park', time: '07:35 AM', status: 'upcoming' },
    { name: 'School Campus (Arrival)', time: '07:50 AM', status: 'upcoming' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Transport" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Child Selector */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Transport info for:</span>
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
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Bus Info */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bus className="h-5 w-5 mr-2" />
                    Bus Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="p-4 bg-blue-50 rounded-lg mb-4">
                        <div className="text-3xl font-bold text-blue-600">{transportInfo.busNo}</div>
                        <div className="text-sm text-gray-500">{transportInfo.route}</div>
                        <Badge className="mt-2" variant="default">{transportInfo.status}</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Pickup: {transportInfo.pickupTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Drop: {transportInfo.dropTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{transportInfo.pickupPoint}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Driver</span>
                        </div>
                        <div className="text-lg font-medium">{transportInfo.driver}</div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Phone className="h-3 w-3" />
                          <span>{transportInfo.driverPhone}</span>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Helper</span>
                        </div>
                        <div className="text-lg font-medium">{transportInfo.helper}</div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Phone className="h-3 w-3" />
                          <span>{transportInfo.helperPhone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Route Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="h-5 w-5 mr-2" />
                    Route Tracker
                  </CardTitle>
                  <CardDescription>Morning pickup route</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stops.map((stop, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full mt-1.5 ${
                          stop.status === 'completed' ? 'bg-green-500' :
                          stop.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'
                        }`} />
                        <div className="flex-1">
                          <div className={`font-medium text-sm ${
                            stop.status === 'current' ? 'text-blue-600' : ''
                          }`}>
                            {stop.name}
                          </div>
                          <div className="text-xs text-gray-500">{stop.time}</div>
                        </div>
                        {stop.status === 'current' && (
                          <Badge variant="default" className="text-xs">Now</Badge>
                        )}
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
