'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

// Define types for the API response
interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      firstName: string | null;
      lastName: string | null;
      role: string;
      institutionId: number | null;
      isPasswordChanged: boolean;
    };
    requiresPasswordChange: boolean;
  };
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // API call to backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token in localStorage
      localStorage.setItem('token', data.data.token);
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(data.data.user));

      // Check if password needs to be changed
      if (data.data.requiresPasswordChange || !data.data.user.isPasswordChanged) {
        toast.warning('Please change your password to continue');
        router.push('/change-password');
        setIsLoading(false);
        return;
      }

      toast.success(`Welcome back! Logging in as ${role}`);

      // Route based on role
      switch (role) {
        case 'student':
          router.push('/dashboard/student');
          break;
        case 'parent':
          router.push('/dashboard/parent');
          break;
        case 'teacher':
          router.push('/dashboard/teacher');
          break;
        case 'admin':
          router.push('/dashboard/admin');
          break;
        case 'superadmin':
          router.push('/dashboard/superadmin');
          break;
        default:
          router.push('/dashboard');
      }

    } catch (error) {
      console.error('Login error:', error);
      toast.error(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-fill demo credentials based on selected role
  const handleRoleChange = (value: string) => {
    setRole(value);
    
    // Auto-fill demo credentials
    switch (value) {
      case 'student':
        setEmail('student@demo.com');
        setPassword('Default@123');
        break;
      case 'parent':
        setEmail('parent@demo.com');
        setPassword('Default@123');
        break;
      case 'teacher':
        setEmail('teacher@demo.com');
        setPassword('Default@123');
        break;
      case 'admin':
        setEmail('admin@demo.com');
        setPassword('Default@123');
        break;
      case 'superadmin':
        setEmail('superadmin@demo.com');
        setPassword('Default@123');
        break;
      default:
        setEmail('');
        setPassword('');
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role */}
        <div className="space-y-2">
          <Label htmlFor="role">Select Role</Label>
          <Select value={role} onValueChange={handleRoleChange}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="superadmin">Super Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Signing in...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </div>
          )}
        </Button>
      </form>

      {/* Demo Credentials */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-4">
          <h4 className="font-medium text-sm text-gray-700 mb-2">
            Demo Credentials (Default Password):
          </h4>
          <div className="space-y-1 text-xs text-gray-600">
            <p><strong>Student:</strong> student@demo.com / Default@123</p>
            <p><strong>Parent:</strong> parent@demo.com / Default@123</p>
            <p><strong>Teacher:</strong> teacher@demo.com / Default@123</p>
            <p><strong>Admin:</strong> admin@demo.com / Default@123</p>
            <p><strong>Super Admin:</strong> superadmin@demo.com / Default@123</p>
            <p className="text-red-500 mt-2">
              ⚠️ Note: You must change the default password on first login
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}