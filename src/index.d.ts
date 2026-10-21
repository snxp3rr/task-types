export function getPersons(): Array<{
    name: string;
    age: number;
    gender: 'male' | 'female';
}>;

type User = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

type Employee = User & {
    company: string;
};

export function personToString(person: User | Employee): string;