package com.josegomez.core.controller;

import com.josegomez.core.entities.Person;
import com.josegomez.core.exceptions.GuestExceptions;
import com.josegomez.core.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class PersonController {
    @Autowired
    private PersonRepository repository;

    @GetMapping("/guests")
    public ResponseEntity<List<Person>> listAllGuests(){
        List<Person> guests =  repository.findAll();
        if(guests.isEmpty())
            return ResponseEntity.noContent().build();
        return new ResponseEntity<>(guests, HttpStatus.OK);
    }

    @PostMapping("/invitados")
    public ResponseEntity<Person> createNewGuest(@RequestBody Person person){
        Person newGuest = Person.builder()
                .firstName(person.getFirstName())
                .lastName(person.getLastName())
                .address(person.getAddress())
                .email(person.getEmail())
                .guest(true)
                .build();
        if(newGuest != null){
            repository.save(newGuest);
            return new ResponseEntity<>(newGuest, HttpStatus.OK);
        }
        return ResponseEntity.unprocessableEntity().build();
    }

    @GetMapping("/guests/{id}")
    public ResponseEntity<Person>getGuestById(@PathVariable("id") Long idGuest) throws GuestExceptions {
        Person guestID = repository.findById(idGuest).orElseThrow(
                () -> new GuestExceptions("No existe el invitado con ID ", String.valueOf(idGuest)));

        return new ResponseEntity<>(guestID,HttpStatus.OK);
    }

    @PutMapping("/guests/{id}")
    public ResponseEntity<Person> updateSomeGuest(@PathVariable("id") Long idGuest,@RequestBody Person guestDetails) throws GuestExceptions {
        Person person = repository.findById(idGuest).orElseThrow(() -> new GuestExceptions("No existe el invitado"));
        person.setFirstName(guestDetails.getFirstName());
        person.setFirstName(guestDetails.getFirstName());
        person.setAddress(guestDetails.getAddress());
        person.setGuest(guestDetails.getGuest());

        Person guestUpdated = repository.save(person);
        return ResponseEntity.ok(guestUpdated);
    }

    @DeleteMapping("/guests/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteGuest(@PathVariable("id") Long idGuest) throws GuestExceptions {
        Person guestToDelete = repository.findById(idGuest).orElseThrow(
                () -> new GuestExceptions("No existe ese invitado"));
        repository.delete(guestToDelete);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
