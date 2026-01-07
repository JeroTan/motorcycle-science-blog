import BlogPlate from "@/components/component/BlogPlate";
import { blogMetaSearchWithIdForce } from "@/content/meta";
import PagePlate from "@/layouts/PagePlate";

export default function({id}:{id:string}) {
  const meta = blogMetaSearchWithIdForce(id);
  return <>
    <PagePlate>
      <BlogPlate>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="w-full aspect-[3/1]">
            <img
              src={meta.image}
              alt={meta.title}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold mt-2">{meta.title}</h1>
          <p className="text-muted-foreground mb-8">Published on: {meta.datePublished}</p>
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="lead text-xl">
              Motorcycle rake, also known as rake angle or head angle, is one of the most critical geometric factors 
              affecting motorcycle handling, stability, and steering characteristics. Understanding rake is essential 
              for both riders and engineers to comprehend how motorcycles maintain balance and navigate corners.
            </p>
          </section>

          {/* Section 1: History and Origins */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. The History and Pioneer of Rake Design</h2>
            
            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Early Development</h3>
              <p className="mb-4">
                The concept of rake angle originated in the late 19th century during the development of the 
                safety bicycle, which directly influenced early motorcycle design. The steering geometry principles 
                were adapted from bicycle technology as motorcycles evolved from motorized bicycles.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                <strong>Key Pioneers:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gottlieb Daimler and Wilhelm Maybach (1885)</strong>: Created the "Reitwagen," 
                  considered the first true motorcycle, which incorporated basic rake principles from bicycle design.
                </li>
                <li>
                  <strong>Indian Motorcycle Company (early 1900s)</strong>: Pioneered systematic experimentation 
                  with different rake angles to improve stability at higher speeds.
                </li>
                <li>
                  <strong>Harley-Davidson</strong>: Further refined rake geometry in the 1910s-1920s, establishing 
                  steeper rake angles (around 29-32°) that became standard for cruiser-style motorcycles.
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg my-6">
                <p className="font-semibold mb-2">💡 Historical Note:</p>
                <p>
                  The development of fork rake wasn't attributed to a single inventor but evolved through 
                  collective engineering improvements across multiple manufacturers during the early motorcycle era.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: How Rake Makes Motorcycle Go Straight */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. How Rake Enables Straight-Line Stability</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">The Caster Effect</h3>
              <p>
                Rake angle creates what's known as the "caster effect" or "trail," which is the primary mechanism 
                that keeps a motorcycle tracking straight without constant rider input.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Key Concepts:</h4>
                
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold mb-2">Trail Distance</h5>
                    <p className="text-sm">
                      Trail is the horizontal distance between where the steering axis intersects the ground 
                      and where the tire contact patch touches the ground. More rake = more trail = more stability.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold mb-2">Self-Centering</h5>
                    <p className="text-sm">
                      When the front wheel is disturbed from center, the trail creates a self-correcting moment 
                      that naturally returns the wheel to straight ahead, similar to a shopping cart caster.
                    </p>
                  </div>
                </div>

                <p className="mb-4">
                  <strong>The Physics:</strong> When a motorcycle leans, the rake angle causes the front wheel 
                  to steer into the direction of the lean. This steering action creates a centrifugal force that 
                  counteracts gravity, allowing the motorcycle to maintain balance while moving forward.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                  <p className="font-semibold mb-2">⚙️ Engineering Principle:</p>
                  <p>
                    The combination of rake angle and trail creates "positive steering feedback" - when the bike 
                    leans right, it automatically steers right, generating forces that prevent it from falling over.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Balance Through Rake */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. How Rake Employs Balance</h2>
            
            <div className="space-y-6">
              <p className="text-lg">
                Rake angle is fundamental to the dynamic balance system of motorcycles, working in concert with 
                other geometric factors to create stable, controllable handling.
              </p>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">The Balance Triangle</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-500">1</span>
                    <div>
                      <h4 className="font-semibold">Gyroscopic Effect</h4>
                      <p className="text-sm">
                        The spinning front wheel acts as a gyroscope, resisting changes in orientation. 
                        Rake angle positions this gyroscopic effect optimally for stability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-green-500">2</span>
                    <div>
                      <h4 className="font-semibold">Counter-Steering Response</h4>
                      <p className="text-sm">
                        Rake influences how quickly and precisely a motorcycle responds to counter-steering inputs, 
                        allowing riders to control lean angle and balance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-purple-500">3</span>
                    <div>
                      <h4 className="font-semibold">Weight Distribution</h4>
                      <p className="text-sm">
                        The rake angle affects front-to-rear weight distribution during acceleration, braking, 
                        and cornering, influencing overall balance characteristics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-blue-300 dark:border-blue-700 p-4 rounded-lg">
                <p className="font-semibold mb-2">🔬 Scientific Insight:</p>
                <p>
                  Research has shown that motorcycles remain stable at speeds above approximately 15 mph (24 km/h) 
                  primarily due to the combination of rake angle and gyroscopic effects. Below this speed, 
                  rider input becomes more critical for maintaining balance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Mathematics and Formulas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Mathematical Analysis of Rake Angle</h2>
            
            <div className="space-y-6">
              <p className="text-lg mb-6">
                Understanding the optimal rake angle requires analyzing multiple variables and their trade-offs. 
                Here are the key formulas and relationships:
              </p>

              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Primary Formula: Trail Calculation</h3>
                <div className="font-mono text-lg bg-white dark:bg-slate-900 p-4 rounded mb-4">
                  Trail = (Fork Offset × sin(Rake)) / cos(Rake) + (Wheel Radius × sin(Rake))
                </div>
                <p className="text-sm text-muted-foreground">
                  Where:
                </p>
                <ul className="text-sm list-disc pl-6 mt-2 space-y-1">
                  <li>Fork Offset = horizontal distance between steering axis and fork tubes</li>
                  <li>Rake = head angle measured from vertical</li>
                  <li>Wheel Radius = radius of the front tire</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-green-300 dark:border-green-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3">
                    ✅ Steeper Rake (Less Angle)
                  </h4>
                  <p className="text-sm font-semibold mb-2">Typical: 23-26° (Sport bikes)</p>
                  <ul className="text-sm space-y-2">
                    <li><span className="text-green-600">+</span> Quicker steering response</li>
                    <li><span className="text-green-600">+</span> Better for aggressive cornering</li>
                    <li><span className="text-green-600">+</span> More agile in tight spaces</li>
                    <li><span className="text-red-600">-</span> Less stable at high speeds</li>
                    <li><span className="text-red-600">-</span> Requires more rider input</li>
                    <li><span className="text-red-600">-</span> More affected by road imperfections</li>
                  </ul>
                </div>

                <div className="border border-blue-300 dark:border-blue-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">
                    ✅ Relaxed Rake (More Angle)
                  </h4>
                  <p className="text-sm font-semibold mb-2">Typical: 28-34° (Cruisers/Touring)</p>
                  <ul className="text-sm space-y-2">
                    <li><span className="text-green-600">+</span> Superior straight-line stability</li>
                    <li><span className="text-green-600">+</span> Reduced steering effort</li>
                    <li><span className="text-green-600">+</span> Better for highway cruising</li>
                    <li><span className="text-red-600">-</span> Slower steering response</li>
                    <li><span className="text-red-600">-</span> Requires more effort in turns</li>
                    <li><span className="text-red-600">-</span> Longer wheelbase increases weight</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Variables Affecting Optimal Rake</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-lg font-bold">W</span>
                    <div>
                      <p className="font-semibold">Weight (Mass)</p>
                      <p className="text-sm">
                        Heavier motorcycles benefit from more rake (greater stability) to counteract inertia. 
                        Lighter bikes can use less rake for improved agility.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-lg font-bold">V</span>
                    <div>
                      <p className="font-semibold">Velocity (Speed)</p>
                      <p className="text-sm">
                        Higher speeds require more rake for stability. The relationship is roughly proportional: 
                        stability ∝ V × Trail
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-lg font-bold">g</span>
                    <div>
                      <p className="font-semibold">Gravity</p>
                      <p className="text-sm">
                        Gravitational force (9.81 m/s²) creates the restoring moment. The rake angle must balance 
                        gravitational forces with centrifugal forces during cornering.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-lg font-bold">h</span>
                    <div>
                      <p className="font-semibold">Center of Gravity Height</p>
                      <p className="text-sm">
                        Lower CoG allows for less rake while maintaining stability. Racing bikes often compensate 
                        for steep rake with extremely low center of gravity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Simplified Stability Formula</h3>
                <div className="font-mono text-center text-xl bg-white dark:bg-slate-900 p-4 rounded mb-4">
                  Stability Index = (Trail × Wheelbase × Speed) / (Weight × CoG_Height)
                </div>
                <p className="text-sm">
                  This simplified formula shows that stability increases with trail, wheelbase, and speed, 
                  but decreases with weight and center of gravity height. Different motorcycle types optimize 
                  this equation for their intended purpose.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-lg">
              Motorcycle rake angle represents a carefully balanced compromise between stability and maneuverability. 
              From its origins in early bicycle design to modern computational optimization, rake geometry remains 
              one of the most critical factors in motorcycle engineering. Understanding these principles helps riders 
              appreciate why different motorcycles feel distinctly different and why manufacturers choose specific 
              geometries for specific purposes.
            </p>
          </section>

          {/* References */}
          <section className="mb-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
            <div className="text-sm space-y-2">
              <p className="font-semibold mb-3">Note: This article synthesizes established engineering principles from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cossalter, Vittore. "Motorcycle Dynamics" (2nd Edition, 2006)</li>
                <li>Foale, Tony. "Motorcycle Handling and Chassis Design: The Art and Science" (2006)</li>
                <li>Sharp, R.S. "The Stability and Control of Motorcycles" - Journal of Mechanical Engineering Science</li>
                <li>Society of Automotive Engineers (SAE) - Motorcycle Dynamics Standards</li>
                <li>Historical archives from Indian Motorcycle and Harley-Davidson</li>
              </ul>
              <p className="mt-4 text-muted-foreground italic">
                For academic research and detailed mathematical proofs, consult the referenced texts and peer-reviewed 
                journals in vehicle dynamics.
              </p>
            </div>
          </section>

        </article>
      </BlogPlate>
    </PagePlate>
  </>
}