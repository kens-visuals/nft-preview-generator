import { FooterAttr, FooterLink } from './Footer.styles';

export default function Footer() {
  return (
    <FooterAttr className="Footer-attribution">
      Challenge by{' '}
      <FooterLink
        className="Footer-attribution--link"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </FooterLink>
      . Coded by{' '}
      <FooterLink
        className="Footer-attribution--link"
        href="https://github.com/kens-visuals"
        target="_blank"
        rel="noreferrer"
      >
        Kens-Visuals
      </FooterLink>
    </FooterAttr>
  );
}
