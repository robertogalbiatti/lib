import styles from './lib-loading-spinner.module.scss';

type LibLoadingSpinnerProps = {
  size?: number;
  label?: string;
  className?: string;
};

export const LibLoadingSpinner = ({
  size = 1,
  label = 'Carregando...',
  className = '',
}: LibLoadingSpinnerProps) => {
  const loaderClass = [styles.loader, className].filter(Boolean).join(' ');

  return (
    <span
      className={loaderClass}
      style={{ '--size': `${size}px` } as React.CSSProperties}
      role="status"
      aria-label={label}
    />
  );
};
