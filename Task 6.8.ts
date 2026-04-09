interface Car {
    model: string;
    dynamic_1: boolean;
    tuple: [number, number];
    optionalFeature?: string;
}

type PickDynamic1 = Pick<Car ,"dynamic_1">
type OmitTuple = Omit<Car, "tuple">
type AllRequiared = Required<Car> 
type UpperModel = Uppercase<Car['model']>
type PartialCar = Partial<Car>

const car: Car  = {
    model: "BMW",
    dynamic_1: true,
    tuple: [1 , 1],
    optionalFeature: "wheels", 
}

const dynamicOnly: PickDynamic1 = {dynamic_1: true}

const withoutTuple: OmitTuple = {
    model: "bmw",
    dynamic_1: true,
    optionalFeature: "sunroof"
}

const partial: PartialCar = { model:"bmw" }

const upperModel: UpperModel = "BMW"



