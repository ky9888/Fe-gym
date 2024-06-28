export enum SelectedPage {
    Home = "trangchu",
    Benefits = "nhungloiich",
    OurClasses = "lopcuachungtoi",
    ContactUs = "lienhechungtoi",
  }
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }