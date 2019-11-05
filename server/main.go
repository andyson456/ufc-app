package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

type Competition struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	ParentID string `json:"parent_id"`
}

type CompetitionResponse struct {
	Competitions []*Competition `json:"competitions"`
}

func competitions(w http.ResponseWriter, r *http.Request) {
	addCorsHeader(w)
	apiurl := os.Getenv("RADAR_API")

	res, err := http.Get(apiurl)
	if err != nil {
		panic(err)
	}
	b, err := ioutil.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}
	competitions := &CompetitionResponse{}
	err = json.Unmarshal(b, competitions)
	if err != nil {
		panic(err)
	}
	for _, c := range competitions.Competitions {
		fmt.Printf("%+v", c)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(b)
}

func addCorsHeader(res http.ResponseWriter) {
	headers := res.Header()
	headers.Add("Access-Control-Allow-Origin", "*")
	headers.Add("Vary", "Origin")
	headers.Add("Vary", "Access-Control-Request-Method")
	headers.Add("Vary", "Access-Control-Request-Headers")
	headers.Add("Access-Control-Allow-Headers", "Content-Type, Origin, Accept, token, secret, email")
	headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/competitions/", competitions).Methods("GET")

	router.Methods("OPTIONS").HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			addCorsHeader(w)
			w.WriteHeader(http.StatusOK)
		})
	log.Fatal(http.ListenAndServe(":3333", router))
}
