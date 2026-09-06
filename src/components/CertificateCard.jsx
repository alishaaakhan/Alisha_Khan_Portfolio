import { Award, ExternalLink } from "lucide-react";

export default function CertificateCard({ certificate }) {
  return (
    <div className="glass flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="flex h-36 w-full items-center justify-center bg-navy-light">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            className="h-full w-full object-cover"
          />
        ) : (
          <Award size={28} className="text-dim" aria-hidden="true" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base text-ink leading-snug">{certificate.title}</h3>
        <p className="mt-1.5 text-sm text-muted">{certificate.organization}</p>
        {certificate.date && (
          <p className="mt-0.5 text-xs text-dim">{certificate.date}</p>
        )}

        <div className="mt-auto pt-4">
          {certificate.certificateUrl ? (
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover inline-flex items-center gap-1.5 text-xs font-medium text-blue"
            >
              View Certificate <ExternalLink size={12} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-dim">
              Certificate Details
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
