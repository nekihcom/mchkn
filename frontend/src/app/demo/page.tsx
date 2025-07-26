import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fetchBlogDataList } from '@/lib/fetchBlogData';
import Link from 'next/link';
import { TBlogData } from '../../../types/type';

export default async function DemoPage() {
  const blogDataList = await fetchBlogDataList(3);

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Demo</h1>
        <p className="text-muted-foreground">
          動作確認ページ
        </p>
      </div>
      <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
        トップ
      </Link>

      {/* Test microCMS Section */}
      <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Test microCMS</h2>
      <div>
        {blogDataList.map((blogData:TBlogData, index:number) => (
          <div key={index}>
            <h3>{blogData.title}</h3>
          </div>
        ))}
      </div>
      </section>

      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a sample card with header, content, and footer.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>Without footer</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card only has header and content sections.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p>Minimal card with just content.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Elements</h2>
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </div>
      </section>
    </div>
  );
} 