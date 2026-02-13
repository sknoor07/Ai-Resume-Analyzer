import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Choose Your Plan
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Transparent pricing designed for professionals at every stage of their career.
        </p>
      </div>

      <div className="mt-48 max-w-6xl mx-auto">
        <PricingTable />
      </div>

    </section>
  );
}
