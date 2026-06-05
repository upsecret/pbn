import HeroSection     from '@/components/home/HeroSection'
import StatsBar        from '@/components/home/StatsBar'
import MainFeatures    from '@/components/home/MainFeatures'
import FeatureGrid     from '@/components/home/FeatureGrid'
import WhyDeepBot      from '@/components/home/WhyDeepBot'
import WhoUsing        from '@/components/home/WhoUsing'
import ArticlesPreview from '@/components/home/ArticlesPreview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <MainFeatures />
      <FeatureGrid />
      <WhyDeepBot />
      <WhoUsing />
      <ArticlesPreview />
    </>
  )
}
