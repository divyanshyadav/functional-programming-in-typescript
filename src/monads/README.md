# Monads

-   Monads are the design pattern that allows user to chain operations while monad manages secret work behind the scenes.

## It consists of three components

-   Wrapper Type
-   Wrap Function - Allows entry to monad ecosystem. eg. return, pure, unit
-   Run Function - runs transformation on monadic values. eg. bind, FlatMap

## Available monads

-   NumberWithLogs / Writer: accumulation of log data
-   Option: possibility of missing value
-   Future / Promise: possibility of values to only become available later
