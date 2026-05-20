import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link
          to="/"
          className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-12 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">返回首页</span>
        </Link>
        
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <p className="text-gray-500">此页面正在开发中，敬请期待！</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
