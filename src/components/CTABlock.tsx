import Container from "./Container";
import Button from "./Button";

interface CTABlockProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABlock({
  title,
  description,
  buttonText = "Request a Demo",
  buttonHref = "/demo",
}: CTABlockProps) {
  return (
    <section className="bg-navy py-20">
      <Container className="text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {description}
          </p>
        )}
        <div className="mt-8">
          <Button
            href={buttonHref}
            variant="secondary"
            className="bg-white text-navy hover:bg-white/90 border-0"
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
