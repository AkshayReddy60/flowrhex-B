import React from "react";
import homeone from '../../assets/homeone.png'


const HowWeWork = () => {
  return (
    <section className="bg-[rgb(69,194,184)] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image - 40% */}
          <div className="md:w-2/5 w-full">
            <img
              src={homeone}
              alt="How we work"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Content - 60% */}
          <div className="md:w-3/5 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HOW WE WORK
            </h2>
            <p className="mb-8 text-white/90">
              With the aim to deliver satisfactory and efficient service, we prefer following work
              approach. Yet we are always flexible and adaptable to your needs.
            </p>

            <div className="space-y-6 text-sm md:text-base">
              <div>
                <p className="font-bold text-white">1. CDA/NDA Signing</p>
                <p>
                  We believe confidentiality is the key to a healthy and long-term relation in the chemical industry,
                  so we recommend a CDA before technical discussions.
                </p>
              </div>

              <div>
                <p className="font-bold text-white">2. Data Gathering and On paper discussions</p>
                <p>
                  We complete the projects we choose and choose the projects we can complete.
                  So, we ask for on-paper discussions and as much data as possible before starting a project.
                </p>
              </div>

              <div>
                <p className="font-bold text-white">3. Deciding Achievable and inline work</p>
                <p>
                  After data discussion, we interpret desirable outcomes, possible advantages and way forward
                  to the project such as a feasibility testing, optimization and implementation respectively.
                </p>
              </div>

              <div>
                <p className="font-bold text-white">4. Customer Delight is our Motto!</p>
                <p>
                  We understand and value your time, money and inputs. With complete transparency at every step.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;