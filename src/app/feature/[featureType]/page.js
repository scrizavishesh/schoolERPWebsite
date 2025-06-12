import FeatureManagement from "@/app/features/FeatureManagement";

// ✅ Needed for static export
export async function generateStaticParams() {
  return [
    { featureType: 'academics' },
    { featureType: 'student' },
    { featureType: 'transportation' },
    { featureType: 'exam' },
    { featureType: 'hr' },
    // Add all featureType values you expect to support
  ];
}

export default function FeatureTypePage({ params }) {
  const { featureType } = params;
  return <FeatureManagement featureType={featureType} />;
}
