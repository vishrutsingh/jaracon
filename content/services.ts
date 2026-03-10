export type ServiceCategory = 'structural' | 'finishing' | 'infrastructure' | 'buildings' | 'energy'

export interface Service {
  id: string
  name: string
  description: string
  category: ServiceCategory
  icon: string
}

export const services: Service[] = [
  {
    id: 'anti-termite',
    name: 'Anti-Termite Treatment',
    description: 'Our anti-termite treatment ensures complete protection of structures from termite infestations, safeguarding foundations and interiors. Using advanced chemical solutions and eco-friendly practices, we create a strong protective barrier that prevents damage, increases structural longevity, and ensures a safe environment for residential, commercial, and industrial buildings.',
    category: 'finishing',
    icon: 'shield-check',
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing Works',
    description: 'We deliver reliable waterproofing solutions that protect structures from water seepage and moisture damage. Our expertise covers roofs, basements, foundations, and concrete structures, ensuring durability and strength. With advanced techniques and premium materials, we provide long-term protection against leaks, cracks, and weather elements for sustainable construction.',
    category: 'finishing',
    icon: 'droplets',
  },
  {
    id: 'rebars',
    name: 'Rebars',
    description: 'We specialize in supplying and fixing reinforcement bars (rebars) that form the backbone of strong, durable concrete structures. Our precision-engineered rebars enhance structural strength, stability, and performance, meeting international standards. With skilled expertise and quality materials, we ensure reliability in complex residential, commercial, and power plant projects.',
    category: 'structural',
    icon: 'columns-3',
  },
  {
    id: 'formwork',
    name: 'Formwork',
    description: 'Our formwork services provide temporary molds that shape concrete into strong, precise structures. Using advanced systems and durable materials, we ensure accuracy, safety, and quality in construction. From foundations to superstructures, our efficient formwork solutions guarantee timely delivery and cost-effectiveness across various building and infrastructure projects.',
    category: 'structural',
    icon: 'box',
  },
  {
    id: 'concrete',
    name: 'Concrete',
    description: 'We deliver high-performance concrete solutions tailored to structural requirements. With advanced mixing, placement, and curing techniques, our concrete ensures strength, durability, and stability. Whether for foundations, slabs, columns, or industrial applications, we maintain strict quality control to achieve excellence in construction and long-lasting structural performance.',
    category: 'structural',
    icon: 'layers',
  },
  {
    id: 'flooring',
    name: 'Flooring Works',
    description: 'Our flooring works include installation of durable and aesthetically pleasing finishes for residential, commercial, and industrial spaces. From concrete flooring to tiles, marble, and specialized finishes, we focus on quality, precision, and long-lasting performance. Each flooring solution is tailored to client needs, ensuring safety, durability, and elegance.',
    category: 'finishing',
    icon: 'grid-2x2',
  },
  {
    id: 'ceiling',
    name: 'Ceiling Works',
    description: 'We deliver high-standard ceiling works including gypsum, acoustic, and decorative ceilings. With advanced techniques and materials, our ceilings provide strength, insulation, and aesthetic appeal. Designed for both function and appearance, these solutions enhance interiors while offering durability, acoustic performance, and customized finishes to meet unique project requirements.',
    category: 'finishing',
    icon: 'panel-top',
  },
  {
    id: 'road-works',
    name: 'Road Works',
    description: 'Our road construction expertise includes highways, internal roads, and access infrastructure. With advanced machinery, durable materials, and skilled workforce, we deliver smooth, long-lasting, and safe road networks. Our services ensure quality, precision, and sustainability, supporting urban development and industrial projects with reliable transportation routes and infrastructure connectivity.',
    category: 'infrastructure',
    icon: 'route',
  },
  {
    id: 'residential',
    name: 'Residential Buildings',
    description: 'We provide end-to-end residential construction solutions, including villas, apartments, and housing complexes. From foundation to finishing, our process emphasizes safety, quality, and modern design. Combining functionality and aesthetics, we deliver comfortable, sustainable living spaces tailored to meet the needs and aspirations of homeowners and developers alike.',
    category: 'buildings',
    icon: 'home',
  },
  {
    id: 'commercial',
    name: 'Commercial Buildings',
    description: 'Our commercial construction covers office complexes, retail outlets, malls, and industrial facilities. With a focus on robust design, functionality, and efficiency, we provide state-of-the-art solutions for modern business environments. Our expertise ensures timely execution and premium finishes that meet international standards, supporting productivity and commercial growth.',
    category: 'buildings',
    icon: 'building-2',
  },
  {
    id: 'power-plants',
    name: 'Power Plants',
    description: 'We bring expertise in constructing large-scale power plants, including solar, thermal, and industrial energy projects. With advanced engineering, safety practices, and high-quality materials, we deliver efficient power infrastructure. Our projects empower communities, support industries, and contribute to sustainable energy solutions, meeting the future energy demands responsibly.',
    category: 'energy',
    icon: 'zap',
  },
  {
    id: 'substations',
    name: 'Substations',
    description: 'Our substation construction services include civil, structural, and electrical works to support power distribution networks. With precision engineering and quality execution, we build reliable substations essential for uninterrupted electricity transmission. Our expertise ensures compliance, durability, and efficiency, strengthening energy infrastructure for urban, commercial, and industrial requirements.',
    category: 'energy',
    icon: 'cable',
  },
  {
    id: 'excavation',
    name: 'Excavation Works',
    description: 'We provide comprehensive excavation services including site clearing, trenching, grading, and earthmoving for foundations, roads, and utility installations. Our fleet of modern heavy equipment and experienced operators ensure precise, safe, and efficient excavation across residential, commercial, and industrial projects of all scales.',
    category: 'infrastructure',
    icon: 'layers',
  },
  {
    id: 'mep',
    name: 'MEP Services',
    description: 'Our mechanical, electrical, and plumbing services cover complete building systems from HVAC and fire protection to electrical distribution and plumbing networks. We deliver integrated MEP solutions that ensure comfort, safety, and energy efficiency across commercial, industrial, and residential projects.',
    category: 'finishing',
    icon: 'zap',
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    description: 'We offer professional landscaping and hardscaping services including garden design, irrigation systems, paving, and outdoor amenities. Our team creates functional and aesthetically pleasing outdoor spaces that complement the built environment, enhancing property value and creating inviting green areas.',
    category: 'finishing',
    icon: 'home',
  },
]
