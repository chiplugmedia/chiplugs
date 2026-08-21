"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Set your exchange rate here ($1 USD = X NGN)
const EXCHANGE_RATE = 1400;

type Currency = "NGN" | "USD";

const plans = [
  {
    name: "Corporate",
    priceNGN: 225000,
    features: [
      "Domain & Hosting (1 Year)",
      "Business Emails",
      "Up to 5 Pages",
      "Logo Design",
      "On Page SEO",
    ],
    cta: "Order Now",
    href: "https://wa.me/message/ULBHK5KZZCQID1",
    popular: false,
    customPrice: null,
  },
  {
    name: "E-commerce",
    priceNGN: 450000,
    features: [
      "Domain & Hosting (1 Year)",
      "Business Emails",
      "Logo Design",
      "On Page SEO",
      "Payment Gateway",
      "1 Month Support",
      "Admin Access",
      "Analytics Integration"
    ],
    cta: "Order Now",
    href: "https://wa.me/message/ULBHK5KZZCQID1",
    popular: true,
    customPrice: null,
  },
  {
    name: "Custom",
    priceNGN: 0,
    features: [
  "Domain & Hosting (1 Year)",
  "User & Admin Dashboard",
  "Payment Gateway Integration",
  "Continuous Support",
  "Analytics Integration",
  "Social Media Integration",
  "On-Page & Off-Page SEO",
  "Content Management System",
],
    cta: "Order Now",
    href: "https://wa.me/message/ULBHK5KZZCQID1",
    popular: false,
    customPrice: "XXX,XXX", // Displays XXX,XXX for Enterprise
  },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<Currency>("NGN");

  const formatPrice = (plan: (typeof plans)[0]) => {
    if (plan.customPrice) {
      const symbol = currency === "NGN" ? "₦" : "$";
      return `${symbol}${plan.customPrice}`;
    }

    if (currency === "NGN") {
      return `₦${plan.priceNGN.toLocaleString()}`;
    }

    const priceUSD = Math.round(plan.priceNGN / EXCHANGE_RATE);
    return `$${priceUSD.toLocaleString()}`;
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 max-w-6xl">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Chi Plug Pricing Packages
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          How much does Chi Plug charge for web development? Find out our web
          development pricing packages.
        </p>
      </div>

      {/* Currency Switcher Toggle (Naira First) */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center p-1 rounded-xl bg-muted border border-border">
          <button
            type="button"
            onClick={() => setCurrency("NGN")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              currency === "NGN"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            NGN (₦)
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              currency === "USD"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col relative ${
              plan.popular
                ? "border-primary shadow-lg scale-105"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <CardHeader className="pt-8">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              {/* <CardDescription className="min-h-[40px]">
                {plan.description}
              </CardDescription> */}
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">
                  {formatPrice(plan)}
                </span>
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="size-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                asChild
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
