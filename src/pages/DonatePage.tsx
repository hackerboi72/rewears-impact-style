
import { useState } from "react";
import { Recycle, Package, Calendar, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const DonatePage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);

  const handleSchedulePickup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pickup Scheduled!",
      description: "Thank you for your donation. We'll be in touch to confirm your pickup details.",
    });
    // In a real app, we'd submit the form data to an API
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-rewear-green mb-6">Donate Clothes</h1>
            <p className="text-xl text-gray-600">
              Give your pre-loved clothes a new purpose and help create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Donating your clothes to ReWear is simple, and makes a real difference for both
              the planet and communities in need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rewear-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-7 w-7 text-rewear-green" />
              </div>
              <h3 className="font-medium mb-2">1. Prepare</h3>
              <p className="text-gray-600 text-sm">
                Gather clean, gently worn clothing items that you no longer use.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rewear-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7 text-rewear-green" />
              </div>
              <h3 className="font-medium mb-2">2. Schedule</h3>
              <p className="text-gray-600 text-sm">
                Book a pickup time or find a drop-off location near you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rewear-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-7 w-7 text-rewear-green" />
              </div>
              <h3 className="font-medium mb-2">3. Donate</h3>
              <p className="text-gray-600 text-sm">
                We'll collect your items or you can drop them off at our collection points.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rewear-green/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-7 w-7 text-rewear-green" />
              </div>
              <h3 className="font-medium mb-2">4. Transform</h3>
              <p className="text-gray-600 text-sm">
                Your clothes get a new life as part of our sustainable fashion collections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Schedule a Pickup</h2>

            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8 relative">
                <div className="absolute left-0 right-0 top-4 h-1 bg-gray-200 -z-10"></div>
                
                <div className="text-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step >= 1 ? "bg-rewear-green text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    1
                  </div>
                  <span className="text-sm">Your Info</span>
                </div>
                
                <div className="text-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step >= 2 ? "bg-rewear-green text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    2
                  </div>
                  <span className="text-sm">Donation Details</span>
                </div>
                
                <div className="text-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step >= 3 ? "bg-rewear-green text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    3
                  </div>
                  <span className="text-sm">Schedule</span>
                </div>
              </div>

              <form>
                {/* Step 1: Your Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Your last name" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Your phone number" required />
                    </div>
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-rewear-green hover:bg-rewear-green-dark" 
                        onClick={(e) => {
                          e.preventDefault();
                          setStep(2);
                        }}
                      >
                        Continue to Donation Details
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Donation Details */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="donation-type">What are you donating?</Label>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="clothing" />
                          <label htmlFor="clothing" className="text-sm">Clothing</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="shoes" />
                          <label htmlFor="shoes" className="text-sm">Shoes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="accessories" />
                          <label htmlFor="accessories" className="text-sm">Accessories</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fabrics" />
                          <label htmlFor="fabrics" className="text-sm">Fabrics/Materials</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="estimated-count">Estimated number of items</Label>
                      <select 
                        id="estimated-count" 
                        className="w-full border border-gray-300 rounded-md mt-1 p-2"
                        required
                      >
                        <option value="">Select quantity</option>
                        <option value="1-5">1-5 items</option>
                        <option value="6-10">6-10 items</option>
                        <option value="11-20">11-20 items</option>
                        <option value="21+">21+ items</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <textarea 
                        id="notes" 
                        className="w-full border border-gray-300 rounded-md mt-1 p-2"
                        rows={3}
                        placeholder="Any specific details about your donation"
                      ></textarea>
                    </div>

                    <div className="pt-4 flex gap-4">
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.preventDefault();
                          setStep(1);
                        }}
                      >
                        Previous
                      </Button>
                      <Button 
                        className="flex-1 bg-rewear-green hover:bg-rewear-green-dark" 
                        onClick={(e) => {
                          e.preventDefault();
                          setStep(3);
                        }}
                      >
                        Continue to Schedule
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule Pickup */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Pickup Address</Label>
                      <Input id="address" placeholder="Street address" required />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" required />
                      </div>
                      <div>
                        <Label htmlFor="postal-code">ZIP/Postal Code</Label>
                        <Input id="postal-code" placeholder="ZIP/Postal code" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="pickup-date">Preferred Pickup Date</Label>
                      <Input id="pickup-date" type="date" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="pickup-time">Preferred Time Slot</Label>
                      <select 
                        id="pickup-time" 
                        className="w-full border border-gray-300 rounded-md mt-1 p-2"
                        required
                      >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning (9am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="evening">Evening (4pm - 7pm)</option>
                      </select>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Checkbox id="terms" required />
                        <label htmlFor="terms" className="text-sm">
                          I confirm my items are clean and in usable condition.
                        </label>
                      </div>

                      <div className="pt-4 flex gap-4">
                        <Button 
                          variant="outline"
                          onClick={(e) => {
                            e.preventDefault();
                            setStep(2);
                          }}
                        >
                          Previous
                        </Button>
                        <Button 
                          className="flex-1 bg-rewear-green hover:bg-rewear-green-dark" 
                          onClick={handleSchedulePickup}
                        >
                          Schedule Pickup
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="border-b">
              <AccordionItem value="item-1" className="border-t">
                <AccordionTrigger>What items can I donate?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We accept clean, gently worn or new clothing, shoes, accessories, and fabrics. 
                    Items should be free from major stains, tears, or damages. We particularly 
                    appreciate denim, cotton, wool, and natural fiber garments.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-t">
                <AccordionTrigger>How should I prepare my items?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Please clean all items before donating. Fold them neatly and place them in a 
                    clean bag or box. If you have items with special materials or unique details, 
                    you can add a note to let us know.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-t">
                <AccordionTrigger>What happens to my donated clothes?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Your donations are sorted by our team. Items that can be upcycled are transformed 
                    into new designs by our artisans. Materials that can't be used in our collections 
                    are recycled or responsibly passed on to our community partners.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-t">
                <AccordionTrigger>Do I get anything in return for donating?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes! All donors receive a 15% discount code for their next purchase as our way 
                    of saying thank you. You'll also receive an impact report showing the 
                    environmental benefit of your donation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-t">
                <AccordionTrigger>Where are the drop-off locations?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We have donation bins at various partner locations. Check our interactive map 
                    above to find the nearest location to you. We're continually expanding our 
                    network to make donation more convenient.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
