type ModuleInit = Array<{
    name: string;
    init: any
}>;

const allModules: ModuleInit = [
];

/**
 * Find the data method for a module by module reference name.
 * @param moduleName
 */
const moduleData = (moduleName: string): any => {
    const obj = allModules.find((m: { name: string }) => m.name.toLowerCase() === moduleName.toLowerCase())
    if (!obj) return null
    return obj.init
};

export default moduleData;
