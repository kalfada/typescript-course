// Generics can also be used to create type-safe interfaces.

interface Collection<T> {
    data: T[];
    name: string;
}

const collectionOne: Collection<string> = {
    data: ['a', 'b', 'c'],
    name: 'collection one'
}

const collectionTwo: Collection<number> = {
    data: [23, 34246, 123, 31],
    name: 'collection one'
}

function printCollection<T>(collection: Collection<T>) {
    console.log(collection.data);
}

printCollection<string>(collectionOne);
printCollection(collectionTwo); // No need to specify the type of the collection because typescript inferring the type itself.