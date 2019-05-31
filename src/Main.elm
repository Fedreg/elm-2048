module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (Html, a, div, h1, hr, img, p, strong, text)
import Html.Attributes exposing (class, href, src, target)



---- MODEL ----


type alias Model =
    { tile : Tile
    }


type alias Tile =
    { column : Int
    , row : Int
    , value : Int
    }


init : flags -> ( Model, Cmd Msg )
init _ =
    ( initialModel, Cmd.none )


initialModel : Model
initialModel =
    { tile = newTile }


newTile : Tile
newTile =
    { column = 2, row = 2, value = 2 }



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Browser.Document Msg
view model =
    { title = "Elm 2048"
    , body =
        [ div [ class "container" ]
            [ gameHeader
            , aboveGame
            , div [ class "game-container" ]
                [ gameMessage
                , gridContainer
                , tileContainer model.tile
                ]
            , gameExplanation
            , divider
            , gameNotes
            , divider
            , gameFooter
            ]
        ]
    }


gameHeader : Html Msg
gameHeader =
    div [ class "heading" ]
        [ h1 [ class "title" ]
            [ text "2048" ]
        , div [ class "scores-container" ]
            [ div [ class "score-container" ]
                [ text "0" ]
            , div [ class "best-container" ]
                [ text "0" ]
            ]
        ]


aboveGame : Html Msg
aboveGame =
    div [ class "above-game" ]
        [ p [ class "game-intro" ]
            [ text "Join the numbers and get to the "
            , strong []
                [ text "2048 tile!" ]
            ]
        , a [ class "restart-button" ]
            [ text "New Game" ]
        ]


gameMessage : Html Msg
gameMessage =
    div [ class "game-message" ]
        [ p []
            []
        , div [ class "lower" ]
            [ a [ class "keep-playing-button" ]
                [ text "Keep going" ]
            , a [ class "retry-button" ]
                [ text "Try again" ]
            ]
        ]


gridContainer : Html none
gridContainer =
    div [ class "grid-container" ]
        [ div [ class "grid-row" ]
            [ div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            ]
        , div [ class "grid-row" ]
            [ div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            ]
        , div [ class "grid-row" ]
            [ div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            ]
        , div [ class "grid-row" ]
            [ div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            , div [ class "grid-cell" ]
                []
            ]
        ]


tileContainer : Tile -> Html Msg
tileContainer tile =
    div [ class "tile-container" ]
        [ div
            [ class <| tileClassStr tile ]
            [ div [ class "tile-inner" ]
                [ text <| String.fromInt tile.value ]
            ]
        ]


tileClassStr : Tile -> String
tileClassStr tile =
    String.join " "
        [ "tile"
        , "tile-new"
        , "tile-" ++ String.fromInt tile.value
        , "tile-position-"
            ++ String.fromInt tile.column
            ++ "-"
            ++ String.fromInt tile.row
        ]


gameExplanation : Html none
gameExplanation =
    p [ class "game-explanation" ]
        [ strong [ class "important" ]
            [ text "How to play: " ]
        , text "Use your "
        , strong []
            [ text "arrow keys" ]
        , text " to move the tiles. When two tiles with the same number touch, they "
        , strong []
            [ text "merge into one!" ]
        ]


gameNotes : Html none
gameNotes =
    p []
        [ strong [ class "important" ]
            [ text "Note: " ]
        , text "This is not the official version of 2048! It is an Elm implementation of Gabriele Cirulli's "
        , a [ href "https://github.com/gabrielecirulli/2048" ]
            [ text "2048 game" ]
        , text ". You can find the code for this Elm implementation here: "
        , a [ href "https://github.com/stepheneb/elm-2048" ]
            [ text "github.com/stepheneb/elm-2048" ]
        , text "."
        ]


gameFooter : Html none
gameFooter =
    p []
        [ text "Original 2048 created by "
        , a [ href "http://gabrielecirulli.com", target "_blank" ]
            [ text "Gabriele Cirulli. " ]
        , text "Based on "
        , a [ href "https://itunes.apple.com/us/app/1024!/id823499224", target "_blank" ]
            [ text "1024 by Veewo Studio " ]
        , text "and conceptually similar to "
        , a [ href "http://asherv.com/threes/", target "_blank" ]
            [ text "Threes by Asher Vollmer." ]
        ]


divider : Html none
divider =
    hr []
        []



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }
