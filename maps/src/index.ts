import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const newUser = new User();
const newCompany = new Company();

const newMap = new CustomMap("map");

const userMarker = newMap.addMarker(newUser);
const companyMarker = newMap.addMarker(newCompany);

newMap.openMarkerInfo(userMarker, "This is the information");
newMap.openMarkerInfo(companyMarker, "This is company information");
