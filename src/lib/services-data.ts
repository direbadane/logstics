import { Ship, Warehouse, Truck, Package, ShieldCheck, Clock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  stats: { stat: string; label: string };
}

export const allServices: Service[] = [
  {
    slug: 'ocean-shipping',
    icon: Ship,
    title: 'Ocean Shipping',
    shortDescription: 'Reliable sea freight connecting major ports worldwide.',
    fullDescription:
      'Our ocean shipping services provide comprehensive sea freight solutions designed to move your cargo efficiently across the globe. Whether you need full container loads (FCL) for bulk shipments or less-than-container loads (LCL) for smaller consignments, we tailor every solution to your specific requirements. With partnerships across all major shipping lines and access to ports in 50+ countries, we ensure your goods arrive safely and on schedule.',
    image: '/images/ocean-shipping.jpg',
    features: ['Full & Partial Containers (FCL/LCL)', 'Port-to-Port & Door-to-Port', 'Real-time Shipment Tracking', 'Customs Documentation Support', 'Competitive Transit Times', 'Insurance & Risk Management'],
    stats: { stat: '50+', label: 'Countries Reached' },
  },
  {
    slug: 'warehousing',
    icon: Warehouse,
    title: 'Warehousing',
    shortDescription: 'State-of-the-art storage with climate control and inventory management.',
    fullDescription:
      'Our strategically located warehouse facilities offer advanced storage solutions equipped with climate control systems, barcode-based inventory management, and automated distribution services. Positioned near major transport hubs and ports, our warehouses serve as critical nodes in your supply chain — reducing transit times and cutting operational costs.',
    image: '/images/warehousing.jpg',
    features: ['Climate-Controlled Storage', 'Real-Time Inventory Management', 'Pick & Pack Services', 'Cross-Docking Facilities', 'Value-Added Services (Labeling, Packaging)', '24/7 Security & Surveillance'],
    stats: { stat: '15+', label: 'Warehouse Locations' },
  },
  {
    slug: 'land-transport',
    icon: Truck,
    title: 'Land Transport',
    shortDescription: 'Comprehensive ground transportation for full and partial loads.',
    fullDescription:
      'Our land transport division operates a fleet of modern vehicles providing full truckload (FTL), less-than-truckload (LTL), and last-mile delivery solutions. We manage cross-border logistics with dedicated fleet operations and GPS-enabled tracking for complete visibility.',
    image: '/images/logistics-truck.jpg',
    features: ['Full Truckload (FTL) Services', 'Cross-Border Transport', 'Last-Mile Delivery Solutions', 'GPS Fleet Tracking', 'Dedicated Fleet Management', 'Express & Time-Critical Delivery'],
    stats: { stat: '500+', label: 'Active Vehicles' },
  },
  {
    slug: 'customs-brokerage',
    icon: Package,
    title: 'Customs Brokerage',
    shortDescription: 'Expert customs clearance and regulatory compliance support.',
    fullDescription:
      'Navigating customs regulations can be complex and time-consuming. Our licensed customs brokers handle all aspects of import and export clearance, ensuring your shipments comply with local and international trade regulations. We manage documentation, tariff classification, duty optimization, and liaise with customs authorities on your behalf.',
    image: '/images/containers-aerial.jpg',
    features: ['Import & Export Clearance', 'Tariff Classification & Optimization', 'Trade Compliance Advisory', 'Documentation Management', 'Duty Drawback Services', 'Free Trade Zone Processing'],
    stats: { stat: '98%', label: 'Clearance Success Rate' },
  },
  {
    slug: 'cargo-insurance',
    icon: ShieldCheck,
    title: 'Cargo Insurance',
    shortDescription: 'Comprehensive coverage to protect your shipments against risk.',
    fullDescription:
      'Protect your valuable cargo with our comprehensive insurance solutions. We partner with leading marine and cargo insurance providers to offer tailored coverage that safeguards your goods against loss, damage, theft, and other transit risks.',
    image: '/images/case-study-1.jpg',
    features: ['All-Risk Cargo Coverage', 'Marine Insurance Policies', 'Warehouse-to-Warehouse Protection', 'Claims Management & Support', 'Risk Assessment Consulting', 'Competitive Premium Rates'],
    stats: { stat: '10K+', label: 'Shipments Insured Yearly' },
  },
  {
    slug: 'supply-chain-consulting',
    icon: Clock,
    title: 'Supply Chain Consulting',
    shortDescription: 'Strategic logistics optimization for maximum efficiency.',
    fullDescription:
      'Our supply chain consulting team brings decades of industry expertise to help you design, optimize, and manage your logistics operations. From network design and route optimization to warehouse layout and technology integration, we identify inefficiencies and implement data-driven solutions.',
    image: '/images/case-study-2.jpg',
    features: ['Network Design & Optimization', 'Route Planning & Analysis', 'Technology Integration (ERP, TMS)', 'Cost Reduction Strategies', 'Performance Benchmarking', 'Sustainability Roadmaps'],
    stats: { stat: '30%', label: 'Avg. Cost Savings' },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}
