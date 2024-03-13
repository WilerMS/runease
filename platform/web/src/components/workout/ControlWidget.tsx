import cn from 'classnames'

const ControlWidget = () => {
  return (
    <div
      className={cn(
        'relative select-none rounded-xl glassmorphism overflow-hidden flex flex-col cursor-pointer active:scale-95 transition-all center'
      )}
      style={{
        gridArea: "control"
      }}
    >ControlWidget</div>
  )
}

export default ControlWidget