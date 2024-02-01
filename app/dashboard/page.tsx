import React, { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { fetchCardData } from '@/app/lib/data';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
};

export default async function Page() {

    return (
        <main>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}
