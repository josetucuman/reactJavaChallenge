package com.josegomez.core.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_person")
    private Long id;
    @NotBlank
    @Min(4) @Max(25)
    @Column(name="first_name")
    private String firstName;
    @NotBlank
    @Min(4) @Max(25)
    @Column(name="last_name")
    private String lastName;
    @Column(name= "person_address")
    private String address;
    @NotBlank
    @Min(10) @Max(25)
    @Column(name="personal_mail")
    private String email;
    @Column(name="person_guest")
    private Boolean guest;
}
