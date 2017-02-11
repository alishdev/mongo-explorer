import { MongoDatabase, MongoCollection, MongoTable } from './mongo-database.model';
import {Injectable} from "@angular/core";


@Injectable()
export class MongoConnectionService
{
    getConnections(){
        const connections : MongoDatabase[] =
        { 
            {
                connection = 'localhost',
                collections = MongoCollection[]{
                {
                    name = "collection1"
                }
            }
            
        };
    }
}
