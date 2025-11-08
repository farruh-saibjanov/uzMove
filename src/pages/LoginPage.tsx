import { useState } from 'react';
import { Film, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Film className="w-10 h-10 text-red-600" />
            <span className="text-3xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              UzMove
            </span>
          </div>
          <p className="text-gray-400">Welcome back to premium streaming</p>
        </div>

        {/* Login/Signup Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/10 bg-white/5" />
                  Remember me
                </label>
                <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-red-600/30"
              >
                Sign In
              </Button>

              <div className="relative my-6">
                <Separator className="bg-white/10" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3 text-gray-400 text-sm">
                  or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-white">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="Your Name"
                    className="pl-10 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-white/5 border-white/10 focus:border-red-600/50 focus:ring-red-600/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-white/10 bg-white/5 mt-1" />
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </label>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-red-600/30"
              >
                Create Account
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-400 text-sm mt-6">
          By continuing, you agree to UzMove's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
