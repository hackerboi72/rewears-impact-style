import { useState } from "react";
import { Recycle, Leaf, Sprout, Scissors } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ImpactPage = () => {
  const [impactValue, setImpactValue] = useState(100); // Default impact value

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-rewear-green mb-6">Our Impact</h1>
            <p className="text-xl text-gray-600">
              See how your support is making a difference for people and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="12,452" 
              label="Garments Saved" 
              icon={<Recycle className="h-8 w-8" />} 
            />
            <StatCard 
              number="145" 
              label="Artisans Supported" 
              icon={<Scissors className="h-8 w-8" />} 
            />
            <StatCard 
              number="523" 
              label="Children Educated" 
              icon={<Sprout className="h-8 w-8" />} 
            />
            <StatCard 
              number="32,500kg" 
              label="CO₂ Emissions Saved" 
              icon={<Leaf className="h-8 w-8" />} 
            />
          </div>
        </div>
      </section>

      {/* Track Your Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Track Your Impact</h2>
            <p className="text-gray-600">
              See the difference your purchases make. Use the slider to simulate different spending amounts and see the resulting impact.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <div className="mb-8">
              <label htmlFor="impact-slider" className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Amount: ${impactValue}
              </label>
              <input
                id="impact-slider"
                type="range"
                min="25"
                max="500"
                step="25"
                value={impactValue}
                onChange={(e) => setImpactValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Waste Diverted</p>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500">0 kg</span>
                  <span className="text-xs text-gray-500">5 kg</span>
                </div>
                <Progress value={(impactValue / 500) * 100} className="h-2 bg-gray-200" />
                <p className="mt-2 text-lg font-semibold text-rewear-green">
                  {Math.round((impactValue / 100) * 5 * 10) / 10} kg
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Artisan Hours Supported</p>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500">0 hr</span>
                  <span className="text-xs text-gray-500">10 hr</span>
                </div>
                <Progress value={(impactValue / 500) * 100} className="h-2 bg-gray-200" />
                <p className="mt-2 text-lg font-semibold text-rewear-green">
                  {Math.round((impactValue / 100) * 10 * 10) / 10} hours
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Education Contribution</p>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500">$0</span>
                  <span className="text-xs text-gray-500">$50</span>
                </div>
                <Progress value={(impactValue / 500) * 100} className="h-2 bg-gray-200" />
                <p className="mt-2 text-lg font-semibold text-rewear-green">
                  ${Math.round((impactValue / 500) * 50)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16">
        <div className="container-padding">
          <h2 className="section-title text-center mb-8">Our Focus Areas</h2>
          
          <Tabs defaultValue="environmental" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="environmental">Environmental</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="economic">Economic</TabsTrigger>
            </TabsList>
            
            <TabsContent value="environmental">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>How we're helping to preserve our planet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format"
                        alt="Environmental conservation"
                        className="rounded-lg mb-4"
                      />
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <Leaf className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Reduced textile waste by upcycling over 12,000 garments</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Leaf className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Saved approximately 32,500kg of CO₂ emissions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Leaf className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Conserved over 15 million liters of water through our sustainable practices</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-4">Our Environmental Commitments</h3>
                      <p className="text-gray-600 mb-4">
                        The fashion industry is the second largest polluter globally. At ReWear, we're 
                        committed to being part of the solution, not the problem.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Through our upcycling process, we save water, reduce carbon emissions, and keep 
                        textiles out of landfills. Each garment saved represents approximately 2.6kg of 
                        CO₂ emissions prevented.
                      </p>
                      <p className="text-gray-600">
                        We're also continually improving our packaging, shipping, and studio practices 
                        to minimize our environmental footprint at every step.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="social">
              <Card>
                <CardHeader>
                  <CardTitle>Social Impact</CardTitle>
                  <CardDescription>Supporting communities and fostering positive change</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&auto=format"
                        alt="Community support programs"
                        className="rounded-lg mb-4"
                      />
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <Sprout className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Provided education support for over 500 children</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sprout className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Funded 3 community development projects in textile-producing regions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sprout className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Organized 25 sustainable fashion workshops educating over 750 people</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-4">Our Community Focus</h3>
                      <p className="text-gray-600 mb-4">
                        We believe fashion can be a force for good. That's why 10% of our profits go 
                        directly to education initiatives in communities where textile waste is high.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Through our partnership with local NGOs, we've helped build school facilities, 
                        provide educational materials, and support teacher training programs.
                      </p>
                      <p className="text-gray-600">
                        Our workshops also help spread awareness about sustainable fashion and empower 
                        individuals to make more conscious consumption choices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="economic">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Impact</CardTitle>
                  <CardDescription>Creating sustainable livelihoods and fair opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format"
                        alt="Artisans at work"
                        className="rounded-lg mb-4"
                      />
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <Scissors className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Supported 145 artisans with fair wages and safe working conditions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Scissors className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Provided skill development training for 85 women from marginalized communities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Scissors className="h-5 w-5 text-rewear-green mt-0.5" />
                          <span>Created 12 new small businesses through our artisan entrepreneurship program</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-4">Fair Trade & Ethics</h3>
                      <p className="text-gray-600 mb-4">
                        We believe in fair compensation and ethical treatment for everyone in our supply chain. 
                        Our artisans earn 35% above local industry averages.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Through our skills training programs, we help artisans develop specialized techniques 
                        in upcycling and sustainable fashion production.
                      </p>
                      <p className="text-gray-600">
                        Our artisan entrepreneurship initiative provides mentoring, micro-loans, and business 
                        development support to help skilled craftspeople start their own sustainable ventures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Annual Report */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">2024 Impact Report</h2>
            <p className="text-gray-600">
              Each year, we publish a comprehensive report on our sustainability efforts and impact.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format"
                alt="2024 Impact Report Cover"
                className="rounded-lg mx-auto max-w-full h-auto mb-4"
                style={{ maxHeight: '300px' }}
              />
              <h3 className="font-medium text-xl">Making Fashion A Force For Good</h3>
              <p className="text-gray-600 text-sm mt-1">2024 Annual Impact Report</p>
            </div>
            
            <div className="flex justify-center">
              <button className="bg-rewear-green hover:bg-rewear-green-dark text-white py-2 px-6 rounded-md transition-colors flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Full Report (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
