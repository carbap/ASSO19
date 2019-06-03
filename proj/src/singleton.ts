import {RenderEntity, Canvas, SVG} from './strategy'

export class AppInfo {
    // A variable which stores the singleton object. Initially,
    // the variable acts like a placeholder
    private static singleton: AppInfo;

    private static renderingSystem : RenderEntity = new Canvas(); //Rendering occurs in canvas, by default

    // private constructor so that no instance is created
    private constructor() {
    }

    // This is how we create a singleton object
    public static getInstance(): AppInfo {
        // check if an instance of the class is already created
        if (!AppInfo.singleton) {
            // If not created create an instance of the class
            // store the instance in the variable
            AppInfo.singleton = new AppInfo();
        }
        // return the singleton object
        return AppInfo.singleton;
    }

    public static getRenderingSystem() {
        return this.renderingSystem;
    }

    public static setCanvas() {
        this.renderingSystem = new Canvas();
        this.renderingSystem.replaceHTMLRenderingArea();
    }

    public static setSVG() {
        this.renderingSystem = new SVG();
        this.renderingSystem.replaceHTMLRenderingArea();
    }
}