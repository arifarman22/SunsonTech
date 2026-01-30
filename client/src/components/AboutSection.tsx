import { Link } from "wouter";
import { Users, Globe, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { icon: Users, value: "500+", label: "Global Clients" },
  { icon: Globe, value: "100+", label: "Countries" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime" }
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="section-enterprise bg-slate-50">
      <div className="container-enterprise">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Leading Terminal Solutions Provider
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Sunson Technology specializes in developing and manufacturing advanced self-service terminal solutions for banking, healthcare, and enterprise sectors worldwide.
            </p>
            <p className="text-base text-slate-600 mb-8">
              With over 25 years of experience, we deliver reliable, secure, and innovative solutions that help organizations improve efficiency and customer experience.
            </p>
            <Link href="/about">
              <Button className="btn-enterprise">
                {t('common.learnMore')}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="enterprise-card p-6 text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="text-3xl font-semibold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
