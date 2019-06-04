export abstract class Shape {
    abstract draw(): void; // TO DO: remove?

    // NOTE: shapes should not know to draw themselves, that should be dependant of a view
    // so draw should be the execute of a command, that knows the existing shapes and the view on which to draw
}