function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '12px',
          color: '#190851',
        }}
      >
        {title}
      </h1>
      {description && (
        <div
          style={{
            color: '#4a4a4a',
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '24px',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}

export default PageHeader;
