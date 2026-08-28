import { BoundingBox } from "../custom-ui/bounding-box"

interface Vehicle {
  img: string;
  name: string;
}

export const VehicleCard = ({ vehicle,index }: { vehicle: Vehicle, index: number }) => {

    return( <li key={vehicle.name} className="group">
                  <div className="clip-corner overflow-hidden bg-brand-mist">
                    <div className="relative aspect-square">
                      <img
                        src={vehicle.img}
                        alt={vehicle.name}
                        loading="lazy"
                        width={900}
                        height={900}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <BoundingBox
                          x={20 + (index % 3) * 5}
                          y={30}
                          w={35}
                          h={40}
                          label="PERSON"
                          confidence={0.92 + (index % 7) / 100}
                          delay={120}
                        />
                      </div>
                    </div>
    
                    <div className="flex items-center justify-between px-4 pb-4 pt-4">
                      <span className="font-display text-sm uppercase tracking-tight text-navy-soft font-semibold">
                        {vehicle.name}
                      </span>
                      <span className="font-mono text-[10px] text-brand-navy/40">
                        ·{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </li>)
}