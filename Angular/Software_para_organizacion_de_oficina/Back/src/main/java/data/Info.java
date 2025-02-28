package data;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

public class Info {

	private List<Cliente> clientes;

	private List<String> universidades;
	private List<String> carreras;
	private List<Asesor> asesores;

	private List<String> dondeSeEntero;
	private List<Auditoria> audit;
	 

	private Hashtable<String, Auth> users = new Hashtable<>();
	
	public List<Cliente> getClientes() {
		return clientes;
	}

	public void setClientes(List<Cliente> clientes) {
		this.clientes = clientes;
	}

	public List<String> getCarreras() {
		if (carreras == null)
			carreras = new ArrayList<>();
		return carreras;
	}

	public void setCarreras(List<String> carreras) {
		this.carreras = carreras;
	}

	public List<String> getUniversidades() {

		if (universidades == null)
			universidades = new ArrayList<>();

		return universidades;
	}

	public void setUniversidades(List<String> universidades) {
		this.universidades = universidades;
	}

	public List<String> getDondeSeEntero() {

		if (dondeSeEntero == null)
			dondeSeEntero = new ArrayList<>();

		return dondeSeEntero;
	}

	public void setDondeSeEntero(List<String> dondeSeEntero) {
		this.dondeSeEntero = dondeSeEntero;
	}

	public Hashtable<String, Auth> getUsers() {
		if (users==null)
			users= new Hashtable<>();
		return users;
	}

	public void setUsers(Hashtable<String, Auth> users) {
		this.users = users;
	}

	public List<Auditoria> getAudit() {
		if (audit==null)
			audit= new ArrayList<Auditoria>();
		return audit;
	}

	public void setAudit(List<Auditoria> audit) {
		this.audit = audit;
	}

	public List<Asesor> getAsesores() {
		if (asesores==null)
			asesores=new ArrayList<>();
		return asesores;
	}

	public void setAsesores(List<Asesor> asesores) {
		this.asesores = asesores;
	}


}
