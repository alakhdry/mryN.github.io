import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Download, Search, Video, Users, Clock, Star } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  platform: string;
  instructor: string;
  duration: string;
  rating: number;
  students: string;
  thumbnail: string;
  url: string;
  description: string;
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Course',
    platform: 'Udemy',
    instructor: 'John Smith',
    duration: '40 hours',
    rating: 4.8,
    students: '120K',
    thumbnail: 'https://via.placeholder.com/300x200?text=Web+Development',
    url: 'https://example.com/course1',
    description: 'Master web development with HTML, CSS, JavaScript, React and Node.js'
  },
  {
    id: '2',
    title: 'Python Programming Masterclass',
    platform: 'Coursera',
    instructor: 'Sarah Johnson',
    duration: '60 hours',
    rating: 4.9,
    students: '200K',
    thumbnail: 'https://via.placeholder.com/300x200?text=Python+Programming',
    url: 'https://example.com/course2',
    description: 'Learn Python from basics to advanced concepts including data science'
  },
  {
    id: '3',
    title: 'Digital Marketing Complete Guide',
    platform: 'Udemy',
    instructor: 'Mike Wilson',
    duration: '35 hours',
    rating: 4.7,
    students: '95K',
    thumbnail: 'https://via.placeholder.com/300x200?text=Digital+Marketing',
    url: 'https://example.com/course3',
    description: 'Master digital marketing strategies, SEO, social media, and analytics'
  },
  {
    id: '4',
    title: 'Machine Learning A-Z',
    platform: 'edX',
    instructor: 'Dr. Emily Chen',
    duration: '50 hours',
    rating: 4.9,
    students: '150K',
    thumbnail: 'https://via.placeholder.com/300x200?text=Machine+Learning',
    url: 'https://example.com/course4',
    description: 'Comprehensive machine learning course from beginner to expert level'
  }
];

export default function CourseDownloader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(mockCourses);
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

  const handleSearch = () => {
    let filtered = mockCourses;
    
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedPlatform !== 'all') {
      filtered = filtered.filter(course => 
        course.platform.toLowerCase() === selectedPlatform.toLowerCase()
      );
    }
    
    setFilteredCourses(filtered);
  };

  const handleDownload = async (course: Course) => {
    setIsDownloading(course.id);
    
    try {
      // محاكاة عملية التحميل
      toast.loading(`جارٍ تحضير تحميل: ${course.title}`, {
        id: course.id
      });
      
      // محاكاة التأخير للتحميل
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // إنشاء ملف وهمي للتحميل
      const courseData = {
        title: course.title,
        instructor: course.instructor,
        platform: course.platform,
        duration: course.duration,
        description: course.description,
        downloadDate: new Date().toISOString(),
        videos: [
          { name: 'المقدمة - الدرس الأول', size: '150MB', duration: '15:30' },
          { name: 'الأساسيات - الدرس الثاني', size: '200MB', duration: '22:45' },
          { name: 'التطبيق العملي - الدرس الثالث', size: '300MB', duration: '35:20' },
          { name: 'المشروع النهائي - الدرس الأخير', size: '400MB', duration: '45:15' }
        ]
      };
      
      // تحويل البيانات إلى JSON وإنشاء رابط التحميل
      const dataStr = JSON.stringify(courseData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      
      // إنشاء رابط التحميل
      const link = document.createElement('a');
      link.href = url;
      link.download = `${course.title.replace(/[^a-zA-Z0-9]/g, '_')}_course_info.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // تنظيف الـ URL
      URL.revokeObjectURL(url);
      
      toast.success(`تم تحميل الدورة بنجاح: ${course.title}`, {
        id: course.id
      });
      
      // محاكاة تحميل الفيديوهات
      setTimeout(() => {
        toast.success('تم بدء تحميل الفيديوهات في الخلفية', {
          description: 'ستجد الملفات في مجلد التحميلات'
        });
      }, 1000);
      
    } catch (error) {
      toast.error('حدث خطأ أثناء التحميل', {
        id: course.id,
        description: 'يرجى المحاولة مرة أخرى'
      });
    } finally {
      setIsDownloading(null);
    }
  };

  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedPlatform]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            منصة تحميل الدورات التعليمية
          </h1>
          <p className="text-lg text-gray-600">
            احصل على أفضل الدورات التعليمية مجاناً من جميع المنصات
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              البحث عن الدورات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="ابحث عن دورة تعليمية..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="اختر المنصة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المنصات</SelectItem>
                  <SelectItem value="udemy">Udemy</SelectItem>
                  <SelectItem value="coursera">Coursera</SelectItem>
                  <SelectItem value="edx">edX</SelectItem>
                  <SelectItem value="skillshare">Skillshare</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleSearch} className="w-full md:w-auto">
                <Search className="w-4 h-4 mr-2" />
                بحث
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {course.platform}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">{course.instructor}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleDownload(course)}
                  disabled={isDownloading === course.id}
                  className="w-full"
                >
                  {isDownloading === course.id ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      جارٍ التحميل...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      تحميل الدورة
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <Video className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              لا توجد دورات متاحة
            </h3>
            <p className="text-gray-500">
              جرب البحث بكلمات مختلفة أو اختر منصة أخرى
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="mb-2">منصة تحميل الدورات التعليمية - جميع الحقوق محفوظة</p>
          <p className="text-sm">
            نوفر لك أفضل الدورات التعليمية من أشهر المنصات العالمية
          </p>
        </div>
      </div>
    </div>
  );
}