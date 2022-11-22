package com.groupproject.pbc;

import org.postgresql.ds.PGSimpleDataSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;

@SpringBootApplication
public class PbcApplication {

	public static void main(String[] args) {
		SpringApplication.run(PbcApplication.class, args);
		//Insert csv data

/*		Connection conn = establishDBConnection();
		ArrayList<String> dataSuperCategory = readCSVFile(new File("sql" + File.separator + "super_category.csv"));
		ArrayList<String> dataCategory = readCSVFile(new File("sql" + File.separator + "category.csv"));
		ArrayList<String> dataProduct = readCSVFile(new File("sql" + File.separator + "product.csv"));

		flashDataToDatabase(dataSuperCategory, conn, "super_category");
		flashDataToDatabase(dataCategory, conn, "category");
		flashDataToDatabase(dataProduct, conn, "product");*/
	}

	private static void flashDataToDatabase(ArrayList<String> data, Connection conn, String tableName) {
		Statement stmt = null;
		try {
			stmt = conn.createStatement();
			String SQL = "INSERT INTO " + tableName + "(" + data.get(0) + ")";
			String SQLadd = "";
			String SQLStatement = "";
			System.out.println("test");
			boolean first = true;
			//TODO der INSERT command passt noch nicht. Außerdem muss man noch " " dranhängen beim Einlesen vom ersten Teil vor dem Beistrich
			for (String date: data){
				if (first){
					first = false;
					continue;
				}else{
					SQLadd = " VALUES (" + date + ");";
					SQLStatement = SQL + SQLadd;
					System.out.println(SQLStatement);
					stmt.addBatch(SQLStatement);
				}
			}

			stmt.executeBatch();
			conn.commit();
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}


	private static Connection establishDBConnection() {
		PGSimpleDataSource source = new PGSimpleDataSource() ;
		source.setServerNames(new String[] {
				"localhost"
		});
		source.setPortNumbers(new int[]{
				5432
		});
		source.setDatabaseName("postgres");
		source.setUser("postgres");
		source.setPassword("postgres");
		try {
			Connection conn = source.getConnection();
			conn.setAutoCommit(false);
			System.out.println("Connection to POSTGRES Database established!");
			return conn;
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return null;
	}

	private static ArrayList<String> readCSVFile(File file) {

		System.out.println("Start reading CSV file " + file.getName());
		System.out.println("");
		ArrayList<String> rows = new ArrayList<String>();
		try {
			Scanner sc = new Scanner(file);
			sc.useDelimiter("\n");
			while (sc.hasNext()){
				String s = sc.next();
				System.out.print("...");
				rows.add(s);

			}
			sc.close();
			return rows;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		return null;

	}

}
