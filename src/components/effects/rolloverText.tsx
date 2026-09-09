import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface RolloverTextProps extends HTMLMotionProps<'div'> {
  text: string;
  className?: string;
  duration?: number;
  direction?: 'up' | 'down';
  lineHeightClass?: string;
}

const RolloverText = ({
  text,
  className = '',
  duration = 0.4,
  direction = 'up',
  lineHeightClass = 'h-8 leading-8',
  ...props
}: RolloverTextProps) => {
  const forward = direction === 'up';

  const stackVariants: Variants = {
    initial: { y: forward ? '0%' : '-50%' },
    hover: { y: forward ? '-50%' : '0%' },
  };

  return (
    <motion.div
      className={`relative inline-block overflow-hidden cursor-pointer ${lineHeightClass} ${className}`}
      initial="initial"
      whileHover="hover"
      aria-label={text}
      {...props}
    >
      <motion.div
        className="flex flex-col"
        variants={stackVariants}
        transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className={`inline-block ${lineHeightClass}`} aria-hidden="true">{text}</span>
        <span className={`inline-block ${lineHeightClass}`} aria-hidden="true">{text}</span>
      </motion.div>
    </motion.div>
  );
};

export default RolloverText;