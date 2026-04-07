import { HTMLAttributes } from 'react';
import styles from './lib-chip.module.scss';

type LibChipProps = {
  label?: string;
  color?: string;
  thumbnail?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
} & HTMLAttributes<HTMLElement>;

export const LibChip = ({
  label,
  color,
  thumbnail,
  className = '',
  onRemove,
  onClick,
  ...rest
}: LibChipProps) => {
  const containerClass = [
    styles.container,
    onClick ? styles.clickable : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Container = onClick ? 'button' : 'div';
  const inlineStyle = color ? { backgroundColor: color } : undefined;

  return (
    <Container
      style={inlineStyle}
      className={containerClass}
      onClick={onClick}
      {...rest}
    >
      {thumbnail && <span className={styles.thumbnail}>{thumbnail}</span>}
      <span className={styles.text}>{label}</span>
      {onRemove && (
        <button
          className={styles.removeButton}
          onClick={(e) => {
            e.stopPropagation(); // evita disparar o onClick do container
            onRemove();
          }}
        >
          ×
        </button>
      )}
    </Container>
  );
};
