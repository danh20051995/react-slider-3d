import { FC, MouseEventHandler, ReactNode, useMemo } from 'react'
import clsx from 'clsx'

export interface ControlsProps {
  className?: string | string[] | { [className: string]: boolean }
  children?: ReactNode
  width?: number
  height?: number
  prevHtml?: string
  nextHtml?: string
  goPrev?: MouseEventHandler<HTMLAnchorElement>
  isPrevPossible?: boolean
  goNext?: MouseEventHandler<HTMLAnchorElement>
  isNextPossible?: boolean
}

export const Controls: FC<ControlsProps> = ({
  width = 50,
  height = 60,
  prevHtml = '&lsaquo;',
  nextHtml = '&rsaquo;',
  isPrevPossible = true,
  isNextPossible = true,
  ...props
}) => {
  const styles = useMemo(() => ({
    width: `${width}px`,
    height: `${height}px`,
    lineHeight: `${height}px`
  }), [height, width])

  return (
    <div className="slider-3d-controls">
      <a
        aria-label="Previous slide"
        className={clsx({ prev: true, disabled: !isPrevPossible })}
        href="#"
        onClick={props.goPrev}
        style={styles}
      >
        <span dangerouslySetInnerHTML={{ __html: prevHtml }}></span>
      </a>

      <a
        aria-label="Next slide"
        className={clsx({ next: true, disabled: !isNextPossible })}
        href="#"
        onClick={props.goNext}
        style={styles}
      >
        <span dangerouslySetInnerHTML={{ __html: nextHtml }}></span>
      </a>
    </div>
  )
}