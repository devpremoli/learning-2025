package com.example.moviebackendspringboot;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    @JsonProperty("id")
    private ObjectId id;
    @JsonProperty("imdbId")
    private String imdbId;
    @JsonProperty("title")
    private String title;
    @JsonProperty("releaseDate")
    private String releaseDate;
    @JsonProperty("trailerLink")
    private String trailerLink;
    @JsonProperty("poster")
    private String poster;
    @JsonProperty("genres")
    private List<String> genres;
    @JsonProperty("backdrops")
    private List<String> backdrops;
    @JsonProperty("reviewIds")
    @DocumentReference
    private List<Review> reviewIds;

//    @Override
//    public String toString() {
//        return "Movie{" +
//                "id=" + id +
//                ", imdbId='" + imdbId + '\'' +
//                ", title='" + title + '\'' +
//                ", releaseDate='" + releaseDate + '\'' +
//                ", trailerLink='" + trailerLink + '\'' +
//                ", poster='" + poster + '\'' +
//                ", genres=" + genres +
//                ", backdrops=" + backdrops +
//                ", reviewIds=" + reviewIds +
//                '}';
//    }
}
