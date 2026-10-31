const paths: Record<string, string> = {
  key: "M14 10a4 4 0 1 1-3.9 4.9L4 21v-3h2v-2h2l2.1-2.1A4 4 0 0 1 14 10Zm1.5 1.5h.01",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z",
  home: "M3 11 12 4l9 7v9h-6v-6H9v6H3z",
  door: "M6 3h12v18H6zM14 12h.01M3 21h18",
  hammer: "M14 4l6 6-3 3-6-6zM11 7 3 15l3 3 8-8",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  text: "M4 5h16v11H8l-4 4z",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  check: "M5 12l5 5L20 7",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

export default function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
