export class SourceTree{
    databases: MongoDatabase[];
}

export class MongoDatabase{
    connection: string;
    collections: MongoCollection[];
}

export class MongoCollection
{
    name: string;
    tables: MongoTable[];
}

export class MongoTable{
    name: string;
}
